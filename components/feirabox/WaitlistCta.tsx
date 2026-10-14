"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { FARMER_CTA } from "./cta-constants";
import { MaterialIcon } from "./MaterialIcon";
import { isValidWhatsapp, maskWhatsapp, normalizeWhatsapp } from "@/lib/waitlist";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Lista de espera — Fase 5: WhatsApp com máscara BR, consentimento LGPD,
 * honeypot anti-spam e estados de carregamento/sucesso/erro.
 */
export function WaitlistCta() {
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [savedNumber, setSavedNumber] = useState("");

  const digits = normalizeWhatsapp(whatsapp);
  const digitsValid = isValidWhatsapp(digits);
  const showDigitsError = whatsapp.length > 0 && !digitsValid;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    if (!digitsValid) {
      setErrorMsg("Digite um WhatsApp válido com DDD + 9 dígitos. Ex.: (67) 99999-9999.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setErrorMsg("Para entrar na lista, aceite o contato pelo WhatsApp (LGPD).");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ whatsapp: digits, consentLgpd: consent, siteUrl: honeypot }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Não foi possível salvar agora. Tente de novo em instantes.");
      }
      setSavedNumber(maskWhatsapp(digits));
      setStatus("success");
      trackEvent("waitlist_submit_success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Falha ao enviar. Tente de novo em instantes.");
      setStatus("error");
      trackEvent("waitlist_submit_error");
    }
  }

  return (
    <section
      className="w-full py-space-3xl px-margin-mobile lg:px-margin-desktop bg-primary-container text-on-primary"
      aria-labelledby="lista-titulo"
      id="avise-me"
    >
      <div className="max-w-[1024px] mx-auto flex flex-col items-center text-center gap-space-lg">
        <div className="flex flex-col items-center gap-space-xs max-w-2xl">
          <span className="px-3 py-1 rounded-full bg-primary text-on-primary-container font-label-md text-label-md uppercase font-bold tracking-wider">
            Seja Notificado em Primeira Mão
          </span>
          <h2
            id="lista-titulo"
            className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-surface tracking-tight"
          >
            O FeiraBox estará disponível em breve no seu celular
          </h2>
          <p className="font-body-lg text-body-lg text-surface/90">
            Cadastre seu WhatsApp para ser avisado com prioridade assim que o aplicativo for aprovado e
            publicado na App Store e Google Play Store.
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
        {status === "success" ? (
          <div className="w-full max-w-md p-5 rounded-2xl bg-surface text-primary flex flex-col gap-2 text-center" role="status">
            <span className="flex justify-center">
              <MaterialIcon name="check_circle" className="text-[32px] text-secondary" />
            </span>
            <p className="font-title-lg text-title-lg font-bold">
              Você está na lista de espera!
            </p>
            <p className="font-body-md text-body-md">
              Você receberá uma mensagem no WhatsApp {savedNumber} quando abrirmos.
            </p>
          </div>
        ) : (
          <form className="w-full max-w-md flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="lista-whatsapp" className="font-label-md text-label-md font-bold text-surface">
                Seu WhatsApp
              </label>
              <input
                id="lista-whatsapp"
                name="whatsapp"
                className="min-h-[44px] w-full px-4 py-3 rounded-2xl bg-surface text-on-surface font-body-lg text-body-lg placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="(67) 99999-9999"
                required
                autoComplete="tel"
                inputMode="numeric"
                aria-invalid={showDigitsError}
                aria-describedby={showDigitsError ? "lista-whatsapp-erro" : undefined}
                type="tel"
                value={whatsapp}
                onChange={(event) => {
                  setWhatsapp(maskWhatsapp(normalizeWhatsapp(event.target.value)));
                  if (status === "error") setStatus("idle");
                }}
              />
              {showDigitsError && (
                <p id="lista-whatsapp-erro" className="text-sm text-secondary-fixed">
                  Use DDD + 9 dígitos. Ex.: (67) 99999-9999.
                </p>
              )}
            </div>
            {/* Honeypot anti-spam: invisível para humanos */}
            <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
              <label>
                Não preencha este campo
                <input
                  type="text"
                  name="site_url"
                  autoComplete="off"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>
            </div>
            <label
              htmlFor="lista-lgpd"
              className="flex cursor-pointer items-start gap-3 rounded-2xl bg-surface/10 border border-surface/20 p-4 text-left"
            >
              <input
                id="lista-lgpd"
                name="consentLgpd"
                type="checkbox"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-[#fca867]"
              />
              <span className="font-body-md text-body-md text-surface/90">
                Autorizo o FeiraBox a me chamar no WhatsApp quando o app lançar. Li a{" "}
                <Link href="/privacidade" className="font-bold text-secondary-fixed underline underline-offset-2">
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>
            {status === "error" && errorMsg && (
              <p role="alert" className="rounded-xl bg-surface px-4 py-3 text-left font-body-md text-body-md font-bold text-error">
                {errorMsg}
              </p>
            )}
            <button
              className="min-h-[44px] px-6 py-3 rounded-2xl bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg shrink-0 shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <MaterialIcon name="progress_activity" className="text-[18px] animate-spin" />
                  <span>Salvando...</span>
                </>
              ) : (
                <>
                  <span>Entrar na lista de espera</span>
                  <MaterialIcon name="send" className="text-[18px]" />
                </>
              )}
            </button>
          </form>
        )}
        <p className="text-surface/80 font-body-md text-body-md max-w-md text-center">
          * Não realizamos vendas ou cobranças por este site. Todas as compras e assinaturas serão ativadas com
          segurança diretamente no aplicativo.
        </p>
        <div className="flex min-h-[44px] flex-wrap items-center justify-center gap-2 text-surface/80 font-label-md text-label-md pt-2">
          <span>É feirante ou pequeno produtor de MS?</span>
          <Link className="text-secondary-fixed hover:underline font-bold inline-flex min-h-[44px] items-center gap-1 px-1" href={FARMER_CTA.href}>
            <span>{FARMER_CTA.label}</span>
            <MaterialIcon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
