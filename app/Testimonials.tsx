"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  { impact: "Um novo jeito de viver a música.", quote: "Comecei sem experiência e encontrei uma turma que respeitou meu tempo. Hoje dançar faz parte da minha semana.", name: "Marina Alves • conteúdo demonstrativo" },
  { impact: "Confiança construída passo a passo.", quote: "As aulas particulares ajudaram a organizar meus objetivos e fizeram cada evolução parecer possível.", name: "Rafael e Camila • conteúdo demonstrativo" },
  { impact: "Dança, encontros e boas histórias.", quote: "Mais do que aprender movimentos, encontrei pessoas e uma forma leve de me conectar com a música.", name: "Juliana Martins • conteúdo demonstrativo" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const go = (direction: number) => setCurrent((value) => (value + direction + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = window.setInterval(() => go(1), 9000);
    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[current];
  return (
    <section className="testimonials section" id="depoimentos">
      <div className="section-label"><span>08</span> Histórias de quem dança</div>
      <div className="testimonial-layout">
        <div><h2>Cada pessoa chega<br />com um motivo.</h2><p>Relatos de quem encontrou na dança uma nova forma de se expressar, se conectar e ganhar confiança.</p></div>
        <div className="testimonial-carousel" aria-live="polite">
          <button onClick={() => go(-1)} aria-label="Depoimento anterior"><FaChevronLeft /></button>
          <article className="testimonial-placeholder">
            <strong>{item.impact}</strong><span aria-hidden="true">“</span><p>{item.quote}</p><small>{item.name}</small>
          </article>
          <button onClick={() => go(1)} aria-label="Próximo depoimento"><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
