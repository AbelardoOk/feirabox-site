import { SiteFooter } from "@/components/feirabox/SiteFooter";
import { SiteHeader, TopBanner } from "@/components/feirabox/Header";
import { IMAGES } from "@/components/feirabox/images";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso (rascunho)",
  description: "Regras de uso do site e do futuro aplicativo FeiraBox. Documento em revisão.",
  alternates: { canonical: "/termos" },
  // Rascunho: não indexar até a revisão final.
  robots: { index: false, follow: false },
};

/* TODO: texto legal — esta página é um RASCUNHO. Revisar com responsável jurídico/UFMS antes do lançamento:
   - regras da lista de espera e do futuro app;
   - responsabilidade sobre produtos das bancas;
   - atualizações e foro. */

const SECTIONS = [
  {
    title: "1. O que é este site",
    body: "Este site apresenta o FeiraBox, aplicativo ainda não lançado, e coleta contatos para a lista de espera do lançamento em Campo Grande/MS.",
  },
  {
    title: "2. Lista de espera",
    body: "Ao cadastrar seu WhatsApp, você autoriza ser avisado do lançamento. Não há cobrança nem venda por este site.",
  },
  {
    title: "3. Uso futuro do aplicativo",
    body: "Quando lançarmos, o uso do app terá regras próprias de compra, entrega, pagamento e suporte, publicadas aqui antes da estreia.",
  },
  {
    title: "4. Conteúdo e propriedade",
    body: "Marca, textos e imagens deste site pertencem ao projeto FeiraBox. É proibida a reprodução sem autorização.",
  },
  {
    title: "5. Contato",
    body: "Dúvidas sobre estes termos: contato@feirabox.ufms.br.",
  },
];

export default function TermosPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <TopBanner />
      <SiteHeader logoSrc={IMAGES.logoHeader} />
      <main className="mx-auto w-full max-w-[800px] flex-1 px-margin-mobile py-space-2xl lg:px-margin-desktop">
        <span className="rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md font-bold uppercase tracking-wider text-on-secondary-container">
          Rascunho — em revisão
        </span>
        <h1 className="mt-4 font-headline-lg text-headline-lg tracking-tight text-primary">
          Termos de Uso
        </h1>
        <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
          Última atualização: a definir antes do lançamento.
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {SECTIONS.map((s) => (
            <section key={s.title} aria-label={s.title}>
              <h2 className="font-title-lg text-title-lg font-bold text-primary">{s.title}</h2>
              <p className="mt-1 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {s.body}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-8 font-body-md text-body-md text-on-surface-variant">
          Veja também a{" "}
          <Link href="/privacidade" className="font-bold text-secondary underline-offset-4 hover:underline">
            Política de Privacidade
          </Link>
          .{" "}
          <Link href="/#topo" className="font-bold text-secondary underline-offset-4 hover:underline">
            Voltar ao início
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
