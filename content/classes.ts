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
  { slug: "forro", name: "Forró", summary: "Dança brasileira a dois que valoriza conexão, condução e musicalidade." },
  { slug: "bachata", name: "Bachata", summary: "Dança dominicana marcada pela proximidade, interpretação musical e movimentos corporais." },
  { slug: "bolero", name: "Bolero", summary: "Dança romântica e cadenciada, conhecida pela elegância, condução e deslocamento." },
  { slug: "samba-de-gafieira", name: "Samba de gafieira", summary: "Dança brasileira a dois que combina elegância, malandragem, musicalidade e condução." },
  { slug: "salsa", name: "Salsa", summary: "Energia, coordenação e interpretação musical." },
  { slug: "zouk", name: "Zouk", summary: "Fluidez, conexão e movimentos corporais em uma dança brasileira de projeção internacional." },
  { slug: "tango", name: "Tango", summary: "Conexão, caminhada, improvisação e interpretação musical no abraço." },
  { slug: "sertanejo", name: "Sertanejo", summary: "Dança social brasileira marcada por condução, giros, deslocamentos e interação." },
  { slug: "vaneira", name: "Vaneira", summary: "Tradição dos bailes do Sul, com condução, musicalidade e movimentação característica." },
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
    href: "/coreografias/eventos",
  },
];
