"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
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

/**
 * FAQ em acordeão acessível (Fase 4): cada pergunta é um <button> nativo
 * (teclado + leitor de tela) com aria-expanded/aria-controls e região associada.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <span className="italic text-secondary">quando lançarmos</span>
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
          {FAQ_DATA.map((item, index) => {
            const style = FAQ_STYLE[index % FAQ_STYLE.length];
            const isOpen = openIndex === index;
            const buttonId = `faq-pergunta-${index}`;
            const panelId = `faq-resposta-${index}`;
            return (
              <div
                key={item.question}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="rounded-2xl bg-surface-container border border-outline-variant/30 shadow-[0_2px_8px_rgba(107,112,92,0.06)] transition-all hover:shadow-md"
              >
                <h3 itemProp="name" className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      if (!isOpen) trackEvent("faq_open", { pergunta: item.question });
                      setOpenIndex(isOpen ? null : index);
                    }}
                    className="flex min-h-[44px] w-full items-start gap-3 rounded-2xl p-6 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${style.iconWrap}`}
                    >
                      <MaterialIcon name={style.icon} className="text-[20px]" />
                    </span>
                    <span className="flex-1 font-title-lg text-title-lg text-primary font-bold">
                      {item.question}
                    </span>
                    <span aria-hidden="true" className="shrink-0">
                      <MaterialIcon
                        name="expand_more"
                        className={`text-[24px] text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  hidden={!isOpen}
                  className="px-6 pb-6 pl-[4.25rem]"
                >
                  <div itemProp="text">
                    <FaqAnswer index={index} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
