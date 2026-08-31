import DanceStyles from "./DanceStyles";
import Testimonials from "./Testimonials";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5543999216027?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20No%20Ritmo%20e%20quero%20conhecer%20as%20aulas.";
const experimentalUrl =
  "https://wa.me/5543999216027?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental.";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=No+Ritmo+Academia+de+Dança+Apucarana+PR";

const schedule = [
  { number: "01", day: "Segunda-feira", sessions: [{ level: "Turma iniciante", time: "7h — 8h30" }, { level: "Turma de iniciados", time: "8h30 — 10h" }] },
  { number: "02", day: "Terça-feira", sessions: [{ level: "Turma iniciante", time: "7h30 — 9h" }] },
  { number: "03", day: "Quarta-feira", sessions: [{ level: "Turma iniciante", time: "8h — 9h30" }] },
  { number: "04", day: "Quinta-feira", sessions: [{ level: "Turma nível 2", time: "8h — 10h" }] },
  { number: "05", day: "Sexta-feira", sessions: [{ level: "Sem turmas", time: "—" }] },
  { number: "06", day: "Sábado", sessions: [{ level: "Turma iniciante", time: "13h30 — 15h" }, { level: "Turma de iniciados", time: "15h — 16h30" }] },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#modalidades">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="No Ritmo — página inicial">
          <Image className="brand-logo" src="/logo-fundo-claro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" priority unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#horarios">Horários</a>
          <a href="#sobre">Sobre</a>
          <a href="#metodologia">Metodologia</a>
          <a href="#equipe">Equipe</a>
          <a href="#faq">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="header-actions">
          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram da No Ritmo"><FaInstagram aria-hidden="true" /></a>
          <a className="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook da No Ritmo"><FaFacebookF aria-hidden="true" /></a>
        </div>
        <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav aria-label="Navegação mobile"><a href="#inicio">Início</a><a href="#modalidades">Modalidades</a><a href="#horarios">Horários</a><a href="#sobre">Sobre</a><a href="#metodologia">Metodologia</a><a href="#equipe">Equipe</a><a href="#faq">Dúvidas</a><a href="#contato">Contato</a></nav></details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1><span>No Ritmo</span><small>Academia de Dança</small></h1>
          <p className="hero-text">Dança de salão em Apucarana para quem quer começar, evoluir ou viver um momento especial. Turmas por nível, aulas particulares e coreografias personalizadas.</p>
          <div className="hero-actions">
            <a className="button button-black" href="#modalidades">Consultar modalidades</a>
            <a className="button button-red" href="#horarios">Consultar horários</a>
          </div>
        </div>
        <p className="hero-side-note hero-side-left">Desde 2010</p>
        <p className="hero-side-note hero-side-right">Apucarana • PR</p>
      </section>

      <section className="marquee" aria-label="Modalidades em destaque">
        <div className="marquee-track">
          <span>TANGO <i>✦</i> BOLERO <i>✦</i> ZOUK <i>✦</i> FORRÓ <i>✦</i> ARRASTA-PÉ <i>✦</i> VANERÃO <i>✦</i> ROCK <i>✦</i> SOLTINHO <i>✦</i> SALSA <i>✦</i> SALSA CUBANA <i>✦</i> SALSA LOS ANGELES <i>✦</i> CHAMAMÉ <i>✦</i> VALSA <i>✦</i></span>
          <span aria-hidden="true">TANGO <i>✦</i> BOLERO <i>✦</i> ZOUK <i>✦</i> FORRÓ <i>✦</i> ARRASTA-PÉ <i>✦</i> VANERÃO <i>✦</i> ROCK <i>✦</i> SOLTINHO <i>✦</i> SALSA <i>✦</i> SALSA CUBANA <i>✦</i> SALSA LOS ANGELES <i>✦</i> CHAMAMÉ <i>✦</i> VALSA <i>✦</i></span>
        </div>
      </section>

      <DanceStyles />

      <section className="rhythms schedule section" id="horarios">
        <div className="section-heading">
          <div className="section-label light"><span>03</span> Tabela de horários</div>
          <div className="schedule-heading"><h2>Encontre o melhor<br />momento para dançar.</h2></div>
        </div>
        <div className="rhythm-list">
          {schedule.map((item) => (
            <article className="rhythm-row schedule-row" key={item.number}>
              <span>{item.number}</span><h3>{item.day}</h3>
              <div className="schedule-sessions">
                {item.sessions.map((session) => <div className="schedule-session" key={`${item.day}-${session.time}`}><p>{session.level}</p><strong>{session.time}</strong></div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="first-class section" id="primeira-aula">
        <div className="section-label"><span>04</span> Sua primeira aula</div>
        <div className="first-class-heading"><h2>Começar é mais<br /><em>simples do que parece.</em></h2><p>Você não precisa ter experiência. A equipe ajuda a escolher entre uma turma em grupo ou uma aula particular, de acordo com seu momento.</p></div>
        <div className="first-class-steps">
          <article><span>01</span><h3>Fale com a equipe</h3><p>Conte pelo WhatsApp se você está começando, já dança ou procura uma experiência específica.</p></article>
          <article><span>02</span><h3>Escolha o formato</h3><p>Indicamos uma turma adequada ou uma aula particular, conforme seu objetivo, nível e disponibilidade.</p></article>
          <article><span>03</span><h3>Agende sua experimental</h3><p>A aula experimental acontece mediante aviso prévio para que possamos receber você com atenção.</p></article>
        </div>
        <a className="button" href={experimentalUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
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
            <p className="lead">Desde 2010, a No Ritmo transforma música em movimento e alunos em uma comunidade apaixonada pela dança.</p>
            <p>Somos uma academia de Apucarana dedicada ao ensino da dança. Acreditamos que todo mundo pode dançar — no seu tempo, com o seu jeito e por suas próprias razões.</p>
            <p>Da primeira aula ao salão, unimos técnica, consciência musical e um ambiente acolhedor para você ganhar confiança e se divertir.</p>
            <a className="section-more" href="/sobre">Conheça nossa história</a>
          </div>
        </div>
        <div className="values">
          <article><strong>15+</strong><span>anos de história</span></article>
          <article><strong>8+</strong><span>ritmos de salão</span></article>
          <article><strong>1</strong><span>comunidade que dança junto</span></article>
        </div>
      </section>

      <section className="methodology section" id="metodologia">
        <div className="section-label"><span>07</span> Nossa forma de ensinar</div>
        <div className="methodology-heading"><h2>Aprender é mais<br /><em>que repetir passos.</em></h2><p>Esta estrutura apresenta os pilares de trabalho da No Ritmo. Os textos definitivos devem ser validados pela equipe.</p></div>
        <div className="methodology-grid"><article><strong>01</strong><h3>Movimento</h3><p>Consciência corporal, equilíbrio e clareza para construir cada gesto.</p></article><article><strong>02</strong><h3>Musicalidade</h3><p>Escuta, tempo e interpretação para dançar em relação com a música.</p></article><article><strong>03</strong><h3>Comunicação</h3><p>Atenção, condução e resposta como uma conversa respeitosa.</p></article><article><strong>04</strong><h3>Conexão</h3><p>Um ambiente de convivência que acolhe diferentes histórias.</p></article></div>
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

      <section className="faq section" id="faq">
        <div className="section-label"><span>11</span> Perguntas frequentes</div>
        <div className="faq-layout"><div><h2>Antes do primeiro passo.</h2><p>Reunimos respostas rápidas para você chegar mais tranquilo à sua primeira experiência.</p></div><div className="faq-list">
          <details><summary>Preciso saber dançar para começar?<span>+</span></summary><p>Não. As aulas são pensadas para receber iniciantes e acompanhar a evolução de cada pessoa.</p></details>
          <details><summary>Como funciona a aula experimental?<span>+</span></summary><p>A aula experimental acontece mediante aviso prévio. Entre em contato pelo WhatsApp para verificar a turma adequada e agendar.</p></details>
          <details><summary>Posso fazer aula sem ter um par?<span>+</span></summary><p>Converse com a equipe sobre a modalidade desejada. Orientaremos você de acordo com a dinâmica e a disponibilidade da turma.</p></details>
          <details><summary>Vocês criam coreografias para eventos?<span>+</span></summary><p>Sim. Criamos coreografias personalizadas para casamentos, debutantes, formaturas e outras celebrações.</p></details>
          <details><summary>Há aulas particulares?<span>+</span></summary><p>Sim. Elas podem ser individuais ou em casal, com conteúdo e ritmo personalizados para seus objetivos.</p></details>
          <details><summary>Que roupa e calçado devo usar?<span>+</span></summary><p>Prefira roupas confortáveis e um calçado que permita movimentação segura. A equipe pode orientar opções conforme a aula.</p></details>
          <details><summary>Como sei qual é o meu nível?<span>+</span></summary><p>Ao entrar em contato, conte sua experiência. A equipe indicará a turma mais adequada e poderá confirmar isso na aula experimental.</p></details>
          <details><summary>Como funcionam as coreografias para eventos?<span>+</span></summary><p>O projeto é personalizado para debutantes, casamentos, aniversários de 15 anos e outras ocasiões. Música, objetivo e cronograma são alinhados com a equipe.</p></details>
        </div></div>
      </section>

      <section className="trial section" id="experimental">
        <div><p className="eyebrow"><span /> Seu primeiro encontro com a dança</p><h2>Aula experimental<br /><em>com hora marcada.</em></h2></div>
        <div><p>Para receber você com atenção e indicar a melhor turma, a aula experimental precisa ser combinada previamente com a nossa equipe.</p><a className="button" href={experimentalUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a></div>
      </section>

      <section className="location section" id="localizacao">
        <div className="section-label"><span>12</span> Como chegar</div>
        <div className="location-layout"><div><h2>Seu próximo passo começa aqui.</h2><p>Estamos em Apucarana, Paraná. Confirme o endereço atualizado e o melhor acesso antes da sua primeira visita.</p><div className="contact-list"><a href="tel:+5543999216027"><strong>Telefone e WhatsApp</strong><span>(43) 99921-6027</span></a><a href="mailto:noritmo@live.com"><strong>E-mail</strong><span>noritmo@live.com</span></a><div><strong>Endereço</strong><span>Apucarana — PR • confirmação com a equipe</span></div></div><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps</a></div><a className="map-card" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Abrir a localização da No Ritmo no Google Maps"><span>Apucarana • PR</span><strong>Ver rota</strong></a></div>
      </section>

      <footer id="contato">
        <div className="footer-main">
          <a className="brand brand-footer" href="#inicio" aria-label="Voltar ao início"><Image className="brand-logo brand-logo-footer" src="/logo-fundo-escuro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" unoptimized /></a>
          <div><span className="footer-label">Contato</span><a href="tel:+5543999216027">(43) 99921-6027</a><a href="mailto:noritmo@live.com">noritmo@live.com</a></div>
          <div><span className="footer-label">Onde estamos</span><p>Apucarana — Paraná</p><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa</a></div>
          <div><span className="footer-label">Acompanhe</span><p>Novidades, turmas e bastidores</p><div className="footer-socials"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram da No Ritmo"><FaInstagram aria-hidden="true" /> Instagram</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook da No Ritmo"><FaFacebookF aria-hidden="true" /> Facebook</a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} No Ritmo Academia de Dança</span><span>Ensino de dança • Apucarana, PR</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp">
        <span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Agendar</strong><small>uma aula</small></span>
      </a>
    </main>
  );
}
