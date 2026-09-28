import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  return (
    <footer className="bg-[#050608] text-white border-t border-white/10 font-sans">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 justify-between">
          
          {/* Brand & Address */}
          <div className="md:col-span-6 space-y-6">
            <a href="#home" className="block">
              <img 
                src="/images/cconcepts-logo-light.png" 
                alt="C-Concepts Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
            
            <div className="space-y-2 text-sm text-[#8E95A2] font-light leading-relaxed">
              <div className="font-bold text-white uppercase font-mono text-xs">C-CONCEPTS VERTRIEBS GMBH</div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0077E6] shrink-0" />
                <span>Im Maerenthal 6a, 56337 Simmern / Germany</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#0077E6] shrink-0" />
                <a href="tel:026309637924" className="hover:text-white transition-colors">+49 (0) 2630 96379-24</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0077E6] shrink-0" />
                <a href="mailto:info@cconcepts.de" className="hover:text-white transition-colors">info@cconcepts.de</a>
              </div>
            </div>

            <p className="text-xs text-[#8E95A2]/80 font-mono">
              Innovative Marketing Concepts – Made in Germany
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-[#8E95A2]">
            <div className="text-white font-bold tracking-widest uppercase mb-4 text-xs">NAVIGATION</div>
            <div><a href="#home" className="hover:text-[#0077E6] transition-colors">HOME</a></div>
            <div><a href="#leistungen" className="hover:text-[#0077E6] transition-colors">LEISTUNGEN</a></div>
            <div><a href="#werbeartikel" className="hover:text-[#0077E6] transition-colors">WERBEARTIKEL</a></div>
            <div><a href="#uber-uns" className="hover:text-[#0077E6] transition-colors">ÜBER UNS</a></div>
            <div><a href="#projekte" className="hover:text-[#0077E6] transition-colors">PROJEKTE</a></div>
            <div><a href="#kontakt" className="hover:text-[#0077E6] transition-colors">KONTAKT</a></div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-[#8E95A2]">
            <div className="text-white font-bold tracking-widest uppercase mb-4 text-xs">RECHTLICHES</div>
            <div><a href="#kontakt" className="hover:text-[#0077E6] transition-colors">IMPRESSUM</a></div>
            <div><a href="#kontakt" className="hover:text-[#0077E6] transition-colors">DATENSCHUTZ</a></div>
            <div><a href="#kontakt" className="hover:text-[#0077E6] transition-colors">AGB</a></div>

            <div className="pt-6">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center space-x-2 text-[#0077E6] hover:text-white font-bold tracking-wider uppercase"
              >
                <span>TERMIN VEREINBAREN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-4 text-[#8E95A2]/60 text-[11px]">
              © 1993–2026 C-CONCEPTS VERTRIEBS GMBH
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
