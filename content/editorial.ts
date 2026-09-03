import type { Article, Author, KnowledgePage } from "./types";

export const editorialNotice =
  "Conteúdo inicial em validação editorial. Informações institucionais, autoria e revisão serão confirmadas pela equipe da No Ritmo antes da publicação definitiva.";

export const noRitmoAuthor: Author = {
  slug: "equipe-no-ritmo",
  name: "Equipe No Ritmo",
  role: "Autoria institucional em validação",
  bio: "Perfil provisório para conteúdos construídos coletivamente. Os responsáveis serão identificados antes da publicação oficial.",
};

export const knowledgePages: KnowledgePage[] = [
  {
    slug: "danca-de-salao",
    title: "Dança de salão",
    summary: "Uma introdução às práticas dançadas em parceria e à experiência social construída entre música, movimento e presença.",
    definition: "Dança de salão reúne diferentes práticas em que pessoas compartilham movimento, música e espaço. Cada ritmo tem linguagem e contexto próprios.",
    application: "Na prática, dançar em parceria envolve atenção ao ambiente, adaptação, repertório de movimentos e decisões construídas durante a dança.",
    perspective: "A No Ritmo organiza o ensino para acolher diferentes experiências e ritmos de aprendizagem. A formulação metodológica definitiva será registrada com os professores.",
    relatedConcepts: ["comunicacao", "musicalidade", "corpo-e-movimento"],
    relatedArticles: ["comecar-a-dancar", "danca-e-comunicacao"],
    author: noRitmoAuthor,
    status: "draft",
  },
  {
    slug: "comunicacao",
    title: "Comunicação na dança",
    summary: "Como intenção, percepção e resposta participam da construção de uma dança compartilhada.",
    definition: "Na dança em parceria, comunicação é a troca contínua de informações por movimento, contato, direção, tempo, pausa e adaptação.",
    application: "Condução e resposta não formam uma ordem unilateral. A dança se transforma conforme as duas pessoas percebem e respondem ao que acontece.",
    perspective: "Nas aulas, esse tema pode ser trabalhado por meio de atenção, clareza e respeito. Exemplos próprios da No Ritmo ainda serão validados pela equipe.",
    relatedConcepts: ["danca-de-salao", "percepcao", "corpo-e-movimento"],
    relatedArticles: ["danca-e-comunicacao"],
    author: noRitmoAuthor,
    status: "draft",
  },
  {
    slug: "corpo-e-movimento",
    title: "Corpo e movimento",
    summary: "Uma referência sobre presença, organização corporal e experimentação no aprendizado da dança.",
    definition: "Movimento é uma ação do corpo situada no espaço e no tempo. Na dança, ele se relaciona com intenção, música, repertório e outras pessoas.",
    application: "Experimentar apoios, direções, transferências de peso e diferentes qualidades de movimento ajuda a construir possibilidades, não um único corpo ideal.",
    perspective: "A No Ritmo busca respeitar processos individuais. Os princípios específicos usados em aula serão documentados após conversa com a equipe.",
    relatedConcepts: ["percepcao", "danca-de-salao", "musicalidade"],
    relatedArticles: ["comecar-a-dancar"],
    author: noRitmoAuthor,
    status: "draft",
  },
  {
    slug: "percepcao",
    title: "Percepção",
    summary: "Observar, escutar e sentir como partes do processo de aprender e dançar.",
    definition: "Percepção é a maneira como reconhecemos informações do corpo, do ambiente, da música e das pessoas com quem interagimos.",
    application: "Na dança, atenção visual, auditiva e corporal pode ajudar a reconhecer ritmo, direção, distância, apoio e mudanças durante o movimento.",
    perspective: "A aplicação pedagógica desse conceito será descrita como experiência de ensino, sem transformar observações da prática em afirmações científicas.",
    relatedConcepts: ["corpo-e-movimento", "comunicacao", "musicalidade"],
    relatedArticles: ["danca-e-comunicacao"],
    author: noRitmoAuthor,
    status: "draft",
  },
  {
    slug: "musicalidade",
    title: "Musicalidade",
    summary: "Escuta, tempo e interpretação na relação entre música e movimento.",
    definition: "Musicalidade, no contexto da dança, envolve perceber elementos da música e criar relações possíveis entre esses elementos e o movimento.",
    application: "Pulso, pausa, intensidade, frase e caráter podem orientar escolhas. A interpretação varia conforme o ritmo, o contexto e as pessoas que dançam.",
    perspective: "A forma como a No Ritmo desenvolve musicalidade será registrada com exemplos reais de aula depois da validação dos professores.",
    relatedConcepts: ["danca-de-salao", "percepcao", "corpo-e-movimento"],
    relatedArticles: [],
    author: noRitmoAuthor,
    status: "draft",
  },
];

