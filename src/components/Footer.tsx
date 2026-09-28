import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  return (
    <footer id="contact" className="bg-[#0A0B0D] text-white border-t border-white/10 font-sans">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 justify-between">
          
          <div className="md:col-span-6 space-y-4">
            <span className="font-sans font-extrabold text-2xl tracking-widest text-white block">
              C-CONCEPTS
            </span>
            <p className="text-sm font-sans font-light text-[#8E95A2] max-w-sm leading-relaxed">
              C-Concepts Vertriebs GmbH<br />
              Simmern (Westerwald), Germany<br />
              info@cconcepts.eu
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs text-[#8E95A2]">
            <div className="text-white font-bold tracking-widest uppercase mb-4">NAVIGATION</div>
            <div><a href="#selected-work" className="hover:text-white transition-colors">WORK</a></div>
            <div><a href="#services" className="hover:text-white transition-colors">SERVICES</a></div>
            <div><a href="#about" className="hover:text-white transition-colors">ABOUT</a></div>
            <div><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></div>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs text-[#8E95A2]">
            <div className="text-white font-bold tracking-widest uppercase mb-4">LEGAL</div>
            <div><a href="#" className="hover:text-white transition-colors">IMPRESSUM</a></div>
            <div><a href="#" className="hover:text-white transition-colors">DATENSCHUTZ</a></div>
            <div className="pt-4 text-[#8E95A2]">© 1993–2026 C-CONCEPTS GMBH</div>
          </div>

        </div>
      </div>

    </footer>
  );
};
