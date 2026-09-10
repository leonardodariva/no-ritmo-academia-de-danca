# No Ritmo Academia de Dança — Mapa do projeto

## Visão geral

Site institucional da No Ritmo, construído com React 19, Next/Vinext e Vite, com foco em dança, conhecimento, metodologia, aulas e contato. O conteúdo atual é demonstrativo e deve ser substituído pelos dados oficiais na etapa editorial final.

## Execução

- `npm run dev`: inicia a prévia local.
- `npm run build`: gera a versão de produção.
- `npm run start`: executa a versão compilada.
- `npm run test`: executa build e testes das rotas públicas.
- `npm run lint`: verifica padrões de código.
- `npm run db:generate`: gera artefatos do Drizzle quando o banco for utilizado.

## Rotas públicas

| Rota | Finalidade |
|---|---|
| `/` | Home institucional |
| `/sobre` | História, identidade e filosofia |
| `/modalidades` | Formatos de experiência |
| `/aulas` | Como funcionam as aulas |
| `/aulas-particulares` | Aulas individuais ou em casal |
| `/horarios` | Tabela de horários |
| `/coreografias` | Coreografias para eventos |
| `/conhecimento` | Índice de conteúdos |
| `/conhecimento/[slug]` | Página de cada tema |
| `/artigos` | Biblioteca editorial |
| `/artigos/[slug]` | Artigo individual |
| `/eventos` | Experiências e eventos |
| `/professores` / `/autores` | Equipe e autores |
| `/galeria` | Galeria de fotos e vídeos |
| `/faq` | Perguntas frequentes |
| `/contato` | Canais de contato e localização |

## Componentes principais

- `app/page.tsx`: composição da Home.
- `app/SubpageShell.tsx`: estrutura compartilhada das páginas internas.
- `app/DanceStyles.tsx`: cards de modalidades e conteúdo explorável.
- `app/Testimonials.tsx`: depoimentos demonstrativos.
- `app/DetailsAutoClose.tsx`: fecha um submenu quando outro é aberto.
- `app/ScrollReveal.tsx`: entradas sutis durante a rolagem.
- `app/IntroLoader.tsx`: componente de carregamento inicial, atualmente não usado na entrada principal.

## Conteúdo e identidade

- `content/types.ts` e `content/demo.ts`: tipos e conteúdo fictício para prototipação.
- `app/globals.css`: tokens de cor, tipografia, layout responsivo, cards, botões e animações.
- Paleta: azul `#17479e`, azul profundo `#2d3393`, vermelho e preto.
- Logos: `public/logo-fundo-claro.png` e `public/logo-fundo-escuro.png`.
- Ícones: biblioteca `react-icons`.

## SEO, acessibilidade e plataforma

- `app/layout.tsx`: metadados globais e dados estruturados.
- `app/sitemap.ts`, `app/robots.ts` e `app/manifest.ts`: SEO técnico.
- `app/not-found.tsx` e `app/error.tsx`: estados de erro.
- `vite.config.ts`, `worker/index.ts` e `.openai/hosting.json`: execução e publicação Cloudflare.

## Próxima etapa

Substituir os placeholders por história, professores, fotos, depoimentos, endereço, redes sociais e regras oficiais da No Ritmo. Depois, revisar desktop/mobile e publicar a versão de produção.
