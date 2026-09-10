export const primaryNavigation = [
  {
    label: "Página inicial",
    href: "/#conteudo",
  },
  {
    label: "A No Ritmo",
    href: "/sobre",
    children: [
      { label: "Sobre a No Ritmo", href: "/sobre" },
      { label: "Missão, Visão e Valores", href: "/missao-visao-valores" },
      { label: "CFP — Formação de Professores", href: "/formacao/cfp" },
      { label: "CFA — Formação de Assistentes", href: "/formacao/cfa" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Todos os serviços", href: "/servicos" },
      { label: "Aulas em grupo", href: "/aulas" },
      { label: "Modalidades", href: "/modalidades" },
      { label: "Aulas particulares", href: "/aulas-particulares" },
      { label: "Coreografias para casamentos", href: "/coreografias/casamentos" },
      { label: "Coreografias para debutantes", href: "/coreografias/debutantes" },
      { label: "Coreografias para eventos", href: "/coreografias/eventos" },
      { label: "Coreografias para gincanas", href: "/coreografias/gincanas" },
      { label: "Perguntas frequentes", href: "/faq" },
      { label: "Área do aluno", href: "/area-do-aluno" },
    ],
  },
  { label: "Projetos e comunidade", href: "/projetos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerNavigation = {
  conhecer: primaryNavigation[1].children,
  aprender: [],
  participar: [
    { label: "Aulas", href: "/aulas" },
    { label: "Modalidades", href: "/modalidades" },
    { label: "Eventos e projetos", href: "/projetos" },
    { label: "Contato", href: "/contato" },
  ],
} as const;
