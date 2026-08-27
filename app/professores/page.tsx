import SubpageShell from "../SubpageShell";
export default function ProfessoresPage() { return <SubpageShell kicker="Quem faz a No Ritmo" title="Professores e equipe" intro="Este espaço receberá os nomes, fotografias, trajetórias e especialidades dos profissionais da academia." sections={[
  {number:"01",title:"Direção",text:"Apresentação da pessoa responsável pela academia, sua história com a dança e sua visão de ensino."},
  {number:"02",title:"Professores",text:"Perfis individuais com modalidades, experiência, formação e uma breve mensagem de cada profissional."},
  {number:"03",title:"Metodologia",text:"Como a equipe acolhe iniciantes, organiza os níveis e acompanha a evolução dos alunos."},
]} />; }
