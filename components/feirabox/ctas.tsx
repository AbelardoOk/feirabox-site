import type { ReactNode } from "react";
import { MaterialIcon } from "./MaterialIcon";

/**
 * CTAs padronizados — Fase 1.
 * Consumidor: mesmo texto e mesmo destino (#avise-me) em todo o site.
 * Feirante: visual distinto e destino próprio (Fase 3 criará rota/página dedicada).
 */
export const CONSUMER_CTA = {
  label: "Entrar na lista de espera",
  href: "#avise-me",
} as const;

export const FARMER_CTA = {
  label: "Cadastrar minha banca",
  // TODO: dado real — trocar por rota/página dedicada do feirante na Fase 3 (ex.: /feirantes)
  href: "mailto:contato@feirabox.ufms.br?subject=Cadastrar%20minha%20banca%20no%20FeiraBox",
} as const;

export const CONSUMER_SECONDARY = {
  label: "Ver como funcionará",
  href: "#como-funciona",
} as const;

type CtaButtonProps = {
  children?: ReactNode;
  className?: string;
};

/** Botão primário do consumidor — sólido, vai para o formulário final. */
export function ConsumerCtaButton({ children, className = "" }: CtaButtonProps) {
  return (
    <a
      href={CONSUMER_CTA.href}
      className={`min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-container px-6 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary active:scale-[0.98] ${className}`.trim()}
    >
      <MaterialIcon name="mark_email_read" className="text-[20px]" />
      <span>{children ?? CONSUMER_CTA.label}</span>
    </a>
  );
}

/** Botão do feirante — outline/terracota, propositalmente diferente do consumidor. */
export function FarmerCtaButton({ children, className = "" }: CtaButtonProps) {
  return (
    <a
      href={FARMER_CTA.href}
      className={`min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-secondary bg-transparent px-6 py-3 font-label-lg text-label-lg text-secondary shadow-sm transition-all hover:bg-secondary hover:text-on-secondary active:scale-[0.98] ${className}`.trim()}
    >
      <MaterialIcon name="how_to_reg" className="text-[20px]" />
      <span>{children ?? FARMER_CTA.label}</span>
    </a>
  );
}

/** Link secundário — formato de link, não botão. */
export function SecondaryCtaLink() {
  return (
    <a
      href={CONSUMER_SECONDARY.href}
      className="inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-label-lg text-label-lg font-bold text-secondary underline-offset-4 hover:underline"
    >
      <span>{CONSUMER_SECONDARY.label}</span>
      <MaterialIcon name="arrow_forward" className="text-[18px]" />
    </a>
  );
}
