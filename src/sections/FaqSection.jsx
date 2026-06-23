import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { faqItems } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const FaqSection = () => {
  return (
    <section id="duvidas" className="bg-white px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: smoothCurve }}
        >
          <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Dúvidas frequentes
          </span>
          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-neutral-950 md:text-6xl">
            Respostas para decidir com mais segurança.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
            A primeira consulta serve para transformar dúvidas soltas em um plano
            claro. Estes pontos ajudam você a entender quando vale falar pelo
            WhatsApp e o que esperar da avaliação.
          </p>
          <WhatsAppButton
            className="mt-8"
            variant="purple"
            icon="message"
            message="Olá, Dra. Amanda! Tenho uma dúvida antes de agendar minha avaliação odontológica."
          >
            Tirar dúvida no WhatsApp
          </WhatsAppButton>
        </Motion.div>

        <div className="border-t border-neutral-200">
          {faqItems.map((item, index) => (
            <Motion.details
              key={item.question}
              className="group border-b border-neutral-200 py-6 transition-colors duration-500 open:border-[#5700B0]/35"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: smoothCurve }}
            >
              <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4">
                <span className="font-serif text-2xl italic leading-none text-[#5700B0]/45 md:text-3xl">
                  0{index + 1}
                </span>
                <h3 className="flex-grow text-base font-medium leading-snug tracking-tight text-neutral-950 md:text-lg">
                  {item.question}
                </h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#5700B0]"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-5 max-w-3xl pl-12 text-sm font-light leading-relaxed text-neutral-500 md:pl-16 md:text-base">
                {item.answer}
              </p>
            </Motion.details>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1400px] items-center gap-3 border-t border-neutral-200 pt-6 text-sm font-light leading-relaxed text-neutral-500">
        <MessageCircle className="h-5 w-5 shrink-0 text-[#5700B0]" aria-hidden="true" />
        <p>
          Para casos com dor, dente quebrado, bruxismo intenso ou dúvida sobre
          urgência, envie uma mensagem e explique o que está sentindo.
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
