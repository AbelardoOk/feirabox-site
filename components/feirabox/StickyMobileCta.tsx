"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSUMER_CTA } from "./ctas";
import { MaterialIcon } from "./MaterialIcon";

/**
 * CTA fixo mobile — aparece só em telas pequenas e some quando
 * o formulário final (#avise-me) está visível.
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("avise-me");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-20% 0px 0px 0px", threshold: 0.1 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <Link
        href={CONSUMER_CTA.href}
        aria-label={`${CONSUMER_CTA.label} — ir para o formulário`}
        className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-primary-container px-6 py-3 font-label-lg text-label-lg text-on-primary shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
      >
        <MaterialIcon name="mark_email_read" className="text-[20px]" />
        <span>{CONSUMER_CTA.label}</span>
      </Link>
    </div>
  );
}
