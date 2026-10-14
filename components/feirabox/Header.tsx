import Image from "next/image";
import Link from "next/link";
import { ConsumerCtaButton } from "./ctas";

export function TopBanner() {
  return (
    <div className="w-full bg-primary-container text-surface px-4 py-2.5 flex flex-wrap items-center justify-center gap-2 text-center text-sm border-b border-primary-fixed-dim/20 z-50 relative">
      <span className="inline-flex items-center gap-1.5 font-bold text-secondary-fixed">
        <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
        {"🚀 Aplicativo Oficial em Desenvolvimento"}
      </span>
      <span aria-hidden="true" className="hidden md:inline text-surface/60">•</span>
      <span className="text-surface/90 text-sm">
        Em breve na App Store (iOS) e Google Play Store (Android).
      </span>
      <span aria-hidden="true" className="hidden lg:inline text-surface/60">•</span>
      <span className="hidden lg:inline text-surface/80 text-sm">
        Todas as assinaturas e pedidos serão realizados exclusivamente pelo
        app.
      </span>
    </div>
  );
}

const NAV_LINKS = [
  { href: "/#como-funciona", label: "Como Funcionará" },
  { href: "/#modelos-caixas", label: "Modelos de Caixas" },
  { href: "/feirantes", label: "Para Feirantes" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#piloto-ufms", label: "Piloto UFMS" },
  { href: "/#faq", label: "Dúvidas Frequentes" },
];

export function SiteHeader({ logoSrc }: { logoSrc: string }) {
  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(107,112,92,0.08)]">
      <div className="h-20 w-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center gap-3"
            href="/#topo"
            aria-label="FeiraBox — voltar ao topo"
          >
            <Image
              src={logoSrc}
              alt="FeiraBox - Mercado & Ofício: feira livre por assinatura em Campo Grande MS"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </Link>
        </div>
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-1 bg-surface-container-low px-2 py-1.5 rounded-full shadow-[0_2px_8px_rgba(107,112,92,0.06)]"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              className="min-h-[44px] inline-flex items-center px-4 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* Header com ação única: só o CTA do consumidor (Fase 1) */}
          <ConsumerCtaButton
            variant="header"
            icon="notifications_active"
            trackParams={{ origem: "header" }}
          />
        </div>
      </div>
    </header>
  );
}
