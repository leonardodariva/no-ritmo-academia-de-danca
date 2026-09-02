"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { title: "Conhecer", description: "História, pessoas e visão da No Ritmo.", image: "hero-carousel-media-1", href: "/sobre" },
  { title: "Aprender", description: "Conceitos e publicações para aprofundar a dança.", image: "hero-carousel-media-2", href: "/conhecimento" },
  { title: "Participar", description: "Aulas, estilos e experiências para cada objetivo.", image: "hero-carousel-media-3", href: "/aulas" },
  { title: "Conviver", description: "Encontros, eventos e projetos em comunidade.", image: "hero-carousel-media-4", href: "/eventos" },
] as const;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % slides.length);

  return <div className="hero-carousel" aria-roledescription="carousel" aria-label="Caminhos principais da No Ritmo">
    <Link className="hero-carousel-card" href={activeSlide.href} aria-label={`${activeSlide.title}: ${activeSlide.description}`}>
      <div className={`hero-carousel-media ${activeSlide.image}`} aria-hidden="true" />
      <div className="hero-carousel-shade" aria-hidden="true" />
      <div className="hero-carousel-caption"><span>0{activeIndex + 1} / 04</span><strong>{activeSlide.title}</strong><small>{activeSlide.description}</small></div>
    </Link>
    <div className="hero-carousel-controls" aria-label="Controles do carrossel">
      <button type="button" onClick={showPrevious} aria-label="Item anterior"><FaChevronLeft aria-hidden="true" /></button>
      <div className="hero-carousel-dots">{slides.map((slide, index) => <button key={slide.title} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Mostrar ${slide.title}`} aria-current={index === activeIndex ? "true" : undefined} />)}</div>
      <button type="button" onClick={showNext} aria-label="Próximo item"><FaChevronRight aria-hidden="true" /></button>
    </div>
  </div>;
}
