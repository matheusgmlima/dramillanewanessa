import Image from "next/image";
import Revelar from "./ui/Revelar";
import Video from "./ui/Video";
import { linkWhatsapp } from "@/lib/site";

/**
 * As quatro frentes de atendimento, em ordem cronológica do cuidado:
 * ela entra no bloco, conduz o pós, e trata as duas condições específicas.
 *
 * O reflexo automático aqui seria quatro cards lado a lado, cada um com um
 * ícone de biblioteca. Isso trata tudo como equivalente e intercambiável, o
 * que não é o caso: o intraoperatório é o diferencial raro, o pós-operatório
 * é o carro-chefe, lipedema é a especialidade técnica, pós-parto é o mais
 * delicado.
 *
 * Então: linhas empilhadas, numeradas, alternando o lado da imagem. E o
 * intraoperatório recebe um bloco de cor no lugar da foto, o que resolve duas
 * coisas de uma vez: destaca o que é raro e evita ilustrar centro cirúrgico
 * com uma foto de escritório que não tem nada a ver.
 */

const atendimentos = [
  {
    numero: "01",
    titulo: "Intraoperatório",
    resumo: "Eu entro no bloco. O cuidado começa antes de você acordar.",
    texto:
      "Acompanho a cirurgia dentro do centro cirúrgico e realizo as intervenções indicadas durante o próprio procedimento, integrada à equipe. Estar presente ali muda toda a condução do pós-operatório: eu sei exatamente o que foi feito no seu tecido, em vez de deduzir depois pelo relatório cirúrgico.",
    destaque: true,
    foto: "/fotos/intra-1.jpg",
    contexto: "intraoperatorio" as const,
    cta: "Falar sobre intraoperatório",
  },
  {
    numero: "02",
    titulo: "Pós-operatório de cirurgia plástica",
    resumo:
      "A cirurgia entrega uma parte do resultado. A outra parte se constrói depois, e é aí que eu entro.",
    texto:
      "Acompanho a recuperação desde os primeiros dias: drenagem linfática, manejo de fibrose e seroma, cuidado com a cicatriz e retorno gradual às atividades. Cada corpo responde de um jeito, então a conduta se ajusta à sua evolução, e não o contrário.",
    destaque: false,
    foto: "/fotos/M_294.jpg",
    contexto: "consulta" as const,
    cta: "Agendar pós-operatório",
  },
  {
    numero: "03",
    titulo: "Lipedema",
    resumo:
      "Não é gordura comum, não é falta de esforço, e não some com dieta.",
    texto:
      "O lipedema é um acúmulo desproporcional de tecido adiposo, em geral nas pernas e nos braços, que causa dor, sensação de peso e facilidade para hematomas. Diferente da gordura comum, não regride apenas com dieta e exercício. O tratamento conservador busca controlar os sintomas e preservar a mobilidade, e depende de diagnóstico correto e acompanhamento contínuo.",
    destaque: false,
    foto: "/fotos/M_23.jpg",
    contexto: "lipedema" as const,
    cta: "Falar sobre lipedema",
  },
  {
    numero: "04",
    titulo: "Pós-parto",
    resumo: "O corpo que gerou também precisa de cuidado para se reorganizar.",
    texto:
      "Recuperação de cesárea, diástase abdominal, retenção de líquido e retomada gradual da força. Respeito o tempo do seu puerpério: sem pressa por resultado estético e sem ignorar o que o seu corpo está pedindo naquele momento.",
    destaque: false,
    foto: "/fotos/M_308.jpg",
    contexto: "posparto" as const,
    cta: "Falar sobre pós-parto",
  },
];

