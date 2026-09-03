export type DanceModality = {
  slug: string;
  name: string;
  summary: string;
};

export type ClassFormat = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  href: string;
};

export const danceModalities: DanceModality[] = [
  { slug: "forro", name: "Forró", summary: "Conexão, ritmo e repertório da dança brasileira." },
  { slug: "bolero", name: "Bolero", summary: "Deslocamento, elegância e diálogo a dois." },
  { slug: "samba-de-gafieira", name: "Samba de gafieira", summary: "Balanço, musicalidade e presença na dança de salão." },
  { slug: "salsa", name: "Salsa", summary: "Energia, coordenação e interpretação musical." },
  { slug: "zouk", name: "Zouk", summary: "Fluidez, conexão e possibilidades de movimento." },
  { slug: "tango", name: "Tango", summary: "Caminhada, escuta e comunicação no abraço." },
  { slug: "sertanejo", name: "Sertanejo", summary: "Ritmo popular, parceria e diversão na pista." },
  { slug: "vaneira", name: "Vaneira", summary: "Dinâmica, tradição e movimentos compartilhados." },
];

export const classFormats: ClassFormat[] = [
  {
    slug: "aulas-em-grupo",
    name: "Aulas em grupo",
    summary: "Aprender e praticar junto.",
    detail: "Prática guiada e convivência em turmas organizadas conforme o momento de aprendizagem.",
    href: "/horarios",
  },
  {
    slug: "aulas-particulares",
    name: "Aulas particulares",
    summary: "Atenção exclusiva para seus objetivos.",
    detail: "Atendimento para uma pessoa ou casal, com conteúdo e horários combinados com a equipe.",
    href: "/aulas-particulares",
  },
  {
    slug: "coreografias-para-eventos",
    name: "Coreografias para eventos",
    summary: "Uma dança criada para o seu momento.",
    detail: "Projetos para casamentos, bodas, debutantes e outras celebrações, definidos conforme ocasião e prazo.",
    href: "/coreografias",
  },
];
