const PARTNERS = [
  {
    name: "UFMS",
    iconClass: "text-primary",
    fillClass: "fill-primary",
    path: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
  },
  {
    name: "Aginova",
    iconClass: "text-secondary",
    fillClass: "fill-secondary",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
  {
    name: "CNPq",
    iconClass: "text-primary",
    fillClass: "fill-primary",
    path: "M9.5 2c-.83 0-1.5.67-1.5 1.5V4h7v-.5c0-.83-.67-1.5-1.5-1.5h-4zM6 6v2h1v10c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8h1V6H6zm7 11h-2v-4h2v4zm0-6h-2V9h2v2z",
  },
  {
    name: "MEMP",
    iconClass: "text-tertiary",
    fillClass: "fill-tertiary",
    path: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z",
  },
  {
    name: "PIEI",
    iconClass: "text-secondary",
    fillClass: "fill-secondary",
    path: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
  },
];

export function Partners() {
  return (
    <section
      className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low border-t border-outline-variant/30"
      aria-labelledby="parcerias-titulo" id="instituicoes"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-space-lg">
        <div className="flex flex-col items-center text-center gap-space-xs max-w-xl">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-md text-label-md uppercase font-bold tracking-wider">
            Parcerias Institucionais
          </span>
          <h2 id="parcerias-titulo" className="font-headline-lg text-headline-lg text-primary">
            Quem faz esse projeto acontecer
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 w-full max-w-[1100px] items-stretch">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center ${partner.iconClass}`}
              >
                <svg
                  className={`w-9 h-9 ${partner.fillClass}`}
                  viewBox="0 0 24 24"
                >
                  <path d={partner.path} />
                </svg>
              </div>
              <span className="font-title-lg text-title-lg text-primary font-bold tracking-tight text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
