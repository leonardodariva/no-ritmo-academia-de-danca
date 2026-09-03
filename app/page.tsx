import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { danceModalities } from "../content/classes";
import { articles, knowledgePages } from "../content/editorial";
import { siteContact, weeklySchedule } from "../content/site";
import { frequentlyAskedQuestions } from "../content/faq";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import HeroCarousel from "./HeroCarousel";
import TestimonialRotator from "./TestimonialRotator";

export const metadata: Metadata = { alternates: { canonical: "/" } };


export default function Home() {
  return <main className="v4-home">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <SiteHeader floating />

    <section className="v4-hero" id="conteudo">
      <div className="v4-hero-copy">
        <p>Dança, conexão e conhecimento</p>
        <h1>A dança começa no movimento.<br /><em>E continua nas relações.</em></h1>
        <span>Fundada em 2010, em Apucarana, a No Ritmo já recebeu mais de 10 mil pessoas e acredita que dançar é aprender, conviver e desenvolver-se para além dos passos.</span>
        <div><Link className="button" href="/sobre">Conheça a No Ritmo</Link><Link className="text-link" href="/conhecimento">Explore nossos conteúdos →</Link></div>
      </div>
      <HeroCarousel />
    </section>

    <section className="v4-statement" id="sobre">
      <p className="statement-eyebrow">Sobre a No Ritmo</p>
      <div className="statement-visual" role="img" aria-label="Imagem ilustrativa temporária de uma dança em movimento"><span>Imagem de demonstração</span></div>
      <div className="statement-copy"><p className="statement-eyebrow">Sobre a No Ritmo</p><h2>Muito além de aprender a dançar</h2><div className="statement-body"><p>Desde&nbsp;2010, a No Ritmo Academia de Dança conecta pessoas por meio da dança de salão. Em Apucarana, mais de 10 mil pessoas já fizeram parte dessa história.</p><p>Nosso ensino integra técnica, consciência corporal, comunicação e convivência, respeitando o ritmo de cada pessoa e desenvolvendo autonomia para aprender e dançar.</p><p>Acreditamos que dançar é perceber a si mesmo, compreender o outro e aprender juntos.</p></div><Link className="statement-button" href="/sobre">Saiba mais sobre a No Ritmo</Link></div>
    </section>

<section className="home-classes home-services" id="produtos">
      <div className="v4-section-heading light"><p>Serviços No Ritmo</p><h2>Nossos serviços</h2><span>Encontre a experiência de dança que combina com seu momento.</span></div>
      <div className="home-services-grid">
        <article>
          <img src="/images/demo/movimento-detalhe.jpg" alt="Imagem ilustrativa de dança em dupla" loading="lazy" />
          <div><h3>Aulas particulares</h3><p>Aulas no seu ritmo, com atenção aos seus objetivos e acompanhamento personalizado.</p><Link href="/aulas-particulares" aria-label="Saiba mais sobre aulas particulares">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/demo/aula-em-grupo.jpg" alt="Imagem ilustrativa de uma aula de dança em grupo" loading="lazy" />
          <div><h3>Aulas em turmas</h3><p>Aprenda em grupo, conheça pessoas e desenvolva técnica e confiança para dançar.</p><Link href="/aulas" aria-label="Saiba mais sobre aulas em turmas">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/demo/danca-hero.jpg" alt="Imagem ilustrativa de dança para uma coreografia de casamento" loading="lazy" />
          <div><h3>Coreografias para casamento</h3><p>Uma dança que celebra a história do casal, com coreografia e ensaios personalizados.</p><Link href="/coreografias" aria-label="Saiba mais sobre coreografias para casamento">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/demo/movimento-detalhe.jpg" alt="Imagem ilustrativa de movimento para uma coreografia de debutante" loading="lazy" />
          <div><h3>Coreografias para debutantes</h3><p>Celebre seus 15 anos com uma coreografia especial, feita para expressar sua personalidade.</p><Link href="/coreografias" aria-label="Saiba mais sobre coreografias para debutantes">Saiba mais sobre o serviço</Link></div>
        </article>
      </div>
      <div className="home-services-grid home-services-extra">
        <article>
          <img src="/images/demo/danca-hero.jpg" alt="Imagem ilustrativa de dança para eventos" loading="lazy" />
          <div><h3>Coreografias para eventos em geral</h3><p>Danças personalizadas para celebrar e surpreender em diferentes ocasiões.</p><Link href="/coreografias" aria-label="Saiba mais sobre coreografias para eventos em geral">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/demo/aula-em-grupo.jpg" alt="Imagem ilustrativa de dança em equipe para gincanas" loading="lazy" />
          <div><h3>Coreografias para gincanas</h3><p>Criatividade e trabalho em equipe em coreografias pensadas para sua gincana.</p><Link href="/coreografias" aria-label="Saiba mais sobre coreografias para gincanas">Saiba mais sobre o serviço</Link></div>
        </article>
        <article className="home-services-all">
          <div><span>Serviços No Ritmo</span><h3>Encontre seu próximo passo.</h3><p>Conheça todas as formas de dançar com a gente.</p><Link href="/aulas">Conheça todos os nossos serviços</Link></div>
        </article>
      </div>
    </section>

    <section className="home-modalities" id="estilos">
      <div className="v4-section-heading"><p>Estilos</p><h2>Ritmos diferentes, novas formas de entrar na dança.</h2><span>Conheça alguns dos estilos oferecidos pela No Ritmo e encontre o ritmo que combina com você.</span></div>
      <div className="home-modality-grid">{danceModalities.slice(0, 5).map((item, index) => <Link href="/modalidades" key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.summary}</p><strong>Conhecer estilo →</strong></Link>)}<Link href="/modalidades" key="mais-estilos"><span>06</span><h3>Mais de 22 estilos de dança</h3><p>Um repertório amplo para experimentar diferentes ritmos e possibilidades.</p><strong>Conhecer estilos →</strong></Link></div>
    </section>



    <section className="v4-knowledge" id="conhecimento">
      <div className="v4-section-heading light"><p>Biblioteca de conhecimento</p><h2>Conceitos para consultar, relacionar e aprofundar.</h2><span>Páginas permanentes conectam fundamentos, aplicações na dança e a experiência da No Ritmo.</span></div>
      <div className="v4-knowledge-list">{knowledgePages.slice(0, 5).map((topic, index) => <Link key={topic.slug} href={`/conhecimento/${topic.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{topic.title}</h3><p>{topic.summary}</p><strong>→</strong></Link>)}</div>
      <Link className="section-action light" href="/conhecimento">Acessar toda a biblioteca →</Link>
    </section>

    <section className="v4-articles" id="artigos">
      <div className="v4-section-heading"><p>Publicações recentes</p><h2>Ideias em movimento.</h2><span>Artigos ajudam a observar os conceitos em situações, perguntas e experiências específicas.</span></div>
      <div className="v4-article-grid">{articles.map((article, index) => <Link key={article.slug} href={`/artigos/${article.slug}`}><p>{article.category}</p><div className={`article-thumb article-thumb-${index + 1}`} role="img" aria-label="Imagem ilustrativa temporária do artigo"><span>Imagem de demonstração</span></div><h3>{article.title}</h3><span>{article.summary}</span><small>{article.author.name} · {article.readingTime} minutos</small></Link>)}<Link className="v4-all-articles" href="/artigos"><p>Acervo editorial</p><h3>Explorar todos os artigos</h3><strong>Ver acervo →</strong></Link></div>
    </section>


    <section className="home-team" id="equipe" aria-labelledby="home-team-title">
      <div className="home-team-heading"><p>Quem faz a No Ritmo</p><h2 id="home-team-title">Pessoas que colocam a dança em movimento.</h2><span>Esta seção está preparada para receber os perfis reais da direção, dos professores e dos colaboradores.</span></div>
      <div className="home-team-grid"><div className="home-team-feature"><small>Equipe No Ritmo</small><strong>Perfis em construção</strong><p>Nomes, fotografias, trajetórias e áreas de atuação serão publicados após validação com a equipe.</p><Link href="/professores">Conheça a equipe →</Link></div>{["Direção", "Professores", "Colaboradores"].map((role, index) => <div className={`home-team-card home-team-card-${index + 1}`} key={role}><div className="home-team-card-inner"><div className="home-team-card-face home-team-card-front"><span>0{index + 1}</span><div><strong>{role}</strong><small>Perfil em atualização</small></div></div><div className="home-team-card-face home-team-card-back"><small>Em breve</small><strong>Conheça essa pessoa</strong><p>Breve resumo, área de atuação e uma frase do perfil serão adicionados após validação com a equipe.</p></div></div></div>)}</div>
    </section>

    <section className="home-testimonials" id="depoimentos" aria-labelledby="home-testimonials-title">
      <div className="home-testimonial-layout"><div className="home-testimonial-copy"><div className="v4-section-heading"><p>Depoimentos</p><h2 id="home-testimonials-title">Quem dança também conta.</h2><span>Histórias de alunos sobre acolhimento, aprendizagem e convivência na No Ritmo.</span></div></div><TestimonialRotator /></div>
    </section>

    <section className="home-events" id="eventos" aria-labelledby="home-events-title">
      <div className="v4-section-heading"><p>Eventos e projetos</p><h2 id="home-events-title">A dança continua fora da sala.</h2><span>Encontros, apresentações e projetos que aproximam a escola da comunidade.</span></div>
      <div className="home-project-grid"><Link href="/eventos"><p>Projeto 1</p><div className="project-thumb project-thumb-1" role="img" aria-label="Imagem ilustrativa temporária do projeto 1"><span>Imagem de demonstração</span></div><h3>Agenda No Ritmo</h3><span>Encontros e experiências abertas para dançar junto.</span><small>Conhecer projeto →</small></Link><Link href="/projetos"><p>Projeto 2</p><div className="project-thumb project-thumb-2" role="img" aria-label="Imagem ilustrativa temporária do projeto 2"><span>Imagem de demonstração</span></div><h3>Projetos e comunidade</h3><span>Parcerias e ações que levam a dança para novos espaços.</span><small>Acessar projeto →</small></Link><Link href="/projetos"><p>Projeto 3</p><div className="project-thumb project-thumb-3" role="img" aria-label="Imagem ilustrativa temporária do projeto 3"><span>Imagem de demonstração</span></div><h3>Próximos encontros</h3><span>Novas experiências da academia em construção.</span><small>Ver detalhes →</small></Link></div>
      <Link className="section-action" href="/projetos">Acessar todos os projetos →</Link>
    </section>

    <section className="gallery home-gallery" id="galeria" aria-labelledby="home-gallery-title">
      <div className="gallery-heading"><p>Galeria</p><h2 id="home-gallery-title">Momentos em movimento.</h2><p>Um registro visual das aulas, encontros e experiências da No Ritmo.</p></div>
      <div className="gallery-grid"><Link className="gallery-item gallery-large" href="/galeria"><span>Aulas e encontros</span></Link><Link className="gallery-item" href="/galeria"><span>Prática</span></Link><Link className="gallery-item" href="/galeria"><span>Comunidade</span></Link></div>
    </section>

    <section className="home-practical" id="pratico">
      <div className="v4-section-heading"><p>Informações práticas</p><h2>Planeje seu próximo passo.</h2><span>Os horários abaixo refletem a estrutura atual do site. Confirme vagas e alterações antes de visitar a academia.</span></div>
      <div className="home-practical-grid">
        <div className="home-schedule"><h3>Turmas e horários</h3>{weeklySchedule.filter((day) => day.sessions.length).slice(0, 4).map((day) => <div key={day.day}><strong>{day.day}</strong><span>{day.sessions.map((session) => `${session.level}: ${session.time}`).join(" · ")}</span></div>)}<Link href="/horarios">Ver grade completa →</Link></div>
        <div className="home-contact-card"><p>Contato</p><h3>{siteContact.city} — {siteContact.state}</h3><a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a><a href={siteContact.emailHref}>{siteContact.email}</a><a className="home-map-link" href={siteContact.mapsHref} target="_blank" rel="noreferrer">Abrir localização no mapa →</a><Link href="/contato">Ver todas as informações →</Link></div>
      </div>
    </section>

    <section className="home-faq" id="faq" aria-labelledby="home-faq-title">
      <div className="v4-section-heading"><p>Perguntas frequentes</p><h2 id="home-faq-title">Antes de começar, tire suas dúvidas.</h2><span>Respostas rápidas para quem está conhecendo a No Ritmo e quer encontrar o melhor caminho.</span></div>
      <div className="home-faq-list">{frequentlyAskedQuestions.slice(0, 4).map((item, index) => <details key={item.question}><summary><span>0{index + 1}</span>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      <Link className="section-action" href="/faq">Ver perguntas frequentes →</Link>
    </section>

    <SiteFooter />
    <a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp"><span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Conversar</strong><small>com a equipe</small></span></a>
  </main>;
}
