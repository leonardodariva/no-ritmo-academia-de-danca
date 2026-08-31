const modalities = [
  { number: "01", name: "Aulas particulares", phrase: "Atenção exclusiva para seus objetivos.", detail: "Aulas individuais ou para casal, com conteúdo, ritmo e horários alinhados ao que você deseja desenvolver.", href: "/aulas-particulares", tone: "blue" },
  { number: "02", name: "Turmas em grupo", phrase: "Aprender e praticar junto.", detail: "Turmas organizadas por nível para aprender com constância, trocar experiências e evoluir em boa companhia.", href: "/horarios", tone: "red" },
  { number: "03", name: "Coreografias para eventos", phrase: "Uma dança criada para o seu momento.", detail: "Projetos personalizados para debutantes, casamentos, aniversários de 15 anos e outras celebrações.", href: "/coreografias", tone: "dark" },
];

export default function DanceStyles() {
  return (
    <section className="modalities section" id="modalidades">
      <div className="section-label"><span>02</span> Explore nosso conteúdo</div>
      <div className="modalities-heading">
        <h2>Conhecimento para<br /><em>viver a dança.</em></h2>
        <p>Explore caminhos sobre movimento, comunicação, percepção e desenvolvimento humano através da dança.</p>
      </div>
      <div className="modality-grid">
        {modalities.map((item) => (
          <article className={`modality-card modality-card-${item.tone}`} key={item.name}>
            <div className="modality-photo"><span>Foto em breve</span></div>
            <div className="modality-copy">
              <p>{item.phrase}</p>
              <h3>{item.name}</h3>
              <p className="modality-detail">{item.detail}</p>
              <a href={item.href}>Saiba mais</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
