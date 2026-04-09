import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const smoothCurve = [0.22, 1, 0.36, 1];

const navLinks = [
  { label: 'Filosofia', href: '#about' },
  { label: 'Especialidades', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 40);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: smoothCurve, delay: 0.1 }}
    >
      <nav
        className="w-full max-w-[1400px] flex items-center justify-between px-6 py-3 rounded-full transition-all duration-700"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.72)'
            : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: scrolled
            ? '0 4px 30px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)'
            : 'none',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center shrink-0">
          <img
            src={logoImg}
            alt="Dra. Amanda Miyuki — Odontologia Estética"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Nav Links — desktop only */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[10px] uppercase tracking-[0.22em] font-semibold text-neutral-500 hover:text-black transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden bg-black text-white px-5 py-2.5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.22em] font-semibold transition-all duration-500 hover:bg-[#5700B0]"
        >
          Agendar Consulta
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
