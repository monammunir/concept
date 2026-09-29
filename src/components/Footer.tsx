import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      
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
            
            <div className="space-y-2 text-sm text-slate-400 font-light leading-relaxed">
              <div className="font-bold text-white uppercase text-xs tracking-wider">C-CONCEPTS VERTRIEBS GMBH</div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#005496] shrink-0" />
                <span>Im Maerenthal 6a, 56337 Simmern / Germany</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#005496] shrink-0" />
                <a href="tel:026309637924" className="hover:text-white transition-colors">+49 (0) 2630 96379-24</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#005496] shrink-0" />
                <a href="mailto:info@cconcepts.de" className="hover:text-white transition-colors">info@cconcepts.de</a>
              </div>
            </div>

            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Innovative Marketing Concepts – Made in Germany
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
            <div className="text-white font-bold tracking-widest uppercase mb-4 text-xs">NAVIGATION</div>
            <div><a href="#home" className="hover:text-white transition-colors">HOME</a></div>
            <div><a href="#leistungen" className="hover:text-white transition-colors">LEISTUNGEN</a></div>
            <div><a href="#werbeartikel" className="hover:text-white transition-colors">WERBEARTIKEL</a></div>
            <div><a href="#uber-uns" className="hover:text-white transition-colors">ÜBER UNS</a></div>
            <div><a href="#projekte" className="hover:text-white transition-colors">PROJEKTE</a></div>
            <div><a href="#kontakt" className="hover:text-white transition-colors">KONTAKT</a></div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
            <div className="text-white font-bold tracking-widest uppercase mb-4 text-xs">RECHTLICHES</div>
            <div><a href="#kontakt" className="hover:text-white transition-colors">IMPRESSUM</a></div>
            <div><a href="#kontakt" className="hover:text-white transition-colors">DATENSCHUTZ</a></div>
            <div><a href="#kontakt" className="hover:text-white transition-colors">AGB</a></div>

            <div className="pt-6">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center space-x-2 text-[#38BDF8] hover:text-white font-bold tracking-wider uppercase cursor-pointer"
              >
                <span>TERMIN VEREINBAREN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-4 text-slate-500 text-[11px] tracking-wider">
              © 1993–2026 C-CONCEPTS VERTRIEBS GMBH
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
