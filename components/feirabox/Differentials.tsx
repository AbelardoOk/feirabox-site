import { MaterialIcon } from "./MaterialIcon";

const CARDS = [
  {
    icon: "person_pin",
    iconWrap: "bg-primary-fixed/30 text-primary",
    badge: "Rastreabilidade Humana",
    badgeClass: "text-primary",
    title: "Conexão com a Origem & Histórias Reais",
    description:
      "Saiba exatamente quem plantou e colheu o que está na sua mesa; cada caixa carrega a identidade, o afeto e a tradição dos pequenos produtores do Mato Grosso do Sul.",
    footerIcon: "verified",
    footerClass: "text-primary",
    footer: "Biografias e relatos dos produtores no app",
  },
  {
    icon: "agriculture",
    iconWrap: "bg-secondary-fixed/40 text-secondary",
    badge: "Colheita Viva",
    badgeClass: "text-secondary",
    title: "Frescor Incomparável & Colheita do Dia",
    description:
      "Adeus aos alimentos que passam dias em câmaras frias e prateleiras de supermercado. Suas verduras e frutas são colhidas no tempo certo da natureza.",
    footerIcon: "eco",
    footerClass: "text-secondary",
    footer: "Colhido na madrugada direto para sua cesta",
  },
  {
    icon: "handshake",
    iconWrap: "bg-tertiary-fixed text-tertiary",
    badge: "Comércio Justo",
    badgeClass: "text-tertiary",
    title: "Apoio Direto à Economia Local do MS",
    description:
      "Mais de 75% do valor volta diretamente para as mãos das famílias produtoras, fortalecendo a agricultura familiar e os feirantes parceiros de Campo Grande.",
    footerIcon: "payments",
    footerClass: "text-tertiary",
    footer: "Renda digna e previsibilidade para o homem do campo",
  },
  {
    icon: "spa",
    iconWrap: "bg-primary-fixed/30 text-primary",
    badge: "Afeto & Conveniência",
    badgeClass: "text-primary",
    title: "A Descoberta da Feira no Seu Ritmo",
    description:
      "Receba curadoria sazonal, receitas regionais e novidades da estação sem sair de casa — com a praticidade de gerenciar tudo pelo celular.",
    footerIcon: "touch_app",
    footerClass: "text-primary",
    footer: "Gestão de assinatura em poucos toques no app",
  },
];

export function Differentials() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-center text-center gap-space-xs max-w-xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-md text-label-md uppercase font-bold tracking-wider">
            Por que o FeiraBox?
          </span>
          <h2 id="diferenciais-titulo" className="font-headline-lg text-headline-lg text-primary">
            Um aplicativo com propósito e valorização real da terra
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Conectamos tecnologia ética à economia regional para transformar a
            maneira como você compra da feira.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full max-w-[1100px] mx-auto">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-3xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(107,112,92,0.08)] border border-outline-variant/20 flex flex-col justify-between gap-6 hover:shadow-[0_8px_24px_rgba(107,112,92,0.12)] transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.iconWrap}`}
                  >
                    <MaterialIcon name={card.icon} className="text-[24px]" />
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm font-bold ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
              <div
                className={`pt-4 border-t border-outline-variant/20 flex items-center gap-2 font-label-md text-label-md ${card.footerClass}`}
              >
                <MaterialIcon name={card.footerIcon} className="text-[18px]" />
                <span>{card.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
