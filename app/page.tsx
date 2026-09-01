import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { danceModalities } from "../content/classes";
import { articles, knowledgePages } from "../content/editorial";
import { siteContact } from "../content/site";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const teachingThemes = [
  ["Movimento", "Organizar o corpo, experimentar possibilidades e construir repertório."],
  ["Percepção", "Observar, escutar e sentir o que acontece durante a dança."],
  ["Comunicação", "Construir uma dança compartilhada com atenção, clareza e respeito."],
  ["Musicalidade", "Relacionar tempo, pausa, dinâmica e interpretação ao movimento."],
];

export default function Home() {
  return <main className="v4-home">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader floating />
    <section className="v4-hero" id="conteudo"><div className="v4-hero-copy"><p>Dança, conexão e conhecimento</p><h1>A dança começa no movimento.<br /><em>E continua nas relações.</em></h1><span>A No Ritmo é uma academia de dança em Apucarana e um espaço para aprender, conviver e compreender a dança para além dos passos.</span><div><Link className="button" href="/sobre">Conheça a No Ritmo</Link><Link className="text-link" href="/conhecimento">Explore nossos conteúdos →</Link></div></div><div className="v4-hero-index" aria-label="Caminhos principais"><Link href="/sobre"><span>01</span><strong>Conhecer</strong><small>História, pessoas e visão</small></Link><Link href="/conhecimento"><span>02</span><strong>Aprender</strong><small>Conceitos e publicações</small></Link><Link href="/aulas"><span>03</span><strong>Participar</strong><small>Aulas, eventos e contato</small></Link></div></section>
    <section className="v4-statement"><p>Mais que aprender passos</p><h2>Dançar também é perceber, comunicar, escutar e encontrar outras pessoas.</h2><div><p>O site da No Ritmo reúne a experiência da escola, informações para quem deseja participar e uma biblioteca pública sobre dança, movimento e cultura.</p><Link href="/sobre">Conheça nossa visão →</Link></div></section>
    <section className="v4-method"><div className="v4-section-heading"><p>Nossa forma de ensinar</p><h2>Temas que orientam a experiência de aprendizagem.</h2><span>Esta estrutura será refinada com a equipe antes de ser apresentada como metodologia oficial.</span></div><div className="v4-method-grid">{teachingThemes.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div><Link className="section-action" href="/sobre#metodologia">Entenda a proposta pedagógica →</Link></section>
    <section className="v4-knowledge"><div className="v4-section-heading light"><p>Biblioteca de conhecimento</p><h2>Conceitos para consultar, relacionar e aprofundar.</h2><span>Páginas permanentes conectam fundamentos, aplicações na dança e a experiência da No Ritmo.</span></div><div className="v4-knowledge-list">{knowledgePages.slice(0, 5).map((topic, index) => <Link key={topic.slug} href={`/conhecimento/${topic.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{topic.title}</h3><p>{topic.summary}</p><strong>→</strong></Link>)}</div><Link className="section-action light" href="/conhecimento">Acessar toda a biblioteca →</Link></section>
    <section className="v4-articles"><div className="v4-section-heading"><p>Publicações recentes</p><h2>Ideias em movimento.</h2><span>Artigos ajudam a observar os conceitos em situações, perguntas e experiências específicas.</span></div><div className="v4-article-grid">{articles.map((article) => <Link key={article.slug} href={`/artigos/${article.slug}`}><p>{article.category}</p><h3>{article.title}</h3><span>{article.summary}</span><small>{article.author.name} · {article.readingTime} min</small></Link>)}<Link className="v4-all-articles" href="/artigos"><p>Acervo editorial</p><h3>Veja todas as publicações</h3><strong>Explorar artigos →</strong></Link></div></section>
    <section className="v4-institution"><div><p>A No Ritmo</p><h2>Uma escola feita de pessoas, prática e convivência.</h2></div><div><p>A história completa, os marcos da academia e os perfis profissionais serão publicados com informações fornecidas e validadas pela equipe.</p><div><Link href="/sobre">Conheça a escola →</Link><Link href="/professores">Professores e equipe →</Link></div></div></section>
    <section className="v4-participate"><div className="v4-section-heading light"><p>Participar</p><h2>Encontre uma experiência para viver a dança.</h2><span>Consulte formatos e modalidades. Turmas e horários devem ser confirmados diretamente com a equipe.</span></div><div className="v4-participate-grid"><Link href="/aulas"><span>01</span><h3>Como funcionam as aulas</h3><p>Turmas, aulas particulares e orientação para quem está começando.</p></Link><Link href="/modalidades"><span>02</span><h3>Modalidades</h3><p>{danceModalities.slice(0, 5).map((item) => item.name).join(", ")} e outras experiências.</p></Link><Link href="/eventos"><span>03</span><h3>Eventos</h3><p>Agenda e memória de encontros, workshops e apresentações confirmadas.</p></Link></div></section>
    <section className="v4-invitation"><p>Conheça presencialmente</p><h2>Quando fizer sentido, venha dançar com a gente.</h2><span>Converse com a equipe para tirar dúvidas, confirmar informações e encontrar uma experiência adequada para você.</span><div><a className="button" href={siteContact.experimentalHref} target="_blank" rel="noreferrer">Conversar pelo WhatsApp</a><Link className="text-link" href="/contato">Outras formas de contato →</Link></div></section>
    <SiteFooter /><a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp"><span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Conversar</strong><small>com a equipe</small></span></a>
  </main>;
}
