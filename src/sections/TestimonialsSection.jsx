import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ClipboardCheck, MessageCircle, SearchCheck } from 'lucide-react';

const smoothCurve = [0.22, 1, 0.36, 1];

const steps = [
  {
    title: 'Você conta o que deseja melhorar',
    description:
      'Pelo WhatsApp ou na consulta, você explica se busca estética, dor, bruxismo, restauração, implante ou outro cuidado.',
    label: 'Primeiro contato',
  },
  {
    title: 'A avaliação identifica o caminho',
    description:
      'A Dra. Amanda avalia saúde bucal, mordida, função e objetivos estéticos antes de indicar qualquer procedimento.',
    label: 'Diagnóstico',
  },
  {
    title: 'Você recebe um plano claro',
    description:
      'O tratamento é apresentado por etapas, com orientação sobre prioridades, cuidados e expectativa de resultado.',
    label: 'Plano de cuidado',
  },
];

const iconSet = [MessageCircle, SearchCheck, ClipboardCheck];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#17131B] px-6 py-20 text-white md:px-12 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.22) 0 1px, transparent 1px 100%)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: smoothCurve }}
        >
          <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 md:text-xs">
            Como funciona a avaliação
          </span>
          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Da primeira mensagem ao plano de tratamento.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/72 md:text-base">
            A consulta segue uma ordem simples: entender sua queixa, examinar o que
            influencia o resultado e só então conversar sobre possibilidades reais
            de tratamento.
          </p>
        </Motion.div>

        <ol className="relative border-l border-white/15">
          {steps.map((step, index) => {
            const Icon = iconSet[index] || MessageCircle;

            return (
              <Motion.li
                key={step.title}
                className="relative pb-12 pl-8 last:pb-0 md:pl-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: smoothCurve }}
              >
                <span className="absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#17131B] text-[#B78CFF]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  0{index + 1} / {step.label}
                </span>
                <h3 className="text-2xl font-light tracking-tight text-white md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/72 md:text-base">
                  {step.description}
                </p>
              </Motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default TestimonialsSection;
