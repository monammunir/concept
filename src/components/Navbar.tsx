import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
          ? 'bg-[#0A0B0D]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0B0D]/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="/images/cconcepts-logo-light.png" 
              alt="C-Concepts Vertriebs GmbH Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widest text-[#8E95A2] hover:text-white transition-colors py-1 relative group uppercase font-medium"
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
              className="inline-flex items-center space-x-2.5 px-6 py-3 bg-[#005496] hover:bg-[#0066C2] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300 shadow-lg shadow-[#005496]/20 hover:shadow-[#005496]/40 hover:-translate-y-0.5"
            >
              <span>TERMIN VEREINBAREN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenContactModal}
              className="px-3 py-2 bg-[#005496] text-white font-mono text-[11px] font-bold tracking-wider uppercase rounded-xs sm:hidden"
            >
              TERMIN ↗
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#8E95A2] hover:text-white bg-white/5 border border-white/10 rounded-xs focus:outline-none"
              aria-label="Hauptmenü umschalten"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0A0B0D] border-b border-white/10 px-6 py-8 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans font-bold text-lg text-[#E6E9EE] hover:text-[#005496] transition-colors py-1 border-b border-white/5"
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
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#005496] hover:bg-[#0066C2] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs shadow-lg shadow-[#005496]/30"
              >
                <span>TERMIN VEREINBAREN</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
