import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Quote,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { buildWhatsAppUrl, googleReviews } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];
const stars = Array.from({ length: 5 }, (_, index) => index);

const GoogleReviewsSection = () => {
  return (
    <section id="avaliacoes" className="bg-[#FAFAFA] px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: smoothCurve }}
          >
            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Avaliações no Google
            </span>
            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-neutral-950 md:text-6xl">
              Prova social de quem já passou pelo atendimento.
            </h2>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              Antes de agendar, veja os pontos que pacientes destacam no perfil
              público da Dra. Amanda no Google: acolhimento, cuidado nos detalhes,
              naturalidade e clareza durante a avaliação.
            </p>
          </Motion.div>

          <Motion.article
            className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.07)] md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, delay: 0.08, ease: smoothCurve }}
          >
            <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#5700B0]/10 blur-3xl" />
            <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#5700B0]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Perfil público do Google
                </div>
                <div className="flex items-end gap-4">
                  <span className="text-6xl font-light tracking-tight text-neutral-950 md:text-7xl">
                    {googleReviews.rating}
                  </span>
                  <div className="pb-2">
                    <div className="flex gap-1 text-[#F59E0B]" aria-label="Nota máxima no Google">
                      {stars.map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {googleReviews.total} avaliações públicas
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href={googleReviews.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#5700B0]"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Ver no Google
                </a>
                <a
                  href={buildWhatsAppUrl(
                    'Olá, Dra. Amanda! Vi as avaliações no Google e gostaria de agendar uma avaliação.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-500 hover:border-[#5700B0] hover:text-[#5700B0]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Agendar agora
                </a>
              </div>
            </div>
          </Motion.article>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {googleReviews.highlights.map((review, index) => (
            <Motion.article
              key={review.title}
              className="group flex min-h-[260px] flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#5700B0]/30 hover:shadow-[0_22px_55px_rgba(87,0,176,0.08)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.75, delay: index * 0.06, ease: smoothCurve }}
            >
              <Quote
                className="mb-6 h-6 w-6 text-[#5700B0] transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Síntese da avaliação
              </p>
              <h3 className="mt-3 text-xl font-light tracking-tight text-neutral-950">
                {review.title}
              </h3>
              <p className="mt-4 flex-grow text-sm font-light leading-relaxed text-neutral-500">
                {review.summary}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
                <span className="text-sm font-medium text-neutral-900">
                  {review.author}
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0]">
                  Google
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Motion.article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs font-light leading-relaxed text-neutral-500">
          Os cards resumem temas recorrentes das avaliações públicas. Para ler os
          depoimentos completos e atualizados, acesse o perfil no Google.
        </p>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
