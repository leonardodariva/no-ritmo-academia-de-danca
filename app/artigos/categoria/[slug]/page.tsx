import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../../../../content/editorial";
import SiteFooter from "../../../SiteFooter";
import SiteHeader from "../../../SiteHeader";

const slugify = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "-");
export function generateStaticParams() { return [...new Set(articles.map((article) => slugify(article.category)))].map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const first = articles.find((article) => slugify(article.category) === params.slug); return { title: first ? `${first.category} | Artigos No Ritmo` : "Categoria | Artigos No Ritmo", description: first ? `Artigos da No Ritmo na categoria ${first.category}.` : "Categoria editorial da No Ritmo.", alternates: { canonical: `/artigos/categoria/${params.slug}` } }; }

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const filtered = articles.filter((article) => slugify(article.category) === params.slug);
  const title = filtered[0]?.category;
  return <main><SiteHeader /><div className="article-page"><section className="article-shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/artigos">Artigos</Link><span aria-hidden="true">/</span><span>{title ?? "Categoria"}</span></nav><p className="article-category">Categoria</p><h1>{title ?? "Categoria não encontrada"}</h1><p className="article-summary">{title ? `Publicações relacionadas a ${title.toLowerCase()}.` : "Não há publicações nesta categoria."}</p><div className="category-articles">{filtered.map((article) => <article key={article.slug}><h2>{article.title}</h2><p>{article.summary}</p><Link href={`/artigos/${article.slug}`}>Ler artigo →</Link></article>)}</div><Link className="article-back" href="/artigos">← Ver todos os artigos</Link></section></div><SiteFooter /></main>;
}
