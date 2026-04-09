import React from 'react';
import { motion } from 'framer-motion';

const smoothCurve = [0.22, 1, 0.36, 1];

const FooterSection = () => {
  return (
    <footer className="bg-[#111] text-white w-full relative flex flex-col justify-between overflow-hidden snap-start min-h-[90vh]">
      
      {/* Decorative large logo watermark */}
      <div className="absolute top-[10%] -right-[10%] text-white/5 font-serif text-[40vw] leading-none pointer-events-none select-none italic font-light overflow-hidden">
        Miyuki
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center py-20 relative z-10">
        
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: smoothCurve }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tight leading-[1.05] mb-8">
            Sua <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#5700B0]">transformação</span><br />
            começa aqui.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
            Agende sua consulta exclusiva e descubra como a expertise da Dra. Amanda Miyuki pode elevar a estética do seu sorriso e a harmonia do seu rosto.
          </p>

          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center relative overflow-hidden bg-white text-black px-10 py-5 rounded-full font-medium tracking-widest text-[11px] md:text-xs uppercase hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
          >
            <span className="relative z-10 flex items-center gap-3">
              Agendar Avaliação
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>
        </motion.div>

      </div>

      {/* Footer Bottom Line */}
      <div className="w-full border-t border-white/10 relative z-10 mt-auto">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-neutral-500 font-light text-[10px] md:text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Dra. Amanda Miyuki.
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300 text-[10px] md:text-xs uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300 text-[10px] md:text-xs uppercase tracking-widest">Localização</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300 text-[10px] md:text-xs uppercase tracking-widest">Contato</a>
          </div>
          
        </div>
      </div>
      
    </footer>
  );
};

export default FooterSection;
