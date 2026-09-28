import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

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
    { label: 'WORK', href: '#selected-work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CLIENTS', href: '#clients' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0B0D]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo & Technical Identifier */}
          <a href="#" className="group flex items-center space-x-3 text-white">
            <div className="w-8 h-8 rounded-xs bg-[#121418] border border-white/20 flex items-center justify-center group-hover:border-[#FF4500] group-hover:bg-[#FF4500]/10 transition-all duration-300">
              <span className="font-mono text-xs font-bold text-[#FF4500] group-hover:scale-110 transition-transform">
                C
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg tracking-widest text-white group-hover:text-[#FF4500] transition-colors">
                C-CONCEPTS
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#8E95A2] uppercase">
                CREATIVE ENGINEERING
              </span>
            </div>
          </a>

          {/* Center/Right: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-wider text-[#8E95A2] hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4500] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right: Primary CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-[10px] font-mono text-[#8E95A2] border-r border-white/10 pr-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>HQ: SIMMERN/DE</span>
            </div>

            <button
              onClick={onOpenContactModal}
              className="group relative inline-flex items-center space-x-2 px-5 py-2.5 bg-[#121418] border border-[#FF4500]/50 hover:border-[#FF4500] text-white font-mono text-xs tracking-wider uppercase rounded-xs transition-all duration-300 shadow-[0_0_15px_rgba(255,69,0,0.15)] hover:shadow-[0_0_25px_rgba(255,69,0,0.35)] overflow-hidden"
            >
              <span className="relative z-10 font-semibold">START A PROJECT</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 text-[#FF4500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#FF4500] translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0 opacity-10" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenContactModal}
              className="px-3 py-1.5 border border-[#FF4500] text-[#FF4500] font-mono text-[10px] tracking-wider uppercase rounded-xs"
            >
              START ↗
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#8E95A2] hover:text-white bg-[#121418] border border-white/10 rounded-xs"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#0A0B0D]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl bg-tech-grid">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-[#8E95A2] border-b border-white/10 pb-3">
              <span>SYSTEM NAVIGATION</span>
              <span className="text-[#FF4500]">VER 3.4 // DE</span>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/5 font-sans font-semibold text-lg text-white hover:text-[#FF4500] transition-colors"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#8E95A2]">0{idx + 1}</span>
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#FF4500] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs shadow-[0_0_20px_rgba(255,69,0,0.4)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
