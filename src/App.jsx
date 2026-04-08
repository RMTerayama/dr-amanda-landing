import React from 'react';
import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FooterSection />
    </MainLayout>
  )
}

export default App;
