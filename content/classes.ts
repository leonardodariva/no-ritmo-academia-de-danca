export type DanceModality = {
  slug: string;
  name: string;
};

export type ClassFormat = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  href: string;
};

export const danceModalities: DanceModality[] = [
  { slug: "forro", name: "Forró" },
  { slug: "bolero", name: "Bolero" },
  { slug: "samba-de-gafieira", name: "Samba de gafieira" },
  { slug: "salsa", name: "Salsa" },
  { slug: "zouk", name: "Zouk" },
  { slug: "tango", name: "Tango" },
  { slug: "sertanejo", name: "Sertanejo" },
  { slug: "vaneira", name: "Vaneira" },
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
