import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";

export const metadata: Metadata = { title: "CFA — Curso de Formação de Assistentes | No Ritmo", description: "Formação de assistentes para apoiar professores, acompanhar alunos e atuar em sala.", alternates: { canonical: "/formacao/cfa" } };

export default function CfaPage() { return <SubpageShell compactHero wideCopy kicker="Curso de formação" title="CFA — Formação de Assistentes" intro="Uma formação prática para quem deseja apoiar aulas, acompanhar alunos e atuar junto à equipe em sala." sections={[
  { number: "01", title: "O que é o CFA", paragraphs: ["O Curso de Formação de Assistentes prepara pessoas para colaborar com os professores e contribuir para uma experiência de aula acolhedora e organizada.", "A pessoa assistente aprende a observar a turma, acolher dúvidas e apoiar os alunos durante a prática."] },
  { number: "02", title: "Experiência em sala", text: "A atuação acontece com orientação da equipe, respeitando o momento de aprendizagem dos alunos e as responsabilidades definidas para cada etapa da formação." },
  { number: "03", title: "Como participar", text: "Entre em contato com a equipe para conhecer os critérios, etapas, calendário e próximas oportunidades de formação." },
]} />; }
