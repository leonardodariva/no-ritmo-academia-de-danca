export const primaryNavigation = [
  {
    label: "Página inicial",
    href: "/",
    children: [
      { label: "Início", href: "/#conteudo" },
      { label: "Sobre a No Ritmo", href: "/#sobre" },
      { label: "Nossa forma de ensinar", href: "/#forma-ensinar" },
      { label: "Produtos No Ritmo", href: "/#produtos" },
      { label: "Estilos", href: "/#estilos" },
      { label: "Biblioteca de conhecimento", href: "/#conhecimento" },
      { label: "Artigos recentes", href: "/#artigos" },
      { label: "Professores e equipe", href: "/#equipe" },
      { label: "Depoimentos", href: "/#depoimentos" },
      { label: "Eventos e projetos", href: "/#eventos" },
      { label: "Galeria", href: "/#galeria" },
      { label: "Perguntas frequentes", href: "/#faq" },
      { label: "Informações práticas", href: "/#pratico" },
    ],
  },
  {
    label: "A No Ritmo",
    href: "/sobre",
    children: [
      { label: "Professores e equipe", href: "/professores" },
      { label: "Autores e colaboradores", href: "/autores" },
      { label: "Projetos e comunidade", href: "/projetos" },
      { label: "Galeria", href: "/galeria" },
    ],
  },
  {
    label: "Conhecimento",
    href: "/conhecimento",
    children: [
      { label: "Biblioteca completa", href: "/conhecimento" },
      { label: "Dança de salão", href: "/conhecimento/danca-de-salao" },
      { label: "Comunicação na dança", href: "/conhecimento/comunicacao" },
      { label: "Corpo e movimento", href: "/conhecimento/corpo-e-movimento" },
      { label: "Percepção", href: "/conhecimento/percepcao" },
      { label: "Musicalidade", href: "/conhecimento/musicalidade" },
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
    label: "Aulas",
    href: "/aulas",
    children: [
      { label: "Produtos e formatos", href: "/aulas" },
      { label: "Modalidades", href: "/modalidades" },
      { label: "Turmas e horários", href: "/horarios" },
      { label: "Aulas particulares", href: "/aulas-particulares" },
      { label: "Coreografias para eventos", href: "/coreografias" },
      { label: "Perguntas frequentes", href: "/faq" },
    ],
  },
  {
    label: "Eventos",
    href: "/eventos",
    children: [
      { label: "Agenda No Ritmo", href: "/eventos" },
      { label: "Projetos e comunidade", href: "/projetos" },
      { label: "Galeria", href: "/galeria" },
    ],
  },
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
