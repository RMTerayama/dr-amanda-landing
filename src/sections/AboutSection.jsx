import React from 'react';
import { motion as Motion } from 'framer-motion';
import { HeartHandshake, Sparkles } from 'lucide-react';
import amandaPortrait from '../../imgAmanda/IMG_8849.JPG.jpeg';
import { siteInfo } from '../data/site';

const smoothCurve = [0.22, 1, 0.36, 1];

const AboutSection = () => (
  <section id="quem-sou-eu" aria-labelledby="about-title" className="bg-white px-6 py-20 text-neutral-950 md:px-12 md:py-28">
    <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
      <Motion.div className="relative mx-auto w-full max-w-md lg:max-w-none" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, ease: smoothCurve }}>
        <div className="aspect-[2/3] overflow-hidden rounded-t-[12rem] rounded-b-[2rem] border border-brand-100 bg-brand-50 shadow-[0_28px_70px_rgba(63,18,99,0.12)]">
          <img src={amandaPortrait} alt="Dra. Amanda Miyuki Terayama sentada em um ambiente acolhedor" width="2400" height="3600" loading="lazy" decoding="async" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute -bottom-5 -right-3 max-w-48 rounded-2xl border border-brand-100 bg-white p-4 shadow-[0_16px_36px_rgba(15,15,20,0.12)] md:-right-6 md:p-5">
          <Sparkles className="mb-2 h-5 w-5 text-brand-600" aria-hidden="true" />
          <p className="text-sm font-medium leading-snug text-neutral-900">Estética com naturalidade, saúde e função.</p>
        </div>
      </Motion.div>
      <div>
        <Motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.7, ease: smoothCurve }}>
          <span className="text-label text-brand-600">Quem sou eu</span>
          <h2 id="about-title" className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.04] tracking-tight text-neutral-950 md:text-6xl">Olá, eu sou a Amanda Miyuki Terayama.</h2>
        </Motion.div>
        <Motion.div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-neutral-600 md:text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.75, delay: 0.1, ease: smoothCurve }}>
          <p>Sou cirurgiã-dentista formada pela UNESP de Araçatuba desde 2019 e tenho o privilégio de exercer uma profissão que escolhi por verdadeira paixão. Sou casada, mãe do Arthur e cresci em Três Lagoas, cidade onde construí minha história e onde hoje tenho a alegria de cuidar de tantas pessoas.</p>
          <p>Desde o início da faculdade, sempre fui encantada pela anatomia dental. Os detalhes, a harmonia e a beleza de cada sorriso despertaram em mim um interesse que, com o tempo, se transformou em uma paixão pela odontologia estética.</p>
          <p>Acredito que cada paciente carrega uma história única. Por isso, faço questão de receber cada pessoa com atenção, respeito e acolhimento, entendendo seus desejos e expectativas antes de qualquer tratamento.</p>
          <p>Meu maior propósito é transformar sorrisos de forma natural, preservando a saúde, a função e a individualidade de cada paciente. Nada me realiza mais do que ver alguém voltar a sorrir com confiança e felicidade.</p>
        </Motion.div>
        <Motion.div className="mt-9 flex items-center gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-700" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          <HeartHandshake className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
          <span>Cirurgiã-dentista · {siteInfo.cro} · Três Lagoas, MS</span>
        </Motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
