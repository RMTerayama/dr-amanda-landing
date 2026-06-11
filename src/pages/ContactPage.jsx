import React from 'react';
import { motion as Motion } from 'framer-motion';
import { AtSign, Clock, MapPin, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}`;

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#FAFAFA] px-6 pb-20 pt-32 text-black md:px-12 md:pb-28 md:pt-40">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: smoothCurve }}
        >
          <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Contato
          </span>
          <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
            Fale com uma dentista em{' '}
            <span className="font-serif italic text-[#5700B0]">Três Lagoas</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
            Agende sua consulta odontológica pelo WhatsApp e receba orientação
            sobre estética dental, reabilitação oral, bruxismo, clareamento,
            lentes de resina, implantes e harmonização orofacial.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              variant="purple"
              message="Olá, Dra. Amanda! Gostaria de agendar uma consulta odontológica em Três Lagoas."
            >
              Agendar pelo WhatsApp
            </WhatsAppButton>
            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-500 hover:border-[#5700B0] hover:text-[#5700B0]"
            >
              <AtSign className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </Motion.div>

        <Motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: smoothCurve, delay: 0.1 }}
        >
          <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:col-span-2">
            <MessageCircle className="mb-5 h-6 w-6 text-[#5700B0]" aria-hidden="true" />
            <h2 className="text-2xl font-light tracking-tight text-neutral-950">
              Atendimento pelo WhatsApp
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
              Use o WhatsApp para tirar dúvidas, enviar sua necessidade inicial
              e combinar o melhor horário para avaliação.
            </p>
            <WhatsAppButton
              className="mt-6"
              variant="dark"
              icon="message"
              message="Olá, Dra. Amanda! Vim pelo site e gostaria de falar sobre um tratamento odontológico."
            >
              Iniciar conversa
            </WhatsAppButton>
          </article>

          <article className="rounded-lg border border-neutral-200 bg-white p-6">
            <MapPin className="mb-5 h-6 w-6 text-[#5700B0]" aria-hidden="true" />
            <h2 className="text-xl font-light tracking-tight text-neutral-950">
              Localização
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
              {siteInfo.addressDetail}
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0] transition-colors duration-300 hover:text-black"
            >
              Ver no mapa
            </a>
          </article>

          <article className="rounded-lg border border-neutral-200 bg-white p-6">
            <Clock className="mb-5 h-6 w-6 text-[#5700B0]" aria-hidden="true" />
            <h2 className="text-xl font-light tracking-tight text-neutral-950">
              Horários
            </h2>
            <div className="mt-4 space-y-2 text-sm font-light leading-relaxed text-neutral-500">
              {siteInfo.hours.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
            </div>
          </article>
        </Motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

