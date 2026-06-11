import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, CircleCheck, SearchCheck, Sparkles } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import {
  buildWhatsAppUrl,
  localSearchTerms,
  siteInfo,
  treatmentCategories,
} from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const TreatmentsPage = () => {
  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pb-16 pt-32 text-black md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothCurve }}
          >
            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Tratamentos odontológicos em Três Lagoas
            </span>
            <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
              Tratamentos odontológicos em{' '}
              <span className="font-serif italic text-[#5700B0]">Três Lagoas</span>
            </h1>
            <p className="mt-7 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              Conheça os tratamentos realizados pela clínica, incluindo estética
              dental, clareamento, lentes de resina, canal, cirurgias, implantes,
              próteses, reabilitação oral e harmonização orofacial.
            </p>
          </Motion.div>

          <Motion.div
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothCurve, delay: 0.12 }}
          >
            <Sparkles className="mb-5 h-6 w-6 text-[#5700B0]" aria-hidden="true" />
            <h2 className="text-xl font-light leading-tight tracking-tight text-neutral-950">
              Da prevenção à reabilitação completa do sorriso.
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
              A clínica odontológica em Três Lagoas realiza desde procedimentos
              estéticos até tratamentos clínicos, cirúrgicos, reabilitadores e
              funcionais.
            </p>
            <WhatsAppButton
              className="mt-6 w-full sm:w-auto"
              variant="purple"
              message="Olá, Dra. Amanda! Gostaria de saber qual tratamento odontológico é indicado para mim."
            >
              Tirar dúvidas pelo WhatsApp
            </WhatsAppButton>
          </Motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-black md:px-12 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
                Serviços por categoria
              </span>
              <h2 className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-neutral-900 md:text-5xl">
                Encontre o tratamento certo para o seu momento.
              </h2>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed text-neutral-500 md:text-right">
              Se você procura dentista em Três Lagoas para estética, canal,
              extração de siso, implante dentário ou reabilitação oral, esta
              página reúne as principais possibilidades de cuidado.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {treatmentCategories.map((category, index) => (
              <Motion.article
                key={category.title}
                className="flex min-h-[360px] flex-col rounded-lg border border-neutral-200 bg-[#FAFAFA] p-6 transition-all duration-500 hover:border-[#5700B0]/30 hover:bg-white hover:shadow-[0_20px_45px_rgba(87,0,176,0.06)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: index * 0.04, ease: smoothCurve }}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#5700B0]/10 text-[#5700B0]">
                  <CircleCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-neutral-950">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-neutral-500">
                  {category.description}
                </p>

                <ul className="mt-6 flex-grow space-y-3">
                  {category.treatments.map((treatment) => (
                    <li
                      key={treatment}
                      className="flex gap-3 text-sm font-light leading-relaxed text-neutral-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5700B0]" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppUrl(
                    `Olá, Dra. Amanda! Gostaria de saber mais sobre ${category.title.toLowerCase()} em Três Lagoas.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5700B0] transition-colors duration-300 hover:text-black"
                >
                  Conversar sobre {category.title}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SearchCheck className="mb-6 h-7 w-7 text-[#A855F7]" aria-hidden="true" />
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
              Buscas locais que a página ajuda a responder.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-white/55 md:text-base">
              O conteúdo foi organizado para captação orgânica de pacientes que
              procuram tratamentos odontológicos em Três Lagoas com clareza e
              intenção de agendamento.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {localSearchTerms.map((term) => (
              <div
                key={term}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-light text-white/80"
              >
                {term}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-center text-black md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-light leading-tight tracking-tight text-neutral-950 md:text-5xl">
            Precisa avaliar um tratamento específico?
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-neutral-500 md:text-base">
            Fale com a {siteInfo.clinicName} e agende uma avaliação para entender
            qual abordagem faz sentido para o seu sorriso.
          </p>
          <WhatsAppButton
            className="mt-8"
            variant="dark"
            message="Olá, Dra. Amanda! Gostaria de agendar uma avaliação odontológica em Três Lagoas."
          >
            Agendar avaliação
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage;

