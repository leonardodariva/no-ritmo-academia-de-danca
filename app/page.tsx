import type { Metadata } from "next";
import Link from "next/link";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { AtSign, MapPin, Phone } from "lucide-react";

import { danceModalities } from "../content/classes";
import { siteContact, weeklySchedule } from "../content/site";
import { frequentlyAskedQuestions } from "../content/faq";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import HeroCarousel from "./HeroCarousel";
import TestimonialRotator from "./TestimonialRotator";
import { galleryAlbums } from "../content/gallery";
import ProjectCards from "./projetos/ProjectCards";

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
        <div><Link className="button" href="#produtos">Conheça nossos serviços</Link><Link className="text-link" href="#sobre">Clique para conhecer a No Ritmo</Link></div>
      </div>
      <HeroCarousel />
    </section>

    <section className="v4-statement" id="sobre">
      <p className="statement-eyebrow">Sobre a No Ritmo</p>
      <div className="statement-visual" role="img" aria-label="Imagem ilustrativa temporária de uma dança em movimento"><span>Imagem de demonstração</span></div>
      <div className="statement-copy"><p className="statement-eyebrow">Sobre a No Ritmo</p><h2>Muito além de aprender a dançar</h2><div className="statement-body"><p>Desde&nbsp;2010, a No Ritmo Academia de Dança conecta pessoas por meio da dança de salão. Em Apucarana, mais de 10 mil pessoas já fizeram parte dessa história.</p><p>Nosso ensino integra técnica, consciência corporal, comunicação e convivência, respeitando o ritmo de cada pessoa e desenvolvendo autonomia para aprender e dançar.</p><p>Acreditamos que dançar é perceber a si mesmo, compreender o outro e aprender juntos.</p></div><Link className="statement-button" href="/sobre">Saiba mais sobre a No Ritmo</Link></div>
    </section>

