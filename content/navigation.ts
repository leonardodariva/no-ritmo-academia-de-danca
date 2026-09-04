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
      { label: "Professores e equipe", href: "/professores" },
      { label: "Autores e colaboradores", href: "/autores" },
    ],
  },
  {
    label: "Artigos",
    href: "/artigos",
    children: [
      { label: "Todos os artigos", href: "/artigos" },
      { label: "Primeiros passos", href: "/artigos/categoria/primeiros-passos" },
      { label: "Comunicação", href: "/artigos/categoria/comunicacao" },
      { label: "Como começar a dançar", href: "/artigos/comecar-a-dancar" },
      { label: "Dança de salão é comunicação", href: "/artigos/danca-e-comunicacao" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Todos os serviços", href: "/servicos" },
      { label: "Aulas em grupo", href: "/aulas" },
      { label: "Modalidades", href: "/modalidades" },
      { label: "Turmas e horários", href: "/horarios" },
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
