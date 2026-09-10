import { MaterialIcon } from "./MaterialIcon";
import { FAQ_DATA } from "@/lib/site";

const FAQ_STYLE = [
  { icon: "schedule", iconWrap: "bg-primary text-on-primary" },
  { icon: "devices", iconWrap: "bg-secondary text-on-secondary" },
  { icon: "download", iconWrap: "bg-primary text-on-primary" },
  { icon: "local_shipping", iconWrap: "bg-secondary text-on-secondary" },
  { icon: "storefront", iconWrap: "bg-primary text-on-primary" },
  { icon: "notifications_active", iconWrap: "bg-secondary text-on-secondary" },
];

function FaqAnswer({ index }: { index: number }) {
  if (index === 1) {
    return (
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <strong className="text-primary font-bold">Não.</strong>
        <span>
          {" "}
          Todas as assinaturas, montagens de caixas, personalização de itens e
          pagamentos serão{" "}
        </span>
        <strong className="text-secondary">
          100% exclusivos do aplicativo móvel
        </strong>
        <span>
          , garantindo rastreamento pontual e a melhor experiência de compra.
        </span>
      </p>
    );
  }
  if (index === 2) {
    return (
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <span>Sim, o download do app FeiraBox será </span>
        <strong className="text-primary font-bold">100% gratuito</strong>
        <span>
          {" "}
          tanto na App Store quanto na Google Play Store. Você paga
          exclusivamente pelos produtos e caixas agroecológicas que escolher
          assinar.
        </span>
      </p>
    );
  }
  return (
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      {FAQ_DATA[index].answer}
    </p>
  );
}

export function Faq() {
  return (
    <section
      aria-labelledby="faq-titulo"
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-surface"
      id="faq"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase font-bold tracking-wider">
            Tira-Dúvidas do Aplicativo
          </span>
          <h2
            id="faq-titulo"
            className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-primary tracking-tight leading-tight"
          >
            Perguntas frequentes sobre o{" "}
            <span className="italic text-secondary">futuro app</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Entenda como o FeiraBox está sendo estruturado para conectar você
            à agricultura familiar com máxima transparência, afeto e
            praticidade.
          </p>
        </div>

        <div
          itemScope
          itemType="https://schema.org/FAQPage"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto w-full items-start"
        >
          {FAQ_DATA.map((item, index) => (
            <div
              key={item.question}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-[0_2px_8px_rgba(107,112,92,0.06)] flex flex-col gap-3 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${FAQ_STYLE[index].iconWrap}`}
                >
                  <MaterialIcon
                    name={FAQ_STYLE[index].icon}
                    className="text-[20px]"
                  />
                </span>
                <div className="flex flex-col gap-1">
                  <h3
                    itemProp="name"
                    className="font-title-lg text-title-lg text-primary font-bold"
                  >
                    {item.question}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <FaqAnswer index={index} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
