import SubpageShell from "../SubpageShell";
import { classFormats } from "../../content/classes";

export default function AulasPage() { return <SubpageShell kicker="Do seu jeito" title="Formatos de aula" intro="Escolha entre experiências em grupo, acompanhamento particular e projetos de coreografia para ocasiões especiais." sections={[
  ...classFormats.map((format, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: format.name,
    text: format.detail,
  })),
  {number:"04",title:"Como começar",text:"Conte à equipe seu objetivo, experiência e disponibilidade. Vagas, horários e investimento são confirmados diretamente no atendimento."},
]} />; }
