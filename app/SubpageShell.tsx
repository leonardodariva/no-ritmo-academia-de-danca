import type { ReactNode } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { siteContact } from "../content/site";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type Section = {
  number: string;
  title: string;
  text?: string;
  content?: ReactNode;
  paragraphs?: ReactNode[];
  quote?: string;
  closing?: string;
  id?: string;
  fullWidth?: boolean;
};

export default function SubpageShell({ kicker, title, intro, sections, wideCopy = false, compactHero = false, hideHeroSummary = false, ctaTitle, ctaIntro }: { kicker: string; title: string; intro: string; sections: Section[]; wideCopy?: boolean; compactHero?: boolean; hideHeroSummary?: boolean; ctaTitle?: string; ctaIntro?: string }) {
  return (
    <main className="subpage">
      <SiteHeader />
      <section className={compactHero ? "subpage-hero subpage-hero-photo" : "subpage-hero"} id="main-content">
        {!compactHero && <p>{kicker}</p>}<h1>{title}</h1>{!hideHeroSummary && <div><span>No Ritmo • Apucarana</span><p>{intro}</p></div>}
      </section>
      <nav className="subpage-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span>{title}</span></nav>
      <section className={wideCopy ? "subpage-sections subpage-sections-wide" : "subpage-sections"}>
        {sections.map((section) => {
          const paragraphs = section.paragraphs ?? (section.text ? [section.text] : []);
          return <article key={section.number} id={section.id} className={section.fullWidth ? "subpage-section-full" : undefined}>{!wideCopy && <span>{section.number}</span>}<h2>{section.title}</h2><div className="subpage-section-copy">{section.content}{paragraphs.map((paragraph, index) => <p key={`${section.number}-${index}`}>{paragraph}</p>)}{section.quote && <blockquote>{section.quote}</blockquote>}{section.closing && <p className="subpage-section-closing">{section.closing}</p>}</div></article>;
        })}
      </section>
      <section className={wideCopy ? "subpage-cta subpage-cta-about" : "subpage-cta"}><p>{ctaIntro ?? "Fale diretamente com a equipe"}</p><h2>{ctaTitle ?? (wideCopy ? "Para dar o seu primeiro passo na dança de salão, clique no botão abaixo." : "Vamos encontrar a melhor experiência para você?")}</h2><a href={siteContact.whatsappHref} target="_blank" rel="noreferrer">{wideCopy && <FaWhatsapp aria-hidden="true" />}Conversar no WhatsApp</a></section>
      <SiteFooter />
    </main>
  );
}
