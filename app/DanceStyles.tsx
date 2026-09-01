import { classFormats } from "../content/classes";

const tones = ["blue", "red", "dark"];

export default function DanceStyles() {
  return (
    <section className="modalities section" id="modalidades">
      <div className="section-label"><span>02</span> Explore nosso conteúdo</div>
      <div className="modalities-heading">
        <h2>Conhecimento para<br /><em>viver a dança.</em></h2>
        <p>Explore caminhos sobre movimento, comunicação, percepção e desenvolvimento humano através da dança.</p>
      </div>
      <div className="modality-grid">
        {classFormats.map((item, index) => (
          <article className={`modality-card modality-card-${tones[index]}`} key={item.slug}>
            <div className="modality-photo"><span>Foto em breve</span></div>
            <div className="modality-copy">
              <p>{item.summary}</p>
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
