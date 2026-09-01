import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { classFormats, danceModalities } from "../content/classes";
import { articles, knowledgePages } from "../content/editorial";
import { siteContact, weeklySchedule } from "../content/site";
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
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <SiteHeader floating />

    <section className="v4-hero" id="conteudo">
      <div className="home-hero-photo" aria-hidden="true" />
      <div className="v4-hero-copy">
        <p>Dança, conexão e conhecimento</p>
        <h1>A dança começa no movimento.<br /><em>E continua nas relações.</em></h1>
        <span>A No Ritmo é uma academia de dança em Apucarana e um espaço para aprender, conviver e compreender a dança para além dos passos.</span>
        <div><Link className="button" href="/sobre">Conheça a No Ritmo</Link><Link className="text-link" href="/conhecimento">Explore nossos conteúdos →</Link></div>
      </div>
      <div className="v4-hero-index" aria-label="Caminhos principais">
        <Link href="/sobre"><span>01</span><strong>Conhecer</strong><small>História, pessoas e visão</small></Link>
        <Link href="/conhecimento"><span>02</span><strong>Aprender</strong><small>Conceitos e publicações</small></Link>
        <Link href="/aulas"><span>03</span><strong>Participar</strong><small>Aulas, eventos e contato</small></Link>
      </div>
    </section>

    <section className="v4-statement">
      <p>Mais que aprender passos</p>
      <h2>Dançar também é perceber, comunicar, escutar e encontrar outras pessoas.</h2>
      <div><p>O site da No Ritmo reúne a experiência da escola, informações para quem deseja participar e uma biblioteca pública sobre dança, movimento e cultura.</p><Link href="/sobre">Conheça nossa visão →</Link></div>
    </section>

    <section className="v4-method">
      <div className="v4-section-heading"><p>Nossa forma de ensinar</p><h2>Temas que orientam a experiência de aprendizagem.</h2><span>Esta estrutura será refinada com a equipe antes de ser apresentada como metodologia oficial.</span></div>
      <div className="v4-method-grid">{teachingThemes.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      <Link className="section-action" href="/sobre#metodologia">Entenda a proposta pedagógica →</Link>
    </section>

    <section className="home-modalities">
      <div className="v4-section-heading"><p>Modalidades</p><h2>Ritmos diferentes, novas formas de entrar na dança.</h2><span>Conheça as modalidades apresentadas pela No Ritmo e confirme com a equipe quais estão disponíveis na grade atual.</span></div>
      <div className="home-modality-grid">{danceModalities.map((item, index) => <Link href="/modalidades" key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.summary}</p><strong>Conhecer modalidade →</strong></Link>)}</div>
      <Link className="section-action" href="/modalidades">Ver todas as modalidades →</Link>
    </section>

    <section className="home-classes">
      <div className="v4-section-heading light"><p>Como funcionam as aulas</p><h2>Um formato para cada momento.</h2><span>Escolha uma experiência inicial e consulte disponibilidade, valores e horários diretamente com a equipe.</span></div>
      <div className="home-class-grid">{classFormats.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div>
      <div className="home-class-actions"><Link href="/aulas">Entenda como funcionam →</Link><Link href="/horarios">Consultar horários →</Link></div>
    </section>

    <section className="v4-knowledge">
      <div className="v4-section-heading light"><p>Biblioteca de conhecimento</p><h2>Conceitos para consultar, relacionar e aprofundar.</h2><span>Páginas permanentes conectam fundamentos, aplicações na dança e a experiência da No Ritmo.</span></div>
      <div className="v4-knowledge-list">{knowledgePages.slice(0, 5).map((topic, index) => <Link key={topic.slug} href={`/conhecimento/${topic.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{topic.title}</h3><p>{topic.summary}</p><strong>→</strong></Link>)}</div>
      <Link className="section-action light" href="/conhecimento">Acessar toda a biblioteca →</Link>
    </section>

    <section className="v4-articles">
      <div className="v4-section-heading"><p>Publicações recentes</p><h2>Ideias em movimento.</h2><span>Artigos ajudam a observar os conceitos em situações, perguntas e experiências específicas.</span></div>
      <div className="v4-article-grid">{articles.map((article) => <Link key={article.slug} href={`/artigos/${article.slug}`}><p>{article.category}</p><h3>{article.title}</h3><span>{article.summary}</span><small>{article.author.name} · {article.readingTime} min</small></Link>)}<Link className="v4-all-articles" href="/artigos"><p>Acervo editorial</p><h3>Veja todas as publicações</h3><strong>Explorar artigos →</strong></Link></div>
    </section>

    <section className="v4-institution">
      <div><p>A No Ritmo</p><h2>Uma escola feita de pessoas, prática e convivência.</h2><div className="home-institution-photo" role="img" aria-label="Imagem ilustrativa temporária de movimento durante uma dança"><span>Imagem de demonstração</span></div></div>
      <div><p>A história completa, os marcos da academia e os perfis profissionais serão publicados com informações fornecidas e validadas pela equipe.</p><div><Link href="/sobre">Conheça a escola →</Link><Link href="/professores">Professores e equipe →</Link></div></div>
    </section>

    <section className="home-team" aria-labelledby="home-team-title">
      <div className="home-team-heading"><p>Quem faz a No Ritmo</p><h2 id="home-team-title">Pessoas que colocam a dança em movimento.</h2><span>Esta seção está preparada para receber os perfis reais da direção, dos professores e dos colaboradores.</span></div>
      <div className="home-team-grid"><div className="home-team-feature"><small>Equipe No Ritmo</small><strong>Perfis em construção</strong><p>Nomes, fotografias, trajetórias e áreas de atuação serão publicados após validação com a equipe.</p><Link href="/professores">Conheça a equipe →</Link></div>{["Direção", "Professores", "Colaboradores"].map((role, index) => <div className={`home-team-placeholder home-team-placeholder-${index + 1}`} key={role}><span>0{index + 1}</span><strong>{role}</strong><small>Informações em atualização</small></div>)}</div>
    </section>

    <section className="home-practical">
      <div className="v4-section-heading"><p>Informações práticas</p><h2>Planeje seu próximo passo.</h2><span>Os horários abaixo refletem a estrutura atual do site. Confirme vagas e alterações antes de visitar a academia.</span></div>
      <div className="home-practical-grid">
        <div className="home-schedule"><h3>Turmas e horários</h3>{weeklySchedule.filter((day) => day.sessions.length).slice(0, 4).map((day) => <div key={day.day}><strong>{day.day}</strong><span>{day.sessions.map((session) => `${session.level}: ${session.time}`).join(" · ")}</span></div>)}<Link href="/horarios">Ver grade completa →</Link></div>
        <div className="home-contact-card"><p>Contato</p><h3>{siteContact.city} — {siteContact.state}</h3><a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a><a href={siteContact.emailHref}>{siteContact.email}</a><Link href="/contato">Ver todas as informações →</Link></div>
      </div>
    </section>

    <section className="v4-invitation">
      <p>Conheça presencialmente</p><h2>Quando fizer sentido, venha dançar com a gente.</h2><span>Converse com a equipe para tirar dúvidas, confirmar informações e encontrar uma experiência adequada para você.</span>
      <div><a className="button" href={siteContact.experimentalHref} target="_blank" rel="noreferrer">Conversar pelo WhatsApp</a><Link className="text-link" href="/contato">Outras formas de contato →</Link></div>
    </section>

    <SiteFooter />
    <a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp"><span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Conversar</strong><small>com a equipe</small></span></a>
  </main>;
}
