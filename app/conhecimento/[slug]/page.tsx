import type { Metadata } from "next";
import Link from "next/link";
import { articleTitle, editorialNotice, knowledgeBySlug, knowledgePages, knowledgeTitle } from "../../../content/editorial";

export function generateStaticParams() { return knowledgePages.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const topic = knowledgeBySlug[params.slug]; return topic ? { title: `${topic.title} | Conhecimento No Ritmo`, description: topic.summary, alternates: { canonical: `/conhecimento/${topic.slug}` } } : { title: "Conhecimento | No Ritmo" }; }

export default function KnowledgePage({ params }: { params: { slug: string } }) {
  const topic = knowledgeBySlug[params.slug];
  if (!topic) return <main className="article-page"><div className="article-shell"><h1>Conteúdo em preparação</h1><Link href="/conhecimento">Voltar à biblioteca</Link></div></main>;
  return <main className="article-page knowledge-page"><article className="article-shell">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/conhecimento">Conhecimento</Link><span aria-hidden="true">/</span><span>{topic.title}</span></nav>
    <p className="article-category">Página de referência</p><h1>{topic.title}</h1><p className="article-summary">{topic.summary}</p>
    <div className="article-meta"><span>{topic.author?.name ?? "Autoria em validação"}</span><span>Conteúdo inicial</span><span>Revisão pendente</span></div>
    <nav className="page-index" aria-label="Nesta página"><strong>Nesta página</strong><a href="#conceito">O que é</a><a href="#na-danca">Como aparece na dança</a><a href="#no-ritmo">Como a No Ritmo trabalha</a></nav>
    <section className="knowledge-block" id="conceito"><p className="knowledge-eyebrow">O que sabemos / conceito</p><h2>O que é {topic.title.toLowerCase()}?</h2><p>{topic.definition}</p></section>
    <section className="knowledge-block" id="na-danca"><p className="knowledge-eyebrow">Aplicação</p><h2>Como isso aparece na dança</h2><p>{topic.application}</p></section>
    <section className="knowledge-block" id="no-ritmo"><p className="knowledge-eyebrow">Experiência da escola</p><h2>Como a No Ritmo trabalha esse conceito</h2><p>{topic.perspective}</p></section>
    <aside className="article-note" aria-label="Nota editorial"><strong>Critério editorial</strong><p>{editorialNotice}</p></aside>
    {!!topic.relatedConcepts.length && <section className="related-content"><p>Amplie o mapa</p><h2>Conceitos relacionados</h2><div>{topic.relatedConcepts.map((slug) => <Link key={slug} href={`/conhecimento/${slug}`}>{knowledgeTitle(slug)} <span>→</span></Link>)}</div></section>}
    {!!topic.relatedArticles.length && <section className="related-content"><p>Na prática editorial</p><h2>Artigos relacionados</h2><div>{topic.relatedArticles.map((slug) => <Link key={slug} href={`/artigos/${slug}`}>{articleTitle(slug)} <span>→</span></Link>)}</div></section>}
    <Link className="article-back" href="/conhecimento">← Voltar à biblioteca</Link>
  </article></main>;
}
