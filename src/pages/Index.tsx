
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        {/* Placeholder for Pricing section if added later */}
        {/* <PricingSection /> */}
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
