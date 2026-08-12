import Revelar from "./ui/Revelar";
import { site } from "@/lib/site";

/**
 * Relatos de alunas do Mentory Fisio.
 *
 * Transcritos literalmente do que elas escreveram (WhatsApp, post de
 * Instagram, depoimento em vídeo). Nada foi reescrito nem "melhorado":
 * depoimento polido demais soa falso, e a fala espontânea delas convence
 * mais do que qualquer versão editada.
 *
 * Os textos longos foram cortados no trecho mais relevante, com reticências
 * marcando o corte. Cortar é honesto; parafrasear não seria.
 *
 * Vive dentro do território vinho do Mentory, e não numa seção neutra: quem
 * lê isto é fisioterapeuta avaliando o curso, não paciente procurando
 * consulta.
 *
 * ATENÇÃO ao adicionar relatos aqui: o Código de Ética da Fisioterapia
 * (Res. COFFITO 424/2013) veda divulgar, para fins de autopromoção,
 * declaração ou carta de agradecimento emitida por PACIENTE em razão de
 * serviço profissional prestado. Estes três são de ALUNAS de um curso, uma
 * relação educacional, e por isso não caem nessa vedação. Depoimento de
 * paciente não deve entrar no site.
 */

type Relato = {
  texto: string;
  autora: string;
  papel: string;
};

const relatos: Relato[] = [
  {
    texto:
      "Nunca imaginei um curso nesse modelo, que me levasse para dentro de um bloco cirúrgico!!! E tirasse nossos receios. Após atender alguns pacientes tanto no intraoperatório quanto no pós-op sob a supervisão de Millane, hoje me sinto mais segura, confiante e capacitada para atender meus pacientes.",
    autora: "Michelly Soliê",
    papel: "aluna do Mentory Fisio",
  },
  {
    texto:
      "Tive a oportunidade de ir até o bloco cirúrgico e ver de perto o intraoperatório, entendendo na prática como cada etapa funciona. Estar dentro do bloco cirúrgico, vendo tudo acontecer, deixou minha mente muito mais clara, segura e com respostas para dúvidas que eu tinha.",
    autora: "Dra. Camila Vaz",
    papel: "aluna da Turma 3 · Recife, PE",
  },
  {
    texto:
      "Foram dias de muita troca, aprendizado e aprofundamento em protocolos que realmente fazem a diferença na recuperação das pacientes. […] Seguimos firmes, elevando o nível da fisioterapia aplicada à cirurgia plástica!",
    autora: "Dra. Isabelle Costa",
    papel: "aluna do Mentory Fisio",
  },
];

export default function Depoimentos() {
  if (relatos.length === 0) return null;

  return (
    <div className="mt-28">
      <Revelar>
        <p className="t-label text-creme-100/65">
          Quem já passou pelo Mentory
        </p>
      </Revelar>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
        {relatos.map((relato, i) => (
          <Revelar as="figure" key={relato.autora} atraso={i * 110}>
            <blockquote className="regua pt-8">
              <p className="font-display text-[1.2rem] leading-snug text-creme-100">
                “{relato.texto}”
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <p className="t-label text-creme-100">{relato.autora}</p>
              {/* /55 dá 3.95:1 sobre o vinho-700; /70 sobe para 5.73:1.
                  O rodapé pode usar /55 porque lá o fundo é vinho-950. */}
              <p className="t-label mt-1.5 text-creme-100/70">
                {relato.papel}
              </p>
            </figcaption>
          </Revelar>
        ))}
      </div>

      <Revelar className="mt-12">
        <a
          href={site.instagramMentory.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-regua t-label cursor-pointer text-creme-100/70"
        >
          Mais relatos em {site.instagramMentory.handle}
        </a>
      </Revelar>
    </div>
  );
}
