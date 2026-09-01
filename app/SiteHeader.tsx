import Image from "next/image";
import Link from "next/link";
import { primaryNavigation } from "../content/navigation";

export default function SiteHeader({ floating = false }: { floating?: boolean }) {
  return <header className={floating ? "site-header" : "v4-header"}>
    <Link className="brand" href="/" aria-label="No Ritmo — página inicial"><Image className="brand-logo" src="/logo-fundo-claro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" priority unoptimized /></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">{primaryNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <Link className="header-knowledge-link" href="/conhecimento">Explorar</Link>
    <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav aria-label="Navegação mobile">{primaryNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></details>
  </header>;
}
