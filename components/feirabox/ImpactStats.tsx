import { METRICS } from "@/lib/site";
import { MaterialIcon } from "./MaterialIcon";

/* Selos de confiança — itens que não são métricas viraram selos (Fase 3) */
const TRUST_BADGES = [
  { icon: "eco", label: "Agricultura familiar de MS" },
  { icon: "school", label: "Piloto com o Mercado Escola UFMS" },
  { icon: "smartphone", label: "App em breve para iOS e Android" },
] as const;

export function ImpactStats() {
  return (
    <section
      aria-label="Números e compromissos do FeiraBox"
      className="w-full bg-surface-container-low py-space-xl shadow-[0_1px_8px_rgba(107,112,92,0.06)]"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Única métrica — número editável em lib/site.ts (METRICS) */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
              {METRICS.mappedFarmers}
            </span>
            <span className="flex flex-col items-center md:items-start">
              <span className="font-label-lg text-label-lg font-bold text-on-surface">
                {METRICS.mappedFarmersLabel}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                {METRICS.mappedFarmersDescription}
              </span>
            </span>
          </div>
          <ul aria-label="Selos de confiança" className="flex flex-wrap items-center justify-center gap-2.5">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge.label}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 font-label-md text-label-md font-bold text-primary shadow-sm"
              >
                <MaterialIcon name={badge.icon} className="text-[18px] text-secondary" />
                <span>{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
