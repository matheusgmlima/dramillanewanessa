import Link from "next/link";

type Variante = "solido" | "contorno" | "claro";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
  externo?: boolean;
  className?: string;
};

/**
 * Cantos retos de propósito.
 *
 * O par "rounded-2xl + sombra suave em tudo" é justamente o que faz uma
 * interface parecer gerada em série. A marca dela é uma didone de alto
 * contraste — geometria reta e régua fina combinam com isso e dão hierarquia
 * de verdade: sólido para a ação principal, contorno para a secundária.
 */
const estilos: Record<Variante, string> = {
  solido:
    "bg-vinho-700 text-creme-100 hover:bg-vinho-800 border border-vinho-700 hover:border-vinho-800",
  contorno:
    "border border-tinta-900/25 text-tinta-900 hover:border-vinho-700 hover:text-vinho-700",
  claro:
    "border border-creme-100/35 text-creme-100 hover:bg-creme-100 hover:text-vinho-700 hover:border-creme-100",
};

export default function Botao({
  href,
  children,
  variante = "solido",
  externo = false,
  className = "",
}: Props) {
  const classe = [
    "group inline-flex items-center justify-center gap-3",
    "px-8 py-4 t-label cursor-pointer",
    "transition-colors duration-300",
    estilos[variante],
    className,
  ].join(" ");

  const conteudo = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classe}>
        {conteudo}
      </a>
    );
  }

  return (
    <Link href={href} className={classe}>
      {conteudo}
    </Link>
  );
}
