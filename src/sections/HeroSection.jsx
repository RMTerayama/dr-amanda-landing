import React from 'react';
import { motion } from 'framer-motion';

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
          
          <motion.div 
            className="flex items-center gap-4 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.2 }}
          >
            <span className="w-8 h-[1px] bg-black/40"></span>
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-600">
              Odontologia Estética & Harmonização
            </span>
          </motion.div>

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

          <motion.button 
            className="group relative overflow-hidden bg-transparent border border-black text-black px-8 py-4 rounded-full font-medium tracking-widest text-[10px] md:text-xs uppercase transition-colors duration-500 hover:bg-black hover:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="relative z-10">Conheça a Experiência</span>
            <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-full z-0"></div>
          </motion.button>
          
        </div>

        {/* Lado Direito: Imagem e Card Flutuante */}
        <div className="w-full md:w-[40%] h-[60vh] md:h-[80vh] flex items-center justify-center relative mt-12 md:mt-0 z-10">
          
          <motion.div 
            className="w-[85%] md:w-full h-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: smoothCurve, delay: 0.4 }}
          >
            {/* Arch Placeholder */}
            <div className="w-full h-full bg-[#f1f1f1] rounded-t-[200px] rounded-b-2xl md:rounded-b-3xl border border-neutral-200 overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.02)] flex items-center justify-center">
              {/* Fake gradient to simulate photo depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-200/50"></div>
              
              <span className="font-serif italic text-neutral-400 text-lg md:text-xl tracking-wide z-10">
                [Foto Dra. Amanda]
              </span>
            </div>

            {/* Premium Floating Card overlapping the image */}
            <motion.div 
              className="absolute -left-[10%] md:-left-[25%] bottom-[15%] md:bottom-[20%] bg-white/70 backdrop-blur-2xl border border-white/60 p-4 md:p-6 rounded-[30px] shadow-[0_20px_40px_rgba(87,0,176,0.05)] flex items-center gap-4 w-[280px] md:w-[320px] group cursor-default"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: smoothCurve, delay: 0.8 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(87,0,176,0.08)" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-neutral-200 bg-neutral-100 shrink-0 flex items-center justify-center text-[8px] font-bold tracking-widest text-[#5700B0] uppercase overflow-hidden relative">
                {/* Micro animation dot */}
                <span className="absolute w-1.5 h-1.5 bg-[#5700B0] rounded-full animate-ping"></span>
                <span className="relative z-10">Live</span>
              </div>
              <div>
                <h4 className="text-black font-semibold text-xs md:text-sm uppercase tracking-wider mb-1">
                  Atendimento Premium
                </h4>
                <p className="text-neutral-500 font-light text-[10px] md:text-xs">
                  Agende sua avaliação exclusiva via direct.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
