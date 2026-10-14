import type { ReactNode } from "react";
import Link from "next/link";
import { MaterialIcon } from "./MaterialIcon";

/**
 * CTAs padronizados — Fases 1–3.
 * Consumidor: mesmo texto e mesmo destino (formulário final na home) em todo o site.
 * Feirante: visual distinto e destino próprio (/feirantes).
 * Hrefs absolutos ("/#...") para funcionar também a partir da página /feirantes.
 */
export const CONSUMER_CTA = {
  label: "Entrar na lista de espera",
  href: "/#avise-me",
} as const;

export const FARMER_CTA = {
  label: "Cadastrar minha banca",
  href: "/feirantes",
} as const;

/* TODO: dado real — e-mail de contato do feirante; hoje o CTA final da página /feirantes usa este endereço */
export const FARMER_CONTACT_EMAIL = "contato@feirabox.ufms.br";

export function farmerContactHref() {
  return `mailto:${FARMER_CONTACT_EMAIL}?subject=Cadastrar%20minha%20banca%20no%20FeiraBox`;
}

export const CONSUMER_SECONDARY = {
  label: "Ver como funcionará",
  href: "/#como-funciona",
} as const;

type CtaButtonProps = {
  children?: ReactNode;
  className?: string;
  /** Permite destino pontual diferente (ex.: mailto na página /feirantes). */
  href?: string;
};

/** Botão primário do consumidor — sólido, vai para o formulário final. */
export function ConsumerCtaButton({ children, className = "", href = CONSUMER_CTA.href }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-container px-6 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary active:scale-[0.98] ${className}`.trim()}
    >
      <MaterialIcon name="mark_email_read" className="text-[20px]" />
      <span>{children ?? CONSUMER_CTA.label}</span>
    </Link>
  );
}

/** Botão do feirante — outline/terracota, propositalmente diferente do consumidor. */
export function FarmerCtaButton({ children, className = "", href = FARMER_CTA.href }: CtaButtonProps) {
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
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/** Link secundário — formato de link, não botão. */
export function SecondaryCtaLink() {
  return (
    <Link
      href={CONSUMER_SECONDARY.href}
      className="inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-label-lg text-label-lg font-bold text-secondary underline-offset-4 hover:underline"
    >
      <span>{CONSUMER_SECONDARY.label}</span>
      <MaterialIcon name="arrow_forward" className="text-[18px]" />
    </Link>
  );
}
