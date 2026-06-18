import resinaAntesImg from '../assets/resinaAntes.png';
import resinaDepoisImg from '../assets/ResinaDepois.jpeg';
import reabilitacaoAntesImg from '../assets/reabilitacaoAntes.jpeg';
import reabilitacaoDepoisImg from '../assets/reabilitacaoDepois.jpeg';
import botoxAntesImg from '../assets/BotoxAntes.png';
import botoxDepoisImg from '../assets/BotoxDepois.png';

export const siteInfo = {
  clinicName: 'Dra. Amanda Miyuki',
  professionalName: 'Dra. Amanda Miyuki Terayama',
  city: 'Três Lagoas',
  state: 'MS',
  cro: 'CRO-MS 7266',
  whatsappNumber: '556781889094',
  phoneDisplay: '+55 67 8188-9094',
  instagramUrl: 'https://www.instagram.com/amandaterayama/',
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

export const localSearchTerms = [
  'canal em Três Lagoas',
  'extração de siso em Três Lagoas',
  'implante dentário em Três Lagoas',
  'clareamento dental em Três Lagoas',
  'dentista em Três Lagoas',
];
