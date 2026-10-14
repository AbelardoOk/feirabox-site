"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { CONSUMER_CTA, CONSUMER_SECONDARY, FARMER_CTA } from "./cta-constants";
import { MaterialIcon } from "./MaterialIcon";

type CtaButtonProps = {
  children?: ReactNode;
  className?: string;
  /** Permite destino pontual diferente (ex.: mailto na página /feirantes). */
  href?: string;
  /** Evento de analytics (padrão por tipo de CTA). */
  trackAs?: AnalyticsEvent;
  /** Parâmetros extras do evento (ex.: { origem: "header" }). */
  trackParams?: Record<string, string>;
  /** Variações visuais do CTA do consumidor (mesmo texto/destino). */
  variant?: "primary" | "header" | "card";
  /** Ícone Material (padrão: mark_email_read). */
  icon?: string;
};

const CONSUMER_VARIANTS = {
  primary:
    "min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-container px-6 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary active:scale-[0.98]",
  header:
    "min-h-[44px] inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:bg-secondary/90 transition-all active:scale-[0.8] gap-2 shrink-0",
  card: "min-h-[44px] w-full rounded-2xl bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all",
} as const;

/** Botão primário do consumidor — sólido, vai para o formulário final. */
export function ConsumerCtaButton({
  children,
  className = "",
  href = CONSUMER_CTA.href,
  trackAs = "cta_consumer_click",
  trackParams,
  variant = "primary",
  icon = "mark_email_read",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent(trackAs, trackParams)}
      className={`${CONSUMER_VARIANTS[variant]} ${className}`.trim()}
    >
      <MaterialIcon name={icon} className="text-[20px]" />
      <span>{children ?? CONSUMER_CTA.label}</span>
    </Link>
  );
}

/** Botão do feirante — outline/terracota, propositalmente diferente do consumidor. */
export function FarmerCtaButton({ children, className = "", href = FARMER_CTA.href, trackAs = "cta_farmer_click" }: CtaButtonProps) {
  const cls = `min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-secondary bg-transparent px-6 py-3 font-label-lg text-label-lg text-secondary shadow-sm transition-all hover:bg-secondary hover:text-on-secondary active:scale-[0.98] ${className}`.trim();
  const content = (
    <>
      <MaterialIcon name="how_to_reg" className="text-[20px]" />
      <span>{children ?? FARMER_CTA.label}</span>
    </>
  );
  // mailto: não é rota — usa âncora nativa
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} onClick={() => trackEvent(trackAs)} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} onClick={() => trackEvent(trackAs)} className={cls}>
      {content}
    </Link>
  );
}

/** Link secundário — formato de link, não botão. */
export function SecondaryCtaLink() {
  return (
    <Link
      href={CONSUMER_SECONDARY.href}
      onClick={() => trackEvent("cta_secondary_click")}
      className="inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-label-lg text-label-lg font-bold text-secondary underline-offset-4 hover:underline"
    >
      <span>{CONSUMER_SECONDARY.label}</span>
      <MaterialIcon name="arrow_forward" className="text-[18px]" />
    </Link>
  );
}
