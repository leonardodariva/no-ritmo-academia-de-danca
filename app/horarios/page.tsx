import SubpageShell from "../SubpageShell";
export default function HorariosPage() { return <SubpageShell kicker="Planeje sua semana" title="Turmas e horários" intro="Confira a grade atual e converse com a equipe para confirmar vagas e agendar uma aula experimental." sections={[
  {number:"01",title:"Segunda-feira",text:"Turma iniciante, das 7h às 8h30. Turma de iniciados, das 8h30 às 10h."},
  {number:"02",title:"Terça-feira",text:"Turma iniciante, das 7h30 às 9h."},
  {number:"03",title:"Quarta-feira",text:"Turma iniciante, das 8h às 9h30."},
  {number:"04",title:"Quinta-feira",text:"Turma nível 2, das 8h às 10h."},
  {number:"05",title:"Sexta-feira",text:"Não há turma regular neste dia."},
  {number:"06",title:"Sábado",text:"Turma iniciante, das 13h30 às 15h. Turma de iniciados, das 15h às 16h30."},
]} />; }
