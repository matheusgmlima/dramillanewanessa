"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { linkWhatsapp } from "@/lib/site";

const navegacao = [
  { rotulo: "Atendimento", href: "#atendimento" },
  { rotulo: "Método", href: "#metodo" },
  { rotulo: "Consultório", href: "#consultorio" },
  { rotulo: "Mentory Fisio", href: "#mentory-fisio" },
];

/**
 * Navegação é o lugar errado para ser criativo — as pessoas precisam achar
 * o que procuram sem pensar. A personalidade aqui vem do tratamento
 * (régua fina, caixa alta espaçada, zero sombra), não de uma estrutura
 * inventada.
 */
export default function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava o corpo quando o menu mobile está aberto, senão o fundo rola atrás.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        rolou || aberto
          ? "border-b border-tinta-900/10 bg-creme-100/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        <a
          href="#topo"
          aria-label="Ir para o início"
          className="flex shrink-0 cursor-pointer items-center py-1.5"
        >
          <Image
            src="/marca/logo-vinho.png"
            alt="Millane Wanessa"
            width={1400}
            height={683}
            className="h-9 w-auto sm:h-11"
            priority
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="t-label cursor-pointer text-tinta-700 transition-colors duration-300 hover:text-vinho-700"
            >
              {item.rotulo}
            </a>
          ))}
          <a
            href={linkWhatsapp("consulta")}
            target="_blank"
            rel="noopener noreferrer"
            className="t-label cursor-pointer border border-vinho-700 bg-vinho-700 px-6 py-3 text-creme-100 transition-colors duration-300 hover:bg-vinho-800"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-tinta-900 transition-transform duration-300 ${
              aberto ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-tinta-900 transition-transform duration-300 ${
              aberto ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden bg-creme-100 transition-[max-height] duration-500 ease-out lg:hidden ${
          aberto ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-6 pt-2 pb-10 sm:px-10"
          aria-label="Principal (mobile)"
        >
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="t-titulo cursor-pointer border-b border-tinta-900/10 py-4 text-tinta-900 transition-colors duration-300 hover:text-vinho-700"
            >
              {item.rotulo}
            </a>
          ))}
          <a
            href={linkWhatsapp("consulta")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAberto(false)}
            className="t-label mt-6 cursor-pointer bg-vinho-700 px-6 py-5 text-center text-creme-100"
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
