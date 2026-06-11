import React from 'react';
import { motion as Motion } from 'framer-motion';
import { AtSign, Clock, MapPin, Navigation } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteInfo.mapQuery)}&output=embed`;

const LocationSection = ({ detailed = false }) => {
  return (
    <section id="localizacao" className="bg-[#FAFAFA] px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <Motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: smoothCurve }}
        >
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Localização
          </span>
          <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Atendimento odontológico em Três Lagoas.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
            A clínica recebe pacientes de Três Lagoas e região para tratamentos
            odontológicos estéticos, funcionais, clínicos e reabilitadores.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <MapPin className="mb-4 h-5 w-5 text-[#5700B0]" aria-hidden="true" />
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
                Endereço
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-500">
                {siteInfo.addressDetail}
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-900">
                {siteInfo.addressLine}
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <Clock className="mb-4 h-5 w-5 text-[#5700B0]" aria-hidden="true" />
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
                Horários
              </h3>
              <div className="space-y-2 text-sm font-light leading-relaxed text-neutral-500">
                {siteInfo.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
          </div>

          {detailed && (
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
              Para confirmar disponibilidade, endereço completo e melhor horário,
              fale diretamente pelo WhatsApp antes de se deslocar até a clínica.
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              variant="purple"
              message="Olá, Dra. Amanda! Gostaria de agendar uma avaliação em Três Lagoas."
            >
              Agendar pelo WhatsApp
            </WhatsAppButton>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-500 hover:border-[#5700B0] hover:text-[#5700B0]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Ver no mapa
            </a>
          </div>

          <a
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-300 hover:text-[#5700B0]"
          >
            <AtSign className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
        </Motion.div>

        <Motion.div
          className="min-h-[360px] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:min-h-[520px]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: smoothCurve, delay: 0.1 }}
        >
          <iframe
            title="Mapa da clínica odontológica em Três Lagoas"
            src={mapEmbedUrl}
            className="h-full min-h-[360px] w-full border-0 md:min-h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default LocationSection;