export default function Atendimento() {
  return (
    <section
      id="atendimento"
      className="textura-wm scroll-mt-24 py-[var(--spacing-secao)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Revelar>
          <p className="t-label text-vinho-700">O que eu trato</p>
          <h2 className="t-display mt-6 max-w-[18ch]">
            Do centro cirúrgico até a{" "}
            <span className="t-italico">alta</span>.
          </h2>
        </Revelar>

        <div className="mt-20 flex flex-col gap-y-24 lg:gap-y-32">
          {atendimentos.map((item, i) => {
            const invertido = i % 2 === 1;

            return (
              <Revelar
                as="article"
                key={item.numero}
                className="regua grid grid-cols-1 gap-x-12 gap-y-8 pt-10 lg:grid-cols-12"
              >
                {/* Imagem, ou bloco de cor no caso do destaque */}
                <div
                  className={`lg:col-span-5 ${
                    invertido ? "lg:order-2 lg:col-start-8" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.foto}
                      alt={
                        item.destaque
                          ? "Dra. Millane Wanessa em centro cirúrgico, durante um procedimento"
                          : ""
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div
                  className={`flex flex-col lg:col-span-6 ${
                    invertido ? "lg:order-1 lg:col-start-1" : "lg:order-2"
                  }`}
                >
                  {/* vinho-200 ficava em 1.4:1 sobre o creme e sumia.
                      vinho-400 chega a 3.58:1: discreto, mas legível. */}
                  <span className="t-display block text-vinho-400 select-none">
                    {item.numero}
                  </span>

                  <h3 className="t-titulo mt-4 max-w-[18ch]">{item.titulo}</h3>

                  <p className="t-corpo-grande mt-6 max-w-[40ch] text-vinho-700">
                    {item.resumo}
                  </p>

                  <p className="mt-5 max-w-[54ch] text-tinta-700">
                    {item.texto}
                  </p>

                  <a
                    href={linkWhatsapp(item.contexto)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-regua t-label mt-9 w-fit cursor-pointer text-vinho-700"
                  >
                    {item.cta}
                  </a>
                </div>
              </Revelar>
            );
          })}
        </div>

        {/* O vídeo dela explicando o intraoperatório.
            Fica no fim da seção, e não colado ao item 01, porque um bloco de
            mídia no meio quebraria o ritmo das quatro linhas. A frase ao lado
            é fala dela no próprio vídeo: copy que só existe aqui, impossível
            de confundir com texto de template. */}
        <Revelar className="mt-28">
          {/* items-center centra o vídeo na altura da coluna vizinha.
              O formato 9:16 tem altura fixa pela proporção, então não dá para
              esticá-lo até casar com o texto: o que dá é distribuir a sobra
              em cima e embaixo, e dimensionar a coluna direita para que
              texto + foto cheguem perto da mesma altura. */}
          <div className="regua grid grid-cols-1 items-center gap-x-12 gap-y-10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Video
                src="/video/intraoperatorio.mp4"
                poster="/video/intraoperatorio-poster.jpg"
                descricao="Dra. Millane Wanessa explica como funciona o acompanhamento intraoperatório dentro do centro cirúrgico"
                legenda="30 segundos · legendado"
              />
            </div>

            {/* Antes a foto morava numa terceira coluna estreita à direita,
                e o vídeo vertical (9:16) deixava a metade direita do bloco
                com uns 400px de vazio. Empilhar texto e foto numa coluna só
                aproveita a altura que o vídeo impõe, em vez de brigar com
                ela. */}
            {/* Coluna em 6/12, não 7: com ela mais estreita, texto e foto
                somam quase exatamente a altura do vídeo, e as bordas do
                parágrafo passam a coincidir com as da foto em vez de parar
                no meio dela. */}
            <div className="flex flex-col gap-y-10 lg:col-span-6 lg:col-start-6">
              <div>
                <p className="t-label text-vinho-700">Por dentro do bloco</p>

                <blockquote className="t-display mt-7 max-w-[13ch]">
                  “Enxergamos o sofrimento do{" "}
                  <span className="t-italico">tecido</span>.”
                </blockquote>

                <p className="mt-8 text-tinta-700">
                  Em trinta segundos eu mostro o que acontece dentro do centro
                  cirúrgico e por que a minha presença ali muda a condução da
                  sua recuperação.
                </p>
              </div>

              {/* Continua fora do celular: empilhada, cairia colada ao
                  retrato que abre a seção seguinte, e duas imagens seguidas
                  sem texto entre elas travam a leitura. */}
              <div className="relative hidden aspect-[16/9] overflow-hidden lg:block">
                <Image
                  src="/fotos/intra-2.jpg"
                  alt="Intervenção sendo realizada durante a cirurgia"
                  fill
                  sizes="48vw"
                  className="object-cover object-[center_38%]"
                />
              </div>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
