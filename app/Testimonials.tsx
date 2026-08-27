"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  { impact: "Um novo jeito de viver a música.", quote: "Este espaço receberá um depoimento real e autorizado sobre a experiência de aprender a dançar na No Ritmo.", name: "Nome do aluno" },
  { impact: "Confiança construída passo a passo.", quote: "Aqui entra o relato de quem começou do zero, encontrou acolhimento e percebeu sua evolução ao longo das aulas.", name: "Nome do aluno" },
  { impact: "Dança, encontros e boas histórias.", quote: "Este card será substituído por uma história verdadeira de alguém que faz parte da comunidade No Ritmo.", name: "Nome do aluno" },
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
