import DanceStyles from "./DanceStyles";
import Testimonials from "./Testimonials";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { frequentlyAskedQuestions } from "../content/faq";
import { siteContact, weeklySchedule } from "../content/site";
import { danceModalities } from "../content/classes";

const modalityMarquee = danceModalities.map((item) => item.name.toUpperCase()).join(" ✦ ");

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#modalidades">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="No Ritmo — página inicial">
          <Image className="brand-logo" src="/logo-fundo-claro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" priority unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="#inicio">Início</a><details className="nav-group"><summary>A No Ritmo</summary><div><a href="#sobre">Quem Somos</a><a href="/sobre">História</a><a href="#equipe">Professores</a><a href="#sobre">Filosofia</a><a href="#metodologia">Nossa Metodologia</a></div></details><details className="nav-group"><summary>Conhecimento</summary><div><Link href="/conhecimento/danca-de-salao">Dança de Salão</Link><Link href="/conhecimento">Corpo e Movimento</Link><Link href="/conhecimento/comunicacao">Comunicação</Link><Link href="/conhecimento">Percepção</Link><Link href="/conhecimento">Desenvolvimento Humano</Link><Link href="/conhecimento">Musicalidade</Link><Link href="/conhecimento">Ensino da Dança</Link><Link href="/conhecimento">Cultura da Dança</Link></div></details><details className="nav-group"><summary>Artigos</summary><div><Link href="/artigos">Todos os artigos</Link><Link href="/artigos">Destaques</Link><Link href="/artigos">Mais recentes</Link><Link href="/artigos">Categorias</Link></div></details><details className="nav-group"><summary>Aulas</summary><div><Link href="/modalidades">Modalidades</Link><Link href="/aulas">Como funcionam</Link><Link href="/aulas">Comece a dançar</Link></div></details><Link href="/eventos">Eventos</Link><a href="#contato">Contato</a></nav>
        <a className="button button-small" href={siteContact.experimentalHref} target="_blank" rel="noreferrer">Agendar aula</a>
          <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav aria-label="Navegação mobile"><a href="#inicio">Início</a><a href="#modalidades">Modalidades</a><a href="#horarios">Horários</a><a href="#sobre">Sobre</a><a href="#metodologia">Metodologia</a><Link href="/conhecimento">Conhecimento</Link><Link href="/artigos">Artigos</Link><Link href="/eventos">Eventos</Link><a href="#equipe">Equipe</a><a href="#faq">Dúvidas</a><a href="#contato">Contato</a></nav></details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="hero-kicker">Dança, conexão e desenvolvimento.</p><h1><span>No Ritmo</span><small>Academia de Dança</small></h1>
          <p className="hero-text">A dança vai além da execução de passos: é comunicação, percepção, convivência e desenvolvimento humano.</p>
          <div className="hero-actions">
            <a className="button button-black" href="#sobre">Conheça a No Ritmo</a>
            <a className="button button-red" href="#metodologia">Nossa visão</a>
            <Link className="button button-ghost" href="/artigos">Consultar artigos</Link>
          </div>
        </div>
        <p className="hero-side-note hero-side-left">No seu ritmo</p>
        <p className="hero-side-note hero-side-right">Apucarana • PR</p>
      </section>

      <section className="marquee" aria-label="Modalidades em destaque">
        <div className="marquee-track">
          <span>{modalityMarquee} <i>✦</i>&nbsp;</span>
          <span aria-hidden="true">{modalityMarquee} <i>✦</i>&nbsp;</span>
        </div>
      </section>

      <DanceStyles />

      <section className="rhythms schedule section" id="horarios">
        <div className="section-heading">
          <div className="section-label light"><span>03</span> Tabela de horários</div>
          <div className="schedule-heading"><h2>Encontre o melhor<br />momento para dançar.</h2></div>
        </div>
        <div className="rhythm-list">
          {weeklySchedule.map((item, index) => (
            <article className="rhythm-row schedule-row" key={item.day}>
              <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.day}</h3>
              <div className="schedule-sessions">
                {item.sessions.length > 0 ? item.sessions.map((session) => <div className="schedule-session" key={`${item.day}-${session.time}`}><p>{session.level}</p><strong>{session.time}</strong></div>) : <div className="schedule-session"><p>Sem turma regular</p><strong>—</strong></div>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="first-class section" id="primeira-aula">
        <div className="section-label"><span>04</span> Mais que aprender passos</div>
        <div className="first-class-heading"><h2>A dança é uma forma<br /><em>de compreender e conectar.</em></h2><p>Na No Ritmo, movimento, percepção, comunicação, musicalidade e convivência se encontram em uma experiência de desenvolvimento humano.</p></div>
        <div className="first-class-steps">
          <article><span>01</span><h3>Fale com a equipe</h3><p>Conte pelo WhatsApp se você está começando, já dança ou procura uma experiência específica.</p></article>
          <article><span>02</span><h3>Escolha o formato</h3><p>Indicamos uma turma adequada ou uma aula particular, conforme seu objetivo, nível e disponibilidade.</p></article>
          <article><span>03</span><h3>Agende sua experimental</h3><p>A aula experimental acontece mediante aviso prévio para que possamos receber você com atenção.</p></article>
        </div>
        <a className="button" href={siteContact.experimentalHref} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
      </section>

      <section className="private-lessons section" id="particulares">
        <div className="private-lessons-copy"><div className="section-label light"><span>05</span> Aulas particulares</div><h2>Seu objetivo.<br /><em>No seu ritmo.</em></h2><p>Um acompanhamento próximo para quem deseja aprender com mais flexibilidade, acelerar a evolução, preparar uma dança especial ou trabalhar pontos específicos.</p><a className="button button-red" href="/aulas-particulares">Conhecer aulas particulares</a></div>
        <div className="private-lessons-features"><article><span>01</span><h3>Conteúdo personalizado</h3><p>O plano de aula acompanha suas necessidades e seu repertório.</p></article><article><span>02</span><h3>Individual ou em casal</h3><p>Um formato dedicado, com atenção integral do professor.</p></article><article><span>03</span><h3>Horários combinados</h3><p>Consulte a equipe para encontrar a disponibilidade ideal.</p></article></div>
      </section>

      <section className="about section" id="sobre">
        <div className="section-label"><span>06</span> Nossa história</div>
        <div className="about-grid">
          <h2>Mais que passos.<br /><em>Encontros.</em></h2>
          <div className="about-copy">
            <p className="lead">A No Ritmo transforma música em movimento e reúne pessoas em torno da dança.</p>
            <p>Somos uma academia de Apucarana dedicada ao ensino da dança. Acreditamos que todo mundo pode dançar — no seu tempo, com o seu jeito e por suas próprias razões.</p>
            <p>Da primeira aula ao salão, unimos técnica, consciência musical e um ambiente acolhedor para você ganhar confiança e se divertir.</p>
            <a className="section-more" href="/sobre">Conheça nossa história</a>
          </div>
        </div>
        <div className="values">
          <article><strong>8</strong><span>ritmos apresentados</span></article>
          <article><strong>3</strong><span>formatos de experiência</span></article>
          <article><strong>1</strong><span>comunidade que dança junto</span></article>
        </div>
      </section>

      <section className="methodology section" id="metodologia">
        <div className="section-label"><span>07</span> Nossa Metodologia</div>
        <div className="methodology-heading"><h2>Princípios que orientam<br /><em>nossa forma de ensinar.</em></h2><p>Movimento, percepção, comunicação, conexão, musicalidade e socialização formam uma maneira própria de compreender e viver a dança.</p></div>
        <div className="methodology-grid"><article><strong>01</strong><h3>Movimento</h3><p>Consciência corporal, equilíbrio e clareza para construir cada gesto.</p></article><article><strong>02</strong><h3>Percepção</h3><p>Observar, ouvir e sentir para compreender o próprio corpo e o outro.</p></article><article><strong>03</strong><h3>Comunicação</h3><p>Atenção, condução e resposta como uma conversa respeitosa.</p></article><article><strong>04</strong><h3>Conexão</h3><p>Um ambiente de convivência que acolhe diferentes histórias.</p></article><article><strong>05</strong><h3>Musicalidade</h3><p>Escuta, tempo e interpretação para dançar em relação com a música.</p></article><article><strong>06</strong><h3>Socialização</h3><p>Encontros que ampliam vínculos, confiança e pertencimento.</p></article></div>
      </section>

      <section className="team section" id="equipe">
        <div className="section-label light"><span>07</span> Professores e equipe</div>
        <div className="team-heading"><h2>Quem ensina também<br /><em>dança junto.</em></h2><p>Uma equipe preparada para acolher cada começo e acompanhar cada evolução com técnica, atenção e respeito.</p></div>
        <div className="team-grid">
          {["Ana Martins — direção e dança de salão", "Bruno Lima — professor", "Carla Souza — atendimento e acolhimento"].map((role, index) => (
            <article key={role}><div className={`team-photo team-photo-${index + 1}`}><span>Imagem demonstrativa</span></div><p>{role}</p><h3>Equipe No Ritmo</h3></article>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="gallery section" id="galeria">
        <div className="gallery-heading"><div className="section-label light"><span>09</span> Galeria</div><h2>Momentos que<br />ganham movimento.</h2><p>Fotos das aulas, dos encontros e dos bastidores da No Ritmo. Em breve, também teremos vídeos por aqui.</p></div>
        <div className="gallery-grid" aria-label="Espaços reservados para fotos e vídeos da academia"><div className="gallery-item gallery-large"><span>Foto principal</span></div><div className="gallery-item"><span>Aulas</span></div><div className="gallery-item"><span>Vídeos</span></div></div>
      </section>

      <section className="learning section" id="informacoes-uteis">
        <div className="section-label"><span>10</span> Informações úteis</div>
        <div className="learning-heading"><h2>Aprender dança envolve<br /><em>todo o corpo.</em></h2><p>Observar, ouvir e experimentar o movimento são caminhos que se complementam. Cada pessoa percebe e organiza essas informações de uma maneira própria.</p></div>
        <div className="learning-grid"><article><span>01</span><h3>Percepção visual</h3><p>Observar demonstrações ajuda a reconhecer formas, direções, postura e relação entre os movimentos.</p></article><article><span>02</span><h3>Percepção auditiva</h3><p>Escutar contagens, orientações e elementos da música contribui para compreender tempo e ritmo.</p></article><article><span>03</span><h3>Percepção cinestésica</h3><p>Experimentar o movimento desenvolve consciência corporal, equilíbrio, coordenação e memória motora.</p></article></div>
      </section>

      <section className="articles-preview section" id="artigos-preview">
        <div className="section-label"><span>11</span> Conteúdo editorial</div>
        <div className="articles-preview-heading"><h2>Ideias para<br /><em>dançar melhor.</em></h2><p>Textos demonstrativos sobre dança, movimento e comunicação. O acervo crescerá com publicações oficiais da No Ritmo.</p></div>
        <div className="articles-preview-grid"><Link href="/artigos/comecar-a-dancar"><span>Começar</span><h3>Como começar a dançar depois de adulto</h3><strong>Ler artigo →</strong></Link><Link href="/artigos/danca-e-comunicacao"><span>Comunicação</span><h3>Dança de salão é comunicação</h3><strong>Ler artigo →</strong></Link><Link className="articles-preview-all" href="/artigos"><span>Biblioteca</span><h3>Ver todos os artigos</h3><strong>Acessar artigos →</strong></Link></div>
      </section>

      <section className="practice section" id="na-pratica">
        <div className="section-label"><span>12</span> Na prática</div>
        <div className="practice-heading"><h2>O conhecimento<br /><em>ganha movimento.</em></h2><p>Escolha como viver a experiência No Ritmo: em uma modalidade, numa aula, em um evento ou na agenda da academia.</p></div>
        <div className="practice-grid"><Link href="/modalidades"><strong>Modalidades</strong><span>Conheça os formatos de aula →</span></Link><Link href="/aulas"><strong>Aulas</strong><span>Entenda como funcionam →</span></Link><Link href="/eventos"><strong>Eventos</strong><span>Veja experiências especiais →</span></Link><Link href="/horarios"><strong>Agenda</strong><span>Confira dias e horários →</span></Link></div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-label"><span>11</span> Perguntas frequentes</div>
        <div className="faq-layout"><div><h2>Antes do primeiro passo.</h2><p>Reunimos respostas rápidas para você chegar mais tranquilo à sua primeira experiência.</p></div><div className="faq-list">
          {frequentlyAskedQuestions.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
        </div></div>
      </section>

      <section className="trial section" id="experimental">
        <div><p className="eyebrow"><span /> Seu primeiro encontro com a dança</p><h2>Aula experimental<br /><em>com hora marcada.</em></h2></div>
        <div><p>Para receber você com atenção e indicar a melhor turma, a aula experimental precisa ser combinada previamente com a nossa equipe.</p><a className="button" href={siteContact.experimentalHref} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a></div>
      </section>

      <section className="location section" id="localizacao">
        <div className="section-label"><span>12</span> Conheça a No Ritmo</div>
        <div className="location-layout"><div><h2>Seu próximo passo começa aqui.</h2><p>Estamos em {siteContact.city}, {siteContact.state}. Confirme o endereço atualizado e o melhor acesso antes da sua primeira visita.</p><div className="contact-list"><a href={siteContact.phoneHref}><strong>Telefone e WhatsApp</strong><span>{siteContact.phoneDisplay}</span></a><a href={siteContact.emailHref}><strong>E-mail</strong><span>{siteContact.email}</span></a><div><strong>Endereço</strong><span>{siteContact.city} — {siteContact.state} • confirmação com a equipe</span></div></div><a className="button" href={siteContact.mapsHref} target="_blank" rel="noreferrer">Abrir no Google Maps</a></div><a className="map-card" href={siteContact.mapsHref} target="_blank" rel="noreferrer" aria-label="Abrir a localização da No Ritmo no Google Maps"><span>{siteContact.city} • {siteContact.state}</span><strong>Ver rota</strong></a></div>
      </section>

      <footer id="contato">
        <div className="footer-main">
          <a className="brand brand-footer" href="#inicio" aria-label="Voltar ao início"><Image className="brand-logo brand-logo-footer" src="/logo-fundo-escuro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" unoptimized /></a>
          <div><span className="footer-label">Contato</span><a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a><a href={siteContact.emailHref}>{siteContact.email}</a></div>
          <div><span className="footer-label">Onde estamos</span><p>{siteContact.city} — {siteContact.state}</p><a href={siteContact.mapsHref} target="_blank" rel="noreferrer">Abrir no mapa</a></div>
          <div><span className="footer-label">Acompanhe</span><p>Os perfis oficiais serão adicionados após confirmação.</p></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} No Ritmo Academia de Dança</span><span>Ensino de dança • Apucarana, PR</span></div>
      </footer>
      <a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp">
        <span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Agendar</strong><small>uma aula</small></span>
      </a>
    </main>
  );
}
