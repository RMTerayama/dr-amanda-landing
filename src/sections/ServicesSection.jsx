import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import resinaAntesImg from '../assets/resinaAntes.png';
import resinaDepoisImg from '../assets/ResinaDepois.jpeg';
import botoxAntesImg from '../assets/BotoxAntes.png';
import botoxDepoisImg from '../assets/BotoxDepois.png';

const smoothCurve = [0.22, 1, 0.36, 1];

const servicesList = [
  {
    title: "Resina Composta",
    description: "Transformação estética precisa com resinas de última geração — resultado natural, imperceptível e duradouro.",
    beforeImg: resinaAntesImg,
    afterImg: resinaDepoisImg,
    hasBeforeAfter: true,
    objectPosition: 'center 30%',
  },
  {
    title: "Botox",
    description: "Suavização natural de linhas de expressão com toxina botulínica — resultado harmonioso, sem perda de expressividade.",
    beforeImg: botoxAntesImg,
    afterImg: botoxDepoisImg,
    hasBeforeAfter: true,
    objectPosition: 'center 70%',
  },
  {
    title: "Harmonização Facial",
    description: "Realce dos seus ângulos naturais com técnicas de preenchimento e bioestimuladores de colágeno.",
    hasBeforeAfter: false,
    placeholderText: "[Imagem: Rosto/Estética]"
  },
];

/* ── Split-view slider ── */
const SplitSlider = ({ beforeImg, afterImg, objectPosition = 'center 30%' }) => {
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const calcSplit = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(95, Math.max(5, pct)));
  }, []);

  /* mouse */
  const onMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    const onMove = (ev) => calcSplit(ev.clientX);
    const onUp   = ()  => { setDragging(false); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
  };

  /* touch */
  const onTouchStart = (e) => {
    const onMove = (ev) => calcSplit(ev.touches[0].clientX);
    const onEnd  = ()   => { window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd); };
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend',  onEnd);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{ cursor: dragging ? 'ew-resize' : 'default' }}
    >
      {/* DEPOIS — full background */}
      <img src={afterImg}  alt="Depois" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition }} />

      {/* ANTES — same size as Depois, clipped to left via clip-path (no ref size needed) */}
      <img
        src={beforeImg}
        alt="Antes"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - split}% 0 0)`, objectPosition }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
        style={{ left: `${split}%`, transform: 'translateX(-50%)' }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
        style={{ left: `${split}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <div className="w-9 h-9 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.18)] flex items-center justify-center cursor-ew-resize border border-white/60 backdrop-blur-sm transition-transform duration-150 hover:scale-110 active:scale-95">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8H1M1 8L3.5 5.5M1 8L3.5 10.5" stroke="#5700B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 8H15M15 8L12.5 5.5M15 8L12.5 10.5" stroke="#5700B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em] font-semibold px-3 py-1.5 rounded-full bg-white/85 text-neutral-700 backdrop-blur-sm shadow-sm">
          Antes
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em] font-semibold px-3 py-1.5 rounded-full bg-[#5700B0] text-white backdrop-blur-sm shadow-sm">
          Depois ✦
        </span>
      </div>
    </div>
  );
};

const BeforeAfterCard = ({ service, index }) => {

  return (
    <motion.div
      className="flex flex-col h-full group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: 0.2 + (index * 0.15), ease: smoothCurve }}
    >
      {/* Image Area */}
      <div className="flex-grow w-full rounded-2xl md:rounded-3xl border border-neutral-200 overflow-hidden relative shadow-sm transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_rgba(87,0,176,0.08)]">
        {service.hasBeforeAfter ? (
          <SplitSlider 
            beforeImg={service.beforeImg} 
            afterImg={service.afterImg} 
            objectPosition={service.objectPosition}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:scale-110 transition-transform duration-700">
                {service.placeholderText}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#5700B0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
          </>
        )}
      </div>

      {/* Text Area */}
      <div className="pt-5 shrink-0 px-2">
        <h4 className="text-xl md:text-2xl font-light text-black tracking-tight mb-2 flex items-center justify-between group-hover:text-[#5700B0] transition-colors duration-500">
          {service.title}
          <span className="font-serif italic opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-lg">
            &rarr;
          </span>
        </h4>
        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
          {service.description}
        </p>
        {service.hasBeforeAfter && (
          <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 mt-2 font-medium">
            Arraste para comparar
          </p>
        )}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-white text-black h-[100vh] w-full relative flex flex-col justify-center overflow-hidden snap-start">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-full py-16 flex flex-col relative z-10">
        
        {/* Header da Seção */}
        <div className="flex justify-between items-end mb-8 md:mb-12 shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: smoothCurve }}
          >
            <h3 className="text-neutral-400 font-semibold tracking-widest text-[10px] md:text-[11px] uppercase mb-4">
              Exclusividade & Precisão
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-[1.05]">
              Nossas <br className="md:hidden"/> <span className="font-serif italic font-normal text-[#5700B0] pr-2">Especialidades</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="hidden md:block w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: smoothCurve }}
          >
            <p className="text-neutral-500 text-sm font-light leading-relaxed text-right">
              Cada tratamento é uma odisseia desenhada sob medida. Utilizamos ciência, precisão milimétrica e o mais purista senso de estética contemporânea.
            </p>
          </motion.div>
        </div>

        {/* Grid de Serviços */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 h-full relative pb-4">
          {servicesList.map((service, index) => (
            <BeforeAfterCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
