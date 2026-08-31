import Image from "next/image";
import Link from "next/link";

type Section = { number: string; title: string; text: string };

export default function SubpageShell({ kicker, title, intro, sections }: { kicker: string; title: string; intro: string; sections: Section[] }) {
  return (
    <main className="subpage">
      <header className="subpage-header">
        <Link href="/" aria-label="Voltar para a página inicial"><Image className="brand-logo" src="/logo-fundo-claro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" unoptimized /></Link>
        <nav aria-label="Navegação das páginas internas">
          <Link href="/sobre">Sobre</Link><Link href="/aulas-particulares">Particulares</Link><Link href="/coreografias">Coreografias</Link><Link href="/horarios">Horários</Link><Link href="/contato">Contato</Link>
        </nav>
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
