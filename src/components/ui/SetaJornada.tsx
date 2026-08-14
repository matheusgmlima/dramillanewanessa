type Props = {
  /**
   * "direita" curva da esquerda para a direita; "esquerda" faz o inverso;
   * "centro" desce reto, para quando a próxima etapa é centralizada e não
   * tem lado para o qual apontar.
   */
  sentido: "direita" | "esquerda" | "centro";
};

/**
 * Conector entre duas etapas da jornada.
 *
 * Desenhada em SVG em vez de usar o caractere "→". Seta de fonte não curva,
 * não acompanha o zigue-zague do layout e é um dos detalhes que mais entrega
 * template pronto. Traçada, ela vira parte da identidade: o mesmo fio fino
 * das réguas do site, agora conduzindo o olho de uma etapa à seguinte.
 *
 * O tracejado dá a ideia de percurso em andamento, e não de divisória.
 *
 * Puramente decorativa: a ordem já está nos números (01, 02...) e na própria
 * sequência do DOM, então fica escondida de leitores de tela.
 */
export default function SetaJornada({ sentido }: Props) {
  const paraDireita = sentido === "direita";
  const aoCentro = sentido === "centro";

  // Curva em S entre a coluna de uma etapa e a coluna oposta da próxima.
  // No centro o traço desce reto: não há lado para onde puxar o olho.
  const caminho = aoCentro
    ? "M124 4 L124 96"
    : paraDireita
      ? "M40 4 C40 46, 200 34, 208 96"
      : "M208 4 C208 46, 48 34, 40 96";

  const ponta = aoCentro
    ? "M115 86 L124 99 L133 86"
    : paraDireita
      ? "M199 86 L208 99 L217 84"
      : "M31 84 L40 99 L49 86";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none hidden justify-center py-2 lg:flex"
    >
      <svg
        width="248"
        height="104"
        viewBox="0 0 248 104"
        fill="none"
        className="text-creme-100/35"
      >
        <path
          d={caminho}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
        <path
          d={ponta}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
