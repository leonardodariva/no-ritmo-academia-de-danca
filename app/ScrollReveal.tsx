"use client";

import { useLayoutEffect } from "react";

export default function ScrollReveal() {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const selectors = [
      ".section > *",
      ".section > .section-label",
      ".section > .section-heading",
      ".section > [class$='-heading']",
      ".section > [class$='-grid']",
      ".section > [class$='-layout']",
      ".section > .rhythm-list",
      ".section > .values",
      ".section > .button",
      ".modality-card",
      ".rhythm-row",
      ".first-class-steps article",
      ".private-lessons-features article",
      ".team-grid article",
      ".learning-grid article",
      ".faq-list details",
      ".gallery-item",
      ".contact-list > *",
      ".footer-main > *",
    ];

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    document.documentElement.classList.add("reveal-ready");

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
