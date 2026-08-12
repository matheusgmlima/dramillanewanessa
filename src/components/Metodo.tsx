import Image from "next/image";
import Revelar from "./ui/Revelar";
import { site } from "@/lib/site";

/**
 * Quem é ela + como trabalha, numa seção só.
 *
 * Faixa de números ("13 anos", "500+ pacientes") é um clichê de landing, então
 * aqui os números aparecem embutidos na fala dela, e o bloco de credencial vira
 * uma coluna lateral estreita — informação de apoio, não troféu centralizado.
 */

const etapas = [
  {
    titulo: "Avaliação antes de qualquer conduta",
    texto:
      "Entender o procedimento realizado, o tempo de pós-operatório, o que já foi feito e como o seu corpo está respondendo. Sem avaliação, protocolo vira suposição.",
  },
  {
    titulo: "Condução, não sessão avulsa",
    texto:
      "A recuperação tem fases. O que ajuda na primeira semana pode atrapalhar na quarta, e a conduta acompanha essa mudança.",
  },
  {
    titulo: "Você entende cada etapa",
    texto:
      "Explico o motivo de cada intervenção e o que esperar do período. Quem compreende o próprio processo adere melhor ao tratamento e se assusta menos com o caminho.",
  },
];

export default function Metodo() {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-creme-200 py-[var(--spacing-secao)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Retrato */}
          <Revelar className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/fotos/M_93.jpg"
                alt={`${site.nomeCompleto} em seu consultório`}
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>

            {/* Credencial como nota de rodapé da foto, não como banner de stats.
                A titulação por extenso aqui não é enfeite: o Código de Ética
                exige que ela apareça na divulgação profissional. */}
            <div className="regua mt-6 flex flex-wrap gap-x-10 gap-y-4 pt-6">
              <div>
                <p className="t-titulo text-vinho-700">
                  {site.experiencia.anos}+
                </p>
                <p className="t-label mt-1 text-tinta-500">
                  anos de prática clínica
                </p>
              </div>
              <div>
                <p className="t-titulo text-vinho-700">178254-F</p>
                <p className="t-label mt-1 text-tinta-500">
                  {site.profissao} · CREFITO
                </p>
              </div>
            </div>
          </Revelar>

          {/* Texto */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Revelar>
              <p className="t-label text-vinho-700">Como eu trabalho</p>

              <h2 className="t-display mt-6 max-w-[14ch]">
                Recuperação é <span className="t-italico">condução</span>.
              </h2>

              <p className="t-corpo-grande mt-9 max-w-[46ch] text-tinta-700">
                Ao longo desses anos acompanhando mulheres no pós-operatório, a
                frase que mais escuto é: “ninguém me explicou que ia ser assim”.
                O meu trabalho começa justamente aí.
              </p>
            </Revelar>

            <ol className="mt-14 flex flex-col gap-y-10">
              {etapas.map((etapa, i) => (
                <Revelar as="li" key={etapa.titulo} atraso={i * 90}>
                  <div className="regua flex gap-6 pt-7">
                    <span className="t-label mt-1.5 shrink-0 text-vinho-400">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.35rem] leading-snug">
                        {etapa.titulo}
                      </h3>
                      <p className="mt-3 max-w-[48ch] text-tinta-700">
                        {etapa.texto}
                      </p>
                    </div>
                  </div>
                </Revelar>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
