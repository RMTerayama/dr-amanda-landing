import React from 'react';
import { ArrowRight, CalendarCheck, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/site';

const variants = {
  dark: 'bg-black text-white hover:bg-[#5700B0]',
  light: 'bg-white text-black hover:bg-neutral-100',
  purple: 'bg-[#5700B0] text-white hover:bg-black',
  outline:
    'bg-transparent text-black border border-black/15 hover:border-[#5700B0] hover:text-[#5700B0]',
  ghost:
    'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black',
};

const icons = {
  calendar: CalendarCheck,
  message: MessageCircle,
  arrow: ArrowRight,
};

const WhatsAppButton = ({
  children = 'Agendar pelo WhatsApp',
  message,
  variant = 'dark',
  icon = 'calendar',
  className = '',
}) => {
  const Icon = icons[icon] || CalendarCheck;

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-500',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5700B0] focus-visible:ring-offset-2',
        variants[variant] || variants.dark,
        className,
      ].join(' ')}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
};

export default WhatsAppButton;

