import { NextResponse } from "next/server";

// Rota dinâmica: não coletar/pré-renderizar no build (Fase 5 fará a revisão completa do form/LGPD).
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { contato } = await request.json();

    if (!contato) {
      return NextResponse.json({ error: "O campo de contato é obrigatório." }, { status: 400 });
    }

    // Validar e-mail / telefone (filtrar)

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const telefoneRegex = /^[0-9\-\+\s()]{10,15}$/;

    const isEmail = emailRegex.test(contato);
    const isTelefone = telefoneRegex.test(contato);

    if (isEmail) {
      console.log("Processando fluxo email");

      // 1. Salvar e-mail no banco (import lazy para não quebrar o build sem client gerado)
      // TODO: dado real — Fase 5: validar geração do Prisma (`prisma generate`), salvar também telefone, honeypot e LGPD
      const prismaModule = (await import("@prisma/client")) as unknown as {
        PrismaClient: new () => { contato: { create: (args: unknown) => Promise<unknown> } };
      };
      const prisma = new prismaModule.PrismaClient();
      await prisma.contato.create({
        data: {
          contato: contato,
        },
      });

      // 2. Disparar e-mail via serviço (Nodemailer, Resend, etc.)
    } else if (isTelefone) {
      console.log("Processando fluxo Telefone...");

      // 1. Salvar telefone no banco
      // 2. Disparar SMS / WhatsApp (Twilio, Z-API, etc.)
    } else {
      return NextResponse.json({ error: "Formato inválido. Envie um e-mail ou telefone válido." }, { status: 400 });
    }

    // Depois de testar remover os dados da resposta
    return NextResponse.json({ message: "Dados salvos com sucesso!", data: contato }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Falha ao processar requisição" }, { status: 500 });
  }
}
