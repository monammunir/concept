import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'LEISTUNGEN', href: '#leistungen' },
    { label: 'WERBEARTIKEL', href: '#werbeartikel' },
    { label: 'ÜBER UNS', href: '#uber-uns' },
    { label: 'PROJEKTE', href: '#projekte' },
    { label: 'KONTAKT', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0B0D]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0B0D]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Authentic C-Concepts Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="/images/cconcepts-logo-light.png" 
              alt="C-Concepts Vertriebs GmbH Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-wider text-[#8E95A2] hover:text-white transition-colors py-1 relative group uppercase font-semibold"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#005496] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContactModal}
              className="group inline-flex items-center space-x-2.5 px-6 py-3 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg shadow-[#005496]/20 hover:shadow-2xl hover:shadow-[#005496]/50 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>TERMIN VEREINBAREN</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenContactModal}
              className="px-3.5 py-2 bg-[#005496] text-white text-[11px] font-bold tracking-wider uppercase rounded-xl sm:hidden cursor-pointer"
            >
              TERMIN ↗
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-[#8E95A2] hover:text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none cursor-pointer"
              aria-label="Hauptmenü umschalten"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0A0B0D]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-lg text-[#E6E9EE] hover:text-[#005496] transition-colors py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-[#005496]/30 cursor-pointer"
              >
                <span>TERMIN VEREINBAREN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
