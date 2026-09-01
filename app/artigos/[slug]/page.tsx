import type { Metadata } from "next";
import Link from "next/link";
import { articleTitle, articles, articlesBySlug, editorialNotice, knowledgeTitle } from "../../../content/editorial";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const article = articlesBySlug[params.slug]; if (!article) return { title: "Artigo não encontrado | No Ritmo" }; return { title: article.seoTitle ?? `${article.title} | No Ritmo`, description: article.seoDescription ?? article.summary, alternates: { canonical: `/artigos/${article.slug}` }, openGraph: { title: article.title, description: article.summary, type: "article" } }; }

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesBySlug[params.slug];
  if (!article) return <main className="article-page"><div className="article-shell"><h1>Conteúdo não encontrado</h1><Link href="/artigos">Voltar aos artigos</Link></div></main>;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.summary, articleSection: article.category, keywords: article.tags.join(", "), author: { "@type": "Organization", name: article.author.name }, publisher: { "@type": "Organization", name: "No Ritmo Academia de Dança" } };
  return <main className="article-page"><article className="article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/artigos">Artigos</Link><span aria-hidden="true">/</span><span>{article.category}</span></nav>
    <p className="article-category">{article.category}</p><h1>{article.title}</h1><p className="article-summary">{article.summary}</p>
    <div className="article-meta"><span>Por {article.author.name}</span><span>{article.readingTime} min de leitura</span><span>Rascunho editorial</span></div>
    <div className="article-body">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    <aside className="article-note" aria-label="Nota editorial"><strong>Transparência editorial</strong><p>{editorialNotice}</p></aside>
    {!!article.relatedKnowledge?.length && <section className="related-content" aria-labelledby="related-knowledge"><p>Continue aprendendo</p><h2 id="related-knowledge">Conceitos relacionados</h2><div>{article.relatedKnowledge.map((slug) => <Link key={slug} href={`/conhecimento/${slug}`}>{knowledgeTitle(slug)} <span>→</span></Link>)}</div></section>}
    {!!article.relatedArticles?.length && <section className="related-content" aria-labelledby="related-articles"><p>Leia também</p><h2 id="related-articles">Outras publicações</h2><div>{article.relatedArticles.map((slug) => <Link key={slug} href={`/artigos/${slug}`}>{articleTitle(slug)} <span>→</span></Link>)}</div></section>}
    <section className="author-card"><p>Sobre a autoria</p><h2>{article.author.name}</h2><span>{article.author.role}</span><p>{article.author.bio}</p><Link href="/autores">Conheça a política de autoria →</Link></section>
    <Link className="article-back" href="/artigos">← Ver todos os artigos</Link>
  </article></main>;
}
