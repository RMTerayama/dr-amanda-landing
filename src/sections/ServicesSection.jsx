import React from 'react';
import { motion } from 'framer-motion';

const smoothCurve = [0.22, 1, 0.36, 1];

const servicesList = [
  {
    title: "Lentes de Contato",
    description: "Sorrisos projetados digitalmente com porcelanas ultra-finas para correção de cor e forma.",
    placeholderText: "[Imagem: Sorriso/Lentes]"
  },
  {
    title: "Harmonização Facial",
    description: "Realce dos seus ângulos naturais com técnicas de preenchimento e bioestimuladores de colágeno.",
    placeholderText: "[Imagem: Rosto/Estética]"
  },
  {
    title: "Implantes Premium",
    description: "Reabilitação oral avançada com tecnologia suíça, devolvendo sua força mastigatória e autoestima.",
    placeholderText: "[Imagem: Detalhe Odonto]"
  }
];

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
            <motion.div 
              key={index}
              className="flex flex-col h-full group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2 + (index * 0.15), ease: smoothCurve }}
            >
              {/* Image Area */}
              <div className="flex-grow w-full bg-neutral-100 rounded-2xl md:rounded-3xl border border-neutral-200 overflow-hidden relative shadow-sm transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_rgba(87,0,176,0.08)] group-hover:border-white">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-400 text-[10px] md:text-xs uppercase tracking-widest font-medium z-20 group-hover:scale-110 transition-transform duration-700">
                    {service.placeholderText}
                  </span>
                </div>
                {/* Efeito Hover Glow nas bordas internas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5700B0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
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
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
