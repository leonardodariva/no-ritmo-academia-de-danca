import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";

export const metadata: Metadata = { title: "CFP — Curso de Formação de Professores | No Ritmo", description: "Formação de professores para ensinar dança de salão com técnica, consciência e segurança.", alternates: { canonical: "/formacao/cfp" } };

export default function CfpPage() { return <SubpageShell compactHero wideCopy kicker="Curso de formação" title="CFP — Formação de Professores" intro="Um caminho de estudo e prática para quem deseja ensinar dança de salão na No Ritmo." sections={[
  { number: "01", title: "O que é o CFP", paragraphs: ["O Curso de Formação de Professores prepara pessoas para conduzir experiências de aprendizagem em dança de salão.", "A formação reúne repertório técnico, musicalidade, comunicação, leitura de sala, planejamento e reflexão sobre como cada pessoa aprende."] },
  { number: "02", title: "Uma formação ligada à prática", text: "Mais do que demonstrar passos, o CFP desenvolve a capacidade de observar, explicar, adaptar e acompanhar o desenvolvimento dos alunos com segurança e autonomia." },
  { number: "03", title: "Como participar", text: "Entre em contato com a equipe para conhecer os critérios, etapas, calendário e próximas oportunidades de formação." },
]} />; }
