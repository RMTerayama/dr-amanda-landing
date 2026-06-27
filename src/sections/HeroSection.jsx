import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import drAmandaImg from '../assets/DrAmandaHero.webp';
import { siteInfo } from '../data/site';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-hero-badge]', {
        autoAlpha: 0,
        y: 14,
        duration: 0.55,
      })
        .from(
          '[data-hero-title-line]',
          {
            autoAlpha: 0,
            y: 34,
            duration: 0.82,
            stagger: 0.08,
          },
          '-=0.22'
        )
        .from(
          '[data-hero-copy]',
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.62,
          },
          '-=0.42'
        )
        .from(
          '[data-hero-ctas]',
          {
            autoAlpha: 0,
            y: 16,
            duration: 0.58,
          },
          '-=0.38'
        )
        .from(
          '[data-hero-meta]',
          {
            autoAlpha: 0,
            y: 14,
            duration: 0.58,
          },
          '-=0.34'
        )
        .from(
          '[data-hero-frame]',
          {
            autoAlpha: 0,
            scale: 0.985,
            y: 26,
            duration: 0.86,
          },
          0.18
        )
        .from(
          '[data-hero-note]',
          {
            autoAlpha: 0,
            x: -18,
            duration: 0.64,
          },
          '-=0.36'
        );

      gsap.to('[data-hero-parallax]', {
        y: -26,
        scale: 1.015,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#FAFAFA] px-5 pb-12 pt-28 text-black sm:px-6 md:px-12 md:pb-20 md:pt-32"
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] min-w-0 gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-full min-w-0">
          <div
            data-hero-badge
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500 backdrop-blur sm:text-[10px]"
          >
            <MapPin className="h-4 w-4 text-[#5700B0]" aria-hidden="true" />
            <span className="truncate">Terrace Business Center | Centro</span>
          </div>

          <h1 className="max-w-[calc(100vw-2.5rem)] text-[2.08rem] font-light leading-[1.04] tracking-tight text-neutral-950 sm:max-w-full sm:text-5xl md:text-6xl lg:max-w-5xl lg:text-7xl">
            <span data-hero-title-line className="block">
              Excelência em Estética
            </span>
            <span data-hero-title-line className="block">
              do Sorriso e
            </span>
            <span data-hero-title-line className="block">
              <span className="font-serif italic text-[#5700B0]">Reabilitação Oral</span>
            </span>
          </h1>

          <p
            data-hero-copy
            className="mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 md:text-base"
          >
            Agende uma avaliação com a Dra. Amanda Miyuki para entender, com
            documentação e planejamento, o melhor caminho para clarear, restaurar,
            proteger ou reabilitar o seu sorriso.
          </p>

          <div data-hero-ctas className="mt-9 grid gap-3 sm:flex sm:flex-row">
            <WhatsAppButton
              className="w-full sm:w-auto"
              variant="dark"
              message="Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica em Três Lagoas."
            >
              Agendar avaliação
            </WhatsAppButton>
            <a
              href="/tratamentos"
              className="inline-flex w-full min-w-0 items-center justify-center gap-3 rounded-full border border-black/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors duration-500 hover:border-[#5700B0] hover:text-[#5700B0] sm:w-auto sm:px-6 sm:tracking-[0.2em]"
            >
              Ver tratamentos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div data-hero-meta className="mt-9 max-w-3xl border-y border-neutral-200/80 py-5">
            <dl className="grid gap-4 text-xs font-light leading-relaxed text-neutral-500 sm:grid-cols-2">
              <div className="flex gap-3 sm:border-r sm:border-neutral-200 sm:pr-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5700B0]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold uppercase tracking-[0.18em] text-neutral-900">
                    {siteInfo.cro}
                  </dt>
                  <dd className="mt-1">{siteInfo.professionalName}</dd>
                </div>
              </div>
              <div className="flex gap-3 sm:pl-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#5700B0]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold uppercase tracking-[0.18em] text-neutral-900">
                    Foco clínico
                  </dt>
                  <dd className="mt-1">Estética, função, bruxismo e reabilitação</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div
          data-hero-frame
          className="relative mx-auto flex h-[430px] w-full max-w-[430px] min-w-0 items-end justify-center sm:h-[520px] md:h-[680px] lg:max-w-none"
        >
          <div className="absolute bottom-0 left-1/2 h-[82%] w-[88%] -translate-x-1/2 rounded-t-[220px] rounded-b-lg bg-[#5700B0]/[0.07]" />
          <div className="relative h-full w-[88%] overflow-hidden rounded-t-[220px] rounded-b-lg border border-[#5700B0]/10 bg-[#f8f5fb] shadow-[0_34px_80px_rgba(36,20,48,0.11)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(87,0,176,0.035),rgba(255,255,255,0)_42%),linear-gradient(to_bottom,rgba(255,255,255,0)_55%,rgba(87,0,176,0.055))]" />
            <img
              data-hero-parallax
              src={drAmandaImg}
              alt="Dra. Amanda Miyuki em clínica odontológica"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div
            data-hero-note
            className="absolute bottom-6 left-0 max-w-[280px] border border-neutral-200 border-l-4 border-l-[#5700B0] bg-white py-4 pl-5 pr-4 text-neutral-950 shadow-[0_18px_42px_rgba(0,0,0,0.18)] md:bottom-9 md:max-w-[320px]"
          >
            <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Avaliação com planejamento
            </span>
            <p className="text-sm font-medium leading-relaxed text-neutral-900">
              Antes de indicar um tratamento, a consulta avalia estética, mordida,
              saúde bucal e seus objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
