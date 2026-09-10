import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";

export const metadata: Metadata = {
  title: "Formação de professores e assistentes | No Ritmo",
  description: "Conheça o CFP e o CFA, programas de formação da No Ritmo para quem deseja ensinar, apoiar aulas e desenvolver experiência em dança.",
  alternates: { canonical: "/formacao" },
};

export default function FormacaoPage() {
  return <SubpageShell
    wideCopy
    compactHero
    kicker="Cursos No Ritmo"
    title="Formação para ensinar e apoiar a dança."
    intro="A Academia No Ritmo oferece dois caminhos de formação: o CFP prepara professores para conduzir aulas; o CFA prepara assistentes para apoiar a equipe e os alunos em sala."
    sections={[
      {
        number: "01",
        title: "CFP — Curso de Formação de Professores",
        paragraphs: [
          "O CFP — Curso de Formação de Professores — é voltado a quem deseja se preparar para ensinar dança de salão e conduzir experiências de aprendizagem na Academia No Ritmo.",
          "A formação reúne repertório técnico, organização do movimento, musicalidade, comunicação, leitura de sala, planejamento e reflexão sobre como cada pessoa aprende.",
          "Mais do que preparar alguém para demonstrar passos, o CFP busca formar professores capazes de observar, explicar, adaptar e acompanhar o desenvolvimento dos alunos com segurança e autonomia.",
        ],
        id: "cfp",
      },
      {
        number: "02",
        title: "CFA — Curso de Formação de Assistentes",
        paragraphs: [
          "O CFA — Curso de Formação de Assistentes — é o caminho para quem deseja apoiar aulas, acompanhar alunos e desenvolver experiência prática junto à equipe em sala.",
          "A pessoa assistente aprende a observar a turma, acolher dúvidas, colaborar com os professores e contribuir para um ambiente de prática respeitoso e organizado.",
          "A atuação acontece com orientação da equipe, respeitando o momento de aprendizagem e as responsabilidades definidas para cada etapa da formação.",
        ],
        id: "cfa",
      },
      {
        number: "03",
        title: "Uma formação ligada à prática",
        text: "Os programas fazem parte da cultura de aprendizagem contínua da No Ritmo. Conteúdos, critérios de participação, calendário e etapas serão apresentados pela equipe de acordo com cada turma e edição.",
      },
      {
        number: "04",
        title: "Quer saber como participar?",
        text: "Entre em contato com a No Ritmo e conte se você procura o CFP, o CFA ou quer entender qual caminho combina com seu momento.",
      },
    ]}
    ctaIntro="Entre em contato"
    ctaTitle="Converse com a equipe sobre os próximos passos da sua formação."
  />;
}
