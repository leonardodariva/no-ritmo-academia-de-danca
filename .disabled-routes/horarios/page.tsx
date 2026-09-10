import SubpageShell from "../SubpageShell";
import { weeklySchedule } from "../../content/site";

export default function HorariosPage() { return <SubpageShell kicker="Planeje sua semana" title="Turmas e horários" intro="Confira a grade atual e converse com a equipe para confirmar vagas e agendar uma aula experimental." sections={[
  ...weeklySchedule.map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.day,
    text: item.sessions.length > 0 ? `${item.sessions.map((session) => `${session.level}, das ${session.time.replace(" — ", " às ")}`).join(". ")}.` : "Não há turma regular neste dia.",
  })),
]} />; }
