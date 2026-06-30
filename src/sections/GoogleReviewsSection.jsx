import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
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
  const [featuredReview, ...secondaryReviews] = googleReviews.highlights;

  return (
    <section id="avaliacoes" className="bg-[#FAFAFA] px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: smoothCurve }}
          >
            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Avaliações no Google
            </span>
            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-neutral-950 md:text-6xl">
              Avaliações reais de quem já passou pelo atendimento.
            </h2>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              Os depoimentos públicos destacam acolhimento, capricho nos detalhes,
              consultório confortável e dedicação no atendimento.
            </p>
          </Motion.div>

          <Motion.article
            className="relative border-y border-neutral-200 bg-white/60 py-7 md:py-9"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.75, delay: 0.06, ease: smoothCurve }}
          >
            <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Perfil público do Google
                </div>
                <div>
                  <div className="flex gap-1 text-[#F59E0B]" aria-label="Avaliações no Google">
                    {stars.map((star) => (
                      <Star key={star} className="h-6 w-6 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Avaliações públicas no perfil da clínica
                  </p>
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
                  Ver avaliações
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

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Motion.figure
            className="border-l-2 border-[#5700B0] pl-6 md:pl-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.65, ease: smoothCurve }}
          >
            <Quote className="mb-5 h-7 w-7 text-[#5700B0]" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Trecho público em destaque
            </p>
            <blockquote className="mt-4 max-w-xl text-3xl font-light leading-tight tracking-tight text-neutral-950 md:text-4xl">
              "{featuredReview.quote}"
            </blockquote>
            <figcaption className="mt-6">
              <span className="block text-base font-medium text-neutral-950">
                {featuredReview.author}
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0]">
                {featuredReview.title}
              </span>
            </figcaption>
            <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-neutral-500">
              {featuredReview.summary}
            </p>
          </Motion.figure>

          <div className="border-t border-neutral-200">
            {secondaryReviews.map((review, index) => (
              <Motion.article
                key={review.title}
                className="grid gap-3 border-b border-neutral-200 py-6 md:grid-cols-[0.7fr_1fr_auto] md:items-start md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.65, delay: index * 0.05, ease: smoothCurve }}
              >
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-950">
                    {review.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-neutral-600">
                    {review.author}
                  </p>
                </div>
                <div>
                  <blockquote className="text-xl font-light leading-snug tracking-tight text-neutral-950">
                    "{review.quote}"
                  </blockquote>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-500">
                    {review.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0]">
                  Avalia&ccedil;&atilde;o p&uacute;blica
                </span>
              </Motion.article>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs font-light leading-relaxed text-neutral-500">
          Os trechos acima foram resumidos a partir de avaliações públicas. Para ler
          os depoimentos completos e atualizados, acesse o perfil no Google.
        </p>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
