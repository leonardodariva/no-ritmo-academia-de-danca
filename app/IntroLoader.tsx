"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const hideTimer = window.setTimeout(() => setHidden(true), 0);
      return () => window.clearTimeout(hideTimer);
    }

    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2800);
    const hideTimer = window.setTimeout(() => {
      setHidden(true);
      document.body.classList.remove("intro-active");
    }, 3900);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.classList.remove("intro-active");
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`intro-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label="Carregando o site da No Ritmo"
    >
      <div className="intro-glow" aria-hidden="true" />
      <p><span>Boas-vindas à</span></p>
      <div className="intro-title" aria-hidden="true"><span>No Ritmo</span><span>Academia de Dança</span></div>
      <div className="intro-line"><span /></div>
      <small>Apucarana • Paraná</small>
    </div>
  );
}
