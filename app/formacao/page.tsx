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
    kicker="Formação No Ritmo"
    title="Quem ensina também continua aprendendo."
    intro="O CFP e o CFA organizam caminhos de formação para pessoas que desejam participar do ensino da dança com responsabilidade, prática e atenção às relações que acontecem em sala."
    sections={[
      {
        number: "01",
        title: "CFP — Curso de Formação de Professores",
        paragraphs: [
          "O CFP é voltado a quem deseja desenvolver as competências necessárias para ensinar dança de salão e conduzir experiências de aprendizagem.",
          "A formação reúne repertório técnico, organização do movimento, musicalidade, comunicação, leitura de sala, planejamento e reflexão sobre como cada pessoa aprende.",
          "Mais do que preparar alguém para demonstrar passos, o CFP busca formar professores capazes de observar, explicar, adaptar e acompanhar o desenvolvimento dos alunos com segurança e autonomia.",
        ],
        id: "cfp",
      },
      {
        number: "02",
        title: "CFA — Curso de Formação de Assistentes",
        paragraphs: [
          "O CFA é um caminho de iniciação para quem deseja apoiar aulas, acompanhar alunos e começar a desenvolver experiência prática em sala.",
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
