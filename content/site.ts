export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type ScheduleDay = {
  day: string;
  sessions: { level: string; time: string }[];
};

export const siteContact = {
  city: "Apucarana",
  state: "PR",
  phoneDisplay: "(43) 99921-6027",
  phoneHref: "tel:+5543999216027",
  whatsappHref: "https://wa.me/5543999216027",
  whatsappGeneralHref: "https://wa.me/5543999216027?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20No%20Ritmo%20e%20quero%20conhecer%20as%20aulas.",
  experimentalHref: "https://wa.me/5543999216027?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental.",
  email: "noritmo@live.com",
  emailHref: "mailto:noritmo@live.com",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=No+Ritmo+Academia+de+Dança+Apucarana+PR",
} as const;

export const contactChannels: ContactChannel[] = [
  {
    label: "WhatsApp",
    value: `${siteContact.phoneDisplay} — aulas, turmas, coreografias e atendimento.`,
    href: siteContact.whatsappHref,
  },
  {
    label: "E-mail",
    value: siteContact.email,
    href: siteContact.emailHref,
  },
];

export const weeklySchedule: ScheduleDay[] = [
  { day: "Segunda-feira", sessions: [{ level: "Turma iniciante", time: "7h — 8h30" }, { level: "Turma de iniciados", time: "8h30 — 10h" }] },
  { day: "Terça-feira", sessions: [{ level: "Turma iniciante", time: "7h30 — 9h" }] },
  { day: "Quarta-feira", sessions: [{ level: "Turma iniciante", time: "8h — 9h30" }] },
  { day: "Quinta-feira", sessions: [{ level: "Turma nível 2", time: "8h — 10h" }] },
  { day: "Sexta-feira", sessions: [] },
  { day: "Sábado", sessions: [{ level: "Turma iniciante", time: "13h30 — 15h" }, { level: "Turma de iniciados", time: "15h — 16h30" }] },
];
