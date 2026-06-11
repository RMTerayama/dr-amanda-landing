import React from 'react';
import { motion as Motion } from 'framer-motion';
import { BadgeCheck, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { differentials } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];
const iconSet = [BadgeCheck, Sparkles, ShieldCheck, HeartHandshake];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="bg-white px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
            Uma odontologia precisa, estética e pensada para a sua rotina.
          </h2>
        </Motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentials.map((item, index) => {
            const Icon = iconSet[index] || BadgeCheck;

            return (
              <Motion.article
                key={item.title}
                className="rounded-lg border border-neutral-200 bg-[#FAFAFA] p-6 transition-colors duration-500 hover:border-[#5700B0]/25 hover:bg-white"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: smoothCurve }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#5700B0]/10 text-[#5700B0]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-medium tracking-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-neutral-500">
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

