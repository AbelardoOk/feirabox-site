import Image from "next/image";
import { FARMER_CTA } from "./ctas";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

const BENEFITS = [
  {
    icon: "trending_up",
    iconClass: "text-secondary",
    title: "Previsão Real",
    description:
      "Prepare sob demanda com os pedidos já confirmados no app.",
  },
  {
    icon: "savings",
    iconClass: "text-primary",
    title: "Zero Mensalidade",
    description:
      "Modelo cooperativo sem tarifas abusivas para o feirante parceiro.",
  },
  {
    icon: "smartphone",
    iconClass: "text-tertiary",
    title: "App Descomplicado",
    description:
      "Interface simples com suporte humano da equipe técnica do projeto.",
  },
];

export function ForProducers() {
  return (
    <section
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-background"
      aria-labelledby="feirantes-titulo" id="feirantes"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="p-8 lg:p-12 rounded-3xl bg-surface-container shadow-[0_8px_24px_rgba(107,112,92,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase font-bold tracking-wider self-start">
                Para a Sua Banca Crescer
              </span>
              <h2 id="feirantes-titulo" className="font-headline-lg text-headline-lg text-primary">
                Previsibilidade de vendas para quem produz com amor
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vamos cadastrar feirantes do MS para
                utilizarem o FeiraBox assim que o aplicativo entrar em
                operação.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-4 rounded-2xl bg-surface-container-lowest flex flex-col gap-2 shadow-sm"
                >
                  <MaterialIcon
                    name={benefit.icon}
                    className={`${benefit.iconClass} text-[28px]`}
                  />
                  <span className="font-title-lg text-title-lg text-primary">
                    {benefit.title}
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-low border-l-4 border-secondary flex flex-col gap-1">
              <p className="italic font-body-md text-body-md text-on-surface">
                &ldquo;Participar da concepção do FeiraBox com a universidade
                nos dá a segurança de que o aplicativo foi pensado de verdade
                para quem está no sol vendendo todo dia.&rdquo;
              </p>
              <span className="font-label-md text-label-md text-secondary font-bold">
                — Dona Maria Souza, Feirante parceira no projeto piloto de
                Campo Grande
              </span>
            </div>
            <div className="pt-2">
              {/* CTA do feirante: visual outline + destino próprio (não vai ao #avise-me) */}
              <a
                className="min-h-[44px] px-8 py-3 rounded-2xl border-2 border-secondary bg-transparent text-secondary font-label-lg text-label-lg inline-flex items-center justify-center gap-3 shadow-sm hover:bg-secondary hover:text-on-secondary transition-all active:scale-[0.98]"
                href={FARMER_CTA.href}
              >
                <span>{FARMER_CTA.label}</span>
                <MaterialIcon name="how_to_reg" className="text-[20px]" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-surface-container-low shadow-md">
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
