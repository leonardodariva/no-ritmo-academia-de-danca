import SubpageShell from "../SubpageShell";
import { frequentlyAskedQuestions } from "../../content/faq";

export default function FaqPage() { return <SubpageShell kicker="Antes do primeiro passo" title="Perguntas frequentes" intro="Respostas rápidas para quem está conhecendo a No Ritmo e quer começar com mais segurança." sections={frequentlyAskedQuestions.map((item, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: item.question,
  text: item.answer,
}))} />; }
