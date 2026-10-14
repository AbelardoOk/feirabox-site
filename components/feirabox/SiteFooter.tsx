import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "./images";
import { MaterialIcon } from "./MaterialIcon";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-2xl pb-space-xl shadow-[0_1px_8px_rgba(107,112,92,0.04)]">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop pb-space-2xl">
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <div className="flex items-center gap-3">
              <Image
                src={IMAGES.logoFooter}
                alt="FeiraBox — Mercado e Ofício: agricultura familiar de Mato Grosso do Sul"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                loading="lazy"
              />
              <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
                App em Breve
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
              Conectando a riqueza da terra sul-mato-grossense à mesa da
              comunidade acadêmica e urbana. Projeto de extensão em parceria
              com a UFMS.
            </p>
            <div className="mt-space-xs flex items-center gap-2 p-3 rounded-xl bg-surface-container text-secondary font-label-sm text-label-sm border border-outline-variant/30">
              <MaterialIcon name="verified" className="text-[20px] shrink-0" />
              <span>
                Projeto de Inovação &amp; Extensão • Mercado Escola UFMS &amp;
                Feirantes do MS
              </span>
            </div>
            {/* Microlinks movidos do hero (Fase 1): confiança, sem ação */}
            <ul aria-label="Compromissos FeiraBox" className="flex flex-col gap-1.5 pt-1 font-body-md text-body-md text-on-surface-variant">
              <li className="inline-flex items-center gap-1.5">
                <MaterialIcon name="verified" className="text-[18px] text-primary" />
                <span>Iniciativa com o Mercado Escola UFMS</span>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <MaterialIcon name="eco" className="text-[18px] text-primary" />
                <span>Agricultura familiar de Campo Grande</span>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <MaterialIcon name="touch_app" className="text-[18px] text-primary" />
                <span>Gestão e pedidos 100% no app</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-2">
            <span className="font-title-lg text-title-lg text-primary mb-1 font-bold">
              O Aplicativo
            </span>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#modelos-caixas"
            >
              Modelos de Caixas
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#como-funciona"
            >
              Como Funcionará
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#avise-me"
            >
              Entrar na lista de espera
            </Link>
            <span className="font-body-md text-body-md text-on-surface-variant italic mt-2">
              Em breve na App Store e Play Store
            </span>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-2">
            <span className="font-title-lg text-title-lg text-primary mb-1 font-bold">
              Feirantes &amp; Banqueiros
            </span>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/feirantes"
            >
              Cadastrar minha banca
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#depoimentos"
            >
              Depoimentos de feirantes
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#piloto-ufms"
            >
              Apoio Agroecológico
            </Link>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="font-title-lg text-title-lg text-primary mb-1 font-bold">
              Institucional &amp; Impacto
            </span>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#piloto-ufms"
            >
              Mercado Escola UFMS
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/#piloto-ufms"
            >
              ODS 2, 8 e 12
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/privacidade"
            >
              Política de Privacidade
            </Link>
            <Link
              className="inline-flex min-h-[44px] items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-0.5"
              href="/termos"
            >
              Termos de Uso
            </Link>
            <div className="mt-3 pt-2 border-t border-outline-variant/30 text-on-surface-variant font-body-md text-body-md flex flex-col gap-0.5">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                Contato Oficial • Campo Grande / MS
              </span>
              <span className="font-body-md text-body-md">Cidade Universitária UFMS</span>
              <span className="font-body-md text-body-md text-primary font-medium">
                contato@feirabox.ufms.br
              </span>
              {/* TODO: dado real — links das redes sociais (não inventar URLs); publicar no lançamento */}
              <span className="pt-1 font-body-md text-body-md">
                Redes sociais: divulgadas no lançamento.
              </span>
            </div>
          </div>
        </div>
        <div className="pt-space-md border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left leading-relaxed max-w-2xl">
            © 2025 FeiraBox • Mercado &amp; Ofício. Todos os direitos
            reservados. Projeto de Empreendedorismo e Inovação da UFMS. Assinaturas exclusivas no
            aplicativo móvel.
          </p>
        </div>
      </div>
    </footer>
  );
}
