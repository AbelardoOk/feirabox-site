import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";
import { PhoneMockup } from "./PhoneMockup";

const STEPS = [
  {
    number: "01",
    title: "Baixe o App & Escolha sua Caixa",
    description:
      "Navegue pelas caixas sazonais da semana (Artesanato, Doçuras ou Queijaria) e personalize sua frequência.",
    icon: "phone_iphone",
    tag: "100% no app",
    /* TODO: dado real — trocar por captura/GIF/vídeo real da tela 1 */
    mockupSrc: IMAGES.mockups.step1,
    mockupAlt: "Prévia ilustrativa da tela 1 do app FeiraBox: escolha da caixa da semana",
  },
  {
    number: "02",
    title: "Preparação & Montagem Afetuosa",
    description:
      "Os feirantes cadastrados preparam as caixas artesanais com respeito.",
    icon: "eco",
    tag: "Direto do produtor",
    /* TODO: dado real — trocar por captura/GIF/vídeo real da tela 2 */
    mockupSrc: IMAGES.mockups.step2,
    mockupAlt: "Prévia ilustrativa da tela 2 do app FeiraBox: montagem da caixa pelo feirante",
  },
  {
    number: "03",
    title: "Entrega ou Ponto",
    description:
      "Acompanhe pelo app o status da entrega na sua casa ou selecione retirada sustentável na feira.",
    icon: "pin_drop",
    tag: "Rastreio no celular",
    /* TODO: dado real — trocar por captura/GIF/vídeo real da tela 3 */
    mockupSrc: IMAGES.mockups.step3,
    mockupAlt: "Prévia ilustrativa da tela 3 do app FeiraBox: acompanhamento da entrega ou retirada",
  },
  {
    number: "04",
    title: "Histórias & Receitas Regionais",
    description:
      "Receba produtos artesanais e feitos com humanidade de quem vive da feira.",
    icon: "auto_stories",
    tag: "Conteúdo exclusivo",
    /* TODO: dado real — trocar por captura/GIF/vídeo real da tela 4 */
    mockupSrc: IMAGES.mockups.step4,
    mockupAlt: "Prévia ilustrativa da tela 4 do app FeiraBox: histórias dos produtores e receitas regionais",
  },
];

export function HowItWorks() {
  return (
    <section
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-background"
      aria-labelledby="como-funciona-titulo" id="como-funciona"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-surface-container text-secondary font-label-md text-label-md uppercase tracking-wider font-bold">
            Experiência no Aplicativo
          </span>
          <h2 id="como-funciona-titulo" className="font-headline-lg text-headline-lg text-primary">
            Como o FeiraBox funcionará no seu smartphone
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Quando o aplicativo for lançado, toda a jornada acontecerá de
            forma simples, transparente e sem atritos na palma da sua mão.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-7 rounded-3xl bg-surface-container flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest text-primary flex items-center justify-center font-bold text-headline-sm shadow-sm">
                {step.number}
              </div>
              <PhoneMockup src={step.mockupSrc} alt={step.mockupAlt} />
              <div className="flex flex-col gap-2">
                <h3 className="font-title-lg text-title-lg text-primary">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
              <div className="mt-auto pt-2 flex items-center gap-2 text-secondary font-label-md text-label-md">
                <MaterialIcon name={step.icon} className="text-[18px]" />
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-body-md text-body-md text-on-surface-variant">
          Telas ilustrativas — o visual final do app pode mudar até o lançamento.
        </p>
      </div>
    </section>
  );
}
