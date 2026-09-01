import type { Metadata } from "next";
import Link from "next/link";
import { articles, editorialNotice } from "../../content/editorial";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = { title: "Artigos sobre dança | No Ritmo", description: "Publicações da No Ritmo sobre dança, movimento, comunicação, musicalidade e aprendizagem." };

export default function ArtigosPage() {
  const categories = [...new Set(articles.map((article) => article.category))];
  return <main className="subpage editorial-index">
    <SiteHeader />
    <section className="subpage-hero editorial-hero"><p>Publicações No Ritmo</p><h1>Ideias para compreender e viver a dança.</h1><div><span>Acervo editorial</span><p>Reflexões, guias e experiências conectados à biblioteca permanente de conhecimento.</p></div></section>
    <nav className="category-list" id="categorias" aria-label="Categorias dos artigos"><span>Categorias</span>{categories.map((category) => <Link key={category} href={`/artigos/categoria/${category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "-")}`}>{category}</Link>)}</nav>
    <section className="article-index" aria-labelledby="publicacoes-title">
      <div className="editorial-section-heading"><p className="section-label">Publicações</p><h2 id="publicacoes-title">Para começar a explorar</h2><p>{editorialNotice}</p></div>
      {articles.map((article) => <article id={article.category.toLowerCase().replaceAll(" ", "-")} key={article.slug}><p>{article.category}</p><div><h3>{article.title}</h3><small>{article.author.name} · {article.readingTime} min de leitura</small></div><span>{article.summary}</span><Link href={`/artigos/${article.slug}`} aria-label={`Ler ${article.title}`}>Ler artigo →</Link></article>)}
    </section>
    <section className="knowledge-crosslink"><p>Biblioteca permanente</p><h2>Prefere começar por um conceito?</h2><Link href="/conhecimento">Explorar Conhecimento →</Link></section>
    <SiteFooter />
  </main>;
}
