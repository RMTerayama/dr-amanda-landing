import resinaAntesImg from '../assets/resinaAntes.webp';
import resinaDepoisImg from '../assets/ResinaDepois.webp';
import reabilitacaoAntesImg from '../assets/reabilitacaoAntes.webp';
import reabilitacaoDepoisImg from '../assets/reabilitacaoDepois.webp';
import botoxAntesImg from '../assets/BotoxAntes.webp';
import botoxDepoisImg from '../assets/BotoxDepois.webp';

export const siteInfo = {
  clinicName: 'Dra. Amanda Miyuki',
  professionalName: 'Dra. Amanda Miyuki Terayama',
  city: 'Três Lagoas',
  state: 'MS',
  cro: 'CRO-MS 7266',
  whatsappNumber: '556781889094',
  phoneDisplay: '+55 67 8188-9094',
  instagramUrl: 'https://www.instagram.com/amandaterayama/',
  googleProfileUrl: 'https://share.google/mW4UWe9p7Z9y9bu06',
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
  businessName: 'Amanda Miyuki Terayama | Odontologia Estética e Harmonização Facial',
  profileUrl: siteInfo.googleProfileUrl,
  highlights: [
    {
      author: 'Raquel F.',
      title: 'Atendimento acolhedor',
      summary:
        'Destaca a escuta durante a avaliação, o cuidado no atendimento e o ambiente agradável do consultório.',
    },
    {
      author: 'Richelle A.',
      title: 'Resultado caprichoso',
      summary:
        'Ressalta a atenção aos detalhes, o acabamento do procedimento e a confiança para voltar ao consultório.',
    },
    {
      author: 'Ana L.',
      title: 'Clareza e cuidado',
      summary:
        'Menciona dúvidas respondidas, atendimento cuidadoso e uma experiência confortável durante o tratamento.',
    },
    {
      author: 'Yuri G.',
      title: 'Profissional dedicada',
      summary:
        'Valoriza a dedicação, a atenção com o paciente e a estrutura moderna para receber quem procura atendimento.',
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
  },
  {
    title: 'Clareamento Dental',
    eyebrow: 'Sorriso mais luminoso',
    description:
      'Protocolos acompanhados para clarear os dentes com segurança, conforto e preservação da saúde dental.',
  },
  {
    title: 'Reabilitação Estética e Funcional',
    eyebrow: 'Função antes da beleza',
    description:
      'Para recuperar dentes desgastados, melhorar a mordida e devolver estética, conforto e segurança ao sorrir.',
    beforeImg: reabilitacaoAntesImg,
    afterImg: reabilitacaoDepoisImg,
    objectPosition: 'center center',
  },
  {
    title: 'Harmonização Orofacial',
    eyebrow: 'Rosto e sorriso em equilíbrio',
    description:
      'Procedimentos para equilibrar rosto e sorriso com sutileza, respeitando seus traços naturais.',
    beforeImg: botoxAntesImg,
    afterImg: botoxDepoisImg,
    objectPosition: 'center 70%',
  },
  {
    title: 'Tratamento para Bruxismo',
    eyebrow: 'Conforto e proteção',
    description:
      'Avaliação para reduzir desgaste, dor muscular e tensão, protegendo dentes, articulação e musculatura.',
  },
];

export const differentials = [
  {
    title: 'Diagnóstico claro',
    description:
      'Você entende o que precisa ser feito, por que é indicado e quais etapas fazem sentido para o seu caso.',
  },
  {
    title: 'Naturalidade no resultado',
    description:
      'A estética é planejada para melhorar o sorriso sem exageros e sem perder a sua identidade.',
  },
  {
    title: 'Função e conforto',
    description:
      'O plano considera mordida, mastigação, desgaste, dor e saúde bucal antes da decisão estética.',
  },
  {
    title: 'Agendamento direto',
    description:
      'Fale pelo WhatsApp, envie sua necessidade inicial e receba orientação para marcar sua avaliação.',
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
  {
    title: 'Harmonização Orofacial',
    description: 'Procedimentos faciais para equilibrar proporções e valorizar traços.',
    treatments: [
      'Preenchimento labial',
      'Preenchimento facial',
      'Rinomodelação',
      'Preenchimento de olheiras',
      'Preenchimento de mento',
      'Preenchimento de mandíbula',
      'Bioestimuladores de colágeno',
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
  {
    id: 'harmonizacao-orofacial',
    title: 'Harmonização orofacial em Três Lagoas',
    description:
      'Procedimentos para equilibrar traços faciais e sorriso com sutileza, respeitando proporções naturais.',
    intent:
      'A indicação depende de avaliação facial, objetivos, histórico de procedimentos e planejamento conservador.',
    terms: ['harmonização orofacial', 'preenchimento facial', 'bioestimulador'],
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
