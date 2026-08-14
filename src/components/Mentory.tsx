import Image from "next/image";
import Revelar from "./ui/Revelar";
import Botao from "./ui/Botao";
import Depoimentos from "./Depoimentos";
import { site, linkWhatsapp } from "@/lib/site";

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
      "Acompanhar a cirurgia por dentro muda a forma como você conduz o pós-operatório. Você observa o que foi feito no tecido, em vez de imaginar.",
  },
  {
    titulo: "Intra e pós-operatório na prática",
    texto:
      "Conduta em paciente real, sob supervisão. Não é aula gravada sobre o que você faria diante de uma situação hipotética.",
  },
  {
    titulo: "Três meses de mentoria",
    texto:
      "O curso termina e a insegurança costuma voltar na primeira paciente difícil. Por isso o acompanhamento continua depois, que é quando as dúvidas reais aparecem.",
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

          {/* Título real da seção, não um parágrafo com cara de título.
              O logotipo carrega o nome visualmente e o texto acessível fica
              no h2: sem ele, os três pilares abaixo eram h3 órfãos, sem
              seção à qual pertencer — leitor de tela não alcança a área por
              navegação de títulos, e o buscador não entende que existe um
              bloco sobre o curso. */}
          <h2 className="mt-8">
            <span className="sr-only">Mentory Fisio, por Millane Wanessa</span>
            <Image
              src="/marca/mentory.png"
              alt=""
              width={1400}
              height={289}
              sizes="(max-width: 768px) 92vw, 640px"
              className="h-auto w-full max-w-[640px]"
            />
          </h2>

          {/* Formulação dela, do Instagram. Uma tentativa anterior de trocar
              "referência" por "segurança" criava cacofonia — "da inSEGURança
              à SEGURança" repete a raiz em palavras seguidas e trava a
              leitura em voz alta. */}
          <p className="t-display mt-12 max-w-[20ch] text-creme-100">
            De insegura a{" "}
            <span className="t-italico">referência clínica</span> em cirurgia
            plástica.
          </p>

          {/* Dois movimentos, nesta ordem: o problema que a pessoa reconhece
              em si mesma, e só depois o formato do curso. A frase de abertura
              do segundo parágrafo é dela, do Instagram — define o curso por
              contraste em sete palavras, melhor do que qualquer descrição.

              Ficou de fora o trecho "uma das áreas que mais crescem na
              fisioterapia": é a única parte do texto original que fala do
              mercado em vez do que ela entrega, serviria para qualquer curso
              de qualquer área e não tem fonte. */}
          <p className="t-corpo-grande mt-9 max-w-[54ch] text-creme-100/80">
            A graduação não prepara ninguém para o pós-operatório de cirurgia
            plástica. Você sai sabendo drenagem e descobre na primeira paciente
            que isso é uma fração do problema.
          </p>

          <p className="t-corpo-grande mt-6 max-w-[54ch] text-creme-100">
            Aqui você não apenas assiste a aulas. Você vive a rotina de quem
            atende pós-operatório de cirurgia plástica, acompanhando casos
            reais em consultório e centro cirúrgico, com supervisão e
            direcionamento durante três meses de imersão clínica.
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

        {/* Relatos das alunas vêm antes do CTA: prova social imediatamente
            antes do pedido de ação converte melhor do que depois dele. */}
        <Depoimentos />

        {/* Turma vigente + CTA.
            Número de turma e mês são a prova mais barata de que isto é um
            programa que já rodou sete vezes, e não uma promessa de landing. */}
        <Revelar className="mt-28">
          <div className="regua grid grid-cols-1 gap-x-12 gap-y-10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-label text-creme-100/65">
                Turma {site.mentory.turma} · Presencial em {site.cidade}
              </p>

              <p className="t-titulo mt-5 max-w-[26ch] text-creme-100">
                A oitava turma acontece em {site.mentory.periodo}, com
                inscrições abertas.
              </p>

              <p className="mt-6 max-w-[48ch] text-creme-100/75">
                As vagas são limitadas pela própria natureza da vivência, já que
                centro cirúrgico não comporta turma grande. Me escreva no
                WhatsApp para saber as datas, o investimento e as condições de
                pagamento.
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
    </section>
  );
}
