import { site } from "@/lib/site";

/**
 * Dados estruturados schema.org.
 *
 * É o que faz o Google entender que existe um consultório real em Recife, e
 * não apenas uma página com texto. Alimenta o painel lateral da busca, o
 * cartão de resultado local e a associação com o Maps — o caminho por onde
 * chega quem pesquisa "fisioterapeuta pós-operatório Recife" sem conhecer o
 * nome dela.
 *
 * Nada aqui é decorativo: cada campo repete informação que já está visível
 * na página. Marcar dado que o usuário não vê é violação das diretrizes do
 * Google e pode custar a rich snippet inteira.
 */
export default function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${site.url}/#consultorio`,
    name: `${site.nomeCompleto} — ${site.profissao} Dermatofuncional`,
    description:
      "Fisioterapia dermatofuncional em Recife: acompanhamento intraoperatório, pós-operatório de cirurgia plástica, lipedema e pós-parto.",
    url: site.url,
    telephone: `+${site.whatsapp.numero}`,
    image: `${site.url}/opengraph-image.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.endereco.logradouro}, ${site.endereco.predio}`,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.estado,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: site.cidade,
    },
    medicalSpecialty: "Physiotherapy",
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Acompanhamento intraoperatório em cirurgia plástica",
      },
      {
        "@type": "MedicalTherapy",
        name: "Fisioterapia no pós-operatório de cirurgia plástica",
      },
      { "@type": "MedicalTherapy", name: "Tratamento conservador de lipedema" },
      { "@type": "MedicalTherapy", name: "Fisioterapia no pós-parto" },
    ],
    founder: {
      "@type": "Person",
      name: site.nomeCompleto,
      jobTitle: site.profissao,
      identifier: site.crefito,
      sameAs: [site.instagram.url],
    },
    sameAs: [site.instagram.url, site.instagramMentory.url],
  };

  return (
    <script
      type="application/ld+json"
      // O conteúdo é um objeto que nós montamos, não entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
