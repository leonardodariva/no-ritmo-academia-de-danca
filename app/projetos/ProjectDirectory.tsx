"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { projects } from "../../content/projects";
export default function ProjectDirectory() { const [query,setQuery]=useState(""); const items=projects.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())); return <div className="album-directory project-directory"><div className="album-directory-controls"><label className="album-search"><Search size={18} aria-hidden="true"/><input type="search" placeholder="Pesquisar projetos…" value={query} onChange={e=>setQuery(e.target.value)}/></label></div><div className="album-directory-grid">{items.map(p=><Link className="album-card" href={p.href} key={p.slug}><div className="album-cover"><img src={p.image} alt={p.title} loading="lazy"/></div><div className="album-card-copy"><h3>{p.title}</h3><p>{p.description}</p><div className="album-card-footer"><small>{p.category}</small><strong>Ver projeto <ChevronRight size={18} aria-hidden="true"/></strong></div></div></Link>)}</div></div>; }
