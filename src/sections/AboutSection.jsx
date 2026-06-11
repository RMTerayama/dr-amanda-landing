import React from 'react';
import { motion as Motion } from 'framer-motion';
import drAmandaImg from '../assets/DrAmanda2.jpeg';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white text-black min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12 lg:gap-20">
        
        {/* Lado Esquerdo: Fotografia / Manifesto Visual */}
        <div className="w-full md:w-1/2 h-[430px] md:h-[680px] flex items-center justify-center relative">
          <Motion.div 
            className="w-full max-w-lg h-full max-h-[80vh] relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: smoothCurve }}
          >
            {/* Foto Principal com bordas assimétricas ao estilo Vogue */}
            <div className="w-full h-full bg-[#fcfcfc] border border-neutral-100 rounded-tr-[120px] md:rounded-tr-[200px] rounded-bl-[80px] shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-100/20 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent z-10 pointer-events-none"></div>
              <img
                src={drAmandaImg}
                alt="Dra. Amanda Miyuki em rotina clínica"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>

            {/* Micro detalhe de design (selo flutuante) */}
            <Motion.div 
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-neutral-100 z-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] text-neutral-400">
                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none"></path>
                <text className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase">
                  <textPath href="#textPath" startOffset="0%">⬢ estética avançada ⬢ dr amanda</textPath>
                </text>
              </svg>
            </Motion.div>
          </Motion.div>
        </div>

        {/* Lado Direito: Declaração / Tipografia */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
          
          <Motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-neutral-400 mb-2 block">
              Sobre a profissional
            </span>
            <div className="w-12 h-[1px] bg-neutral-300"></div>
          </Motion.div>

          <Motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight font-light text-neutral-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: smoothCurve, delay: 0.3 }}
          >
            Estética, função e cuidado no mesmo plano de tratamento.
          </Motion.h2>

          <Motion.div 
            className="text-neutral-500 font-light text-sm md:text-base leading-relaxed max-w-md space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: smoothCurve, delay: 0.5 }}
          >
            <p>
              A {siteInfo.clinicName} conduz tratamentos odontológicos em Três
              Lagoas com foco em escuta, planejamento e naturalidade. Cada sorriso
              é avaliado considerando estética, saúde bucal, função mastigatória e
              conforto.
            </p>
            <p>
              A proposta é unir odontologia estética e funcional para criar
              resultados seguros, coerentes com o rosto e sustentados por uma
              rotina de cuidado clara para o paciente.
            </p>
          </Motion.div>

          {/* Sub signature */}
          <Motion.div 
            className="mt-12 md:mt-16 pt-8 border-t border-neutral-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className="font-serif italic text-2xl text-neutral-800 mb-1">
              Amanda Miyuki
            </p>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              Cirurgiã-dentista ⬢ {siteInfo.cro}
            </span>
          </Motion.div>
          
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

