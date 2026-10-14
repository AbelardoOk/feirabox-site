import Image from "next/image";
import { BOX_PRICES } from "@/lib/site";
import { ConsumerCtaButton } from "./ctas";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

/**
 * Detalhes comerciais da caixa.
 * Preço: estimado (placeholder autorizado) — confirmar no lançamento.
 * Porções, frequência e área: "Valores divulgados no lançamento".
 */
/* TODO: dados reais — confirmar preço, porções, frequência e área de entrega de cada caixa */
const PENDING_VALUE = "Valores divulgados no lançamento";

/** "44.90" → "R$ 44,90" */
function formatPrice(value: string): string {
  return `R$ ${value.replace(".", ",")}`;
}

type Box = {
  category: string;
  categoryClass: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  contents: string[];
  checkClass: string;
  availabilityLabel: string;
  availabilityText: string;
  availabilityClass: string;
  featured?: boolean;
};

const BOXES: Box[] = [
  {
    category: "Hortifrúti do Dia",
    categoryClass: "bg-primary-fixed text-on-primary-fixed",
    title: "Caixa Artesanato",
    description:
      "Cultura e criatividade em peças feitas à mão por artesãos regionais.",
    image: IMAGES.croche,
    imageAlt: "Caixa Artesanato FeiraBox com chaveiros de crochê e itens de decoração feitos à mão em Campo Grande MS",
    contents: [
      "Chaveiros e bonecos de crochê",
      "Pequenos itens de decoração",
      "Regionalismo, criatividade e cultura",
    ],
    checkClass: "text-primary",
    availabilityLabel: "Disponibilidade",
    availabilityText: "Disponível para assinatura no lançamento do App",
    availabilityClass: "bg-surface-container-low",
  },
  {
    category: "Doçuras da Estação",
    categoryClass: "bg-secondary-container text-on-secondary-container",
    title: "Caixa Artesanal & Doçuras",
    description:
      "O legado doce de MS: geleias de frutas nativas, mel silvestre de florada pantaneira e compotas artesanais.",
    image: IMAGES.boxDocuras,
    imageAlt: "Caixa Artesanal e Doçuras FeiraBox com geleias de frutas nativas, mel silvestre e doces típicos de MS",
    contents: [
      "Geleias caseiras (Goiabada, Jabuticaba, Maracujá)",
      "Pote de mel puro de abelhas nativas do cerrado",
      "Pães rústicos artesanais de fermentação natural",
      "Frutas selecionadas para harmonização",
    ],
    checkClass: "text-secondary",
    availabilityLabel: "Edição Especial",
    availabilityText: "Pedidos periódicos unicamente pelo celular",
    availabilityClass: "bg-secondary-fixed/40",
    featured: true,
  },
  {
    category: "Queijaria & Tradição",
    categoryClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    title: "Caixa Pantaneira & Queijaria",
    description:
      "Tradição de queijo caipira, doce de leite cozido à lenha e delícias das fazendas sul-mato-grossenses.",
    image: IMAGES.boxQueijaria,
    imageAlt: "Caixa Pantaneira e Queijaria FeiraBox com queijo caipira curado e doce de leite em cerâmica rústica",
    contents: [
      "Queijo caipira curado artesanal de corte",
      "Doce de leite tradicional em cerâmica rústica",
      "Farinha de mandioca torrada de alambique",
      "Iguarias típicas do Pantanal e Cerrado",
    ],
    checkClass: "text-primary",
    availabilityLabel: "Tradição Pantaneira",
    availabilityText: "Lotes limitados com reserva no App",
    availabilityClass: "bg-surface-container-low",
  },
];

const DETAIL_ROWS = [
  { icon: "group", label: "Serve" },
  { icon: "calendar_month", label: "Frequência" },
  { icon: "local_shipping", label: "Entrega" },
] as const;

