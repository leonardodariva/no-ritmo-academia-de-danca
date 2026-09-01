import type { Metadata } from "next";
import "./globals.css";
import DetailsAutoClose from "./DetailsAutoClose";

export const metadata: Metadata = {
  metadataBase: new URL("https://no-ritmo-academia-de-danca.sites.openai.com"),
  title: "No Ritmo Academia de Dança | Apucarana",
  description: "No Ritmo é uma academia de dança em Apucarana e uma plataforma de conhecimento sobre dança, movimento, comunicação e cultura.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "No Ritmo Academia de Dança", description: "Dança, conhecimento, movimento e encontros em Apucarana.", type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "DanceSchool", name: "No Ritmo Academia de Dança", description: "Academia de dança de salão em Apucarana, Paraná.", telephone: "+55 43 99921-6027", email: "noritmo@live.com", areaServed: "Apucarana, PR", sameAs: [] };
  return <html lang="pt-BR"><body><DetailsAutoClose />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