export const articles: Article[] = [
  {
    slug: "comecar-a-dancar",
    title: "Como começar a dançar depois de adulto",
    summary: "Um primeiro passo pode ser simples quando existe acolhimento, orientação e espaço para aprender no próprio ritmo.",
    body: [
      "Não existe uma idade única para começar a dançar. Pessoas chegam à dança por curiosidade, convivência, interesse por uma música ou vontade de aprender algo novo.",
      "Antes de escolher uma turma, vale pensar no tipo de experiência que você procura. Aulas em grupo favorecem a convivência e a troca; aulas particulares permitem combinar objetivos e disponibilidade de maneira mais individualizada.",
      "Começar não exige dominar passos antecipadamente. Uma conversa com a equipe ajuda a compreender como funcionam as aulas, quais formatos estão disponíveis e qual caminho combina melhor com o seu momento.",
    ],
    category: "Primeiros passos",
    tags: ["iniciantes", "aprendizagem", "aulas"],
    author: noRitmoAuthor,
    readingTime: 3,
    relatedArticles: ["danca-e-comunicacao"],
    relatedKnowledge: ["danca-de-salao", "corpo-e-movimento"],
    status: "draft",
    seoTitle: "Como começar a dançar depois de adulto | No Ritmo",
    seoDescription: "Orientações iniciais para conhecer formatos de aula e começar a dançar com tranquilidade.",
  },
  {
    slug: "danca-e-comunicacao",
    title: "Dança de salão é comunicação",
    summary: "Condução, resposta, atenção e respeito participam de uma conversa construída em movimento.",
    body: [
      "Dançar a dois envolve troca. Um movimento apresenta uma possibilidade, a outra pessoa percebe e responde, e essa resposta modifica o que acontece em seguida.",
      "Essa comunicação não depende apenas de sequências decoradas. Ela também envolve presença, adaptação, tempo e cuidado com a experiência compartilhada.",
      "Em aula, exercícios podem tornar essas relações mais perceptíveis. A maneira específica como a No Ritmo trabalha o tema será documentada com os professores antes da publicação oficial.",
    ],
    category: "Comunicação",
    tags: ["comunicação", "condução", "dança de salão"],
    author: noRitmoAuthor,
    readingTime: 3,
    relatedArticles: ["comecar-a-dancar"],
    relatedKnowledge: ["comunicacao", "danca-de-salao", "percepcao"],
    status: "draft",
    seoTitle: "Comunicação na dança de salão | No Ritmo",
    seoDescription: "Uma introdução à condução, resposta e atenção como comunicação na dança de salão.",
  },
  {
    slug: "danca-e-presenca",
    title: "Dança e presença: um convite à escuta",
    summary: "Perceber o próprio corpo e o espaço compartilhado pode transformar a experiência de aprender a dançar.",
    body: [
      "Presença é prestar atenção ao que acontece no corpo, na música e na relação com as outras pessoas.",
      "Na dança, essa escuta ajuda a reconhecer apoios, pausas e possibilidades de movimento sem pressa.",
    ],
    category: "Prática",
    tags: ["presença", "aprendizagem", "movimento"],
    author: noRitmoAuthor,
    readingTime: 3,
    relatedArticles: ["comecar-a-dancar", "danca-e-comunicacao"],
    relatedKnowledge: ["corpo-e-movimento", "percepcao"],
    status: "draft",
    seoTitle: "Dança e presença | No Ritmo",
    seoDescription: "Um convite à escuta do corpo, da música e das relações na dança.",
  },
];

export const knowledgeBySlug = Object.fromEntries(knowledgePages.map((item) => [item.slug, item]));
export const articlesBySlug = Object.fromEntries(articles.map((item) => [item.slug, item]));

export function knowledgeTitle(slug: string) {
  return knowledgeBySlug[slug]?.title ?? slug;
}

export function articleTitle(slug: string) {
  return articlesBySlug[slug]?.title ?? slug;
}
