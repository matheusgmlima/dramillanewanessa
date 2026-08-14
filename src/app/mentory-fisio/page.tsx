import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Jornada from "@/components/Jornada";
import Revelar from "@/components/ui/Revelar";
import Botao from "@/components/ui/Botao";
import Video from "@/components/ui/Video";
import { relato } from "@/lib/jornada";
import { site, linkWhatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "A jornada do Mentory Fisio",
  description:
    "Etapa por etapa, como funciona o Mentory Fisio: base teórica, vivência em centro cirúrgico, atendimento supervisionado e três meses de mentoria com a Dra. Millane Wanessa, em Recife.",
  alternates: { canonical: "/mentory-fisio" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "A jornada do Mentory Fisio",
    description:
      "Do primeiro dia à conclusão: como a fisioterapeuta vive a rotina do pós-operatório de cirurgia plástica na prática.",
  },
};

/**
 * Página dedicada ao percurso do curso.
 *
 * Tem um trabalho só: mostrar o que a aluna vai viver, na ordem. Não repete
 * o conteúdo comercial da seção do Mentory na home — quem chega aqui já foi
 * apresentado ao curso e quer ver como ele acontece.
 *
 * Fundo vinho de ponta a ponta, mantendo o território visual que a seção da
 * home estabelece: a pessoa atravessa o link sem sensação de ter mudado de
 * site.
 */
export default function PaginaMentory() {
  return (
    <main className="sobre-vinho textura-wm min-h-screen bg-vinho-700 text-creme-100">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        {/* Volta para a home. Sem isto a página vira um beco: a pessoa chega
            por um link direto e não tem como conhecer o resto do trabalho. */}
        {/* py-3 garante os 44px de área tocável sem inflar o texto: só a
            linha de 28px deixava o alvo pequeno demais para o dedo. */}
        <Link
          href="/#mentory-fisio"
          className="group -my-3 inline-flex items-center gap-3 py-3 text-creme-100/70 transition-colors duration-300 hover:text-creme-100"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            ←
          </span>
          <span className="t-label">Voltar ao site</span>
        </Link>

        <Revelar className="mt-16 lg:mt-24">
          <p className="t-label text-creme-100/65">Para fisioterapeutas</p>

          <h1 className="mt-8">
            <span className="sr-only">
              A jornada do Mentory Fisio, por {site.nome}
            </span>
            <Image
              src="/marca/mentory.png"
              alt=""
              width={1400}
              height={289}
              priority
              sizes="(max-width: 768px) 92vw, 560px"
              className="h-auto w-full max-w-[560px]"
            />
          </h1>

          <p className="t-display mt-12 max-w-[16ch] text-creme-100">
            A jornada, <span className="t-italico">etapa por etapa</span>.
          </p>

          <p className="t-corpo-grande mt-8 max-w-[52ch] text-creme-100/80">
            Do primeiro dia à conclusão, este é o caminho que você percorre
            dentro do Mentory Fisio.
          </p>
        </Revelar>

        <Jornada />

        {/* Relato de quem acabou de percorrer tudo isso, gravado no próprio
            centro cirúrgico. Entra depois das etapas e antes do CTA: prova
            social no momento em que a pessoa está decidindo. */}
        <Revelar className="mt-28 lg:mt-36">
          <div className="regua grid grid-cols-1 items-center gap-x-14 gap-y-8 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Video
                src={relato.src}
                poster={relato.poster}
                descricao={relato.descricao}
                legenda={relato.duracao}
                proporcao="9/16"
                emoldurado
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="t-label text-creme-100/65">
                Quem acabou de passar por isso
              </p>
              <p className="t-display mt-6 max-w-[15ch] text-creme-100">
                O relato de dentro do{" "}
                <span className="t-italico">bloco</span>.
              </p>
              <p className="mt-7 max-w-[46ch] text-creme-100/75">
                Uma aluna conta como foi a vivência, gravando no mesmo centro
                cirúrgico onde acompanhou a cirurgia.
              </p>
            </div>
          </div>
        </Revelar>

        {/* Fecho: quem chegou até aqui viu o percurso inteiro e é o momento
            de agir. Um CTA só, sem repetir o material da home. */}
        <Revelar className="mt-28 lg:mt-36">
          <div className="regua grid grid-cols-1 gap-x-12 gap-y-10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-label text-creme-100/65">
                Turma {site.mentory.turma} · Presencial em {site.cidade}
              </p>
              <p className="t-titulo mt-5 max-w-[24ch] text-creme-100">
                A próxima turma acontece em {site.mentory.periodo}.
              </p>
              <p className="mt-6 max-w-[46ch] text-creme-100/75">
                As vagas são limitadas pela própria natureza da vivência, já
                que centro cirúrgico não comporta turma grande.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9 lg:items-end lg:justify-end">
              <Botao href={linkWhatsapp("turma")} externo variante="claro">
                Quero minha vaga
              </Botao>
              <a
                href={site.instagramMentory.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-regua t-label cursor-pointer text-creme-100/70"
              >
                {site.instagramMentory.handle}
              </a>
            </div>
          </div>
        </Revelar>
      </div>
    </main>
  );
}
