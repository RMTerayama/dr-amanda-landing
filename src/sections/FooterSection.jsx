import React from 'react';
import { motion as Motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const footerLinks = [
  { label: 'Início', href: '/' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Localização', href: '/localizacao' },
  { label: 'Contato', href: '/contato' },
];

const FooterSection = () => {
  return (
    <footer className="relative flex min-h-[78vh] w-full flex-col justify-between overflow-hidden bg-[#111] text-white">
      <div className="absolute -right-[10%] top-[10%] select-none overflow-hidden font-serif text-[38vw] italic font-light leading-none text-white/5 pointer-events-none">
        Miyuki
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-grow flex-col justify-center px-6 py-20 md:px-12">
        <Motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.1, ease: smoothCurve }}
        >
          <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
            Agendamento
          </span>
          <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Sua transformação começa com uma avaliação.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">
            Agende sua consulta em Três Lagoas e entenda como a {siteInfo.clinicName}
            pode cuidar da estética, função e saúde do seu sorriso.
          </p>

          <WhatsAppButton
            className="mt-10"
            variant="light"
            message="Olá, Dra. Amanda! Gostaria de agendar uma avaliação pelo site."
          >
            Agendar avaliação
          </WhatsAppButton>
        </Motion.div>
      </div>

      <div className="relative z-10 mt-auto w-full border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-12">
          <div className="text-center text-[10px] font-light uppercase tracking-widest text-neutral-500 md:text-left">
            © {new Date().getFullYear()} {siteInfo.clinicName}. {siteInfo.addressLine}.
          </div>

          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

