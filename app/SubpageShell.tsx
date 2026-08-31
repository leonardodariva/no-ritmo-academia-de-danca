import Image from "next/image";
import Link from "next/link";

type Section = { number: string; title: string; text: string };

export default function SubpageShell({ kicker, title, intro, sections }: { kicker: string; title: string; intro: string; sections: Section[] }) {
  return (
    <main className="subpage">
      <header className="subpage-header">
        <Link href="/" aria-label="Voltar para a página inicial"><Image className="brand-logo" src="/logo-fundo-claro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" unoptimized /></Link>
        <nav aria-label="Navegação das páginas internas">
          <Link href="/">Início</Link>
          <details className="nav-group"><summary>A No Ritmo</summary><div className="nav-dropdown"><Link href="/sobre#quem-somos">Quem Somos</Link><Link href="/sobre#historia">História</Link><Link href="/autores">Professores</Link><Link href="/sobre#filosofia">Filosofia</Link><Link href="/sobre#metodologia">Nossa Metodologia</Link></div></details>
          <details className="nav-group"><summary>Conhecimento</summary><div className="nav-dropdown"><Link href="/conhecimento/danca-de-salao">Dança de Salão</Link><Link href="/conhecimento">Corpo e Movimento</Link><Link href="/conhecimento/comunicacao">Comunicação</Link><Link href="/conhecimento/percepcao">Percepção</Link><Link href="/conhecimento/desenvolvimento-humano">Desenvolvimento Humano</Link><Link href="/conhecimento/musicalidade">Musicalidade</Link><Link href="/conhecimento/ensino-da-danca">Ensino da Dança</Link><Link href="/conhecimento/cultura-da-danca">Cultura da Dança</Link></div></details>
          <details className="nav-group"><summary>Artigos</summary><div className="nav-dropdown"><Link href="/artigos">Todos os artigos</Link><Link href="/artigos?filtro=destaques">Destaques</Link><Link href="/artigos?filtro=recentes">Mais recentes</Link><Link href="/artigos#categorias">Categorias</Link></div></details>
          <details className="nav-group"><summary>Aulas</summary><div className="nav-dropdown"><Link href="/modalidades">Modalidades</Link><Link href="/aulas">Como funcionam</Link><Link href="/aulas#comecar">Comece a dançar</Link></div></details>
          <Link href="/eventos">Eventos</Link><Link href="/contato">Contato</Link>
        </nav>
        <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav aria-label="Navegação mobile"><Link href="/sobre">A No Ritmo</Link><Link href="/conhecimento">Conhecimento</Link><Link href="/artigos">Artigos</Link><Link href="/aulas">Aulas</Link><Link href="/eventos">Eventos</Link><Link href="/contato">Contato</Link></nav></details>
        <Link className="subpage-back" href="/">← Início</Link>
      </header>
      <section className="subpage-hero">
        <p>{kicker}</p><h1>{title}</h1><div><span>No Ritmo • Apucarana</span><p>{intro}</p></div>
      </section>
      <nav className="subpage-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span>{title}</span></nav>
      <section className="subpage-sections">
        {sections.map((section) => <article key={section.number}><span>{section.number}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}
      </section>
      <section className="subpage-cta"><p>Fale diretamente com a equipe</p><h2>Vamos encontrar a melhor experiência para você?</h2><a href="https://wa.me/5543999216027" target="_blank" rel="noreferrer">Conversar no WhatsApp</a></section>
      <footer className="subpage-footer"><span>No Ritmo Academia de Dança</span><Link href="/">Voltar para o site</Link></footer>
    </main>
  );
}
