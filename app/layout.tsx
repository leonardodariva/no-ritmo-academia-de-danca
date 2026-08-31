import type { Metadata } from "next";
import "./globals.css";
import DetailsAutoClose from "./DetailsAutoClose";

export const metadata: Metadata = {
  title: "No Ritmo Academia de Dança | Apucarana",
  description: "Dança de salão em Apucarana: forró, bolero, gafieira, salsa, zouk, tango, sertanejo, aulas em grupo e particulares.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "DanceSchool", name: "No Ritmo Academia de Dança", description: "Academia de dança de salão em Apucarana, Paraná.", telephone: "+55 43 99921-6027", email: "noritmo@live.com", areaServed: "Apucarana, PR", sameAs: [] };
  return <html lang="pt-BR"><body><DetailsAutoClose />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
