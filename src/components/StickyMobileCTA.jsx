import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      const servicesRect = servicesSection?.getBoundingClientRect();
      const servicesVisible = servicesRect
        ? servicesRect.top < window.innerHeight && servicesRect.bottom > 0
        : false;

      setVisible(window.scrollY > 520 && !servicesVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="fixed bottom-4 right-4 z-50 pb-[env(safe-area-inset-bottom)] md:hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: smoothCurve }}
        >
          <div className="rounded-full border border-white/70 bg-white/90 p-1 shadow-[0_14px_36px_rgba(0,0,0,0.14)] backdrop-blur-xl">
            <a
              href={buildWhatsAppUrl(
                'Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica pelo site.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-black px-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 active:bg-[#5700B0]"
            >
              <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              Agendar
            </a>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
