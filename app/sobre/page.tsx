import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { institutionalSections } from "../../content/about";

export const metadata: Metadata = { title: "Sobre a No Ritmo | Academia de Dança", description: "Conheça a identidade, a forma de ensinar e a experiência da Academia de Dança No Ritmo em Apucarana.", alternates: { canonical: "/sobre" } };

export default function SobrePage() { return <SubpageShell kicker="Conheça a academia" title="Sobre a No Ritmo" intro="Dança, aprendizado e convivência em experiências pensadas para diferentes objetivos e momentos." sections={institutionalSections.map((section, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: section.title,
  text: section.text,
}))} />; }
