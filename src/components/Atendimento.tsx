import Image from "next/image";
import Revelar from "./ui/Revelar";
import { linkWhatsapp } from "@/lib/site";

/**
 * Os três atendimentos.
 *
 * O reflexo automático aqui seria três cards lado a lado, cada um com um ícone
 * de biblioteca. Isso trata as três coisas como equivalentes e intercambiáveis
 * — o que elas não são: pós-operatório é o carro-chefe, lipedema é o
 * diferencial técnico, pós-parto é o mais delicado.
 *
 * Então: linhas empilhadas, numeradas, alternando o lado da foto. Cada uma
 * ocupa a largura toda e é lida de verdade, em vez de escaneada em bloco.
 */

const atendimentos = [
  {
    numero: "01",
    titulo: "Pós-operatório de cirurgia plástica",
    resumo:
      "A cirurgia entrega 60% do resultado. Os outros 40% acontecem depois — e é aí que eu entro.",
    texto:
      "Acompanho a recuperação desde os primeiros dias: drenagem, controle de fibrose e seroma, cicatriz, retorno gradual às atividades. Cada corpo responde de um jeito, então o protocolo se ajusta à sua evolução, não ao contrário.",
    foto: "/fotos/M_294.jpg",
    contexto: "consulta" as const,
    cta: "Agendar pós-operatório",
  },
  {
    numero: "02",
    titulo: "Lipedema",
    resumo:
      "Não é gordura comum, não é falta de esforço, e não some com dieta.",
    texto:
      "Lipedema é um acúmulo anormal de gordura nas pernas e braços que causa dor, inchaço e sensação de peso — e resiste a dieta e exercício. O tratamento conservador reduz sintoma e melhora qualidade de vida, mas depende de diagnóstico correto e conduta contínua.",
    foto: "/fotos/M_23.jpg",
    contexto: "lipedema" as const,
    cta: "Falar sobre lipedema",
  },
  {
    numero: "03",
    titulo: "Pós-parto",
    resumo: "O corpo que gerou também precisa de cuidado para se reorganizar.",
    texto:
      "Recuperação de cesárea, diástase abdominal, retenção de líquido e retomada da força no seu tempo. Sem pressa por resultado estético e sem ignorar o que o seu corpo está pedindo naquele momento.",
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
          <h2 className="t-display mt-6 max-w-[16ch]">
            Três frentes, um mesmo <span className="t-italico">cuidado</span>.
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
                {/* Foto */}
                <div
                  className={`lg:col-span-5 ${
                    invertido ? "lg:order-2 lg:col-start-8" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.foto}
                      alt=""
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
                  {/* vinho-200 ficava em 1.4:1 sobre o creme — sumia.
                      vinho-400 chega a 3.58:1: continua discreto, mas legível. */}
                  <span className="t-display block text-vinho-400 select-none">
                    {item.numero}
                  </span>

                  <h3 className="t-titulo mt-4 max-w-[18ch]">{item.titulo}</h3>

                  <p className="t-corpo-grande mt-6 max-w-[38ch] text-vinho-700">
                    {item.resumo}
                  </p>

                  <p className="mt-5 max-w-[52ch] text-tinta-700">
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
