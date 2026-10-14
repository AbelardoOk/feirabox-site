import { ForProducers } from "@/components/feirabox/ForProducers";
import { SiteFooter } from "@/components/feirabox/SiteFooter";
import { SiteHeader, TopBanner } from "@/components/feirabox/Header";
import { Testimonials } from "@/components/feirabox/Testimonials";
import { FarmerCtaButton } from "@/components/feirabox/ctas";
import { farmerContactHref } from "@/components/feirabox/ctas";
import { IMAGES } from "@/components/feirabox/images";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para Feirantes — Cadastre sua banca",
  description:
    "Feirante ou produtor familiar de Campo Grande/MS? Cadastre sua banca no piloto do FeiraBox com a UFMS / Mercado Escola. Sem mensalidade de adesão.",
  alternates: { canonical: "/feirantes" },
};

const STEPS = [
  {
    number: "01",
    title: "Envie seu contato",
    description: "Clique em cadastrar e mande seu nome, banca e WhatsApp.",
  },
  {
    number: "02",
    title: "Nossa equipe chama você",
    description: "A equipe do piloto explica como funciona e tira dúvidas.",
  },
  {
    number: "03",
    title: "Cadastre banca e produtos",
    description: "Com ajuda do suporte, você entra no app pronto para vender.",
  },
];

export default function FeirantesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary focus:text-on-primary"
      >
        Pular para o conteúdo
      </a>
      <TopBanner />
      <SiteHeader logoSrc={IMAGES.logoHeader} />
      <main id="conteudo" className="w-full flex-1">
        {/* Hero do feirante */}
        <section
          aria-labelledby="feirantes-hero-titulo"
          className="w-full px-margin-mobile pb-space-2xl pt-space-2xl lg:px-margin-desktop"
        >
          <div className="mx-auto flex max-w-[1024px] flex-col items-start gap-space-md">
            <span className="rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md font-bold uppercase tracking-wider text-on-secondary-container">
              Para feirantes e produtores de MS
            </span>
            <h1
              id="feirantes-hero-titulo"
              className="font-headline-lg text-headline-lg tracking-tight text-primary lg:font-display-lg lg:text-display-lg"
            >
              Sua banca com vendas previsíveis.
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              Cadastre-se no piloto com a UFMS e venda por encomenda no app,
              sem mensalidade de adesão.
            </p>
            <div className="flex flex-col items-start gap-2">
              <FarmerCtaButton href={farmerContactHref()} />
              <Link
                href="/#avise-me"
                className="inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-label-lg text-label-lg font-bold text-secondary underline-offset-4 hover:underline"
              >
                <span>Quero comprar caixas</span>
              </Link>
            </div>
          </div>
        </section>

        <ForProducers ctaHref={farmerContactHref()} />

        {/* Como participar */}
        <section
          aria-labelledby="participar-titulo"
          className="w-full bg-surface px-margin-mobile py-space-3xl lg:px-margin-desktop"
        >
          <div className="mx-auto flex max-w-[1024px] flex-col gap-space-lg">
            <h2 id="participar-titulo" className="text-center font-headline-lg text-headline-lg text-primary">
              Como participar do piloto
            </h2>
            <ol className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
              {STEPS.map((step) => (
                <li
                  key={step.number}
                  className="flex flex-col gap-2 rounded-3xl bg-surface-container p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-lowest font-bold text-headline-sm text-primary shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary">{step.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="flex justify-center">
              <FarmerCtaButton href={farmerContactHref()} />
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
