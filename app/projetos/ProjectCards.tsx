import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { projects } from "../../content/projects";
export default function ProjectCards() { return <div className="album-directory-grid home-project-cards">{projects.map((p) => <Link className="album-card" href={p.href} key={p.slug}><div className="album-cover"><img src={p.image} alt={p.title} loading="lazy" /></div><div className="album-card-copy"><h3>{p.title}</h3><p>{p.description}</p><div className="album-card-footer"><small>{p.category}</small><strong>Ver projeto <ChevronRight size={18} aria-hidden="true" /></strong></div></div></Link>)}</div>; }
