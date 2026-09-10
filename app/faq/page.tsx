import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { frequentlyAskedQuestions } from "../../content/faq";

export const metadata: Metadata = { title: "Perguntas frequentes | No Ritmo", description: "Respostas para começar na dança de salão com mais segurança e clareza.", alternates: { canonical: "/faq" } };

export default function FaqPage() { return <SubpageShell compactHero kicker="Antes do primeiro passo" title="Perguntas frequentes" intro="Respostas rápidas para quem está conhecendo a No Ritmo e quer começar com mais segurança." sections={frequentlyAskedQuestions.map((item, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: item.question,
  text: item.answer,
}))} />; }
