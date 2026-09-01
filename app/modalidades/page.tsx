import SubpageShell from "../SubpageShell";
import { danceModalities } from "../../content/classes";

const modalityNames = danceModalities.map((item) => item.name).join(", ");

export default function ModalidadesPage() { return <SubpageShell kicker="Encontre seu ritmo" title="Modalidades" intro="Conheça os ritmos apresentados pela No Ritmo e converse com a equipe para encontrar uma turma adequada à sua experiência." sections={[
  {number:"01",title:"Ritmos",text:`${modalityNames}. Confirme com a equipe quais opções estão disponíveis na grade atual.`},
  {number:"02",title:"Para quem está começando",text:"Você não precisa saber dançar para conversar com a equipe. Conte sua experiência e disponibilidade para receber uma indicação de turma."},
  {number:"03",title:"Para quem já dança",text:"Informe há quanto tempo você pratica e quais ritmos conhece. Assim, a equipe pode orientar o nível e o formato mais adequados."},
  {number:"04",title:"Como escolher",text:"Considere os ritmos de que você gosta, seus objetivos e os horários disponíveis. Uma aula experimental ajuda a conhecer a dinâmica antes de começar."},
]} />; }
