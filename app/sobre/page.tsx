import SubpageShell from "../SubpageShell";
import { institutionalSections } from "../../content/about";

export default function SobrePage() { return <SubpageShell kicker="Conheça a academia" title="Sobre a No Ritmo" intro="Dança, aprendizado e convivência em experiências pensadas para diferentes objetivos e momentos." sections={institutionalSections.map((section, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: section.title,
  text: section.text,
}))} />; }
