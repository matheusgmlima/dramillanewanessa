import Image from "next/image";
import Revelar from "./ui/Revelar";
import SetaJornada from "./ui/SetaJornada";
import Video from "./ui/Video";
import { etapas } from "@/lib/jornada";

/**
 * A jornada do Mentory Fisio, etapa por etapa.
 *
 * Layout alternado com conectores curvos. Numa seção da home isso custaria
 * caro em rolagem, mas aqui é página própria: quem entrou veio ver
 * exatamente isto, então altura deixa de ser custo e vira espaço para cada
 * etapa respirar.
 *
 * Enquanto as fotos não chegam, cada etapa mostra um bloco da marca com o
 * monograma. O layout já é o definitivo — quando as imagens entrarem, nada
 * se desloca.
 */
/**
 * Passe-partout creme em volta da imagem.
 *
 * Foto colorida direto sobre o vinho fica com a borda "solta", como recorte
 * colado na página. O fio fino mais o respiro interno dão o acabamento de
 * imagem emoldurada e amarram as fotos ao fundo, sem pesar como card.
 */
function Moldura({ children }: { children: React.ReactNode }) {
  return <div className="border border-creme-100/25 p-2">{children}</div>;
}

export default function Jornada() {
  return (
    // O respiro entre etapas vem das setas, que só existem no desktop. No
    // celular elas somem e o texto de uma etapa encostava na foto da
    // seguinte, com zero de separação. O gap cobre exatamente esse vazio e
    // zera onde as setas voltam a fazer o trabalho.
    <div className="mt-20 flex flex-col gap-y-20 sm:gap-y-24 lg:mt-28 lg:gap-y-0">
      {etapas.map((etapa, i) => {
        const invertido = i % 2 === 1;
        const ultima = i === etapas.length - 1;
        const semMidia = !etapa.foto && !etapa.video;
        const proxima = etapas[i + 1];
        const proximaCentralizada = Boolean(
          proxima && !proxima.foto && !proxima.video,
        );

        /* Etapa sem imagem ganha layout próprio, centrado e sem moldura.
           A tentativa anterior era manter a estrutura de duas colunas com o
           monograma no lugar da foto, mas uma moldura de 514x680 quase vazia
           ao lado de seis fotos reais lê como imagem que falhou, não como
           escolha. Como esta etapa é a única que não descreve um momento
           presencial, o layout diferente passa a dizer isso sozinho. */
        if (semMidia) {
          return (
            <div key={etapa.numero}>
              <Revelar as="article" className="flex flex-col items-center text-center">
                <span className="t-label text-creme-100/50">
                  {etapa.numero}
                </span>

                <h2 className="t-display mt-6 max-w-[18ch] text-creme-100">
                  {etapa.titulo}
                </h2>

                <p className="t-corpo-grande mt-7 max-w-[34ch] text-creme-100">
                  {etapa.resumo}
                </p>

                <p className="mt-5 max-w-[54ch] text-creme-100/75">
                  {etapa.texto}
                </p>
              </Revelar>
            </div>
          );
        }

        return (
          <div key={etapa.numero}>
            <Revelar
              as="article"
              className="grid grid-cols-1 items-center gap-x-14 gap-y-7 lg:grid-cols-12"
            >
              {/* Imagem, ou marcador enquanto a foto não chega */}
              <div
                className={`lg:col-span-5 ${
                  invertido ? "lg:order-2 lg:col-start-8" : "lg:order-1"
                }`}
              >
                {etapa.video ? (
                  <Video
                    src={etapa.video.src}
                    poster={etapa.video.poster}
                    descricao={etapa.alt}
                    legenda={etapa.video.duracao}
                    proporcao="9/16"
                    emoldurado
                  />
                ) : etapa.foto ? (
                  <figure>
                    {/* Duas imagens da mesma etapa ficam lado a lado, em pé
                        de igualdade. Antes a segunda virava uma miniatura
                        solta sob a principal e parecia sobra de layout. */}
                    {/* Lado a lado só a partir do tablet. Em 375px duas
                        colunas deixam cada foto com 140px — menos da metade
                        da largura das demais etapas, e o certificado fica
                        ilegível. Empilhadas, cada uma ocupa a coluna inteira. */}
                    <div
                      className={
                        etapa.extras.length === 1
                          ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
                          : ""
                      }
                    >
                      <Moldura>
                        {/* 3:4 respeita o enquadramento vertical em que as
                            fotos foram tiradas. No 4:3 anterior o corte
                            comia mais da metade da imagem: a apostila e a
                            demonstração da técnica ficavam decapitadas. */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={etapa.foto}
                            alt={etapa.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                          />
                        </div>
                      </Moldura>

                      {etapa.extras.length === 1 && (
                        <Moldura>
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <Image
                              src={etapa.extras[0]}
                              alt=""
                              fill
                              sizes="(max-width: 1024px) 50vw, 20vw"
                              className="object-cover"
                            />
                          </div>
                        </Moldura>
                      )}
                    </div>

                    {etapa.extras.length > 1 && (
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {etapa.extras.slice(0, 3).map((extra) => (
                          <Moldura key={extra}>
                            <div className="relative aspect-square overflow-hidden">
                              <Image
                                src={extra}
                                alt=""
                                fill
                                sizes="12vw"
                                className="object-cover"
                              />
                            </div>
                          </Moldura>
                        ))}
                      </div>
                    )}
                  </figure>
                ) : null}
              </div>

              {/* Texto */}
              <div
                className={`lg:col-span-6 ${
                  invertido
                    ? "lg:order-1 lg:col-start-1 lg:text-right"
                    : "lg:order-2"
                }`}
              >
                <span className="t-label text-creme-100/50">
                  {etapa.numero}
                </span>

                <h2 className="t-titulo mt-4 text-creme-100">{etapa.titulo}</h2>

                <p
                  className={`t-corpo-grande mt-5 max-w-[42ch] text-creme-100 ${
                    invertido ? "lg:ml-auto" : ""
                  }`}
                >
                  {etapa.resumo}
                </p>

                <p
                  className={`mt-4 max-w-[48ch] text-creme-100/75 ${
                    invertido ? "lg:ml-auto" : ""
                  }`}
                >
                  {etapa.texto}
                </p>
              </div>
            </Revelar>

            {/* O conector aponta para o lado onde a próxima etapa começa.
                Se a próxima é centralizada, desce reto. */}
            {!ultima && (
              <SetaJornada
                sentido={
                  proximaCentralizada
                    ? "centro"
                    : invertido
                      ? "direita"
                      : "esquerda"
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
