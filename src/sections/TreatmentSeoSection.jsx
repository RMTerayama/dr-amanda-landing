import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, MapPin, SearchCheck } from 'lucide-react';
import { buildWhatsAppUrl, treatmentSeoBlocks } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const TreatmentSeoSection = () => {
  return (
    <section className="bg-[#FAFAFA] px-6 py-16 text-black md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Buscas comuns em Três Lagoas
            </span>
            <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-tight text-neutral-950 md:text-5xl">
              Tratamentos explicados para quem está pesquisando antes de agendar.
            </h2>
          </div>
          <p className="max-w-2xl text-sm font-light leading-relaxed text-neutral-500 lg:text-right">
            Estes blocos ajudam você a identificar o cuidado mais próximo da sua
            necessidade e também reforçam a presença local da clínica para buscas
            odontológicas em Três Lagoas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {treatmentSeoBlocks.map((item, index) => (
            <Motion.article
              id={item.id}
              key={item.id}
              className="group flex min-h-[360px] scroll-mt-28 flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#5700B0]/30 hover:shadow-[0_22px_55px_rgba(87,0,176,0.08)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.75, delay: index * 0.05, ease: smoothCurve }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5700B0]/10 text-[#5700B0] transition-transform duration-500 group-hover:scale-110">
                  <SearchCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  <MapPin className="h-3.5 w-3.5 text-[#5700B0]" aria-hidden="true" />
                  Três Lagoas
                </span>
              </div>

              <h3 className="text-2xl font-light leading-tight tracking-tight text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
                {item.description}
              </p>
              <p className="mt-4 flex-grow text-sm font-light leading-relaxed text-neutral-700">
                {item.intent}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.terms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full bg-[#5700B0]/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5700B0]"
                  >
                    {term}
                  </span>
                ))}
              </div>

              <a
                href={buildWhatsAppUrl(
                  `Olá, Dra. Amanda! Gostaria de agendar uma avaliação sobre ${item.title.toLowerCase()}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0] transition-colors duration-300 hover:text-black"
              >
                Agendar avaliação
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSeoSection;
