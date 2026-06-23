import resinaAntesImg from '../assets/resinaAntes.webp';
import resinaDepoisImg from '../assets/ResinaDepois.webp';
import clareamentoAntesImg from '../assets/clareamentoAntes.jpeg';
import clareamentoDepoisImg from '../assets/clareamentoDepois.jpeg';
import reabilitacaoAntesImg from '../assets/reabilitacaoAntes.webp';
import reabilitacaoDepoisImg from '../assets/reabilitacaoDepois.webp';
import bruxismoImg from '../assets/Bruxismo.jpeg';

export const siteInfo = {
  clinicName: 'Dra. Amanda Miyuki',
  professionalName: 'Dra. Amanda Miyuki Terayama',
  city: 'Três Lagoas',
  state: 'MS',
  cro: 'CRO-MS 7266',
  whatsappNumber: '556781889094',
  phoneDisplay: '+55 67 8188-9094',
  instagramUrl: 'https://www.instagram.com/amandaterayama/',
  googleProfileUrl: 'https://share.google/M24hfZMCReFO2XOuO',
  addressLine: 'Terrace Business Center - Av. Dr. Eloy Chaves, 956 - Sala 405',
  addressDetail: 'Centro, Três Lagoas - MS, 79602-000',
  fullAddress:
    'Terrace Business Center - Av. Dr. Eloy Chaves, 956 - Sala 405 - Centro, Três Lagoas - MS, 79602-000',
  mapQuery:
    'Terrace Business Center Av. Dr. Eloy Chaves 956 Sala 405 Centro Três Lagoas MS',
  hours: [
    'Manhã: 07:00 às 12:00',
    'Tarde: 13:00 às 17:00',
  ],
};

