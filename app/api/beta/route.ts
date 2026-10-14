import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isValidWhatsapp, normalizeWhatsapp } from "@/lib/waitlist";

// Rota dinâmica: lista de espera (POST).
export const dynamic = "force-dynamic";

type BetaBody = {
  whatsapp?: unknown;
  consentLgpd?: unknown;
  /** Honeypot anti-spam: bots preenchem, humanos nunca veem. */
  siteUrl?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as BetaBody | null;
    if (!body) {
      return NextResponse.json(
        { error: "Requisição inválida. Tente de novo em instantes." },
        { status: 400 },
      );
    }

    // Honeypot: finge sucesso sem salvar nada.
    if (typeof body.siteUrl === "string" && body.siteUrl.trim().length > 0) {
      return NextResponse.json({ message: "Você está na lista de espera!" }, { status: 201 });
    }

    if (body.consentLgpd !== true) {
      return NextResponse.json(
        { error: "Para entrar na lista, aceite o contato pelo WhatsApp (LGPD)." },
        { status: 400 },
      );
    }

    const digits = normalizeWhatsapp(typeof body.whatsapp === "string" ? body.whatsapp : "");
    if (!isValidWhatsapp(digits)) {
      return NextResponse.json(
        { error: "Digite um WhatsApp válido com DDD + 9 dígitos. Ex.: (67) 99999-9999." },
        { status: 400 },
      );
    }

    try {
      await prisma.contato.upsert({
        where: { whatsapp: digits },
        update: { consentLgpd: true, consentAt: new Date() },
        create: { contato: digits, whatsapp: digits, consentLgpd: true, consentAt: new Date() },
      });
    } catch {
      return NextResponse.json(
        { error: "Não foi possível salvar agora. Tente de novo em instantes." },
        { status: 503 },
      );
    }

    // Sem eco de dados pessoais na resposta.
    return NextResponse.json({ message: "Você está na lista de espera!" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Falha ao processar. Tente de novo em instantes." },
      { status: 500 },
    );
  }
}
