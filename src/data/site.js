import resinaAntesImg from '../assets/resinaAntes.png';
import resinaDepoisImg from '../assets/ResinaDepois.jpeg';
import botoxAntesImg from '../assets/BotoxAntes.png';
import botoxDepoisImg from '../assets/BotoxDepois.png';

export const siteInfo = {
  clinicName: 'Dra. Amanda Miyuki',
  professionalName: 'Dra. Amanda Miyuki Terayama',
  city: 'Três Lagoas',
  state: 'MS',
  cro: 'CRO-MS 7266',
  whatsappNumber: '5511999999999',
  instagramUrl: 'https://www.instagram.com/amandaterayama/',
  addressLine: 'Três Lagoas - MS',
  addressDetail: 'Atendimento odontológico em Três Lagoas, MS',
  mapQuery: 'Dra. Amanda Miyuki Terayama Três Lagoas MS',
  hours: [
    'Segunda a sexta: atendimento com horário agendado',
    'Sábado: mediante disponibilidade',
  ],
};

export const buildWhatsAppUrl = (
  message = 'Olá, Dra. Amanda! Gostaria de agendar uma avaliação.'
) => `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const featuredTreatments = [
  {
    title: 'Lentes de Resina',
    eyebrow: 'Estética natural',
    description:
      'Planejamento para transformar formato, proporção e harmonia do sorriso com resultado delicado e personalizado.',
    beforeImg: resinaAntesImg,
    afterImg: resinaDepoisImg,
    objectPosition: 'center 30%',
  },
  {
    title: 'Clareamento Dental',
    eyebrow: 'Sorriso mais luminoso',
    description:
      'Protocolos seguros para clarear os dentes preservando saúde, conforto e naturalidade no resultado.',
  },
  {
    title: 'Reabilitação Estética e Funcional',
    eyebrow: 'Função antes da beleza',
    description:
      'Recuperação de dentes desgastados, equilíbrio da mordida e reconstrução estética com olhar integral.',
  },
  {
    title: 'Harmonização Orofacial',
    eyebrow: 'Rosto e sorriso em equilíbrio',
    description:
      'Técnicas de preenchimento e bioestimulação para valorizar traços naturais com sutileza.',
    beforeImg: botoxAntesImg,
    afterImg: botoxDepoisImg,
    objectPosition: 'center 70%',
  },
  {
    title: 'Tratamento para Bruxismo',
    eyebrow: 'Conforto e proteção',
    description:
      'Avaliação funcional, placas e ajustes indicados para proteger dentes, articulação e musculatura.',
  },
];

export const differentials = [
  {
    title: 'Planejamento individual',
    description:
      'Cada caso é avaliado com atenção à estética, à função e à rotina do paciente.',
  },
  {
    title: 'Naturalidade no resultado',
    description:
      'O objetivo é realçar a beleza do sorriso sem exageros e sem perder identidade.',
  },
  {
    title: 'Olhar funcional',
    description:
      'A estética é construída sobre equilíbrio de mordida, saúde e conforto.',
  },
  {
    title: 'Atendimento humanizado',
    description:
      'Consulta conduzida com escuta, clareza e cuidado em cada etapa do tratamento.',
  },
];

export const treatmentCategories = [
  {
    title: 'Clínica Geral',
    description: 'Cuidados preventivos e restauradores para manter a saúde bucal em dia.',
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
      'Tratamentos para melhorar forma, cor, proporção e harmonia do sorriso.',
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
      'Soluções para recuperar função mastigatória, conforto e aparência natural.',
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
      'Procedimentos cirúrgicos odontológicos com planejamento e orientação cuidadosa.',
    treatments: [
      'Extração de sisos',
      'Extrações dentárias',
      'Gengivectomia',
      'Cirurgias periodontais',
    ],
  },
  {
    title: 'Prótese e Reabilitação',
    description: 'Reposição e reconstrução de dentes com foco em estética e função.',
    treatments: ['Coroas dentárias', 'Próteses fixas', 'Próteses removíveis'],
  },
  {
    title: 'Implantodontia',
    description:
      'Reabilitações com implantes para devolver segurança, mastigação e estética.',
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

export const localSearchTerms = [
  'canal em Três Lagoas',
  'extração de siso em Três Lagoas',
  'implante dentário em Três Lagoas',
  'clareamento dental em Três Lagoas',
  'dentista em Três Lagoas',
];
