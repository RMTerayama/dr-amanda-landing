import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { CalendarCheck, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { buildWhatsAppUrl } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Localização', href: '/localizacao' },
  { label: 'Contato', href: '/contato' },
];

const Navbar = ({ currentPath = '/' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Motion.header
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: smoothCurve, delay: 0.1 }}
    >
      <nav
        className="relative flex w-full max-w-[1400px] items-center justify-between rounded-full px-4 py-3 transition-all duration-700 md:px-6"
        style={{
          background: scrolled || menuOpen ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'blur(0px)',
          boxShadow:
            scrolled || menuOpen
              ? '0 4px 30px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)'
              : 'none',
        }}
        aria-label="Navegação principal"
      >
        <a href="/" className="flex shrink-0 items-center" aria-label="Ir para o início">
          <img
            src={logoImg}
            alt="Dra. Amanda Miyuki - Odontologia Estética"
            className="h-10 w-auto object-contain md:h-12"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = currentPath === link.href;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={[
                    'text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300',
                    active ? 'text-black' : 'text-neutral-500 hover:text-black',
                  ].join(' ')}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={buildWhatsAppUrl('Olá, Dra. Amanda! Gostaria de agendar uma consulta pelo site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-[#5700B0]"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Agendar
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition-colors duration-300 hover:border-[#5700B0] hover:text-[#5700B0] md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-lg border border-black/5 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:hidden">
            <ul className="grid gap-1">
              {navLinks.map((link) => {
                const active = currentPath === link.href;

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        'block rounded-lg px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300',
                        active
                          ? 'bg-[#5700B0]/10 text-[#5700B0]'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-black',
                      ].join(' ')}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={buildWhatsAppUrl('Olá, Dra. Amanda! Gostaria de agendar uma consulta pelo site.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#5700B0]"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </div>
        )}
      </nav>
    </Motion.header>
  );
};

export default Navbar;

