import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, MapPin, ShieldCheck, Sparkles, Star } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import drAmandaImg from '../assets/DrAmanda.webp';
import { googleReviews, siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#FAFAFA] px-5 pb-12 pt-28 text-black sm:px-6 md:px-12 md:pb-20 md:pt-32">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-full">
          <Motion.div
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500 backdrop-blur sm:text-[10px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: smoothCurve, delay: 0.05 }}
          >
            <MapPin className="h-4 w-4 text-[#5700B0]" aria-hidden="true" />
            <span className="truncate">Terrace Business Center | Centro</span>
          </Motion.div>

          <Motion.h1
            className="max-w-[calc(100vw-2.5rem)] text-[2.08rem] font-light leading-[1.04] tracking-tight text-neutral-950 sm:max-w-full sm:text-5xl md:text-6xl lg:max-w-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: smoothCurve, delay: 0.12 }}
          >
            <span className="block">Odontologia estética,</span>
            <span className="block">bruxismo e reabilitação</span>
            <span className="block">
              em <span className="font-serif italic text-[#5700B0]">Três Lagoas</span>
            </span>
          </Motion.h1>

          <Motion.p
            className="mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 md:text-base"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothCurve, delay: 0.18 }}
          >
            Agende uma avaliação com a Dra. Amanda Miyuki para entender, com
            documentação e planejamento, o melhor caminho para clarear, restaurar,
            proteger ou reabilitar o seu sorriso.
          </Motion.p>

          <Motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothCurve, delay: 0.24 }}
          >
            <WhatsAppButton
              variant="dark"
              message="Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica em Três Lagoas."
            >
              Agendar avaliação
            </WhatsAppButton>
            <a
              href="/tratamentos"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-500 hover:border-[#5700B0] hover:text-[#5700B0]"
            >
              Ver tratamentos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Motion.div>

          <Motion.div
            className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothCurve, delay: 0.3 }}
          >
            <div className="flex items-start gap-3 rounded-lg border border-black/5 bg-white/70 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5700B0]" aria-hidden="true" />
              <p className="text-xs font-light leading-relaxed text-neutral-500">
                {siteInfo.professionalName}. {siteInfo.cro}.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-black/5 bg-white/70 p-4">
              <Star className="mt-0.5 h-5 w-5 shrink-0 fill-[#5700B0] text-[#5700B0]" aria-hidden="true" />
              <p className="text-xs font-light leading-relaxed text-neutral-500">
                Nota {googleReviews.rating} no Google, com {googleReviews.total}{' '}
                avaliações públicas.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-black/5 bg-white/70 p-4">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#5700B0]" aria-hidden="true" />
              <p className="text-xs font-light leading-relaxed text-neutral-500">
                Clareamento, lentes de resina, reabilitação e bruxismo.
              </p>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          className="relative mx-auto flex h-[430px] w-full max-w-[430px] items-end justify-center sm:h-[520px] md:h-[680px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: smoothCurve, delay: 0.16 }}
        >
          <div className="absolute bottom-0 left-1/2 h-[82%] w-[88%] -translate-x-1/2 rounded-t-[220px] rounded-b-lg bg-[#5700B0]/10" />
          <div className="relative h-full w-[88%] overflow-hidden rounded-t-[220px] rounded-b-lg border border-neutral-200 bg-[#f1f1f1] shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-neutral-200/30 pointer-events-none" />
            <img
              src={drAmandaImg}
              alt="Dra. Amanda Miyuki em clínica odontológica"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <Motion.div
            className="absolute bottom-5 left-0 max-w-[280px] rounded-lg border border-white/70 bg-white/85 p-4 shadow-[0_20px_45px_rgba(87,0,176,0.08)] backdrop-blur-xl md:bottom-8 md:max-w-[300px] md:p-5"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: smoothCurve, delay: 0.32 }}
          >
            <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Avaliação com planejamento
            </span>
            <p className="text-sm font-medium leading-relaxed text-neutral-900">
              Antes de indicar um tratamento, a consulta avalia estética, mordida,
              saúde bucal e seus objetivos.
            </p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

