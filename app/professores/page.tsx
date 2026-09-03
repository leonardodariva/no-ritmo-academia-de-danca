import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
export const metadata: Metadata = { title: "Professores e equipe | No Ritmo", description: "Conheça os profissionais responsáveis pelas experiências de dança da No Ritmo.", alternates: { canonical: "/professores" } };
export default function ProfessoresPage() { return <SubpageShell kicker="Quem faz a No Ritmo" title="Professores e equipe" intro="Este espaço receberá os nomes, fotografias, trajetórias e especialidades dos profissionais da academia." sections={[
  {number:"01",title:"Direção",text:"Nome, função, trajetória e fotografia serão publicados depois da confirmação com a equipe. Nenhuma credencial será presumida."},
  {number:"02",title:"Professores",text:"Perfis individuais com modalidades, experiência, formação e uma breve mensagem de cada profissional. Nomes e credenciais serão inseridos após confirmação."},
  {number:"03",title:"Metodologia",text:"A relação de cada profissional com a proposta de ensino será apresentada depois que a metodologia oficial e as responsabilidades da equipe forem validadas."},
]} />; }
