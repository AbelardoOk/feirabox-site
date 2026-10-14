import Image from "next/image";
import { ConsumerCtaButton, SecondaryCtaLink } from "./ctas";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

/**
 * Selos "Em breve" — propositalmente SEM link.
 * O app ainda não foi lançado; não há URL de loja para apontar.
 */
/* TODO: dado real — trocar por links da App Store / Google Play após o lançamento */
function ComingSoonBadges() {
  return (
    <div
      aria-label="Aplicativo em breve na App Store e no Google Play"
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3 shadow-sm">
        <MaterialIcon name="smartphone" className="text-[24px] text-on-surface" />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            Em breve na
          </span>
          <span className="text-sm font-bold text-primary">App Store</span>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-3 shadow-sm">
        <MaterialIcon name="smartphone" className="text-[24px] text-on-surface" />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            Em breve no
          </span>
          <span className="text-sm font-bold text-primary">Google Play</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative w-full overflow-hidden px-margin-mobile pb-space-3xl pt-space-xl lg:px-margin-desktop"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 rounded-full bg-primary-fixed/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-gutter-desktop lg:grid-cols-12">
        <div className="z-10 flex flex-col items-start gap-space-md lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md text-primary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse" />
            <span> Piloto no Mercado Escola UFMS • Campo Grande/MS</span>
          </div>

          <h1
            id="hero-titulo"
            className="font-headline-lg text-headline-lg tracking-tight text-primary lg:font-display-lg lg:text-display-lg"
          >
            Feira livre direto na sua porta.
          </h1>

          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            Caixas da agricultura familiar de Campo Grande, com entrega e
            retirada. Em breve no app.
          </p>

          <ComingSoonBadges />

          <div className="flex flex-col items-start gap-2 pt-space-xs">
            <ConsumerCtaButton />
            <SecondaryCtaLink />
          </div>

          <p className="flex items-start gap-2 text-sm text-on-surface-variant">
            <MaterialIcon name="info" className="mt-0.5 shrink-0 text-[20px] text-secondary" />
            <span>Pedidos e assinaturas só no app, quando lançarmos.</span>
          </p>
        </div>

        <div className="relative mt-space-md lg:col-span-6 lg:mt-0">
          <div className="relative w-full overflow-hidden rounded-3xl bg-surface-container shadow-[0_8px_28px_rgba(107,112,92,0.16)]">
            <Image
              alt="Caixa rústica FeiraBox com hortifrúti orgânicos, queijo artesanal pantaneiro e mel silvestre em Campo Grande MS"
              className="h-[420px] w-full object-cover lg:h-[500px]"
              src={IMAGES.heroBox2}
              width={1024}
              height={1000}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1.5 font-label-sm text-label-sm font-bold text-on-secondary-container shadow-md">
              <MaterialIcon name="verified" className="text-[16px]" />
              <span>Origem 100% Pantanal &amp; MS</span>
            </div>
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl bg-surface-container-lowest/95 p-4 shadow-[0_8px_24px_rgba(107,112,92,0.15)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed text-secondary">
                  <MaterialIcon name="shopping_bag" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
                    Visualização do Piloto
                  </span>
                  <span className="font-title-lg text-title-lg leading-tight text-primary">
                    Geleias, queijos pantaneiros e compotas
                  </span>
                </div>
              </div>
              <span className="hidden px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm font-bold text-on-surface-variant sm:inline-flex">
                Exclusivo no App
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
