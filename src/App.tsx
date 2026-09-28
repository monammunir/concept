import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { FullServiceSection } from './components/FullServiceSection';
import { CtaSection } from './components/CtaSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ClientsSection } from './components/ClientsSection';
import { RemundiSection } from './components/RemundiSection';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { SedexSection } from './components/SedexSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectConfiguratorModal } from './components/ProjectConfiguratorModal';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#E6E9EE] selection:bg-[#005496] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navbar */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* 2. Intro / Value Proposition */}
        <IntroSection />

        {/* 3. Full-Service Section */}
        <FullServiceSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* 4. Bold Full-Width CTA Section */}
        <CtaSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* 5. Products & Projects Portfolio */}
        <SelectedWorkSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* 6. Clients & Partner Logos + Real Testimonials */}
        <ClientsSection />

        {/* 7. Featured Project — Remundi Case Study */}
        <RemundiSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* 8. About C-Concepts */}
        <AboutSection />

        {/* 9. Team Section */}
        <TeamSection />

        {/* 10. Sedex Credibility Section */}
        <SedexSection />

        {/* 11. Contact & Final CTA Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Inquiry & Configurator Modal */}
      <ProjectConfiguratorModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
