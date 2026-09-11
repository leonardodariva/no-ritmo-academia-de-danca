import type { Metadata } from "next";
import Link from "next/link";
import { knowledgePages } from "../../content/editorial";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = { title: "Conhecimento sobre dança | No Ritmo", description: "Biblioteca de referência da No Ritmo sobre dança de salão, movimento, percepção, comunicação e musicalidade.", alternates: { canonical: "/conhecimento" } };

export default function ConhecimentoPage() {
  return <main className="subpage knowledge-index">
    <SiteHeader />
    <section className="subpage-hero editorial-hero" id="main-content"><p>Biblioteca No Ritmo</p><h1>Dança para entender, sentir e viver.</h1><div><span>Conhecimento permanente</span><p>Documentos de referência conectam conceitos, prática da dança e a experiência de ensino da No Ritmo.</p></div></section>
    <section className="knowledge-map" aria-labelledby="knowledge-title"><div className="editorial-section-heading"><p className="section-label">Áreas de conhecimento</p><h2 id="knowledge-title">Uma biblioteca que cresce por relações.</h2><p>Comece por qualquer tema. Cada página oferece caminhos para conceitos e artigos relacionados.</p></div><div className="knowledge-grid">{knowledgePages.map((topic, index) => <Link href={`/conhecimento/${topic.slug}`} key={topic.slug}><span>{String(index + 1).padStart(2, "0")}</span><h3>{topic.title}</h3><p>{topic.summary}</p><strong>Consultar referência →</strong></Link>)}</div></section>
    <section className="knowledge-crosslink"><p>Publicações editoriais</p><h2>Veja os conceitos em outros contextos.</h2><Link href="/artigos">Explorar artigos →</Link></section>
    <SiteFooter />
  </main>;
}
