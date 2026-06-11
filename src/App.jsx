import React, { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import TreatmentsPage from './pages/TreatmentsPage';
import FooterSection from './sections/FooterSection';

const normalizePath = (pathname) => {
  const cleanPath = pathname.replace(/\/+$/, '');
  return cleanPath || '/';
};

const routes = {
  '/': {
    component: HomePage,
    title: 'Dra. Amanda Miyuki | Odontologia estética em Três Lagoas',
    description:
      'Tratamentos odontológicos personalizados em Três Lagoas para transformar o sorriso, recuperar a função e valorizar a beleza natural com segurança e cuidado.',
  },
  '/tratamentos': {
    component: TreatmentsPage,
    title: 'Tratamentos odontológicos em Três Lagoas | Dra. Amanda Miyuki',
    description:
      'Conheça tratamentos odontológicos em Três Lagoas: estética dental, clareamento, lentes de resina, canal, cirurgias, implantes, próteses, reabilitação oral e harmonização orofacial.',
  },
  '/localizacao': {
    component: LocationPage,
    title: 'Localização da clínica odontológica em Três Lagoas | Dra. Amanda Miyuki',
    description:
      'Veja localização, mapa, horários e WhatsApp para agendar atendimento odontológico com a Dra. Amanda Miyuki em Três Lagoas.',
  },
  '/contato': {
    component: ContactPage,
    title: 'Contato | Dentista em Três Lagoas | Dra. Amanda Miyuki',
    description:
      'Fale pelo WhatsApp com a Dra. Amanda Miyuki para agendar consulta odontológica em Três Lagoas.',
  },
};

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

    window.scrollTo(0, 0);
  }, [currentPath, route.description, route.title]);

  return (
    <MainLayout>
      <Navbar currentPath={currentPath} />
      <Page />
      <FooterSection />
    </MainLayout>
  )
}

export default App;

