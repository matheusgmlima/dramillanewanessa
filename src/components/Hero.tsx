import Image from "next/image";
import Botao from "./ui/Botao";
import { site, linkWhatsapp } from "@/lib/site";

/**
 * Hero.
 *
 * Três decisões que afastam isto do hero-padrão:
 *
 * 1. O logotipo real dela entra como imagem, não recriado em fonte. O "Wanessa"
 *    em script é desenho exclusivo — refazer em Bodoni jogaria fora a parte
 *    mais reconhecível da marca.
 * 2. Composição assimétrica: texto ancorado na margem esquerda, ela sangrando
 *    pela direita e passando por baixo da régua inferior. Nada centralizado.
 * 3. A porta secundária (fisioterapeutas → Mentory) mora aqui dentro, como
 *    caminho paralelo — não como um portão que bloqueia a entrada.
 */
export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 lg:min-h-screen lg:pt-32">
      {/* Símbolo da marca como marca d'água — grande, quase imperceptível.
          É o monograma real dela (cruz + forma floral), não um ornamento
          genérico de banco de ícones. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[18%] -right-[22%] w-[85vw] max-w-[980px] opacity-[0.055] lg:-right-[8%] lg:w-[52vw]"
      >
        <Image
          src="/marca/simbolo.png"
          alt=""
          width={784}
          height={784}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-y-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-x-8 lg:px-14">
        {/* ---------- Coluna de texto ----------
            A figura dela é o elemento mais alto do hero, e o texto não chega
            perto dessa altura. Com justify-center a sobra ia toda para baixo
            da faixa do Mentory e virava um buraco de 200px.

            justify-between resolve usando a sobra em vez de escondê-la: o
            bloco de apresentação ancora no topo, a faixa desce até a base da
            figura, e as duas colunas passam a terminar na mesma linha. A
            distância entre os dois grupos vira separação proposital entre o
            que é para paciente e o que é para fisioterapeuta. */}
        <div className="z-10 flex flex-col justify-between lg:col-span-6 lg:gap-y-12 lg:pb-2 xl:col-span-5">
          <div className="flex flex-col">
          <p className="t-label text-vinho-700">
            {site.profissao} Dermatofuncional
            <span className="mx-3 text-tinta-400">·</span>
            {site.cidade}, {site.estado}
          </p>

          <h1 className="mt-7 max-w-[520px]">
            <span className="sr-only">
              {site.nomeCompleto}, {site.titulo}
            </span>
            <Image
              src="/marca/logo-vinho.png"
              alt=""
              width={1400}
              height={683}
              priority
              className="h-auto w-full max-w-[440px]"
            />
          </h1>

          <p className="t-corpo-grande mt-9 max-w-[440px] text-tinta-700">
            Acompanho a recuperação de quem passou por cirurgia plástica,
            convive com lipedema ou acabou de ser mãe. São{" "}
            <span className="text-vinho-700">{site.experiencia.anos} anos</span>{" "}
            de prática clínica dentro do centro cirúrgico e no consultório.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Botao href={linkWhatsapp("geral")} externo>
              Agendar consulta
            </Botao>
          </div>
          </div>

          {/* Porta secundária para o outro público.
              Antes isto era uma frase solta que quebrava em duas linhas e
              deixava um vão enorme abaixo. Virou uma faixa com régua: ocupa
              largura em vez de altura, e carrega informação concreta (turma
              aberta) em vez de um convite vago. */}
          <a
            href="#mentory-fisio"
            className="group regua mt-14 flex items-center justify-between gap-6 py-5 text-tinta-700 transition-colors duration-300 hover:text-vinho-700 lg:mt-0"
          >
            <span>
              <span className="t-label block text-tinta-400">
                Para fisioterapeutas
              </span>

              {/* "Turma 8" não pode quebrar entre a palavra e o número, e o
                  selo de inscrição ganha linha própria: no celular os três
                  pedaços na mesma linha viravam uma sopa de texto. */}
              <span className="font-display mt-1.5 block text-[1.3rem] leading-tight">
                Mentory Fisio{" "}
                <span className="t-italico whitespace-nowrap">
                  Turma {site.mentory.turma}
                </span>
              </span>

              {site.mentory.inscricoesAbertas && (
                <span className="t-label mt-2 block text-vinho-700">
                  Inscrições abertas
                </span>
              )}
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
        </div>

        {/* ---------- Coluna da foto ---------- */}
        <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-7 xl:col-start-6">
          {/* Bloco de cor que ancora a figura. Sem ele o recorte "flutua"
              no creme e o hero perde peso. */}
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-[78%] w-[68%] bg-vinho-700 lg:h-[82%] lg:w-[60%]"
          />

          {/* translate-x desloca a figura para a direita no desktop, de modo
              que a franja do recorte no cabelo caia sobre o creme em vez de
              sobre o bloco vinho, onde o serrilhado ficava visível. */}
          <Image
            src="/fotos/M_171-cut.png"
            alt={`${site.nomeCompleto}, fisioterapeuta dermatofuncional em ${site.cidade}`}
            width={830}
            height={1484}
            priority
            sizes="(max-width: 1024px) 88vw, 46vw"
            className="relative mx-auto h-auto w-[84%] max-w-[560px] object-contain lg:mr-0 lg:ml-auto lg:w-full lg:translate-x-[6%] xl:translate-x-[8%]"
          />
        </div>
      </div>

      {/* Régua inferior: os três serviços como texto corrido, não como três
          cards iguais com ícone. Diz a mesma coisa e não parece template. */}
      <div className="relative mx-auto mt-2 max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <ul className="regua flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          {[
            "Pós-operatório de cirurgia plástica",
            "Lipedema",
            "Pós-parto",
          ].map((item) => (
            <li key={item} className="t-label text-tinta-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
