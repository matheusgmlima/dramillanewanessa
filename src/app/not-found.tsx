import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { site, linkWhatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

/**
 * 404 na identidade do site.
 *
 * A tela padrão do Next é preta e em inglês — quem digitou o endereço errado
 * concluiria que caiu no lugar errado e fecharia. Aqui o erro vira uma porta
 * de volta, com o mesmo caminho de contato do resto da página.
 */
export default function NotFound() {
  return (
    <main className="textura-wm flex min-h-screen flex-col items-start justify-center px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Image
          src="/marca/logo-vinho.png"
          alt={site.nomeCompleto}
          width={1400}
          height={683}
          priority
          className="h-auto w-full max-w-[280px]"
        />

        <p className="t-label mt-16 text-vinho-700">Erro 404</p>

        <h1 className="t-display mt-6 max-w-[16ch]">
          Esta página não <span className="t-italico">existe</span>.
        </h1>

        <p className="t-corpo-grande mt-8 max-w-[46ch] text-tinta-700">
          O endereço pode ter sido digitado com algum caractere a mais, ou a
          página pode ter saído do ar. Volte ao início para encontrar o que
          procurava.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <Link
            href="/"
            className="t-label cursor-pointer border border-vinho-700 bg-vinho-700 px-8 py-4 text-creme-100 transition-colors duration-300 hover:bg-vinho-800"
          >
            Voltar ao início
          </Link>

          <a
            href={linkWhatsapp("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="link-regua t-label w-fit cursor-pointer text-vinho-700"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
