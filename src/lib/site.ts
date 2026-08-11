/**
 * Configuração central do site.
 * Tudo que muda com o tempo (telefone, endereço, datas de turma) mora aqui,
 * para não precisar caçar string espalhada pelos componentes.
 */

export const site = {
  nome: "Millane Wanessa",
  nomeCompleto: "Dra. Millane Wanessa",
  titulo: "Fisioterapia Dermatofuncional",
  cidade: "Recife",
  estado: "PE",

  // TODO: confirmar com o cliente
  whatsapp: {
    numero: "5581999950804", // formato internacional, sem símbolos
    exibicao: "(81) 99995-0804",
  },

  instagram: {
    handle: "@dra.millanewanessa",
    url: "https://www.instagram.com/dra.millanewanessa/",
  },

  endereco: {
    // TODO: confirmar endereço completo do consultório
    logradouro: "",
    bairro: "",
    cidade: "Recife",
    estado: "PE",
  },

  atendimento: {
    // TODO: confirmar horários
    dias: "Segunda a sexta",
    horario: "08h às 18h",
  },

  experiencia: {
    anos: 13,
  },
} as const;

type MensagemContexto = "consulta" | "lipedema" | "posparto" | "mentory" | "curso";

const mensagens: Record<MensagemContexto, string> = {
  consulta:
    "Olá, Dra. Millane! Vim pelo site e gostaria de agendar uma consulta de pós-operatório.",
  lipedema:
    "Olá, Dra. Millane! Vim pelo site e gostaria de saber mais sobre o tratamento de lipedema.",
  posparto:
    "Olá, Dra. Millane! Vim pelo site e gostaria de saber mais sobre o acompanhamento pós-parto.",
  mentory:
    "Olá! Sou fisioterapeuta e vim pelo site. Quero saber mais sobre o Mentory Fisio.",
  curso:
    "Olá! Sou fisioterapeuta e vim pelo site. Quero informações sobre a próxima turma do curso presencial em Recife.",
};

/**
 * Monta o link do WhatsApp já com a mensagem certa para o contexto do clique.
 * Assim a Dra. sabe de onde a pessoa veio sem precisar perguntar.
 */
export function linkWhatsapp(contexto: MensagemContexto = "consulta"): string {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagens[contexto])}`;
}
