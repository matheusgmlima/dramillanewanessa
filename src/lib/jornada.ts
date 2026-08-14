/**
 * As etapas do Mentory Fisio, na ordem em que acontecem.
 *
 * TEXTOS PARA CONFERÊNCIA — escritos a partir do que as fotos e os vídeos
 * mostram, e do que o próprio certificado informa (mentoria em fisioterapia
 * pré, intra e pós-operatório de cirurgia plástica, 20 horas, cinco dias).
 * A Dra. Millane precisa validar cada um antes de publicar.
 */

export type Etapa = {
  numero: string;
  titulo: string;
  /** Uma linha que resume o que muda para a aluna nesta etapa. */
  resumo: string;
  texto: string;
  /** Imagem principal, ou null se a etapa usa vídeo. */
  foto: string | null;
  /** Vídeo da etapa. Quando presente, substitui a foto principal. */
  video?: { src: string; poster: string; duracao: string };
  /** Imagens adicionais; viram miniaturas sob a mídia principal. */
  extras: string[];
  alt: string;
};

export const etapas: Etapa[] = [
  {
    numero: "01",
    titulo: "O material chega com você",
    resumo: "Kit completo, para você não precisar improvisar nada.",
    texto:
      "Cada aluna recebe a maleta do Mentory com o material de trabalho: bandagens, instrumentais e a apostila do curso. Você chega e já tem em mãos tudo o que vai usar nos dias de prática.",
    foto: "/jornada/kit.jpg",
    extras: [],
    alt: "Maletas e materiais do Mentory Fisio preparados para as alunas",
  },
  {
    numero: "02",
    titulo: "Além da cirurgia",
    resumo: "A base teórica que a graduação não dá.",
    texto:
      "Anatomia aplicada, tipos de procedimento e o que cada um provoca no tecido. É o conteúdo que permite avaliar cada paciente em vez de repetir o mesmo protocolo em todo mundo.",
    foto: "/jornada/apostila.jpg",
    extras: [],
    alt: "Apostila do Mentory Fisio com o tema Além da Cirurgia",
  },
  {
    numero: "03",
    titulo: "Demonstração técnica",
    resumo: "Primeiro você vê a conduta sendo feita, passo a passo.",
    texto:
      "Cada técnica é demonstrada antes de você executar. Aplicação de bandagem, manejo de cicatriz e as condutas específicas de cada fase do pós-operatório.",
    foto: "/jornada/tecnica.jpg",
    extras: [],
    alt: "Dra. Millane Wanessa demonstrando aplicação de bandagem",
  },
  {
    numero: "04",
    titulo: "Prática entre colegas",
    resumo: "Você treina a mão antes de encostar em paciente.",
    texto:
      "As alunas praticam umas nas outras, com correção na hora. É onde o gesto deixa de ser teoria e vira memória, no ambiente em que errar não tem custo.",
    foto: "/jornada/pratica.jpg",
    extras: [],
    alt: "Alunas do Mentory Fisio praticando aplicação de bandagem",
  },
  {
    numero: "05",
    titulo: "Dentro do centro cirúrgico",
    resumo: "A cirurgia por dentro, com você presente.",
    texto:
      "Você acompanha o procedimento junto à equipe e atua no intraoperatório. Ver o que acontece com o tecido durante a cirurgia muda a forma como você conduz toda a recuperação depois.",
    foto: null,
    video: {
      src: "/jornada/bloco.mp4",
      poster: "/jornada/bloco-poster.jpg",
      duracao: "8 segundos",
    },
    extras: [],
    alt: "Procedimento cirúrgico acompanhado pelas alunas do Mentory Fisio",
  },
  {
    numero: "06",
    titulo: "Certificação",
    resumo: "Você sai com prática, não apenas com certificado.",
    texto:
      "São 20 horas de conteúdo em cinco dias, entre teoria e prática. Ao final você já esteve no bloco, já executou as condutas e já atendeu acompanhada. O certificado registra um percurso que aconteceu de fato.",
    foto: "/jornada/certificado.jpg",
    extras: ["/jornada/encerramento.jpg"],
    alt: "Alunas do Mentory Fisio com o certificado de conclusão",
  },
  {
    numero: "07",
    titulo: "Três meses de acompanhamento",
    resumo: "A parte que a maioria dos cursos não tem.",
    texto:
      "Terminado o presencial, você segue com suporte por três meses. É quando aparecem as dúvidas de verdade: a paciente que não evolui como esperado, o caso que foge do padrão, a decisão que você precisa tomar sozinha no consultório. Nessa hora você ainda tem com quem falar.",
    foto: null,
    extras: [],
    alt: "",
  },
];

/**
 * Relato gravado por uma aluna dentro do próprio centro cirúrgico.
 *
 * Fica fora da lista de etapas porque não é uma: é o fecho da jornada. Depois
 * de ver o percurso inteiro, ouvir alguém que acabou de vivê-lo, no lugar
 * onde viveu, vale mais do que qualquer parágrafo nosso.
 *
 * Vai sem legenda, por decisão do cliente. O texto ao lado do player carrega
 * o essencial do que ela diz, para que quem assiste sem som — ou não pode
 * ouvir — não fique sem a informação.
 */
export const relato = {
  src: "/jornada/relato-bloco.mp4",
  poster: "/jornada/relato-bloco-poster.jpg",
  duracao: "26 segundos · com áudio",
  descricao:
    "Aluna do Mentory Fisio relata a experiência dentro do centro cirúrgico",
};