export const buildWhatsAppUrl = (
  message = 'Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica.'
) => `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const googleReviews = {
  rating: '5,0',
  total: 5,
  source: 'Google',
  businessName: 'Amanda Miyuki Terayama | Odontologia Estética',
  profileUrl: siteInfo.googleProfileUrl,
  highlights: [
    {
      author: 'Raquel Felício',
      title: 'Atendimento acolhedor',
      quote: 'Lugar incrível, aconchegante e bem iluminado.',
      summary:
        'Relata uma avaliação com escuta, paciência e liberdade para explicar o que queria melhorar.',
    },
    {
      author: 'Richelle Anjos',
      title: 'Capricho nos detalhes',
      quote: 'Super caprichosa e detalhista',
      summary:
        'Destaca o resultado do procedimento, o cuidado no acabamento e a confiança para voltar ao consultório.',
    },
    {
      author: 'Ana Luiza',
      title: 'Consultório confortável',
      quote: 'consultório confortável e limpo',
      summary:
        'Menciona dúvidas respondidas, atendimento cuidadoso e bom resultado no tratamento dental.',
    },
    {
      author: 'Yuri Gabriel',
      title: 'Profissional dedicada',
      quote: 'super dedicada e atenciosa',
      summary:
        'Valoriza a atenção com os pacientes, a estrutura moderna e a experiência positiva no atendimento.',
    },
  ],
};

export const featuredTreatments = [
  {
    title: 'Lentes de Resina',
    eyebrow: 'Estética natural',
    description:
      'Para quem deseja corrigir formato, proporção e harmonia dos dentes com planejamento personalizado e resultado natural.',
    beforeImg: resinaAntesImg,
    afterImg: resinaDepoisImg,
    objectPosition: 'center 30%',
    points: ['Planejamento de formato e proporção', 'Avaliação de mordida e cor'],
  },
  {
    title: 'Clareamento Dental',
    eyebrow: 'Controle de cor',
    description:
      'Clareamento acompanhado para melhorar a cor dos dentes com avaliação de sensibilidade, restaurações e histórico dental.',
    beforeImg: clareamentoAntesImg,
    afterImg: clareamentoDepoisImg,
    objectPosition: 'center 48%',
    points: ['Registro da cor inicial', 'Protocolo conforme sensibilidade'],
  },
  {
    title: 'Reabilitação Estética e Funcional',
    eyebrow: 'Função antes da beleza',
    description:
      'Para recuperar dentes desgastados, melhorar a mordida e devolver estética, conforto e segurança ao sorrir.',
    beforeImg: reabilitacaoAntesImg,
    afterImg: reabilitacaoDepoisImg,
    objectPosition: 'center center',
    points: ['Recuperação de desgaste dental', 'Plano funcional e estético'],
  },
  {
    title: 'Tratamento para Bruxismo',
    eyebrow: 'Conforto e proteção',
    description:
      'Avaliação para reduzir desgaste, dor muscular e tensão, protegendo dentes, articulação e musculatura.',
    image: bruxismoImg,
    imageAlt: 'Placa de bruxismo posicionada sobre arcada dentária',
    objectPosition: 'center center',
    points: ['Proteção contra sobrecarga', 'Avaliação de dor e desgaste'],
  },
];

export const differentials = [
  {
    title: 'Avaliação com documentação',
    description:
      'A consulta observa queixa, fotografias, mordida, desgaste, restaurações e prioridades antes de indicar procedimentos.',
  },
  {
    title: 'Planejamento por etapas',
    description:
      'Você entende o que precisa ser feito agora, o que pode esperar e quais cuidados influenciam o resultado.',
  },
  {
    title: 'Estética com função',
    description:
      'Cor, formato e proporção são avaliados junto com mordida, mastigação, desgaste, dor e saúde bucal.',
  },
  {
    title: 'Atendimento local e direto',
    description:
      'O contato é feito pelo WhatsApp da clínica, com atendimento no Terrace Business Center, no Centro de Três Lagoas.',
  },
];

export const treatmentCategories = [
  {
    title: 'Clínica Geral',
    description: 'Prevenção, limpeza e restaurações para manter a saúde bucal em dia.',
    treatments: [
      'Consulta odontológica',
      'Limpeza dental',
      'Aplicação de flúor',
      'Restaurações estéticas',
      'Troca de restaurações antigas',
    ],
  },
  {
    title: 'Estética Dental',
    description:
      'Para melhorar cor, formato, proporção e harmonia do sorriso com naturalidade.',
    treatments: [
      'Lentes de resina',
      'Facetas de resina',
      'Clareamento dental',
      'Fechamento de diastemas',
      'Reanatomização dental',
      'Contorno estético',
    ],
  },
  {
    title: 'Reabilitação Oral',
    description:
      'Para recuperar mastigação, conforto, dentes desgastados e aparência natural.',
    treatments: [
      'Recuperação de dentes desgastados',
      'Reabilitação funcional e estética',
      'Ajuste oclusal',
      'Tratamento para bruxismo',
      'Placas de bruxismo',
    ],
  },
  {
    title: 'Endodontia',
    description: 'Tratamentos para dor, infecção e preservação de dentes comprometidos.',
    treatments: ['Tratamento de canal', 'Retratamento endodôntico'],
  },
  {
    title: 'Cirurgias',
    description:
      'Extrações e procedimentos cirúrgicos com avaliação, planejamento e orientação.',
    treatments: [
      'Extração de sisos',
      'Extrações dentárias',
      'Gengivectomia',
      'Cirurgias periodontais',
    ],
  },
  {
    title: 'Prótese e Reabilitação',
    description: 'Reposição e reconstrução de dentes para devolver função e segurança.',
    treatments: ['Coroas dentárias', 'Próteses fixas', 'Próteses removíveis'],
  },
  {
    title: 'Implantodontia',
    description:
      'Implantes para recuperar mastigação, estética e confiança no dia a dia.',
    treatments: [
      'Implantes dentários',
      'Prótese sobre implantes',
      'Reabilitação sobre implantes',
    ],
  },
];

export const treatmentSeoBlocks = [
  {
    id: 'clareamento-dental',
    title: 'Clareamento dental em Três Lagoas',
    description:
      'Indicado para quem sente que o sorriso escureceu com o tempo e quer recuperar luminosidade com acompanhamento profissional.',
    intent:
      'Na avaliação, a Dra. Amanda verifica sensibilidade, restaurações, manchas e histórico dental antes de orientar o protocolo mais adequado.',
    terms: ['clareamento dental', 'dentes mais brancos', 'sorriso luminoso'],
  },
  {
    id: 'lentes-de-resina',
    title: 'Lentes de resina em Três Lagoas',
    description:
      'Uma alternativa para ajustar formato, proporção, pequenas assimetrias e harmonia do sorriso sem perder naturalidade.',
    intent:
      'O planejamento considera rosto, linha do sorriso, cor, mordida e expectativa estética para evitar resultados artificiais.',
    terms: ['lentes de resina', 'facetas de resina', 'estética dental'],
  },
  {
    id: 'reabilitacao-oral',
    title: 'Reabilitação oral estética e funcional',
    description:
      'Para casos com dentes desgastados, perda de estrutura, dificuldade mastigatória ou necessidade de reconstruir função e estética.',
    intent:
      'A consulta avalia mordida, desgaste, dores, restaurações antigas e prioridades para montar um plano por etapas.',
    terms: ['reabilitação oral', 'dentes desgastados', 'mordida e função'],
  },
  {
    id: 'bruxismo',
    title: 'Tratamento para bruxismo em Três Lagoas',
    description:
      'Ajuda quem percebe desgaste dental, tensão muscular, dores ao acordar ou sensação de apertamento nos dentes.',
    intent:
      'A avaliação identifica sinais clínicos e orienta medidas para proteger dentes, articulação e musculatura.',
    terms: ['bruxismo', 'apertamento dental', 'placa de bruxismo'],
  },
  {
    id: 'implantes',
    title: 'Implantes dentários em Três Lagoas',
    description:
      'Opção para recuperar dentes perdidos, melhorar mastigação e devolver segurança para falar e sorrir.',
    intent:
      'O primeiro passo é avaliar saúde bucal, exames, espaço disponível e o tipo de reabilitação mais indicado.',
    terms: ['implante dentário', 'prótese sobre implante', 'dente perdido'],
  },
];

export const faqItems = [
  {
    question: 'Como funciona a primeira avaliação?',
    answer:
      'A avaliação começa com uma conversa sobre sua queixa e seus objetivos. Depois são observados saúde bucal, mordida, estética, restaurações, desgastes e prioridades para definir o melhor plano de tratamento.',
  },
  {
    question: 'Consigo saber o valor do tratamento pelo WhatsApp?',
    answer:
      'O WhatsApp ajuda a entender sua necessidade inicial e direcionar o agendamento. O valor depende da avaliação clínica, do procedimento indicado, da complexidade e das etapas necessárias.',
  },
  {
    question: 'A clínica atende casos de dor, canal e siso?',
    answer:
      'Sim. Além de estética dental e reabilitação, a clínica atende demandas de clínica geral, endodontia, cirurgias, extrações e avaliação para dor ou desconforto.',
  },
  {
    question: 'Clareamento e lentes de resina deixam o sorriso artificial?',
    answer:
      'O objetivo é melhorar cor, formato e harmonia preservando naturalidade. A indicação depende da avaliação, da cor atual, do formato dos dentes, da mordida e da expectativa do paciente.',
  },
  {
    question: 'O tratamento para bruxismo resolve desgaste e dor?',
    answer:
      'O tratamento busca proteger os dentes, reduzir sobrecarga e orientar medidas para conforto muscular e articular. Em casos com desgaste, pode ser necessário associar reabilitação estética e funcional.',
  },
  {
    question: 'Onde fica o consultório?',
    answer:
      'O atendimento acontece no Terrace Business Center, na Av. Dr. Eloy Chaves, 956, sala 405, Centro de Três Lagoas - MS.',
  },
];

export const localSearchTerms = [
  'canal em Três Lagoas',
  'extração de siso em Três Lagoas',
  'implante dentário em Três Lagoas',
  'clareamento dental em Três Lagoas',
  'dentista em Três Lagoas',
];
