import Image from "next/image";
import Revelar from "./ui/Revelar";
import Botao from "./ui/Botao";
import { site, linkWhatsapp } from "@/lib/site";

/**
 * Onde e quando ela atende.
 *
 * Informação prática merece hierarquia clara e nenhuma decoração: quem chega
 * nesta seção já decidiu, só quer saber onde ir. As fotos do espaço fazem o
 * trabalho de convencimento; o texto faz o trabalho de informar.
 */
export default function Consultorio() {
  return (
    <section
      id="consultorio"
      className="scroll-mt-24 py-[var(--spacing-secao)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-12">
          <Revelar className="lg:col-span-5">
            <p className="t-label text-vinho-700">Onde eu atendo</p>

            <h2 className="t-display mt-6 max-w-[12ch]">
              Consultório em <span className="t-italico">Recife</span>.
            </h2>

            <dl className="mt-12 flex flex-col gap-y-8">
              <div className="regua pt-6">
                <dt className="t-label text-tinta-400">Endereço</dt>
                <dd className="mt-2 text-[1.0625rem] text-tinta-900">
                  {site.endereco.predio}
                  <br />
                  {site.endereco.logradouro}
                  <br />
                  {site.endereco.bairro}, {site.endereco.cidade}/
                  {site.endereco.estado}
                  <a
                    href={site.endereco.mapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-regua t-label mt-4 block w-fit cursor-pointer text-vinho-700"
                  >
                    Ver no mapa
                  </a>
                </dd>
              </div>

              <div className="regua pt-6">
                <dt className="t-label text-tinta-400">Atendimento</dt>
                <dd className="mt-2 text-[1.0625rem] text-tinta-900">
                  {site.atendimento.dias}, {site.atendimento.horario}
                  <span className="mt-1 block text-tinta-500">
                    Somente com hora marcada.
                  </span>
                </dd>
              </div>

              <div className="regua pt-6">
                <dt className="t-label text-tinta-400">Agendamento</dt>
                <dd className="mt-2 text-[1.0625rem] text-tinta-900">
                  {site.whatsapp.exibicao}
                  <span className="mt-1 block text-tinta-500">
                    Pelo WhatsApp. Eu respondo pessoalmente.
                  </span>
                </dd>
              </div>
            </dl>

            <div className="mt-12">
              <Botao href={linkWhatsapp("consulta")} externo>
                Agendar consulta
              </Botao>
            </div>
          </Revelar>

          {/* Mosaico do espaço — proporções diferentes de propósito, para não
              virar uma grade de miniaturas idênticas. */}
          <Revelar className="lg:col-span-6 lg:col-start-7" atraso={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden">
                <Image
                  src="/fotos/M_129.jpg"
                  alt="Consultório da Dra. Millane Wanessa em Recife"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/fotos/M_347.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 23vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/fotos/M_49.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 23vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
