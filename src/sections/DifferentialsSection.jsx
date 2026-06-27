import React from 'react';
import { motion as Motion } from 'framer-motion';
import { BadgeCheck, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { differentials } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];
const iconSet = [BadgeCheck, Sparkles, ShieldCheck, HeartHandshake];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="bg-white px-6 py-20 text-black md:px-12 md:py-24">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: smoothCurve }}
        >
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Diferenciais da clínica
          </span>
          <h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight text-neutral-900 md:text-5xl">
            O que muda antes de indicar qualquer procedimento.
          </h2>
          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-neutral-600 md:text-base">
            Menos promessa pronta, mais leitura clínica: a consulta organiza
            queixa, função, estética e prioridades para evitar escolhas
            apressadas.
          </p>
        </Motion.div>

        <div className="border-t border-neutral-200">
          {differentials.map((item, index) => {
            const Icon = iconSet[index] || BadgeCheck;

            return (
              <Motion.article
                key={item.title}
                className="grid gap-4 border-b border-neutral-200 py-7 transition-colors duration-500 hover:border-[#5700B0]/35 md:grid-cols-[84px_0.55fr_1fr] md:items-start md:gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: smoothCurve }}
              >
                <span className="font-serif text-5xl italic leading-none text-[#5700B0]/25 md:text-6xl">
                  0{index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-[#5700B0]" aria-hidden="true" />
                  <h3 className="text-lg font-medium tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm font-light leading-relaxed text-neutral-600 md:text-base">
                  {item.description}
                </p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

