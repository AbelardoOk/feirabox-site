const STATS = [
  {
    value: "+45",
    valueClass: "text-primary",
    label: "Feirantes Mapeados",
    description: "Prontos para integrar o aplicativo",
  },
  {
    value: "100%",
    valueClass: "text-secondary",
    label: "Origem Regional MS",
    description: "Rastreabilidade da agricultura familiar",
  },
  {
    value: "App Exclusivo",
    valueClass: "text-tertiary",
    label: "iOS & Android",
    description: "Assinatura e compras somente no celular",
  },
  {
    value: "UFMS",
    valueClass: "text-primary",
    label: "Mercado Escola",
    description: "Pesquisa, extensão e ponto de apoio",
  },
];

export function ImpactStats() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl shadow-[0_1px_8px_rgba(107,112,92,0.06)]">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 p-2 ${
                index >= 2 ? "pt-4 md:pt-2" : ""
              }`}
            >
              <span
                className={`font-headline-lg text-headline-lg font-bold tracking-tight ${stat.valueClass}`}
              >
                {stat.value}
              </span>
              <span className="font-label-lg text-label-lg text-on-surface">
                {stat.label}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
