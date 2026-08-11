import Image from "next/image";
import Revelar from "./ui/Revelar";
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
      "Acompanho a cirurgia dentro do centro cirúrgico e realizo as intervenções necessárias durante o próprio procedimento, junto à equipe. Estar ali muda a condução do pós inteiro: eu sei exatamente o que foi feito no seu tecido, em vez de deduzir depois pelo relatório.",
    destaque: true,
    foto: null,
    contexto: "intraoperatorio" as const,
    cta: "Falar sobre intraoperatório",
  },
  {
    numero: "02",
    titulo: "Pós-operatório de cirurgia plástica",
    resumo:
      "A cirurgia entrega uma parte do resultado. A outra parte acontece depois, e é aí que eu entro.",
    texto:
      "Acompanho a recuperação desde os primeiros dias: drenagem, controle de fibrose e seroma, cuidado com a cicatriz, retorno gradual às atividades. Cada corpo responde de um jeito, então o protocolo se ajusta à sua evolução, e não o contrário.",
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
      "O lipedema é um acúmulo anormal de gordura nas pernas e braços que causa dor, inchaço e sensação de peso, e não responde a dieta nem a exercício. O tratamento conservador reduz sintoma e devolve qualidade de vida, mas depende de diagnóstico correto e de conduta contínua.",
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
      "Recuperação de cesárea, diástase abdominal, retenção de líquido e retomada da força no seu tempo. Sem pressa por resultado estético e sem ignorar o que o seu corpo está pedindo naquele momento.",
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
                  {item.foto ? (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.foto}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 38vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-vinho-700">
                      <Image
                        src="/marca/simbolo.png"
                        alt=""
                        width={784}
                        height={784}
                        sizes="(max-width: 1024px) 60vw, 22vw"
                        className="h-auto w-[58%] opacity-25 invert"
                      />
                      <span className="t-label absolute bottom-8 left-8 text-creme-100/70">
                        Dentro do bloco
                      </span>
                    </div>
                  )}
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
      </div>
    </section>
  );
}
