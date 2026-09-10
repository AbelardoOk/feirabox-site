import Image from "next/image";
import { MaterialIcon } from "./MaterialIcon";

export function TopBanner() {
  return (
    <div className="w-full bg-primary-container text-surface px-4 py-2.5 flex flex-wrap items-center justify-center gap-2 text-center text-label-sm sm:text-label-md border-b border-primary-fixed-dim/20 z-50 relative">
      <span className="inline-flex items-center gap-1.5 font-bold text-secondary-fixed">
        <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
        {"🚀 Aplicativo Oficial em Desenvolvimento"}
      </span>
      <span className="hidden md:inline text-surface/60">•</span>
      <span className="text-surface/90">
        Em breve na App Store (iOS) e Google Play Store (Android).
      </span>
      <span className="hidden lg:inline text-surface/60">•</span>
      <span className="text-surface/80 text-xs">
        Todas as assinaturas e pedidos serão realizados exclusivamente pelo
        app.
      </span>
    </div>
  );
}

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como Funcionará" },
  { href: "#modelos-caixas", label: "Modelos de Caixas" },
  { href: "#feirantes", label: "Para Feirantes" },
  { href: "#piloto-ufms", label: "Piloto UFMS" },
  { href: "#faq", label: "Dúvidas Frequentes" },
];

export function SiteHeader({ logoSrc }: { logoSrc: string }) {
  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(107,112,92,0.08)]">
      <div className="h-20 w-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-3"
            href="#topo"
            aria-label="FeiraBox — voltar ao topo"
          >
            <Image
              src={logoSrc}
              alt="FeiraBox - Mercado & Ofício: feira livre por assinatura em Campo Grande MS"
              width={180}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>
        </div>
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-1 bg-surface-container-low px-2 py-1.5 rounded-full shadow-[0_2px_8px_rgba(107,112,92,0.06)]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="px-4 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
            <MaterialIcon name="smartphone" className="text-[15px]" />
            <span>App em Breve</span>
          </div>
          <a
            className="h-touch-target-min inline-flex items-center justify-center px-5 rounded-2xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:bg-secondary/90 transition-all active:scale-[0.98] gap-2 shrink-0"
            href="#avise-me"
          >
            <MaterialIcon name="notifications_active" className="text-[18px]" />
            <span>Entrar na Lista de Espera</span>
          </a>
        </div>
      </div>
    </header>
  );
}
