import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, MapPin, Sparkles } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import drAmandaImg from '../assets/DrAmanda.png';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#FAFAFA] px-6 pb-16 pt-28 text-black md:px-12 md:pb-20 md:pt-32">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Motion.div
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothCurve, delay: 0.2 }}
          >
            <MapPin className="h-4 w-4 text-[#5700B0]" aria-hidden="true" />
            Clínica odontológica em Três Lagoas
          </Motion.div>

          <Motion.h1
            className="max-w-5xl text-4xl font-light leading-tight tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: smoothCurve, delay: 0.3 }}
          >
            Odontologia estética, funcional e humanizada em{' '}
            <span className="font-serif italic text-[#5700B0]">Três Lagoas</span>
          </Motion.h1>

          <Motion.p
            className="mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.45 }}
          >
            Tratamentos odontológicos personalizados para transformar o sorriso,
            recuperar a função e valorizar a beleza natural com segurança e cuidado.
          </Motion.p>

          <Motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.6 }}
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
            className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.75 }}
          >
            <div className="flex items-start gap-3 rounded-lg border border-black/5 bg-white/70 p-4">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#5700B0]" aria-hidden="true" />
              <p className="text-xs font-light leading-relaxed text-neutral-500">
                Estética dental, reabilitação oral, bruxismo e harmonização com
                planejamento individual.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-black/5 bg-white/70 p-4">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5700B0]" aria-hidden="true" />
              <p className="text-xs font-light leading-relaxed text-neutral-500">
                {siteInfo.professionalName}, {siteInfo.cro}, atendimento em Três Lagoas.
              </p>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          className="relative mx-auto flex h-[520px] w-full max-w-[520px] items-end justify-center md:h-[680px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: smoothCurve, delay: 0.35 }}
        >
          <div className="absolute bottom-0 left-1/2 h-[82%] w-[88%] -translate-x-1/2 rounded-t-[220px] rounded-b-lg bg-[#5700B0]/10" />
          <div className="relative h-full w-[88%] overflow-hidden rounded-t-[220px] rounded-b-lg border border-neutral-200 bg-[#f1f1f1] shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-neutral-200/30 pointer-events-none" />
            <img
              src={drAmandaImg}
              alt="Dra. Amanda Miyuki em clínica odontológica"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <Motion.div
            className="absolute bottom-8 left-0 max-w-[300px] rounded-lg border border-white/70 bg-white/80 p-5 shadow-[0_20px_45px_rgba(87,0,176,0.08)] backdrop-blur-xl"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: smoothCurve, delay: 0.8 }}
          >
            <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Formação e cuidado
            </span>
            <p className="text-sm font-medium leading-relaxed text-neutral-900">
              Odontologia estética com olhar funcional e atendimento humanizado.
            </p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

