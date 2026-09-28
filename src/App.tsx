import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ProcessSection } from './components/ProcessSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { FullServiceSection } from './components/FullServiceSection';
import { ImpossibleIdeaSection } from './components/ImpossibleIdeaSection';
import { ClientsSection } from './components/ClientsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProjectConfiguratorModal } from './components/ProjectConfiguratorModal';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#E6E9EE] selection:bg-[#FF4500] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <main>
        <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* Editorial Introduction */}
        <IntroSection />

        {/* Precision Engineering Process */}
        <ProcessSection />

        {/* Selected Work Portfolio (Real Projects) */}
        <SelectedWorkSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* Engineering / Full Service Section */}
        <FullServiceSection />

        {/* "Impossible Ideas" Section */}
        <ImpossibleIdeaSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* Trusted By Clients Section */}
        <ClientsSection />

        {/* 30+ Years About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Project Inquiry Modal Configurator */}
      <ProjectConfiguratorModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
