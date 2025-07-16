import Footer from '@/components/landing-page/footer';
import HeroSection from '@/components/landing-page/hero-section';
import TechStack from '@/components/landing-page/tech-stack';
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
