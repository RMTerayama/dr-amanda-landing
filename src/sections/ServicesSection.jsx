import React, { useCallback, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { buildWhatsAppUrl, featuredTreatments } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const SplitSlider = ({ beforeImg, afterImg, title, objectPosition = 'center 30%' }) => {
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const calcSplit = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(95, Math.max(5, pct)));
  }, []);

  const onMouseDown = (event) => {
    event.preventDefault();
    setDragging(true);
    const onMove = (moveEvent) => calcSplit(moveEvent.clientX);
    const onUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTouchStart = () => {
    setDragging(true);
    const onMove = (moveEvent) => calcSplit(moveEvent.touches[0].clientX);
    const onEnd = () => {
      setDragging(false);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none overflow-hidden"
      style={{ cursor: dragging ? 'ew-resize' : 'default' }}
    >
      <img
        src={afterImg}
        alt={`Depois do tratamento ${title}`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      />
      <img
        src={beforeImg}
        alt={`Antes do tratamento ${title}`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - split}% 0 0)`, objectPosition }}
      />

      <div
        className="absolute bottom-0 top-0 w-[2px] bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
        style={{ left: `${split}%`, transform: 'translateX(-50%)' }}
      />

      <div
        className="absolute top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{ left: `${split}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <div className="flex h-9 w-9 cursor-ew-resize items-center justify-center rounded-full border border-white/60 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-transform duration-150 hover:scale-110 active:scale-95">
          <ArrowRight className="h-4 w-4 text-[#5700B0]" aria-hidden="true" />
        </div>
      </div>

      <span className="absolute left-4 top-4 z-20 rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-700 backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute right-4 top-4 z-20 rounded-full bg-[#5700B0] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
        Depois
      </span>
    </div>
  );
};

const FeaturedTreatmentCard = ({ service, index }) => {
  const hasVisual = Boolean(service.beforeImg && service.afterImg);

  return (
    <Motion.article
      className="group flex min-h-[430px] flex-col overflow-hidden rounded-lg border border-neutral-200 bg-[#FAFAFA] transition-all duration-500 hover:border-[#5700B0]/30 hover:bg-white hover:shadow-[0_20px_45px_rgba(87,0,176,0.07)]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: smoothCurve }}
    >
      <div className="h-56 overflow-hidden border-b border-neutral-200 bg-neutral-100 md:h-64">
        {hasVisual ? (
          <SplitSlider
            beforeImg={service.beforeImg}
            afterImg={service.afterImg}
            title={service.title}
            objectPosition={service.objectPosition}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5700B0]/10 text-[#5700B0] transition-transform duration-500 group-hover:scale-105">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <span className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
          {service.eyebrow}
        </span>
        <h3 className="text-2xl font-light tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-[#5700B0]">
          {service.title}
        </h3>
        <p className="mt-4 flex-grow text-sm font-light leading-relaxed text-neutral-500">
          {service.description}
        </p>
        <a
          href={buildWhatsAppUrl(
            `Olá, Dra. Amanda! Gostaria de saber mais sobre ${service.title} em Três Lagoas.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0] transition-colors duration-300 hover:text-black"
        >
          Conversar pelo WhatsApp
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Motion.article>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-white px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 lg:flex-row lg:items-end">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: smoothCurve }}
          >
            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Tratamentos principais
            </span>
            <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Os tratamentos pelos quais a clínica quer ser lembrada.
            </h2>
          </Motion.div>

          <Motion.p
            className="max-w-md text-sm font-light leading-relaxed text-neutral-500 lg:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, delay: 0.1, ease: smoothCurve }}
          >
            A home destaca os procedimentos de maior posicionamento. A página de
            tratamentos reúne todos os serviços oferecidos pela clínica.
          </Motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredTreatments.map((service, index) => (
            <FeaturedTreatmentCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-neutral-200 bg-[#FAFAFA] p-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm font-light leading-relaxed text-neutral-500">
            Precisa de canal, extração de siso, implante, prótese ou outro
            tratamento específico? Veja a lista completa organizada por categoria.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/tratamentos"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-500 hover:border-[#5700B0] hover:text-[#5700B0]"
            >
              Todos os tratamentos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <WhatsAppButton
              variant="purple"
              message="Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica."
            >
              Agendar
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

