"use client";

import { useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

export function WaitlistCta() {
  const [contact, setContact] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (contact.trim().length === 0) return;
    setDone(true);
  }

  return (
    <section
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-primary-container text-on-primary"
      aria-labelledby="lista-titulo" id="avise-me"
    >
      <div className="max-w-[1024px] mx-auto flex flex-col items-center text-center gap-space-lg">
        <div className="flex flex-col items-center gap-space-xs max-w-2xl">
          <span className="px-3 py-1 rounded-full bg-primary text-on-primary-container font-label-md text-label-md uppercase font-bold tracking-wider">
            Seja Notificado em Primeira Mão
          </span>
          <h2 id="lista-titulo" className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-surface tracking-tight">
            O FeiraBox estará disponível em breve no seu celular
          </h2>
          <p className="font-body-lg text-body-lg text-surface/90">
            Cadastre seu e-mail ou WhatsApp para ser avisado com prioridade
            assim que o aplicativo for aprovado e publicado na App Store e
            Google Play Store.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="px-4 py-2 rounded-xl bg-surface/10 border border-surface/20 text-surface text-label-sm flex items-center gap-2">
            <MaterialIcon name="apple" className="text-[18px]" />
            <span>App Store (iOS) • Em Breve</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-surface/10 border border-surface/20 text-surface text-label-sm flex items-center gap-2">
            <MaterialIcon name="android" className="text-[18px]" />
            <span>Google Play (Android) • Em Breve</span>
          </div>
        </div>
        {done ? (
          <div className="w-full max-w-md p-4 rounded-2xl bg-surface text-primary font-body-md text-body-md flex items-center gap-3 text-left">
            <MaterialIcon
              name="mark_email_read"
              className="text-[24px] text-secondary shrink-0"
            />
            <span>
              Perfeito! Seu contato foi registrado na lista de espera. Você
              receberá um aviso exclusivo assim que o aplicativo FeiraBox for
              publicado na App Store e Google Play!
            </span>
          </div>
        ) : (
          <form
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            <input
              className="h-touch-target-min flex-1 px-4 rounded-2xl bg-surface text-on-surface font-body-lg text-body-lg placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Seu melhor e-mail ou WhatsApp"
              required
              type="text"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
            <button
              className="h-touch-target-min px-6 rounded-2xl bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg shrink-0 shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Quero ser Avisado</span>
              <MaterialIcon name="send" className="text-[18px]" />
            </button>
          </form>
        )}
        <p className="text-surface/70 text-xs max-w-md text-center">
          * Não realizamos vendas ou cobranças por este site. Todas as compras
          e assinaturas serão ativadas com segurança diretamente no aplicativo.
        </p>
        <div className="flex items-center gap-2 text-surface/80 font-label-md text-label-md pt-2">
          <span>É feirante ou pequeno produtor de MS?</span>
          <a
            className="text-secondary-fixed hover:underline font-bold flex items-center gap-1"
            href="#feirantes"
          >
            <span>Participe do piloto com a equipe UFMS</span>
            <MaterialIcon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
