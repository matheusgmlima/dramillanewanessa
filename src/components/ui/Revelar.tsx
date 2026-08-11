"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Atraso em ms — use para escalonar irmãos, não para "enfeitar". */
  atraso?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
};

/**
 * Revelação em scroll via IntersectionObserver.
 *
 * Por que não a lib de animação: aqui o efeito é sempre o mesmo (subir 18px e
 * aparecer), roda uma vez e nunca mais. Um observer + classe CSS resolve sem
 * carregar runtime de animação em toda a página. A lib fica reservada para
 * onde há estado e interação de verdade.
 *
 * `prefers-reduced-motion` é tratado no CSS — quem pediu menos movimento
 * recebe o conteúdo já visível, nunca invisível.
 */
export default function Revelar({
  children,
  atraso = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref polimórfico entre tags HTML
      ref={ref}
      className={`revelar ${visivel ? "visivel" : ""} ${className}`}
      style={atraso ? { transitionDelay: `${atraso}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
