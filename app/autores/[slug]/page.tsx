import type { Metadata } from "next";
import Link from "next/link";
import { articles, noRitmoAuthor } from "../../../content/editorial";
import SiteFooter from "../../SiteFooter";
import SiteHeader from "../../SiteHeader";

export function generateStaticParams() { return [{ slug: noRitmoAuthor.slug }]; }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { return params.slug === noRitmoAuthor.slug ? { title: `${noRitmoAuthor.name} | Autores No Ritmo`, description: noRitmoAuthor.bio, alternates: { canonical: `/autores/${params.slug}` } } : { title: "Autor | No Ritmo" }; }

export default function AuthorPage({ params }: { params: { slug: string } }) {
  if (params.slug !== noRitmoAuthor.slug) return <main><SiteHeader /><div className="article-page"><div className="article-shell"><h1>Perfil em preparação</h1><Link href="/autores">Voltar aos autores</Link></div></div><SiteFooter /></main>;
  const published = articles.filter((article) => article.author.slug === params.slug);
  return <main><SiteHeader /><div className="article-page author-page"><article className="article-shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/autores">Autores</Link><span aria-hidden="true">/</span><span>{noRitmoAuthor.name}</span></nav><p className="article-category">Autoria institucional</p><h1>{noRitmoAuthor.name}</h1><p className="article-summary">{noRitmoAuthor.bio}</p><aside className="article-note"><strong>Perfil provisório</strong><p>Nomes, funções, biografias, experiência e especialidades individuais serão publicados somente após confirmação.</p></aside><section className="related-content"><p>Conteúdos relacionados</p><h2>Publicações deste perfil</h2><div>{published.map((article) => <Link key={article.slug} href={`/artigos/${article.slug}`}>{article.title}<span>→</span></Link>)}</div></section><Link className="article-back" href="/autores">← Voltar aos autores</Link></article></div><SiteFooter /></main>;
}
