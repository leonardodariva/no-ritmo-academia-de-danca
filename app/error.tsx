"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => {}, []); return <main className="not-found"><p className="section-label">No Ritmo • Algo saiu do compasso</p><h1>Não foi possível carregar esta página.</h1><p>Você pode tentar novamente ou voltar para a página inicial.</p><div className="error-actions"><button className="button" onClick={() => reset()}>Tentar novamente</button><Link className="button button-black" href="/">Voltar ao início</Link></div></main>; }
