import type { Metadata } from "next";
import Link from "next/link";
import { noRitmoAuthor } from "../../content/editorial";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = { title: "Autores e colaboradores | No Ritmo", description: "Conheça quem escreve, revisa e participa da construção do conhecimento publicado pela No Ritmo.", alternates: { canonical: "/autores" } };

export default function AutoresPage(){return <main className="subpage"><SiteHeader /><section className="subpage-hero"><p>Pessoas e conhecimento</p><h1>Autores e colaboradores</h1><div><span>Autoria transparente</span><p>Quem escreve, revisa e participa da construção do conhecimento publicado pela No Ritmo.</p></div></section><section className="knowledge-map"><div className="editorial-section-heading"><p className="section-label">Perfis</p><h2>Conhecimento com contexto e responsabilidade.</h2><p>Nenhuma credencial será presumida. Perfis individuais serão criados depois da validação das informações.</p></div><div className="knowledge-grid author-index-grid"><Link href={`/autores/${noRitmoAuthor.slug}`}><span>01</span><h3>{noRitmoAuthor.name}</h3><p>{noRitmoAuthor.bio}</p><strong>Consultar perfil →</strong></Link></div></section><SiteFooter /></main>}
