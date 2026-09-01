import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { primaryNavigation } from "../content/navigation";

export default function SiteHeader({ floating = false }: { floating?: boolean }) {
  return <>{!floating && <a className="skip-link" href="#main-content">Pular para o conteúdo</a>}<header className={floating ? "site-header" : "v4-header"}>
    <Link className="brand" href="/" aria-label="No Ritmo — página inicial"><Image className="brand-logo" src="/logo-fundo-claro.png" width={1741} height={421} alt="No Ritmo Academia de Dança" priority unoptimized /></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">{primaryNavigation.map((item) => "children" in item ? <details className="nav-group" name="desktop-navigation" key={item.href}><summary>{item.label}</summary><div className="nav-dropdown">{item.children.map((child) => <Link key={child.href} href={child.href}>{child.label}</Link>)}</div></details> : <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <div className="header-socials" aria-label="Redes sociais da No Ritmo">
      <a className="social-link" href="https://www.instagram.com/noritmoacademiadedanca/" target="_blank" rel="noreferrer" aria-label="Instagram da No Ritmo"><FaInstagram aria-hidden="true" /></a>
      <a className="social-link" href="https://www.facebook.com/NoRitmoAcademiadeDanca?locale=pt_BR" target="_blank" rel="noreferrer" aria-label="Facebook da No Ritmo"><FaFacebookF aria-hidden="true" /></a>
    </div>
    <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav aria-label="Navegação mobile">{primaryNavigation.map((item) => "children" in item ? <div className="mobile-nav-section" key={item.href}><strong>{item.label}</strong>{item.children.map((child) => <Link key={child.href} href={child.href}>{child.label}</Link>)}</div> : <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></details>
  </header></>;
}
