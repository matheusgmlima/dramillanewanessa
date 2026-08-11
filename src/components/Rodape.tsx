import Image from "next/image";
import Revelar from "./ui/Revelar";
import Botao from "./ui/Botao";
import { site, linkWhatsapp } from "@/lib/site";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="sobre-vinho bg-vinho-950 text-creme-100">
      {/* Chamada final */}
      <div className="mx-auto max-w-[1440px] px-6 py-[var(--spacing-secao)] sm:px-10 lg:px-14">
        <Revelar className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="t-display max-w-[15ch]">
              Vamos cuidar da sua{" "}
              <span className="t-italico">recuperação</span>?
            </h2>
            <p className="t-corpo-grande mt-8 max-w-[42ch] text-creme-100/75">
              Me chama no WhatsApp contando o que você fez ou o que está
              sentindo. Eu respondo pessoalmente.
            </p>
          </div>

          <div className="flex items-start lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Botao href={linkWhatsapp("consulta")} externo variante="claro">
              Chamar no WhatsApp
            </Botao>
          </div>
        </Revelar>
      </div>

      {/* Base */}
      <div className="border-t border-creme-100/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-y-10 px-6 py-14 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14">
          <div>
            <Image
              src="/marca/logo-creme.png"
              alt={site.nomeCompleto}
              width={1400}
              height={683}
              className="h-14 w-auto"
            />
            <p className="t-label mt-6 text-creme-100/55">
              {site.titulo} · {site.crefito}
            </p>
            <p className="t-label mt-2 max-w-[34ch] text-creme-100/55">
              {site.endereco.predio}, {site.endereco.logradouro},{" "}
              {site.endereco.bairro}, {site.endereco.cidade}/{site.endereco.estado}
            </p>
          </div>

          <div className="flex flex-col gap-y-3 lg:items-end">
            <a
              href={linkWhatsapp("consulta")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-regua t-label w-fit cursor-pointer text-creme-100/80"
            >
              {site.whatsapp.exibicao}
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-regua t-label w-fit cursor-pointer text-creme-100/80"
            >
              {site.instagram.handle}
            </a>
            <a
              href={site.instagramMentory.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-regua t-label w-fit cursor-pointer text-creme-100/80"
            >
              {site.instagramMentory.handle}
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-6 pb-10 sm:px-10 lg:px-14">
          {/* /35 dava 2.81:1 — abaixo do AA mesmo para texto de rodapé. */}
          <p className="t-label text-creme-100/55">
            © {ano} {site.nomeCompleto}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
