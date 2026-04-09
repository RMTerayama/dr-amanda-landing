import React from 'react';
import { motion } from 'framer-motion';
import drAmandaImg from '../assets/DrAmanda.png';

const smoothCurve = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  return (
    <section className="bg-[#FAFAFA] text-black h-[100vh] w-full relative overflow-hidden flex items-center justify-center snap-start">
      
      {/* Decorative ultra-minimal noise */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      {/* Subtle Purple Hue Glow (Aura) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#5700B0] rounded-full mix-blend-multiply opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex flex-col md:flex-row items-center justify-between relative z-10 pt-20 pb-10">
        
        {/* Lado Esquerdo: Tipografia e Call To Action */}
        <div className="w-full md:w-[60%] flex flex-col justify-center items-start z-20 h-full">
          


          <motion.h1 
            className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-tighter text-neutral-900 mb-6 md:mb-10 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: smoothCurve, delay: 0.3 }}
          >
            Dra. Amanda<br/>
            <span className="font-serif italic font-light text-[#5700B0] tracking-normal pr-4">Miyuki</span>
          </motion.h1>

          <motion.p 
            className="text-neutral-500 font-light text-sm md:text-base max-w-sm leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.5 }}
          >
            Resignificando a arte de sorrir através de uma abordagem minimalista, unindo ciência e o mais apurado senso estético.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.7 }}
          >
            <span className="w-8 h-[1px] bg-black/40"></span>
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-600">
              Odontologia Estética &amp; Harmonização
            </span>
          </motion.div>
          
        </div>

        {/* Lado Direito: Foto Dra. Amanda + Card Flutuante */}
        <div className="w-full md:w-[40%] h-[60vh] md:h-[80vh] flex items-center justify-center relative mt-12 md:mt-0 z-10">
          
          <motion.div 
            className="w-[85%] md:w-full h-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: smoothCurve, delay: 0.4 }}
          >
            {/* Arch Photo Container — Dra. Amanda */}
            <div className="w-full h-full bg-[#f1f1f1] rounded-t-[200px] rounded-b-2xl md:rounded-b-3xl border border-neutral-200 overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
              {/* Subtle gradient overlay at the bottom for elegance */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-200/30 z-10 pointer-events-none"></div>
              <img
                src={drAmandaImg}
                alt="Dra. Amanda Miyuki — Odontologia Estética"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Premium Floating Card overlapping the image */}
            <motion.div 
              className="absolute -left-[10%] md:-left-[25%] bottom-[15%] md:bottom-[20%] bg-white/70 backdrop-blur-2xl border border-white/60 p-4 md:p-6 rounded-[30px] shadow-[0_20px_40px_rgba(87,0,176,0.05)] flex items-center gap-4 w-[280px] md:w-[320px] group cursor-default"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: smoothCurve, delay: 0.8 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(87,0,176,0.08)" }}
            >
              {/* Credential icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#5700B0]/20 bg-[#5700B0]/06 shrink-0 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#5700B0" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="#5700B0" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="#5700B0" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Credentials */}
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-[8px] uppercase tracking-[0.22em] font-semibold text-neutral-400 block mb-0.5">
                    Formação
                  </span>
                  <p className="text-black font-semibold text-[10px] md:text-xs tracking-wide">
                    UNESP — Odontologia Estética
                  </p>
                </div>
                <div className="w-full h-[1px] bg-neutral-100" />
                <div>
                  <span className="text-[8px] uppercase tracking-[0.22em] font-semibold text-neutral-400 block mb-0.5">
                    Registro
                  </span>
                  <p className="text-black font-semibold text-[10px] md:text-xs tracking-wide">
                    CRO-MS <span className="text-[#5700B0]">7266</span>
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
