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
      setIsScrolled(window.scrollY > 30);
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
          : 'bg-gradient-to-b from-white/90 via-white/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Authentic C-Concepts Brand Logo for Light Theme */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="/images/cconcepts-logo-1.png" 
              alt="C-Concepts Vertriebs GmbH Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to logo.png if 1.png fails
                (e.target as HTMLImageElement).src = '/images/cconcepts-logo.png';
              }}
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-wider text-slate-700 hover:text-[#005496] transition-colors py-1 relative group uppercase font-semibold"
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
              className="group inline-flex items-center space-x-2.5 px-6 py-3 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-500 shadow-md shadow-[#005496]/20 hover:shadow-xl hover:shadow-[#005496]/35 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>TERMIN VEREINBAREN</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
              className="p-2.5 text-slate-700 hover:text-[#005496] bg-slate-100 border border-slate-200 rounded-xl focus:outline-none cursor-pointer"
              aria-label="Hauptmenü umschalten"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-8 shadow-xl">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-lg text-slate-800 hover:text-[#005496] transition-colors py-1 border-b border-slate-100"
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
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-[#005496]/20 cursor-pointer"
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
