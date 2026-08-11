import Image from "next/image";
import Revelar from "./ui/Revelar";
import Botao from "./ui/Botao";
import { linkWhatsapp } from "@/lib/site";

/**
 * MENTORY FISIO — a virada.
 *
 * Aqui o site troca de público: sai a paciente, entra a fisioterapeuta. Em vez
 * de sinalizar isso com um título maior, o registro visual inteiro muda —
 * fundo vinho de ponta a ponta, tipografia clara, a estampa de monograma dela
 * aparecendo na textura. Você percebe que entrou em outro território antes de
 * ler qualquer palavra.
 *
 * É o que separa "uma seção sobre o curso" de "o curso tem casa própria".
 */

const pilares = [
  {
    titulo: "Vivência em centro cirúrgico",
    texto:
      "Acompanhar a cirurgia por dentro muda como você conduz o pós. Você vê o que foi feito no tecido, não imagina.",
  },
  {
    titulo: "Intra e pós-operatório na prática",
    texto:
      "Conduta real em paciente real, com supervisão. Não é aula gravada sobre o que você faria numa situação hipotética.",
  },
  {
    titulo: "Três meses de mentoria",
    texto:
      "O curso acaba e a insegurança volta na primeira paciente difícil. Por isso o acompanhamento continua depois — quando as dúvidas de verdade aparecem.",
  },
];

export default function Mentory() {
  return (
    <section
      id="mentory-fisio"
      className="sobre-vinho textura-wm relative scroll-mt-24 overflow-hidden bg-vinho-700 py-[var(--spacing-secao-lg)] text-creme-100"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Cabeçalho da seção */}
        <Revelar className="max-w-[900px]">
          <p className="t-label text-creme-100/65">
            Para fisioterapeutas
          </p>

          <div className="mt-8">
            <span className="sr-only">Mentory Fisio, por Millane Wanessa</span>
            <Image
              src="/marca/mentory.png"
              alt=""
              width={1400}
              height={289}
              sizes="(max-width: 768px) 92vw, 640px"
              className="h-auto w-full max-w-[640px]"
            />
          </div>

          <p className="t-display mt-12 max-w-[19ch] text-creme-100">
            De insegura a{" "}
            <span className="t-italico">referência clínica</span> em cirurgia
            plástica.
          </p>

          <p className="t-corpo-grande mt-9 max-w-[54ch] text-creme-100/80">
            A graduação não ensina pós-operatório de cirurgia plástica. Você sai
            sabendo drenagem e descobre na primeira paciente que isso é uma
            fração do problema. O Mentory Fisio existe para preencher
            exatamente esse buraco.
          </p>
        </Revelar>

        {/* Pilares — três colunas separadas por régua, sem card e sem sombra */}
        <div className="mt-24 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {pilares.map((pilar, i) => (
            <Revelar key={pilar.titulo} atraso={i * 110}>
              <div className="regua pt-8">
                <span className="t-label text-creme-100/50">0{i + 1}</span>
                <h3 className="font-display mt-5 text-[1.5rem] leading-tight">
                  {pilar.titulo}
                </h3>
                <p className="mt-4 text-creme-100/75">{pilar.texto}</p>
              </div>
            </Revelar>
          ))}
        </div>

        {/* Turma presencial + CTA */}
        <Revelar className="mt-28">
          <div className="regua grid grid-cols-1 gap-x-12 gap-y-10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-label text-creme-100/65">
                Próxima turma presencial · Recife
              </p>
              <p className="t-titulo mt-5 max-w-[24ch] text-creme-100">
                Vivência clínica em centro cirúrgico e consultório, presencial
                em Recife.
              </p>
              <p className="mt-6 max-w-[46ch] text-creme-100/75">
                Vagas limitadas pela natureza da vivência — centro cirúrgico não
                comporta turma grande. Fale comigo para saber as datas da
                próxima turma e as condições.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:items-end lg:justify-end">
              <Botao href={linkWhatsapp("mentory")} externo variante="claro">
                Quero saber mais
              </Botao>
              <a
                href={linkWhatsapp("curso")}
                target="_blank"
                rel="noopener noreferrer"
                className="link-regua t-label cursor-pointer text-creme-100/70"
              >
                Datas da próxima turma
              </a>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
