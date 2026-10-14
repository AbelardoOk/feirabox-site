import { SiteFooter } from "@/components/feirabox/SiteFooter";
import { SiteHeader, TopBanner } from "@/components/feirabox/Header";
import { IMAGES } from "@/components/feirabox/images";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade (rascunho)",
  description: "Como o FeiraBox trata os dados da lista de espera. Documento em revisão.",
  alternates: { canonical: "/privacidade" },
  // Rascunho: não indexar até a revisão jurídica final.
  robots: { index: false, follow: false },
};

/* TODO: texto legal — esta página é um RASCUNHO. Revisar com responsável LGPD/UFMS antes do lançamento:
   - confirmar controlador e encarregado (DPO) com nome e contato reais;
   - confirmar prazo de retenção e rotina de eliminação;
   - confirmar suboperadores (hospedagem, banco de dados, disparo de WhatsApp);
   - atualizar "última atualização" na publicação. */

const SECTIONS = [
  {
    title: "1. Quais dados coletamos",
    body: "Coletamos apenas o seu número de WhatsApp e o registro do seu consentimento (data e hora). Não pedimos nome, endereço ou dados de pagamento nesta página.",
  },
  {
    title: "2. Para que usamos",
    body: "Usamos o número exclusivamente para avisar você pelo WhatsApp quando o aplicativo FeiraBox for lançado em Campo Grande/MS. Não usamos para marketing de terceiros.",
  },
  {
    title: "3. Base legal (LGPD)",
    body: "Tratamos seus dados com base no seu consentimento (art. 7º, I, da Lei nº 13.709/2018), coletado no formulário da lista de espera. Você pode revogar quando quiser.",
  },
  {
    title: "4. Compartilhamento",
    body: "Não vendemos nem compartilhamos seus dados. Eles ficam na nossa base (hospedagem e banco de dados do projeto) e no serviço usado para o aviso de lançamento.",
  },
  {
    title: "5. Seus direitos",
    body: "Você pode pedir confirmação, acesso, correção ou eliminação dos seus dados a qualquer momento pelo e-mail de contato. Respondemos em prazo razoável.",
  },
  {
    title: "6. Segurança e retenção",
    body: "Aplicamos medidas razoáveis de segurança e mantemos os dados somente pelo tempo necessário para o aviso de lançamento, eliminando-os depois mediante solicitação ou quando deixarem de ser necessários.",
  },
  {
    title: "7. Contato do controlador",
    body: "FeiraBox — projeto ligado à UFMS / Mercado Escola, Campo Grande/MS. E-mail: contato@feirabox.ufms.br.",
  },
];

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <TopBanner />
      <SiteHeader logoSrc={IMAGES.logoHeader} />
      <main className="mx-auto w-full max-w-[800px] flex-1 px-margin-mobile py-space-2xl lg:px-margin-desktop">
        <span className="rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md font-bold uppercase tracking-wider text-on-secondary-container">
          Rascunho — em revisão
        </span>
        <h1 className="mt-4 font-headline-lg text-headline-lg tracking-tight text-primary">
          Política de Privacidade
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
          Quer sair da lista? Escreva para{" "}
          <span className="font-bold text-primary">contato@feirabox.ufms.br</span> com o assunto
          &ldquo;Remover meus dados&rdquo;.{" "}
          <Link href="/#avise-me" className="font-bold text-secondary underline-offset-4 hover:underline">
            Voltar à lista de espera
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