<section className="home-classes home-services" id="produtos">
      <div className="v4-section-heading light"><p>Serviços No Ritmo</p><h2>Nossos serviços</h2><Link className="services-all-button" href="/servicos">Acessar todos os serviços</Link></div>
      <div className="home-services-grid">
        <article>
          <Link className="service-card-hitarea" href="/aulas-particulares" aria-label="Abrir serviço de aulas particulares" />
          <img src="/images/propostas/modelo-aula-orientada.png" alt="Professor orientando uma aula particular na Academia No Ritmo" loading="lazy" />
          <div><h3>Aulas particulares</h3><p className="private-lessons-summary">Se o capital tempo for o seu maior ativo, as aulas particulares são a sua melhor opção.</p><Link href="/aulas-particulares" aria-label="Saiba mais sobre aulas particulares">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/aulas" aria-label="Abrir serviço de aulas em grupo" />
          <img src="/images/propostas/modelo-aula-dinamica.png" alt="Alunos em uma aula de dança em grupo na Academia No Ritmo" loading="lazy" />
          <div><h3>Aulas em grupo</h3><p className="group-lessons-summary">Aprenda a dançar, pratique e conheça pessoas. Você não precisa ter um par.</p><Link href="/aulas" aria-label="Saiba mais sobre aulas em grupo">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/coreografias/casamentos" aria-label="Abrir serviço de coreografias para casamento" />
          <img src="/images/demo/danca-hero-noritmo.png" alt="Imagem ilustrativa de dança para uma coreografia de casamento" loading="lazy" />
          <div><h3>Coreografias para casamento</h3><p>Uma dança que celebra a história do casal, com coreografia e ensaios personalizados.</p><Link href="/coreografias/casamentos" aria-label="Saiba mais sobre coreografias para casamento">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/coreografias/debutantes" aria-label="Abrir serviço de coreografias para debutantes" />
          <img src="/images/demo/movimento-detalhe-noritmo.png" alt="Imagem ilustrativa de movimento para uma coreografia de debutante" loading="lazy" />
          <div><h3>Coreografias para debutantes</h3><p>Celebre seus 15 anos com uma coreografia especial, feita para expressar sua personalidade.</p><Link href="/coreografias/debutantes" aria-label="Saiba mais sobre coreografias para debutantes">Saiba mais sobre o serviço</Link></div>
        </article>
      </div>
      <div className="home-services-grid home-services-extra">
        <article>
          <Link className="service-card-hitarea" href="/coreografias/eventos" aria-label="Abrir serviço de coreografias para eventos" />
          <img src="/images/propostas/modelo-casal-proximo.png" alt="Casal dançando em preparação para um evento" loading="lazy" />
          <div><h3>Coreografias para eventos em geral</h3><p>Projetos personalizados para escolas, empresas e eventos, de pequenos grupos a mais de mil participantes.</p><Link href="/coreografias/eventos" aria-label="Saiba mais sobre coreografias para eventos em geral">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/coreografias/gincanas" aria-label="Abrir serviço de coreografias para gincanas" />
          <img src="/images/propostas/modelo-aula-espelho.png" alt="Equipe ensaiando uma coreografia em grupo" loading="lazy" />
          <div><h3>Coreografias para gincanas</h3><p>Uma apresentação pensada para o regulamento, o perfil da equipe e o tempo disponível.</p><Link href="/coreografias/gincanas" aria-label="Saiba mais sobre coreografias para gincanas">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/formacao/cfp" aria-label="Abrir serviço CFP" />
          <img src="/images/propostas/modelo-aula-orientada.png" alt="Formação de professores de dança" loading="lazy" />
          <div><h3>CFP — Curso de Formação Profissional em Dança de Salão</h3><p>Conhecimento para dançar. Método para ensinar. Autonomia para continuar aprendendo.</p><Link href="/formacao/cfp" aria-label="Saiba mais sobre o CFP">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/formacao/cfa" aria-label="Abrir serviço CFA" />
          <img src="/images/propostas/modelo-aula-espelho.png" alt="Formação de assistentes de dança" loading="lazy" />
          <div><h3>CFA — Curso de Formação de Assistentes</h3><p>Muito além de aprender a dançar: compreenda como as pessoas aprendem e prepare-se para apoiar o professor e acolher os alunos.</p><Link href="/formacao/cfa" aria-label="Saiba mais sobre o CFA">Saiba mais sobre o serviço</Link></div>
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
        { role: "Luciano", image: "/images/propostas/modelo-casal-maduro.png" },
        { role: "Leonardo", image: "/images/propostas/modelo-aula-orientada.png" },
        { role: "Lilian", image: "/images/propostas/modelo-aula-espelho.png" },
        { role: "Paulo Menossi", image: "/images/propostas/paulo-menossi-aula.png", subtitle: "Formado pelo CFP da No Ritmo", bio: "Aluno da No Ritmo há três anos, Paulo decidiu aprofundar sua trajetória na dança e se preparar para ensinar. Concluiu o Curso de Formação de Professores (CFP) da academia com muito estudo, dedicação e empenho em cada etapa, incluindo o estágio e a prática de aulas assistidas." },
      ].map((profile, index) => <div className={`home-team-card home-team-card-${index + 1}`} key={profile.role}><div className="home-team-card-image"><img src={profile.image} alt={`Imagem ilustrativa para ${profile.role.toLowerCase()} da No Ritmo`} loading="lazy" /><span>0{index + 1}</span></div><div className="home-team-card-content"><strong>{profile.role}</strong><small>{profile.subtitle ?? "Perfil em atualização"}</small><p>{profile.bio ?? "Breve resumo sobre o professor, sua trajetória, formação e áreas de atuação será adicionado após validação com a equipe."}</p></div></div>)}</div>
    </section>

    <section className="home-testimonials" id="depoimentos" aria-labelledby="home-testimonials-title">
      <div className="home-testimonial-layout"><div className="home-testimonial-copy"><div className="v4-section-heading"><p>Depoimentos</p><h2 id="home-testimonials-title"><span className="testimonial-title-line">Quem dança</span><span className="testimonial-title-line">também <span className="testimonial-title-quote">“conta”</span></span></h2><span>Relatos reais de alunos que encontraram na No Ritmo muito mais do que aulas de dança. São experiências de aprendizagem, superação, acolhimento e novas amizades que mostram como a dança pode transformar a rotina, fortalecer a confiança e criar vínculos para a vida.</span><a className="google-review-button" href="https://www.google.com/maps?cid=11367344094392465475" target="_blank" rel="noopener noreferrer"><FaGoogle aria-hidden="true" />Deixe sua avaliação no Google</a></div></div><TestimonialRotator /></div>
    </section>

    <section className="home-events" id="eventos" aria-labelledby="home-events-title">
      <div className="v4-section-heading"><p>Eventos e projetos</p><h2 id="home-events-title">A dança continua fora da sala.</h2><Link className="section-action" href="/projetos">Acessar todos os projetos</Link></div>
      <ProjectCards />
    </section>

    <section className="gallery home-gallery" id="galeria" aria-labelledby="home-gallery-title">
      <div className="gallery-heading-row"><div className="gallery-heading"><p>Galeria</p><h2 id="home-gallery-title">Momentos em movimento.</h2><p>Entre no clima da No Ritmo: sorrisos, novos passos e encontros que dão vontade de viver tudo de novo.</p></div><Link className="button gallery-all-button" href="/galeria">Ver todos os álbuns</Link></div>
      <div className="gallery-grid">{galleryAlbums.slice(0, 3).map((album, index) => <Link className={"gallery-item home-album" + (index === 0 ? " gallery-large" : "")} href={"/galeria/" + album.slug} key={album.slug}><img src={album.photos[0].src} alt={album.photos[0].alt} loading="lazy" /><div className="home-album-copy"><small>{album.category} · {album.photos.length} fotos · Demonstração</small><h3>{album.title}</h3><span>Ver álbum</span></div></Link>)}</div>
    </section>

    <section className="home-practical" id="pratico">
      <div className="v4-section-heading"><p>Contato</p><h2>Fale com a No Ritmo.</h2><Link className="button" href="/contato">Ver todas as informações</Link></div>
      <div className="home-practical-grid">
        <div className="home-schedule"><h3>Turmas e horários</h3>{weeklySchedule.filter((day) => day.sessions.length).map((day) => <div key={day.day}><strong>{day.day}</strong><span>{day.sessions.map((session) => <span key={`${day.day}-${session.level}`}><b>{session.level}</b>: {session.time}</span>)}</span></div>)}</div>
        <div className="home-contact-card"><p>Meios de contato</p><div className="home-contact-map"><iframe title="Mapa da No Ritmo em Apucarana" src="https://www.google.com/maps?q=No+Ritmo+Academia+de+Dança+Apucarana+PR&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><a className="home-map-link" href={siteContact.mapsHref} target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true" />Abrir localização no mapa</a><div className="home-contact-details"><a className="contact-with-icon" href={siteContact.phoneHref}><Phone size={18} aria-hidden="true" />{siteContact.phoneDisplay}</a><a className="contact-with-icon" href={siteContact.emailHref}><AtSign size={18} aria-hidden="true" />{siteContact.email}</a></div></div>
      </div>
    </section>

    <section className="home-faq" id="faq" aria-labelledby="home-faq-title">
      <div className="v4-section-heading faq-heading"><p>Perguntas frequentes</p><div className="faq-heading-row"><div><h2 id="home-faq-title">Antes de começar, tire suas dúvidas.</h2></div><Link className="button faq-all-button" href="/faq">Ver perguntas frequentes</Link></div></div>
      <div className="home-faq-list">{frequentlyAskedQuestions.map((item, index) => <details key={item.question}><summary><span>0{index + 1}</span>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>

    <SiteFooter />
    <a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp"><span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Conversar</strong><small>com a equipe</small></span></a>
  </main>;
}
