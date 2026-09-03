"use client";

import { useEffect, useState } from "react";

const testimonials = [
  ["Aprender a dançar mudou a forma como eu percebo meu corpo e encontro outras pessoas.", "Aluno No Ritmo"],
  ["As aulas respeitam o meu tempo e fazem cada encontro parecer uma celebração.", "Aluna No Ritmo"],
  ["Encontrei uma comunidade acolhedora para praticar, aprender e criar novas memórias.", "Aluno No Ritmo"],
];

export default function TestimonialRotator() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 5000); return () => window.clearInterval(timer); }, []);
  const previous = () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((current) => (current + 1) % testimonials.length);
  return <div className="home-testimonial-rotator"><button className="testimonial-arrow testimonial-arrow-prev" type="button" onClick={previous} aria-label="Depoimento anterior">←</button><article key={active}><span>“</span><p>{testimonials[active][0]}</p><small>{testimonials[active][1]}</small></article><button className="testimonial-arrow testimonial-arrow-next" type="button" onClick={next} aria-label="Próximo depoimento">→</button><div className="testimonial-indicators" aria-label="Selecionar depoimento">{testimonials.map((_, index) => <button type="button" className={index === active ? "is-active" : ""} aria-label={`Mostrar depoimento ${index + 1}`} aria-pressed={index === active} onClick={() => setActive(index)} key={index}></button>)}</div></div>;
}
