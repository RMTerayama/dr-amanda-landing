import React from 'react';
import { motion } from 'framer-motion';

const smoothCurve = [0.22, 1, 0.36, 1];

const AboutSection = () => {
  return (
    <section className="bg-white text-black h-[100vh] w-full relative flex items-center justify-center overflow-hidden snap-start">
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-full py-20 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12 lg:gap-20">
        
        {/* Lado Esquerdo: Fotografia / Manifesto Visual */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center relative">
          <motion.div 
            className="w-full max-w-lg h-full max-h-[80vh] relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: smoothCurve }}
          >
            {/* Foto Principal com bordas assimétricas ao estilo Vogue */}
            <div className="w-full h-full bg-[#fcfcfc] border border-neutral-100 rounded-tr-[120px] md:rounded-tr-[200px] rounded-bl-[80px] shadow-sm relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-neutral-200/50 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent"></div>
              
              <div className="text-center">
                 <span className="font-serif italic text-neutral-400 text-lg md:text-2xl tracking-wide block mb-2">
                   [Lugar para Foto]
                 </span>
                 <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-neutral-300">
                   Rotina Clínica
                 </span>
              </div>
            </div>

            {/* Micro detalhe de design (selo flutuante) */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-neutral-100 z-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] text-neutral-400">
                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none"></path>
                <text className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase">
                  <textPath href="#textPath" startOffset="0%">• estetica avancada • dr amanda</textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Lado Direito: Declaração / Tipografia */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-neutral-400 mb-2 block">
              01 // Filosofia
            </span>
            <div className="w-12 h-[1px] bg-neutral-300"></div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight font-light text-neutral-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: smoothCurve, delay: 0.3 }}
          >
            A forma mais <span className="font-serif italic text-neutral-500 pr-2">pura</span> de<br />
            enxergar a beleza.
          </motion.h2>

          <motion.div 
            className="text-neutral-500 font-light text-sm md:text-base leading-relaxed max-w-md space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.5 }}
          >
            <p>
              Entendemos que o seu sorriso não é apenas um detalhe, mas sim a assinatura magnética da sua personalidade. A Dra. Amanda transforma a odontologia tradicional em uma experiência focada na sua singularidade.
            </p>
            <p>
              Através de tecnologias suíças e protocolos não-invasivos, reconstruímos a <strong className="font-medium text-neutral-800">simetria perfeita</strong> sem abrir mão dos traços que contam a sua história.
            </p>
          </motion.div>

          {/* Sub signature */}
          <motion.div 
            className="mt-12 md:mt-16 pt-8 border-t border-neutral-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h5 className="font-serif italic text-2xl text-neutral-800 mb-1">Amanda Miyuki</h5>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">Cirurgiã Dentista Especialista</span>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
