import React, { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import StickyMobileCTA from './components/StickyMobileCTA';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import TreatmentsPage from './pages/TreatmentsPage';
import FooterSection from './sections/FooterSection';
import { faqItems, siteInfo, treatmentSeoBlocks } from './data/site';

const normalizePath = (pathname) => {
  const cleanPath = pathname.replace(/\/+$/, '');
  return cleanPath || '/';
};

const scrollToCurrentHash = () => {
  const id = window.location.hash.replace('#', '');
  if (!id) {
    window.scrollTo({ top: 0, left: 0 });
    return;
  }

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ block: 'start' });
  }
};

const routes = {
  '/': {
    component: HomePage,
    title: 'Dentista em Três Lagoas | Dra. Amanda Miyuki',
    description:
      'Dentista em Três Lagoas no Terrace Business Center. Avaliação odontológica com documentação para estética dental, bruxismo e reabilitação oral.',
  },
  '/tratamentos': {
    component: TreatmentsPage,
    title: 'Tratamentos odontológicos em Três Lagoas | Dra. Amanda Miyuki',
    description:
      'Tratamentos odontológicos em Três Lagoas para estética dental, clareamento, lentes de resina, canal, cirurgias, implantes, próteses, bruxismo e reabilitação oral.',
  },
  '/localizacao': {
    component: LocationPage,
    title: 'Localização no Terrace Business Center | Dra. Amanda Miyuki',
    description:
      'Veja endereço, mapa, horários e WhatsApp para agendar atendimento odontológico com a Dra. Amanda Miyuki no Terrace Business Center em Três Lagoas.',
  },
  '/contato': {
    component: ContactPage,
    title: 'Contato | Dentista em Três Lagoas | Dra. Amanda Miyuki',
    description:
      'Fale pelo WhatsApp com a Dra. Amanda Miyuki para agendar avaliação odontológica no Terrace Business Center em Três Lagoas.',
  },
};

const buildStructuredData = (baseUrl) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${baseUrl}/#dentist`,
    name: siteInfo.professionalName,
    alternateName: siteInfo.clinicName,
    description:
      'Atendimento odontológico em Três Lagoas para estética dental, reabilitação oral, bruxismo, implantes e clínica geral.',
    url: baseUrl,
    telephone: siteInfo.phoneDisplay,
    medicalSpecialty: 'Dentistry',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Dr. Eloy Chaves, 956 - Sala 405 - Terrace Business Center',
      addressLocality: siteInfo.city,
      addressRegion: siteInfo.state,
      postalCode: '79602-000',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'City',
      name: `${siteInfo.city} - ${siteInfo.state}`,
    },
    openingHours: '07:00-12:00, 13:00-17:00',
    sameAs: [siteInfo.instagramUrl, siteInfo.googleProfileUrl],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/tratamentos#tratamentos-locais`,
    name: 'Tratamentos odontológicos em Três Lagoas',
    itemListElement: treatmentSeoBlocks.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${baseUrl}/tratamentos#${item.id}`,
      name: item.title,
      description: item.description,
    })),
  },
];

function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const route = routes[currentPath] || routes['/'];
  const Page = route.component;

  useEffect(() => {
    const handlePopState = () => setCurrentPath(normalizePath(window.location.pathname));

    const handleInternalLinkClick = (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = event.target.closest('a[href]');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;

      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin) return;

      const nextPath = normalizePath(url.pathname);
      if (!routes[nextPath]) return;

      event.preventDefault();
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
      setCurrentPath(nextPath);
      window.requestAnimationFrame(() => {
        scrollToCurrentHash();
      });
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleInternalLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleInternalLinkClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = route.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', route.description);

    const baseUrl = window.location.origin;
    let structuredData = document.querySelector('#structured-data-local-business');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data-local-business';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(buildStructuredData(baseUrl));

    window.setTimeout(scrollToCurrentHash, 0);
  }, [currentPath, route.description, route.title]);

  return (
    <MainLayout>
      <Navbar currentPath={currentPath} />
      <Page />
      <FooterSection />
      <StickyMobileCTA />
    </MainLayout>
  )
}

export default App;

