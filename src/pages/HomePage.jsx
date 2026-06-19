import React from 'react';
import HeroSection from '../sections/HeroSection';
import DifferentialsSection from '../sections/DifferentialsSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import GoogleReviewsSection from '../sections/GoogleReviewsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FaqSection from '../sections/FaqSection';
import LocationSection from '../sections/LocationSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DifferentialsSection />
      <AboutSection />
      <ServicesSection />
      <GoogleReviewsSection />
      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
    </>
  );
};

export default HomePage;

