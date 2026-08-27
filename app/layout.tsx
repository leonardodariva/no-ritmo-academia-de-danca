import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Ritmo Academia de Dança | Apucarana",
  description: "Dança de salão em Apucarana: forró, bolero, gafieira, salsa, zouk, tango, sertanejo, aulas em grupo e particulares.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
