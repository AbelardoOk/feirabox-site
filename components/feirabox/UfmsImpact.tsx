import { MaterialIcon } from "./MaterialIcon";

const ODS = [
  {
    code: "ODS 2",
    codeClass: "text-secondary",
    title: "Fome Zero",
    description: "Fortalecimento da horta ecológica local.",
  },
  {
    code: "ODS 8",
    codeClass: "text-tertiary",
    title: "Trabalho Decente",
    description: "Remuneração justa e previsibilidade.",
  },
  {
    code: "ODS 12",
    codeClass: "text-primary",
    title: "Consumo Responsável",
    description: "Redução de perdas e desperdício.",
  },
];

export function UfmsImpact() {
  return (
    <section
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-surface"
      aria-labelledby="piloto-titulo" id="piloto-ufms"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold self-start">
                <span>Universidade Federal de Mato Grosso do Sul</span>
              </div>
              <h2 id="piloto-titulo" className="font-headline-lg text-headline-lg text-primary">
                Inovação social e extensão comunitária no Mercado Escola
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                O FeiraBox é um projeto desenvolvido em parceria
                acadêmica com a UFMS para fomentar a
                segurança alimentar, o comércio justo e o desenvolvimento
                sustentável.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ODS.map((ods) => (
                <div
                  key={ods.code}
                  className="p-3 rounded-2xl bg-surface-container flex flex-col gap-1"
                >
                  <span
                    className={`font-label-lg text-label-lg font-bold ${ods.codeClass}`}
                  >
                    {ods.code}
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    {ods.title}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {ods.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="p-6 rounded-3xl bg-surface-container flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
                  <MaterialIcon name="school" className="text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-lg text-title-lg text-primary">
                    Mercado Escola UFMS
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    Cidade Universitária • Campo Grande, MS
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ponto de integração entre a comunidade acadêmica e a agricultura
                familiar. Quando o aplicativo estiver no ar, os usuários poderão
                optar pela retirada física semanal no campus com condições
                especiais.
              </p>
              <div className="p-4 rounded-2xl bg-surface-container-lowest flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MaterialIcon
                    name="pin_drop"
                    className="text-secondary text-[24px]"
                  />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Ponto de Retirada Campus UFMS
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Previsão no app às quintas-feiras
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                  Piloto Oficial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
