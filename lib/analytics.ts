/**
 * Analytics — Fase 6. Função única de eventos.
 * Provedor configurável por variável de ambiente:
 *   NEXT_PUBLIC_ANALYTICS_PROVIDER = "ga4" | "plausible" | "" (desativado)
 * Sem provedor configurado, os eventos são ignorados (no-op), exceto em dev.
 * TODO: dado real — definir provedor e adicionar o script dele no layout.
 */

export type AnalyticsEvent =
  | "cta_consumer_click"
  | "cta_farmer_click"
  | "cta_secondary_click"
  | "cta_sticky_click"
  | "waitlist_submit_success"
  | "waitlist_submit_error"
  | "faq_open";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "";

  try {
    if (provider === "ga4" && typeof window.gtag === "function") {
      window.gtag("event", event, params ?? {});
      return;
    }
    if (provider === "plausible" && typeof window.plausible === "function") {
      window.plausible(event, params ? { props: params } : undefined);
      return;
    }
    if (process.env.NODE_ENV === "development") {
      console.debug(`[analytics:${provider || "off"}]`, event, params ?? {});
    }
  } catch {
    // Analytics nunca pode quebrar a página.
  }
}
