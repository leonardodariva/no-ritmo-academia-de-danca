import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { danceModalities } from "../content/classes";
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
      <div className="v4-section-heading light"><p>Serviços No Ritmo</p><h2>Nossos serviços</h2></div>
      <div className="home-services-grid">
        <article>
          <img src="/images/propostas/modelo-aula-orientada.png" alt="Professor orientando uma aula particular na Academia No Ritmo" loading="lazy" />
          <div><h3>Aulas particulares</h3><p className="private-lessons-summary">Se o capital tempo for o seu maior ativo, as aulas particulares são a sua melhor opção.</p><Link href="/aulas-particulares" aria-label="Saiba mais sobre aulas particulares">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/propostas/modelo-aula-dinamica.png" alt="Alunos em uma aula de dança em grupo na Academia No Ritmo" loading="lazy" />
          <div><h3>Aulas em grupo</h3><p className="group-lessons-summary">Aprenda a dançar, pratique e conheça pessoas. Você não precisa ter um par.</p><Link href="/aulas" aria-label="Saiba mais sobre aulas em grupo">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/demo/danca-hero-noritmo.png" alt="Imagem ilustrativa de dança para uma coreografia de casamento" loading="lazy" />
          <div><h3>Coreografias para casamento</h3><p>Uma dança que celebra a história do casal, com coreografia e ensaios personalizados.</p><Link href="/coreografias/casamentos" aria-label="Saiba mais sobre coreografias para casamento">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/demo/movimento-detalhe-noritmo.png" alt="Imagem ilustrativa de movimento para uma coreografia de debutante" loading="lazy" />
          <div><h3>Coreografias para debutantes</h3><p>Celebre seus 15 anos com uma coreografia especial, feita para expressar sua personalidade.</p><Link href="/coreografias/debutantes" aria-label="Saiba mais sobre coreografias para debutantes">Saiba mais sobre o serviço</Link></div>
        </article>
      </div>
      <div className="home-services-grid home-services-extra">
        <article>
          <img src="/images/propostas/modelo-casal-proximo.png" alt="Casal dançando em preparação para um evento" loading="lazy" />
          <div><h3>Coreografias para eventos em geral</h3><p>Projetos personalizados para escolas, empresas e eventos, de pequenos grupos a mais de mil participantes.</p><Link href="/coreografias/eventos" aria-label="Saiba mais sobre coreografias para eventos em geral">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <img src="/images/propostas/modelo-aula-espelho.png" alt="Equipe ensaiando uma coreografia em grupo" loading="lazy" />
          <div><h3>Coreografias para gincanas</h3><p>Uma apresentação pensada para o regulamento, o perfil da equipe e o tempo disponível.</p><Link href="/coreografias/gincanas" aria-label="Saiba mais sobre coreografias para gincanas">Saiba mais sobre o serviço</Link></div>
        </article>
      </div>
    </section>

    <section className="home-modalities" id="estilos">
      <div className="v4-section-heading"><p>Estilos</p><h2>Estilos diferentes, novas formas de entrar na dança.</h2></div>
      <div className="home-modality-grid">{danceModalities.filter((item) => ["forro", "zouk", "samba-de-gafieira", "tango", "sertanejo", "vaneira", "bachata"].includes(item.slug)).map((item) => <Link href={`/modalidades#${item.slug}`} key={item.name}><h3>{item.name}</h3><p>{item.summary}</p><strong>Conhecer estilo</strong></Link>)}<Link className="home-modality-all" href="/modalidades"><h3>Conheça todos os estilos</h3><p>Explore os 23 estilos trabalhados pela Academia No Ritmo.</p><strong className="home-modality-arrow" aria-hidden="true">→</strong></Link></div>
    </section>

    <section className="home-team" id="equipe" aria-labelledby="home-team-title">
      <div className="home-team-heading"><p>Professores da Academia</p><h2 id="home-team-title">Ensino que transforma movimento em aprendizado.</h2></div>
      <div className="home-team-grid">{[
        { role: "Direção", image: "/images/propostas/modelo-casal-maduro.png" },
        { role: "Professores", image: "/images/propostas/modelo-aula-orientada.png" },
        { role: "Colaboradores", image: "/images/propostas/modelo-aula-espelho.png" },
      ].map((profile, index) => <div className={`home-team-card home-team-card-${index + 1}`} key={profile.role}><div className="home-team-card-image"><img src={profile.image} alt={`Imagem ilustrativa para ${profile.role.toLowerCase()} da No Ritmo`} loading="lazy" /><span>0{index + 1}</span></div><div className="home-team-card-content"><strong>{profile.role}</strong><small>Perfil em atualização</small><p>Breve resumo sobre o professor, sua trajetória, formação e áreas de atuação será adicionado após validação com a equipe.</p></div></div>)}</div>
    </section>

    <section className="home-testimonials" id="depoimentos" aria-labelledby="home-testimonials-title">
      <div className="home-testimonial-layout"><div className="home-testimonial-copy"><div className="v4-section-heading"><p>Depoimentos</p><h2 id="home-testimonials-title"><span className="testimonial-title-line">Quem dança também</span><span className="testimonial-title-line"><span className="testimonial-title-quote">“</span>conta<span className="testimonial-title-quote">”</span>.</span></h2><span>Relatos reais de alunos que encontraram na No Ritmo muito mais do que aulas de dança. São experiências de aprendizagem, superação, acolhimento e novas amizades que mostram como a dança pode transformar a rotina, fortalecer a confiança e criar vínculos para a vida.</span><a className="google-review-button" href="https://www.google.com/maps?cid=11367344094392465475" target="_blank" rel="noopener noreferrer">Deixe sua avaliação no Google <span aria-hidden="true">↗</span></a></div></div><TestimonialRotator /></div>
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
      <div className="home-faq-list">{frequentlyAskedQuestions.map((item, index) => <details key={item.question}><summary><span>0{index + 1}</span>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      <Link className="section-action" href="/faq">Ver perguntas frequentes →</Link>
    </section>

    <SiteFooter />
    <a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp"><span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Conversar</strong><small>com a equipe</small></span></a>
  </main>;
}
