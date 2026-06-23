import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Check } from 'lucide-react';
import drAmandaImg from '../assets/DrAmanda2.webp';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const clinicalPoints = [
  'Fotografias e observação clínica',
  'Mordida, desgaste e restaurações',
  'Prioridades antes da estética',
];

const AboutSection = () => {
  return (
    <section id="about" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white text-black">
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row md:px-12 md:py-28 lg:gap-20">
        <div className="relative flex h-[430px] w-full items-center justify-center md:h-[680px] md:w-1/2">
          <Motion.div
            className="relative h-full max-h-[80vh] w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: smoothCurve }}
          >
            <div className="group relative h-full w-full overflow-hidden rounded-bl-[80px] rounded-tr-[120px] border border-neutral-100 bg-[#fcfcfc] shadow-sm md:rounded-tr-[200px]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-neutral-100/20 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
              <img
                src={drAmandaImg}
                alt="Dra. Amanda Miyuki em rotina clínica"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>

            <Motion.div
              className="absolute -bottom-6 right-0 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-neutral-100 bg-white text-center shadow-[0_15px_30px_rgba(0,0,0,0.06)] md:bottom-12 md:-right-8 md:h-32 md:w-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, ease: smoothCurve, delay: 0.15 }}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Registro
              </span>
              <strong className="mt-1 text-lg font-medium text-neutral-950 md:text-xl">
                {siteInfo.cro}
              </strong>
              <span className="mt-1 max-w-[84px] text-[10px] font-light leading-tight text-neutral-500">
                Cirurgiã-dentista
              </span>
            </Motion.div>
          </Motion.div>
        </div>

        <div className="flex h-full w-full flex-col justify-center md:w-1/2">
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: smoothCurve, delay: 0.1 }}
            className="mb-8"
          >
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 md:text-xs">
              Sobre a profissional
            </span>
            <div className="h-px w-12 bg-neutral-300" />
          </Motion.div>

          <Motion.h2
            className="mb-8 text-3xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[4rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.75, ease: smoothCurve, delay: 0.16 }}
          >
            Uma avaliação documentada antes de decidir qualquer tratamento.
          </Motion.h2>

          <Motion.div
            className="max-w-md space-y-6 text-sm font-light leading-relaxed text-neutral-500 md:text-base"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: smoothCurve, delay: 0.22 }}
          >
            <p>
              A {siteInfo.clinicName} atende em Três Lagoas com foco em escuta,
              diagnóstico e planejamento. Antes de qualquer procedimento, a consulta
              observa queixa principal, gengiva, mordida, desgaste dental,
              restaurações e expectativa estética.
            </p>
            <p>
              A proposta é transformar a avaliação em um plano compreensível: o que
              é prioridade, quais etapas são necessárias e como preservar saúde,
              função e naturalidade ao longo do tratamento.
            </p>
          </Motion.div>

          <Motion.ul
            className="mt-9 grid gap-4 border-y border-neutral-200 py-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: smoothCurve, delay: 0.28 }}
          >
            {clinicalPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-xs font-light leading-relaxed text-neutral-600">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5700B0]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </Motion.ul>

          <Motion.div
            className="mt-12 border-t border-neutral-100 pt-8 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            <p className="mb-1 font-serif text-2xl italic text-neutral-800">
              Amanda Miyuki
            </p>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Cirurgiã-dentista | {siteInfo.cro}
            </span>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
