import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+14px)] pt-3 md:hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: smoothCurve }}
        >
          <div className="mx-auto flex max-w-sm items-center gap-2 rounded-full border border-white/70 bg-white/88 p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-xl">
            <a
              href={buildWhatsAppUrl(
                'Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica pelo site.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-black px-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 active:bg-[#5700B0]"
            >
              <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
