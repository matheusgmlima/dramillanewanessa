/**
 * Configuração central do site.
 * Tudo que muda com o tempo (telefone, endereço, turma vigente) mora aqui,
 * para não precisar caçar string espalhada pelos componentes.
 */

export const site = {
  nome: "Millane Wanessa",
  nomeCompleto: "Dra. Millane Wanessa",
  titulo: "Fisioterapia Dermatofuncional",
  /**
   * O Código de Ética da Fisioterapia (Res. COFFITO 424/2013) exige que a
   * titulação profissional apareça por extenso na divulgação, e proíbe
   * substituí-la por expressão genérica. "Fisioterapia Dermatofuncional"
   * nomeia a especialidade, não a titulação — por isso os dois campos.
   */
  profissao: "Fisioterapeuta",
  crefito: "CREFITO 178254-F",
  cidade: "Recife",
  estado: "PE",

  whatsapp: {
    numero: "5581999990804",
    exibicao: "(81) 99999-0804",
  },

  instagram: {
    handle: "@dra.millanewanessa",
    url: "https://www.instagram.com/dra.millanewanessa/",
  },

  instagramMentory: {
    handle: "@mentoryfisio",
    url: "https://www.instagram.com/mentoryfisio/",
  },

  endereco: {
    predio: "Empresarial Rio Mar, Torre 4, sala 809",
    logradouro: "Av. República do Líbano, 251",
    bairro: "Pina",
    cidade: "Recife",
    estado: "PE",
    /** Busca pelo endereço completo; evita depender de chave de API de mapa. */
    mapa: "https://www.google.com/maps/search/?api=1&query=Empresarial+Rio+Mar+Torre+4+Av+Republica+do+Libano+251+Pina+Recife+PE",
  },

  atendimento: {
    dias: "Segunda a sexta",
    horario: "08h às 18h",
  },

  experiencia: {
    anos: 6,
  },

  mentory: {
    turma: 8,
    periodo: "setembro",
    inscricoesAbertas: true,
  },

  autor: {
    nome: "Matheus Lima",
    instagram: "@matheusgmlima",
    url: "https://www.instagram.com/matheusgmlima/",
  },
} as const;

type MensagemContexto =
  | "consulta"
  | "intraoperatorio"
  | "lipedema"
  | "posparto"
  | "mentory"
  | "turma";

const mensagens: Record<MensagemContexto, string> = {
  consulta:
    "Olá, Dra. Millane! Vim pelo site e gostaria de agendar uma consulta de pós-operatório.",
  intraoperatorio:
    "Olá, Dra. Millane! Vim pelo site e gostaria de saber sobre o acompanhamento intraoperatório.",
  lipedema:
    "Olá, Dra. Millane! Vim pelo site e gostaria de saber mais sobre o tratamento de lipedema.",
  posparto:
    "Olá, Dra. Millane! Vim pelo site e gostaria de saber mais sobre o acompanhamento pós-parto.",
  mentory:
    "Olá! Sou fisioterapeuta e vim pelo site. Quero saber mais sobre o Mentory Fisio.",
  turma:
    "Olá! Sou fisioterapeuta e vim pelo site. Quero me inscrever na Turma 8 do Mentory Fisio.",
};

/**
 * Monta o link do WhatsApp já com a mensagem certa para o contexto do clique.
 * Assim a Dra. sabe de onde a pessoa veio sem precisar perguntar.
 */
export function linkWhatsapp(contexto: MensagemContexto = "consulta"): string {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagens[contexto])}`;
}
