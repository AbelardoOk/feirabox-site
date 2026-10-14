/**
 * CTAs padronizados — constantes puras (server-safe, sem "use client").
 * Os componentes interativos vivem em ./ctas.tsx.
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
