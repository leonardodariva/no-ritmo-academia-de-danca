import SubpageShell from "../SubpageShell";
export default function ModalidadesPage() { return <SubpageShell kicker="Encontre seu ritmo" title="Modalidades" intro="Cada ritmo terá uma explicação própria, nível indicado, benefícios e informações para escolher a melhor turma." sections={[
  {number:"01",title:"Danças de salão",text:"Forró, bolero, samba de gafieira, salsa, zouk, tango, sertanejo e vaneira."},
  {number:"02",title:"Ritmos e repertórios",text:"A grade de ritmos deve ser confirmada pela academia. Esta página será atualizada com descrições, origens e características de cada modalidade disponível."},
  {number:"03",title:"Níveis de aprendizado",text:"Organização das opções para iniciantes, intermediários e alunos que desejam aperfeiçoamento."},
  {number:"04",title:"Qual ritmo combina comigo?",text:"Um guia simples para ajudar cada visitante a começar de acordo com objetivos, gosto musical e experiência."},
]} />; }
