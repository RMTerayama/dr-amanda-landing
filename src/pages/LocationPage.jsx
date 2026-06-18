import React from 'react';
import { motion as Motion } from 'framer-motion';
import LocationSection from '../sections/LocationSection';

const smoothCurve = [0.22, 1, 0.36, 1];

const LocationPage = () => {
  return (
    <>
      <section className="bg-white px-6 pb-14 pt-32 text-black md:px-12 md:pb-20 md:pt-40">
        <Motion.div
          className="mx-auto w-full max-w-[1400px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: smoothCurve }}
        >
          <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Como chegar
          </span>
          <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
            Como chegar ao atendimento da Dra. Amanda em{' '}
            <span className="font-serif italic text-[#5700B0]">Três Lagoas</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
            A clínica fica no Terrace Business Center, na Av. Dr. Eloy Chaves,
            956, sala 405. Consulte o mapa e fale pelo WhatsApp para agendar sua
            avaliação.
          </p>
        </Motion.div>
      </section>

      <LocationSection detailed />
    </>
  );
};

export default LocationPage;

