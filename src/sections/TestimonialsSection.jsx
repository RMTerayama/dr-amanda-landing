import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const smoothCurve = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote: "A Dra. Amanda conseguiu capturar perfeitamente a essência de quem eu sou. O resultado ficou tão natural que as pessoas elogiam minha leveza sem saber exatamente o que mudou.",
    author: "Marina S.",
    role: "Empresária"
  },
  {
    quote: "Redefinir meu sorriso mudou a forma como eu me apresento ao mundo. A precisão técnica e o cuidado durante todo o processo foram impecáveis.",
    author: "Ricardo V.",
    role: "Advogado"
  },
  {
    quote: "O ambiente não parece uma clínica tradicional, é uma verdadeira experiência de luxo. A harmonização foi feita de forma sutil, valorizando a minha beleza única.",
    author: "Helena T.",
    role: "Arquiteta"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play simple carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-[#5700B0] text-white min-h-screen w-full relative flex items-center justify-center overflow-hidden py-20 md:py-28">
      {/* Decorative noise/texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      {/* Decorative large quotes */}
      <div className="absolute top-[15%] left-[5%] md:left-[10%] text-white/5 font-serif text-[20vw] md:text-[15vw] leading-none pointer-events-none select-none">
        "
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <Motion.h2 
          className="text-white/60 font-semibold tracking-widest text-[10px] md:text-xs uppercase mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: smoothCurve }}
        >
          O que nossos pacientes dizem
        </Motion.h2>

        <div className="h-[40vh] md:h-[35vh] w-full flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <Motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: smoothCurve }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] font-light text-white mb-8 md:mb-12 max-w-4xl px-4">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center gap-1">
                <span className="font-sans font-medium text-sm md:text-base tracking-wide uppercase text-white">
                  {testimonials[currentIndex].author}
                </span>
                <span className="font-sans font-light text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Paginator */}
        <div className="flex gap-4 mt-8 md:mt-16 relative z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="py-4 cursor-pointer focus:outline-none"
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <div 
                className={`h-[1px] transition-all duration-500 ease-out ${currentIndex === idx ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/50'}`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

