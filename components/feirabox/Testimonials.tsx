import Image from "next/image";
import { MaterialIcon } from "./MaterialIcon";

type Testimonial = {
  /* TODO: dado real — foto do/da feirante (quando houver, preencha `photo` e remova o avatar de iniciais) */
  photo: string | null;
  photoAlt: string;
  initials: string;
  /* TODO: dado real — nome e banca após entrevista/autorização (LGPD) */
  name: string;
  stall: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    photo: null,
    photoAlt: "Foto da feirante parceira do FeiraBox",
    initials: "FB",
    name: "Nome da feirante",
    stall: "Banca — feira de Campo Grande/MS",
    quote: "Depoimento real aqui, após entrevista e autorização de uso.",
  },
  {
    photo: null,
    photoAlt: "Foto do feirante parceiro do FeiraBox",
    initials: "FB",
    name: "Nome do feirante",
    stall: "Banca — feira de Campo Grande/MS",
    quote: "Depoimento real aqui, após entrevista e autorização de uso.",
  },
  {
    photo: null,
    photoAlt: "Foto da produtora parceira do FeiraBox",
    initials: "FB",
    name: "Nome da produtora",
    stall: "Sítio — agricultura familiar de MS",
    quote: "Depoimento real aqui, após entrevista e autorização de uso.",
  },
];

function Avatar({ t }: { t: Testimonial }) {
  if (t.photo) {
    return (
      <Image
        src={t.photo}
        alt={t.photoAlt}
        width={96}
        height={96}
        loading="lazy"
        className="h-12 w-12 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-fixed font-title-lg text-title-lg font-bold text-on-secondary-fixed"
    >
      {t.initials}
    </span>
  );
}

/** Prova social — depoimentos de feirantes com placeholders claros (Fase 3). */
export function Testimonials() {
  return (
    <section
      aria-labelledby="depoimentos-titulo"
      id="depoimentos"
      className="w-full bg-clay-soft py-space-3xl px-margin-mobile lg:px-margin-desktop"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-2xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-space-xs text-center">
          <span className="rounded-full bg-surface-container px-3 py-1 font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">
            Quem produz recomenda
          </span>
          <h2 id="depoimentos-titulo" className="font-headline-lg text-headline-lg text-primary">
            Feirantes do piloto
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Histórias reais de quem vive da feira em Campo Grande — colhidas
            com autorização no projeto piloto.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-5 rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-7 shadow-[0_4px_16px_rgba(107,112,92,0.08)]"
            >
              <MaterialIcon name="format_quote" className="text-[28px] text-secondary" />
              <blockquote className="font-body-md text-body-md italic leading-relaxed text-on-surface">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-outline-variant/20 pt-4">
                <Avatar t={t} />
                <span className="flex flex-col">
                  <span className="font-title-lg text-title-lg font-bold text-primary">
                    {t.name}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {t.stall}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
