# No Ritmo V3 — arquitetura

## Rotas públicas

| Rota | Função |
| --- | --- |
| `/` | Capa institucional e portas de entrada |
| `/sobre` | História, visão e metodologia |
| `/professores` | Estrutura de perfis da equipe |
| `/aulas` | Formatos de aula |
| `/modalidades` | Ritmos e níveis |
| `/aulas-particulares` | Produto de aulas individuais ou em casal |
| `/coreografias` | Projetos para casamentos, debutantes e eventos |
| `/horarios` | Grade de turmas |
| `/conhecimento` | Biblioteca permanente de conceitos |
| `/conhecimento/[slug]` | Página de referência individual |
| `/artigos` | Índice editorial |
| `/artigos/[slug]` | Leitura individual |
| `/eventos` | Agenda e registros |
| `/autores` | Autoria e revisão |
| `/galeria` | Fotos e vídeos autorizados |
| `/faq` | Dúvidas frequentes |
| `/contato` | Canais e localização |

## Tipos de conteúdo

### Artigo

`title`, `slug`, `summary`, `body`, `coverImage`, `author`, `publishedAt`, `updatedAt`, `category`, `tags`, `readingTime`, `relatedArticles`, `relatedKnowledge`, `references`, `seoTitle`, `seoDescription`, `status`.

### Página de conhecimento

`title`, `slug`, `definition`, `index`, `explanation`, `danceApplication`, `noRitmoPerspective`, `references`, `relatedConcepts`, `relatedArticles`, `updatedAt`, `author`, `reviewer`.

### Autor

`name`, `photo`, `role`, `experience`, `specialties`, `bio`, `publishedContent`.

### Evento

`title`, `slug`, `date`, `time`, `location`, `description`, `coverImage`, `registrationUrl`, `status`.

## Fluxo editorial

1. Criar rascunho.
2. Definir autoria e categoria.
3. Adicionar referências quando necessário.
4. Revisar clareza, acessibilidade e SEO.
5. Validar informações institucionais.
6. Publicar.
7. Registrar atualização futura.

## CMS

A V3 usa dados locais demonstrativos para manter o build simples e verificável. Antes de adotar CMS, confirmar responsável pela publicação, orçamento, frequência, necessidade de agendamento, hospedagem e política de permissões. A migração pode preservar os tipos de conteúdo acima.

## Regras de conteúdo

- Não inventar credenciais, números, depoimentos ou evidências.
- Identificar conteúdo demonstrativo até a substituição por dados oficiais.
- Separar evidência, interpretação aplicada à dança e experiência da No Ritmo.
- Usar texto alternativo em imagens.
- Manter links relacionados para formar uma rede de conhecimento.
