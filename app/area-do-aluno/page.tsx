"use client";

import Link from "next/link";
import { useRef } from "react";
import { House } from "lucide-react";

export default function StudentAreaPage() {
  const notice = useRef<HTMLDialogElement>(null);
  const showNotice = () => notice.current?.showModal();

  return <main className="student-area-page">
    <section className="student-area-login" aria-labelledby="student-area-title">
      <img className="student-login-logo" src="/logo-fundo-claro.png" alt="No Ritmo Academia de Dança" />
      <h1 id="student-area-title">Bem-vindo de volta</h1>
      <p className="student-area-subtitle">Digite suas credenciais para acessar sua conta</p>
      <form noValidate onSubmit={(event) => { event.preventDefault(); showNotice(); }}>
        <label htmlFor="student-email">E-mail</label>
        <input id="student-email" type="email" autoComplete="username" placeholder="Seu e-mail" />
        <div className="student-password-label">
          <label htmlFor="student-password">Senha</label>
          <button className="student-password-help" type="button" onClick={showNotice}>Esqueceu a senha?</button>
        </div>
        <input id="student-password" type="password" autoComplete="current-password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
      </form>
    </section>
    <Link className="student-area-home" href="/"><House size={18} aria-hidden="true" />Voltar para a página inicial</Link>
    <dialog className="student-login-notice" ref={notice} aria-labelledby="student-notice-title" aria-describedby="student-notice-description">
      <h2 id="student-notice-title">Estamos preparando seu espaço</h2>
      <p id="student-notice-description">A Área do Aluno ainda está em preparação. Em breve, você poderá acessar sua conta e acompanhar sua jornada na No Ritmo.</p>
      <button type="button" autoFocus onClick={() => notice.current?.close()}>Entendi</button>
    </dialog>
  </main>;
}
