import Image from "next/image";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

function StoreBadges() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-space-xs">
      <div className="px-5 py-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex items-center gap-3">
        <svg className="w-7 h-7 fill-on-surface" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.01-.48 2.63-1.23z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
            Em breve na
          </span>
          <span className="font-title-lg text-sm font-bold text-primary">
            App Store
          </span>
        </div>
      </div>
      <div className="px-5 py-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex items-center gap-3">
        <svg className="w-7 h-7 fill-on-surface" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-1.638V3.452c0-.623.23-1.2.609-1.638zm11.23 11.23l2.095 2.095L5.787 21.36l9.052-8.316zm0-2.088L5.787 2.64l11.147 6.22-2.095 2.096zm1.384 1.044l3.87-2.161c.907-.506.907-1.332 0-1.838l-3.87-2.161-1.819 1.82 1.819 1.82z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
            Em breve no
          </span>
          <span className="font-title-lg text-sm font-bold text-primary">
            Google Play
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative w-full overflow-hidden px-margin-mobile lg:px-margin-desktop pt-space-xl pb-space-3xl"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"
      />
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-space-md z-10">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span>
                {"🌱 Piloto Oficial no Mercado Escola UFMS • Campo Grande/MS"}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
              <MaterialIcon name="smartphone" className="text-[15px]" />
              App em Construção
            </span>
          </div>

          <h1
            id="hero-titulo"
            className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-primary tracking-tight leading-tight"
          >
            Feira livre direto na sua porta.{" "}
            <span className="italic text-secondary">O sabor da terra</span> em
            um app feito para você.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Conectando feirantes e pequenos produtores familiares de Mato
            Grosso do Sul à sua rotina. Uma plataforma moderna que nasce junto
            ao Mercado Escola da UFMS para valorizar quem planta e levar
            colheita fresca até a sua mesa.
          </p>

          <div className="w-full p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
            <MaterialIcon
              name="info"
              className="text-secondary text-[24px] shrink-0 mt-0.5"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold text-primary">
                Plataforma 100% via Aplicativo Móvel:
              </span>
              <span className="text-on-surface-variant">
                Todas as seleções de caixas, assinaturas e entregas serão
                efetuadas exclusivamente pelo aplicativo FeiraBox quando for
                lançado na App Store e Google Play.
              </span>
            </div>
          </div>

          <StoreBadges />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-space-xs">
            <a
              className="h-touch-target-min px-6 rounded-2xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg inline-flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              href="#avise-me"
            >
              <MaterialIcon name="mark_email_read" className="text-[20px]" />
              <span>Entrar na Lista de Espera</span>
            </a>
            <a
              className="h-touch-target-min px-6 rounded-2xl bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg inline-flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              href="#como-funciona"
            >
              <MaterialIcon name="explore" className="text-[20px]" />
              <span>Conhecer o Projeto Piloto</span>
            </a>
          </div>

          <div className="pt-space-xs flex flex-wrap items-center gap-x-5 gap-y-2 text-on-surface-variant font-label-md text-label-md">
            <span className="inline-flex items-center gap-1 text-primary">
              <MaterialIcon name="verified" className="text-[18px]" />
              Iniciativa com o Mercado Escola UFMS
            </span>
            <span className="inline-flex items-center gap-1 text-primary">
              <MaterialIcon name="eco" className="text-[18px]" />
              Agricultura familiar de Campo Grande
            </span>
            <span className="inline-flex items-center gap-1 text-primary">
              <MaterialIcon name="touch_app" className="text-[18px]" />
              Gestão e pedidos 100% no app
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 relative mt-space-md lg:mt-0">
          <div className="relative w-full rounded-3xl overflow-hidden bg-surface-container shadow-[0_8px_28px_rgba(107,112,92,0.16)]">
            <Image
              alt="Caixa rústica FeiraBox com hortifrúti orgânicos, queijo artesanal pantaneiro e mel silvestre em Campo Grande MS"
              className="w-full h-[420px] lg:h-[500px] object-cover"
              src={IMAGES.heroBox}
              width={1024}
              height={1000}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-md flex items-center gap-1.5">
              <MaterialIcon name="verified" className="text-[16px]" />
              <span>Origem 100% Pantanal &amp; MS</span>
            </div>
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-bold shadow-md flex items-center gap-1.5">
              <MaterialIcon
                name="install_mobile"
                className="text-[16px] text-secondary"
              />
              <span>Em Breve no App</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_8px_24px_rgba(107,112,92,0.15)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
                  <MaterialIcon name="shopping_bag" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                    Visualização do Piloto
                  </span>
                  <span className="font-title-lg text-title-lg text-primary leading-tight">
                    Hortaliças frescas, queijos pantaneiros e compotas
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold">
                Exclusivo no App
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
