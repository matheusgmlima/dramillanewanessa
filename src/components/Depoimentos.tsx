import Revelar from "./ui/Revelar";

/**
 * Depoimentos.
 *
 * IMPORTANTE — esta lista está vazia de propósito.
 *
 * Depoimento de paciente e de aluna é declaração de pessoa real. Preencher
 * com texto plausível inventado por mim criaria prova social falsa sobre gente
 * que existe, e num contexto de saúde isso é sério (além de ser exatamente o
 * tipo de coisa que faz o site cheirar a template).
 *
 * A Dra. Millane tem depoimentos reais nos destaques do Instagram
 * (“Depoimentos”, “Feedback”, “Alunos”). Passe os textos e nomes para cá.
 * Enquanto o array estiver vazio, a seção simplesmente não aparece — melhor
 * um site sem a seção do que um site com prova social fabricada.
 */

type Depoimento = {
  texto: string;
  autora: string;
  /** Ex.: "paciente — pós-operatório" ou "Dra., aluna do Mentory Fisio" */
  papel: string;
};

const depoimentos: Depoimento[] = [
  // TODO: preencher com os depoimentos reais dos destaques do Instagram.
];

export default function Depoimentos() {
  if (depoimentos.length === 0) return null;

  return (
    <section className="bg-creme-200 py-[var(--spacing-secao)]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Revelar>
          <p className="t-label text-vinho-700">Quem já passou por aqui</p>
        </Revelar>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Revelar as="figure" key={d.autora} atraso={i * 90}>
              <blockquote className="regua pt-8">
                <p className="font-display text-[1.3rem] leading-snug text-tinta-900">
                  “{d.texto}”
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <p className="t-label text-vinho-700">{d.autora}</p>
                <p className="t-label mt-1 text-tinta-400">{d.papel}</p>
              </figcaption>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
