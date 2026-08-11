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
        {/* ---------- Coluna de texto ---------- */}
        <div className="z-10 flex flex-col justify-center lg:col-span-6 lg:pb-24 xl:col-span-5">
          <p className="t-label text-vinho-700">
            Fisioterapia Dermatofuncional
            <span className="mx-3 text-tinta-400">·</span>
            {site.cidade} — {site.estado}
          </p>

          <h1 className="mt-7 max-w-[520px]">
            <span className="sr-only">
              {site.nomeCompleto} — {site.titulo}
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
            Cuido da recuperação de quem passou por cirurgia plástica, convive
            com lipedema ou acabou de ser mãe. São{" "}
            <span className="text-vinho-700">{site.experiencia.anos} anos</span>{" "}
            acompanhando cada fase de perto — do primeiro curativo à alta.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Botao href={linkWhatsapp("consulta")} externo>
              Agendar consulta
            </Botao>
          </div>

          {/* Porta secundária: outro público, tratado com peso visual menor
              mas presença clara. Quem é fisioterapeuta se reconhece na frase
              e não precisa caçar o curso página abaixo. */}
          <a
            href="#mentory-fisio"
            className="group mt-10 inline-flex max-w-fit items-baseline gap-2.5 text-tinta-500 transition-colors duration-300 hover:text-vinho-700"
          >
            <span className="t-label">É fisioterapeuta?</span>
            <span className="t-titulo t-italico text-[1.15rem] leading-none">
              Conheça o Mentory Fisio
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
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

          <Image
            src="/fotos/M_171-cut.png"
            alt={`${site.nomeCompleto}, fisioterapeuta dermatofuncional em ${site.cidade}`}
            width={830}
            height={1484}
            priority
            sizes="(max-width: 1024px) 88vw, 46vw"
            className="relative mx-auto h-auto w-[84%] max-w-[560px] object-contain lg:mr-0 lg:ml-auto lg:w-full"
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
