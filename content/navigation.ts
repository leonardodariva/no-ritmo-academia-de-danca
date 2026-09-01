export const primaryNavigation = [
  { label: "A No Ritmo", href: "/sobre" },
  { label: "Conhecimento", href: "/conhecimento" },
  { label: "Artigos", href: "/artigos" },
  { label: "Aulas", href: "/aulas" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerNavigation = {
  conhecer: [
    { label: "Sobre a No Ritmo", href: "/sobre" },
    { label: "Professores", href: "/professores" },
    { label: "Autores", href: "/autores" },
    { label: "Projetos", href: "/projetos" },
  ],
  aprender: [
    { label: "Conhecimento", href: "/conhecimento" },
    { label: "Artigos", href: "/artigos" },
    { label: "Dança de salão", href: "/conhecimento/danca-de-salao" },
    { label: "Comunicação", href: "/conhecimento/comunicacao" },
  ],
  participar: [
    { label: "Aulas", href: "/aulas" },
    { label: "Modalidades", href: "/modalidades" },
    { label: "Horários", href: "/horarios" },
    { label: "Eventos", href: "/eventos" },
    { label: "Contato", href: "/contato" },
  ],
} as const;
