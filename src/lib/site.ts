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
   * Domínio de produção. Usado no metadataBase, no sitemap e no JSON-LD.
   * Trocar aqui basta para os três acompanharem.
   */
  url: "https://millanewanessa.com.br",
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
  | "geral"
  | "posoperatorio"
  | "intraoperatorio"
  | "lipedema"
  | "posparto"
  | "mentory"
  | "turma";

/**
 * Uma mensagem por assunto.
 *
 * Duas coisas guiaram a redação:
 *
 * 1. Curta. A pessoa vai enviar isto do próprio celular e precisa conseguir
 *    completar com o caso dela sem apagar meio parágrafo antes. Mensagem
 *    pré-preenchida longa costuma ser deletada inteira, e aí a Dra. perde a
 *    informação de origem.
 * 2. "Vim pelo site" em todas. É o que separa um contato vindo daqui de um
 *    contato vindo do Instagram ou de indicação, sem precisar perguntar.
 *
 * `geral` existe porque os botões de topo, rodapé e consultório não sabem
 * qual é o assunto — quem clica ali pode querer qualquer um dos quatro
 * atendimentos. Antes todos usavam a mensagem de pós-operatório, então
 * alguém com lipedema anunciava um pós-operatório que não fez.
 */
const mensagens: Record<MensagemContexto, string> = {
  geral:
    "Olá, Dra. Millane! Vim pelo site e gostaria de agendar uma consulta.",
  posoperatorio:
    "Olá, Dra. Millane! Vim pelo site e quero agendar meu acompanhamento de pós-operatório.",
  intraoperatorio:
    "Olá, Dra. Millane! Vim pelo site e quero saber como funciona o acompanhamento intraoperatório.",
  lipedema:
    "Olá, Dra. Millane! Vim pelo site e quero saber sobre o tratamento de lipedema.",
  posparto:
    "Olá, Dra. Millane! Vim pelo site e quero saber sobre o acompanhamento no pós-parto.",
  mentory:
    "Olá! Sou fisioterapeuta, vim pelo site e quero saber mais sobre o Mentory Fisio.",
  turma: `Olá! Sou fisioterapeuta, vim pelo site e quero me inscrever na Turma ${site.mentory.turma} do Mentory Fisio.`,
};

/**
 * Monta o link do WhatsApp já com a mensagem certa para o contexto do clique.
 * Assim a Dra. sabe do que a pessoa quer falar antes de responder.
 */
export function linkWhatsapp(contexto: MensagemContexto = "geral"): string {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagens[contexto])}`;
}
