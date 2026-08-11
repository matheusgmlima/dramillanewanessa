"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  /** Descreve o conteúdo para quem não vai assistir (busca, leitor de tela). */
  descricao: string;
  legenda?: string;
};

/**
 * Player sob demanda.
 *
 * O arquivo só é baixado quando alguém clica no play. Com `preload="none"` o
 * navegador ainda cria a conexão e o elemento nativo aparece feio antes da
 * hora; renderizar o `<video>` apenas após o clique garante que quem não vai
 * assistir não paga por 5 MB, e deixa a capa sob nosso controle visual.
 *
 * Sem autoplay: vídeo que começa sozinho é hostil, e este tem áudio de fala.
 * As legendas estão queimadas na imagem, então funciona no mudo.
 */
export default function Video({ src, poster, descricao, legenda }: Props) {
  const [ativo, setAtivo] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <figure className="flex flex-col">
      <div className="relative aspect-[9/16] overflow-hidden bg-vinho-950">
        {ativo ? (
          <video
            ref={ref}
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          >
            {descricao}
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setAtivo(true)}
            aria-label={`Reproduzir vídeo: ${descricao}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={poster}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />

            {/* Véu para o botão ter contraste sobre qualquer frame */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-vinho-950/25 transition-colors duration-500 group-hover:bg-vinho-950/10"
            />

            {/* Play: círculo fino, sem sombra, coerente com a régua da marca */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-creme-100/80 transition-colors duration-500 group-hover:border-creme-100 group-hover:bg-creme-100/15"
            >
              <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-creme-100" />
            </span>
          </button>
        )}
      </div>

      {/* Cor herdada do contexto: o mesmo player serve o fundo creme e o
          fundo vinho sem precisar de variante. */}
      {legenda && (
        <figcaption className="t-label mt-4 opacity-65">{legenda}</figcaption>
      )}
    </figure>
  );
}