function BoxCard({ box }: { box: Box }) {
  return (
    <div
      className={`p-7 rounded-3xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(107,112,92,0.08)] flex flex-col gap-6 hover:shadow-[0_8px_24px_rgba(107,112,92,0.12)] transition-all border border-outline-variant/20 ${
        box.featured ? "ring-2 ring-secondary/30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-surface-container">
          <Image
            alt={box.imageAlt}
            className="w-full h-full object-cover"
            src={box.image}
            width={800}
            height={520}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-sm ${box.categoryClass}`}>
            {box.category}
          </div>
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface-variant font-label-sm text-label-sm">
            Imagem ilustrativa
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-headline-sm text-headline-sm text-primary">
            {box.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {box.description}
          </p>
        </div>
        <ul className="flex flex-col gap-2 py-3 border-y border-outline-variant/30">
          {box.contents.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
            >
              <MaterialIcon name="check" className={`${box.checkClass} text-[18px]`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* Preço estimado + demais detalhes ainda pendentes */}
        <dl className="grid grid-cols-1 gap-2 rounded-2xl bg-surface-container-low p-4 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <MaterialIcon name="payments" className="mt-0.5 shrink-0 text-[18px] text-secondary" />
            <div className="flex flex-col">
              <dt className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                Preço
              </dt>
              <dd className="font-body-md text-body-md font-bold text-on-surface">
                {formatPrice(BOX_PRICES[box.title as keyof typeof BOX_PRICES])}*
              </dd>
            </div>
          </div>
          {DETAIL_ROWS.map((row) => (
            <div key={row.label} className="flex items-start gap-2">
              <MaterialIcon name={row.icon} className="mt-0.5 shrink-0 text-[18px] text-secondary" />
              <div className="flex flex-col">
                <dt className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                  {row.label}
                </dt>
                <dd className="font-body-md text-body-md text-on-surface-variant">{PENDING_VALUE}</dd>
              </div>
            </div>
          ))}
        </dl>
        <p className="font-body-md text-body-md text-on-surface-variant">
          *Preço estimado — confirmação no lançamento.
        </p>
      </div>
      {/* mt-auto iguala a altura dos cards: CTA sempre na base */}
      <div className="mt-auto flex flex-col gap-3 pt-2">
        <div className={`p-3 rounded-xl text-center flex flex-col gap-0.5 ${box.availabilityClass}`}>
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            {box.availabilityLabel}
          </span>
          <span className="font-body-md text-body-md text-on-surface">
            {box.availabilityText}
          </span>
        </div>
        <ConsumerCtaButton variant="card" trackParams={{ origem: "caixas" }} />
      </div>
    </div>
  );
}

export function BoxShowcase() {
  return (
    <section
      aria-labelledby="caixas-titulo"
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low"
      id="modelos-caixas"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase font-bold tracking-wider self-start">
              Vitrine Ilustrativa do App
            </span>
            <h2 id="caixas-titulo" className="font-headline-lg text-headline-lg text-primary">
              Exemplos de modelos de caixas que estarão disponíveis no aplicativo
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Todos os produtos vendidos no app seguem o estilo de caixa surpresa.
              Cada caixa possui produtos selecionados e montados pelo feirante, produzindo
              uma experiência de descobrimento para cada compra.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-surface-container px-3.5 py-2 rounded-full self-start md:self-auto border border-outline-variant/30">
            <MaterialIcon
              name="lock_clock"
              className="text-secondary text-[18px]"
            />
            <span className="font-label-sm text-label-sm text-primary font-bold">
              Vendas e pedidos exclusivos no App
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop items-stretch">
          {BOXES.map((box) => (
            <BoxCard key={box.title} box={box} />
          ))}
        </div>
        <p className="text-center font-body-md text-body-md text-on-surface-variant">
          Fotos ilustrativas — o conteúdo de cada caixa varia com a estação e a banca.
        </p>
      </div>
    </section>
  );
}
