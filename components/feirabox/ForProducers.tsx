import Image from "next/image";
import Link from "next/link";
import { FARMER_CTA } from "./cta-constants";
import { FarmerCtaButton } from "./ctas";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

const BENEFITS = [
  {
    icon: "trending_up",
    iconClass: "text-secondary-fixed",
    title: "Previsão Real",
    description:
      "Prepare sob demanda com os pedidos já confirmados no app.",
  },
  {
    icon: "savings",
    iconClass: "text-secondary-fixed",
    title: "Zero Mensalidade",
    description:
      "Modelo cooperativo sem tarifas abusivas para o feirante parceiro.",
  },
  {
    icon: "smartphone",
    iconClass: "text-secondary-fixed",
    title: "App Descomplicado",
    description:
      "Interface simples com suporte humano da equipe técnica do projeto.",
  },
];

/**
 * Seção do feirante — visual próprio (fundo verde escuro) para separar
 * do conteúdo do consumidor (Fase 3). Diferente de Differentials, que é
 * o "propósito" para quem compra; aqui é previsibilidade para quem produz.
 */
export function ForProducers({ ctaHref = FARMER_CTA.href }: { ctaHref?: string }) {
  return (
    <section
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-primary-container text-on-primary"
      aria-labelledby="feirantes-titulo" id="feirantes"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="px-3 py-1 rounded-full bg-primary text-on-primary-container font-label-md text-label-md uppercase font-bold tracking-wider self-start">
                Para a Sua Banca Crescer
              </span>
              <h2 id="feirantes-titulo" className="font-headline-lg text-headline-lg text-surface">
                Previsibilidade de vendas para quem produz com amor
              </h2>
              <p className="font-body-lg text-body-lg text-surface/90">
                Vamos cadastrar feirantes do MS para
                utilizarem o FeiraBox assim que o aplicativo entrar em
                operação.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-5 rounded-2xl bg-surface/10 border border-surface/15 flex flex-col gap-2.5 shadow-sm"
                >
                  <MaterialIcon
                    name={benefit.icon}
                    className={`${benefit.iconClass} text-[28px]`}
                  />
                  <span className="font-title-lg text-title-lg text-surface">
                    {benefit.title}
                  </span>
                  <p className="font-body-md text-body-md text-surface/85">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              {/* CTA do feirante: visual próprio + destino próprio (/feirantes) */}
              <FarmerCtaButton href={ctaHref} className="border-secondary-fixed text-secondary-fixed hover:bg-secondary-fixed hover:text-on-secondary-fixed" />
              <Link
                href="/#depoimentos"
                className="inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-label-lg text-label-lg font-bold text-secondary-fixed underline-offset-4 hover:underline"
              >
                <span>Ver depoimentos de feirantes</span>
                <MaterialIcon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-md">
              <Image
                alt="Agricultora familiar feirante parceira do FeiraBox em banca artesanal em Campo Grande MS"
                className="w-full h-96 lg:h-[440px] object-cover"
                src={IMAGES.feirante}
                width={800}
                height={880}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
