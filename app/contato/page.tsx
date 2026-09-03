import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { contactChannels, siteContact } from "../../content/site";

export const metadata: Metadata = { title: "Contato | No Ritmo Academia de Dança", description: "Fale com a No Ritmo em Apucarana para conhecer aulas, modalidades e disponibilidade.", alternates: { canonical: "/contato" } };

export default function ContatoPage() { return <SubpageShell kicker="Fale com a No Ritmo" title="Contato e localização" intro={`Atendimento em ${siteContact.city}, ${siteContact.state}. Converse com a equipe antes da visita para confirmar endereço, acesso e disponibilidade.`} sections={[
  ...contactChannels.map((channel, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: channel.label,
    text: channel.value,
  })),
  {number:"03",title:"Localização",text:`${siteContact.city} — ${siteContact.state}. O endereço completo deve ser confirmado diretamente com a equipe antes da visita.`},
  {number:"04",title:"Atendimento",text:"Envie uma mensagem contando se procura uma turma, aula particular, aula experimental ou coreografia. A equipe orientará o próximo passo."},
]} />; }
