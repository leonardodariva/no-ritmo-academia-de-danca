import SubpageShell from "../SubpageShell";
export default function HorariosPage() { return <SubpageShell kicker="Planeje sua semana" title="Turmas e horários" intro="Confira a grade atual e converse com a equipe para confirmar vagas e agendar uma aula experimental." sections={[
  {number:"01",title:"Segunda-feira",text:"Turma iniciante, das 19h às 20h30. Turma de iniciados, das 20h30 às 22h."},
  {number:"02",title:"Terça e quarta-feira",text:"Terça: turma iniciante, das 19h30 às 21h. Quarta: turma iniciante, das 20h às 21h30."},
  {number:"03",title:"Quinta e sexta-feira",text:"Quinta: turma nível 2, das 20h às 22h. Sexta-feira: sem turmas regulares."},
  {number:"04",title:"Sábado",text:"Turma iniciante, das 13h30 às 15h. Turma de iniciados, das 15h às 16h30."},
]} />; }
