import Link from "next/link";
import { siteContact } from "../content/site";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type Section = { number: string; title: string; text: string };

export default function SubpageShell({ kicker, title, intro, sections }: { kicker: string; title: string; intro: string; sections: Section[] }) {
  return (
    <main className="subpage">
      <SiteHeader />
      <section className="subpage-hero" id="main-content">
        <p>{kicker}</p><h1>{title}</h1><div><span>No Ritmo • Apucarana</span><p>{intro}</p></div>
      </section>
      <nav className="subpage-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span>{title}</span></nav>
      <section className="subpage-sections">
        {sections.map((section) => <article key={section.number}><span>{section.number}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}
      </section>
      <section className="subpage-cta"><p>Fale diretamente com a equipe</p><h2>Vamos encontrar a melhor experiência para você?</h2><a href={siteContact.whatsappHref} target="_blank" rel="noreferrer">Conversar no WhatsApp</a></section>
      <SiteFooter />
    </main>
  );
}
