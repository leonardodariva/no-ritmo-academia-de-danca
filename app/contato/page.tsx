import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import Link from "next/link";
import { contactChannels, siteContact } from "../../content/site";
import MapEmbed from "../MapEmbed";

export const metadata: Metadata = { title: "Contato | No Ritmo Academia de Dança", description: "Fale com a No Ritmo em Apucarana para conhecer aulas, modalidades e disponibilidade.", alternates: { canonical: "/contato" }, openGraph: { title: "Contato | No Ritmo Academia de Dança", description: "Fale com a No Ritmo em Apucarana para conhecer aulas, modalidades e disponibilidade.", url: "/contato", images: ["/logo-fundo-claro.png"] } };

export default function ContatoPage() { return <SubpageShell compactHero kicker="Meios de contato" title="Contato e localização" intro={`Atendimento em ${siteContact.city}, ${siteContact.state}. Converse com a equipe antes da visita para confirmar endereço, acesso e disponibilidade.`} sections={[
  ...contactChannels.map((channel, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: channel.label,
    text: channel.value,
  })),
  {number:"03",title:"Onde estamos",content:<><div className="contact-map-preview"><MapEmbed src={siteContact.mapsEmbedHref} title={`Mapa da No Ritmo em ${siteContact.city}`} address={`${siteContact.street}, ${siteContact.streetNumber} — ${siteContact.neighborhood}, ${siteContact.city} — ${siteContact.state}, ${siteContact.postalCode}`} mapsHref={siteContact.mapsHref} /></div><p>{siteContact.street}, {siteContact.streetNumber} — {siteContact.neighborhood}, {siteContact.city} — {siteContact.state}, {siteContact.postalCode}. Anexo ao Colégio São José.</p><a className="button contact-map-link" href={siteContact.mapsHref} target="_blank" rel="noreferrer">Abrir localização no mapa</a></>},
  {number:"04",title:"Como podemos ajudar",text:"Envie uma mensagem contando se procura uma turma, aula particular, aula experimental ou coreografia. A equipe orientará o próximo passo."},
  {number:"05",title:"Turmas e horários",content:<><p>As aulas em turma acontecem em horários fixos, organizados por nível e experiência. Consulte a programação completa antes de escolher sua turma.</p><Link className="button contact-schedule-link" href="/horarios">Ver turmas e horários</Link></>},
]} />; }
