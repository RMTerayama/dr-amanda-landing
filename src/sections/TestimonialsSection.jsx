import React, { useEffect, useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#5700B0] px-6 py-20 text-white md:px-12 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="pointer-events-none absolute left-[5%] top-[10%] select-none font-serif text-[32vw] italic leading-none text-white/5 md:left-[8%] md:text-[15vw]">
        0{currentIndex + 1}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: smoothCurve }}
        >
          <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 md:text-xs">
            Como funciona a avaliação
          </span>
          <h2 className="max-w-3xl font-serif text-4xl font-light italic leading-tight tracking-tight md:text-6xl">
            Da primeira mensagem ao plano de tratamento.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/65 md:text-base">
            O processo foi pensado para reduzir dúvidas antes do procedimento e
            deixar a indicação de tratamento mais clara para você.
          </p>
        </Motion.div>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const Icon = iconSet[index] || MessageCircle;
            const active = currentIndex === index;

            return (
              <Motion.button
                key={step.title}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={[
                  'group grid gap-4 rounded-lg border p-5 text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5700B0] md:grid-cols-[auto_1fr_auto] md:items-center',
                  active
                    ? 'border-white/35 bg-white !text-neutral-950 shadow-[0_24px_60px_rgba(0,0,0,0.18)]'
                    : 'border-white/10 bg-white/[0.06] text-white hover:border-white/25 hover:bg-white/[0.1]',
                ].join(' ')}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: smoothCurve }}
              >
                <div
                  className={[
                    'flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-500',
                    active ? 'bg-[#5700B0]/10 text-[#5700B0]' : 'bg-white/10 text-white',
                  ].join(' ')}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <span
                    className={[
                      'mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em]',
                      active ? 'text-[#5700B0]' : 'text-white/45',
                    ].join(' ')}
                  >
                    0{index + 1} / {step.label}
                  </span>
                  <h3
                    className={[
                      'text-xl font-light tracking-tight md:text-2xl',
                      active ? '' : 'text-white',
                    ].join(' ')}
                    style={active ? { color: '#111111' } : undefined}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={[
                      'mt-3 text-sm font-light leading-relaxed',
                      active ? '' : 'text-white/60',
                    ].join(' ')}
                    style={active ? { color: '#737373' } : undefined}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  className={[
                    'hidden h-px w-12 transition-colors duration-500 md:block',
                    active ? 'bg-[#5700B0]' : 'bg-white/20',
                  ].join(' ')}
                />
              </Motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
