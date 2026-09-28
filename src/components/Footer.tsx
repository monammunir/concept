import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Cpu } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  return (
    <footer id="contact" className="relative bg-[#0A0B0D] text-white border-t border-white/10 overflow-hidden font-sans">
      
      {/* Top Technical Direct Inquiry Bar */}
      <div className="border-b border-white/10 bg-[#121418]/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest block">
                LET'S BUILD TOGETHER
              </span>
              <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                READY TO START YOUR CUSTOM PRODUCTION?
              </h3>
              <p className="text-sm font-sans font-light text-[#8E95A2]">
                Direct technical consultation with our engineering team in Simmern (Westerwald).
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-8 py-4 bg-[#FF4500] hover:bg-[#E63900] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all shadow-[0_0_25px_rgba(255,69,0,0.4)] flex items-center justify-center space-x-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Location Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xs bg-[#FF4500]/20 border border-[#FF4500] flex items-center justify-center text-[#FF4500] font-mono font-bold">
                C
              </div>
              <span className="font-sans font-bold text-xl tracking-widest text-white">
                C-CONCEPTS
              </span>
            </div>

            <p className="text-sm font-sans font-light text-[#8E95A2] leading-relaxed max-w-md">
              C-Concepts Vertriebs GmbH is a specialized creative engineering and full-service production house. Transforming ideas into custom promotional items, event rigs, custom vehicles, and brand experiences.
            </p>

            <div className="space-y-3 font-mono text-xs text-[#E6E9EE]">
              <div className="flex items-start space-x-3 text-[#8E95A2]">
                <MapPin className="w-4 h-4 text-[#FF4500] flex-shrink-0 mt-0.5" />
                <span>C-Concepts Vertriebs GmbH<br />Simmern (Westerwald), Germany</span>
              </div>
              <div className="flex items-center space-x-3 text-[#8E95A2]">
                <Mail className="w-4 h-4 text-[#FF4500] flex-shrink-0" />
                <span>info@cconcepts.eu</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <div className="text-[#FF4500] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-[#8E95A2]">
              <li><a href="#selected-work" className="hover:text-white transition-colors">SELECTED WORK</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">FULL SERVICE</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">ENGINEERING WORKFLOW</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">ABOUT C-CONCEPTS</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">TRUSTED CLIENTS</a></li>
            </ul>
          </div>

          {/* Production Scope & Legal */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="text-[#FF4500] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
              IN-HOUSE CAPABILITIES
            </div>
            <p className="text-[#8E95A2] leading-relaxed font-sans font-light text-xs">
              SolidWorks 3D CAD / 5-Axis CNC Milling / Laser Cutting / TIG Welding / Fiberglass Moldings / LED Telemetry / Flight Case Packaging / 5,000m² Warehousing / EU Logistics.
            </p>
            <div className="pt-2 text-[11px] text-[#8E95A2] space-x-4">
              <a href="#" className="hover:text-white transition-colors">IMPRESSUM</a>
              <span>/</span>
              <a href="#" className="hover:text-white transition-colors">DATENSCHUTZ</a>
              <span>/</span>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Technical Status Line */}
      <div className="border-t border-white/10 bg-[#0A0B0D] py-6 font-mono text-xs text-[#8E95A2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            © 1993–2026 C-CONCEPTS VERTRIEBS GMBH. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white">SYS_ONLINE // 60 FPS</span>
            </span>
            <span className="text-white/20">|</span>
            <span>MADE IN GERMANY</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
