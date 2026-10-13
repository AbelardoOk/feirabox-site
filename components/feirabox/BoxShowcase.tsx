import Image from "next/image";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

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
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(107,112,92,0.08)] flex flex-col justify-between gap-6 hover:shadow-[0_8px_24px_rgba(107,112,92,0.12)] transition-all border border-outline-variant/20">
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-surface-container">
                <Image
                  alt="Caixa Horta e Pomar FeiraBox com hortaliças frescas da estação e queijo caipira de Campo Grande MS"
                  className="w-full h-full object-cover"
                  src={IMAGES.croche}
                  width={800}
                  height={520}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  Hortifrúti do Dia
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-bold">
                  Exclusivo no App
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Caixa Artesanato
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Criatividade e cultura, produtos feitos a mão por artesões regionais.
                  Melhores itens de decoração e criatividade.
                </p>
              </div>
              <div className="flex flex-col gap-2 py-3 border-y border-outline-variant/30">
                {[
                  "Chaveiros e bonecos de crochê",
                  "Pequenos itens de decoração",
                  "Regionalismo, criatividade e cultura",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
                  >
                    <MaterialIcon
                      name="check"
                      className="text-primary text-[18px]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="p-3 rounded-xl bg-surface-container-low text-center flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Disponibilidade
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Disponível para assinatura no lançamento do App
                </span>
              </div>
              <a
                className="h-touch-target-min w-full rounded-2xl bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all"
                href="#avise-me"
              >
                <MaterialIcon name="notifications" className="text-[18px]" />
                <span>Avisar-me no Lançamento</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-[0_8px_24px_rgba(107,112,92,0.12)] flex flex-col justify-between gap-6 relative ring-2 ring-secondary/30 scale-[1.02] border border-outline-variant/20">
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-surface-container">
                <Image
                  alt="Caixa Artesanal e Doçuras FeiraBox com geleias de frutas nativas, mel silvestre e doces típicos de MS"
                  className="w-full h-full object-cover"
                  src={IMAGES.boxDocuras}
                  width={800}
                  height={520}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-sm">
                  Doçuras da Estação
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-bold">
                  Exclusivo no App
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Caixa Artesanal &amp; Doçuras
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  O legado doce de MS: geleias de frutas nativas, mel silvestre
                  de florada pantaneira e compotas artesanais.
                </p>
              </div>
              <div className="flex flex-col gap-2 py-3 border-y border-outline-variant/30">

                <div
                    className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
                  >
                    <span>Contém:</span>
                  </div>

                {[
                  "Geleias caseiras (Goiabada, Jabuticaba, Maracujá)",
                  "Pote de mel puro de abelhas nativas do cerrado",
                  "Pães rústicos artesanais de fermentação natural",
                  "Frutas selecionadas para harmonização",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
                  >
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-[18px]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="p-3 rounded-xl bg-secondary-fixed/40 text-center flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Edição Especial
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Pedidos periódicos unicamente pelo celular
                </span>
              </div>
              <a
                className="h-touch-target-min w-full rounded-2xl bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                href="#avise-me"
              >
                <MaterialIcon
                  name="notifications_active"
                  className="text-[18px]"
                />
                <span>Avisar-me no Lançamento</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(107,112,92,0.08)] flex flex-col justify-between gap-6 hover:shadow-[0_8px_24px_rgba(107,112,92,0.12)] transition-all border border-outline-variant/20">
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-surface-container">
                <Image
                  alt="Caixa Pantaneira e Queijaria FeiraBox com queijo caipira curado e doce de leite em cerâmica rústica"
                  className="w-full h-full object-cover"
                  src={IMAGES.boxQueijaria}
                  width={800}
                  height={520}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold shadow-sm">
                  Queijaria &amp; Tradição
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary font-label-sm text-label-sm font-bold">
                  Exclusivo no App
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Caixa Pantaneira &amp; Queijaria
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Tradição de queijo caipira, doce de leite cozido
                  à lenha e delícias das fazendas sul-mato-grossenses.
                </p>
              </div>
              <div className="flex flex-col gap-2 py-3 border-y border-outline-variant/30">

                <div
                    className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
                  >
                    <span>Contém:</span>
                  </div>

                {[
                  "Queijo caipira curado artesanal de corte",
                  "Doce de leite tradicional em cerâmica rústica",
                  "Farinha de mandioca torrada de alambique",
                  "Iguarias típicas do Pantanal e Cerrado",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
                  >
                    <MaterialIcon
                      name="check"
                      className="text-primary text-[18px]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="p-3 rounded-xl bg-surface-container-low text-center flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">
                  Tradição Pantaneira
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Lotes limitados com reserva no App
                </span>
              </div>
              <a
                className="h-touch-target-min w-full rounded-2xl bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all"
                href="#avise-me"
              >
                <MaterialIcon name="notifications" className="text-[18px]" />
                <span>Avisar-me no Lançamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
