import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { contactChannels, siteContact, weeklySchedule } from "../../content/site";

export const metadata: Metadata = { title: "Contato | No Ritmo Academia de Dança", description: "Fale com a No Ritmo em Apucarana para conhecer aulas, modalidades e disponibilidade.", alternates: { canonical: "/contato" } };

export default function ContatoPage() { return <SubpageShell compactHero kicker="Meios de contato" title="Contato e localização" intro={`Atendimento em ${siteContact.city}, ${siteContact.state}. Converse com a equipe antes da visita para confirmar endereço, acesso e disponibilidade.`} sections={[
  ...contactChannels.map((channel, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: channel.label,
    text: channel.value,
  })),
  {number:"03",title:"Onde estamos",content:<><div className="contact-map-preview"><iframe title={`Mapa da No Ritmo em ${siteContact.city}`} src="https://www.google.com/maps?q=No+Ritmo+Academia+de+Dança+Apucarana+PR&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><p>{siteContact.city} — {siteContact.state}. O endereço completo deve ser confirmado diretamente com a equipe antes da visita.</p></>},
  {number:"04",title:"Como podemos ajudar",text:"Envie uma mensagem contando se procura uma turma, aula particular, aula experimental ou coreografia. A equipe orientará o próximo passo."},
  {number:"05",title:"Turmas e horários",content:<div className="contact-schedule">{weeklySchedule.filter((item) => item.sessions.length > 0).map((item) => <div key={item.day}><strong>{item.day}</strong><span>{item.sessions.map((session) => <span key={`${item.day}-${session.level}`}><b>{session.level}</b>: {session.time}</span>)}</span></div>)}</div>},
]} />; }
