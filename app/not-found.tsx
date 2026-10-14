import { ConsumerCtaButton } from "@/components/feirabox/ctas";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você procurou não existe ou saiu do ar. Volte ao início do FeiraBox.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-[640px] flex-1 flex-col items-center gap-space-md px-margin-mobile py-space-3xl text-center">
      <span className="rounded-full bg-secondary-fixed px-4 py-1.5 font-label-md text-label-md font-bold text-on-secondary-fixed">
        Erro 404
      </span>
      <h1 className="font-headline-lg text-headline-lg tracking-tight text-primary">
        Essa página saiu da feira.
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        O endereço não existe ou mudou. Que tal voltar ao início e entrar na
        lista de espera do app?
      </p>
      <div className="flex flex-col items-center gap-2 pt-2">
        <ConsumerCtaButton />
        <Link
          href="/feirantes"
          className="inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-label-lg text-label-lg font-bold text-secondary underline-offset-4 hover:underline"
        >
          <span>Conhecer a página do feirante</span>
        </Link>
      </div>
    </main>
  );
}
