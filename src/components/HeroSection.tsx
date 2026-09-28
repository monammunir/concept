import React from 'react';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import { Industrial3DCanvas } from './Industrial3DCanvas';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-center bg-[#0A0B0D] overflow-hidden">
      
      {/* Background ambient light grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#005496_0%,transparent_45%)] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#005496]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headlines & Copy */}
          <div className="lg:col-span-7 space-y-8 z-10">
            
            {/* Small Brand Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#005496]/10 border border-[#005496]/30 text-[#0077E6] font-mono text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WERBEARTIKEL MIT FULL-SERVICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase">
              STARKE WERBUNG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6E9EE] to-[#8E95A2]">
                FÜR IHR UNTERNEHMEN
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-[#8E95A2] font-sans font-light leading-relaxed max-w-2xl">
              Wir sind Ihr zuverlässiger Partner für Werbeartikel, Gimmicks, Give-Aways, Erlebnis-Promotion – und deren Konfektionierung. Wir entwickeln innovative Produkte, organisieren Verpackung und übernehmen die Logistik bis zu Ihren Kunden an den Point of Sale.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#005496] hover:bg-[#0066C2] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300 shadow-xl shadow-[#005496]/25 hover:shadow-[#005496]/40 hover:-translate-y-0.5"
              >
                <span>TERMIN VEREINBAREN</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#leistungen"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300"
              >
                <span>FULL-SERVICE ENTDECKEN</span>
                <ChevronRight className="w-4 h-4 text-[#8E95A2]" />
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 font-mono text-xs text-[#8E95A2]">
              <div>
                <span className="block text-white font-bold text-sm">SEIT 1993</span>
                <span>Made in Germany</span>
              </div>
              <div>
                <span className="block text-white font-bold text-sm">FULL-SERVICE</span>
                <span>Von der Idee bis POS</span>
              </div>
              <div>
                <span className="block text-white font-bold text-sm">SEDEX PARTNER</span>
                <span>Ethische Standards</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[540px] w-full flex items-center justify-center">
            
            {/* Visual background glow */}
            <div className="absolute inset-0 bg-[#005496]/20 rounded-2xl blur-3xl" />
            
            {/* 3D Industrial Canvas & Authentic Hero Image Treatment */}
            <div className="relative w-full h-full rounded-xs border border-white/10 bg-[#0D0F14]/90 p-4 shadow-2xl flex flex-col justify-between overflow-hidden group">
              <Industrial3DCanvas />
              
              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0B0D]/90 backdrop-blur-md border border-white/10 rounded-xs flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-[#0077E6] uppercase tracking-widest">REALES PROJEKT BEISPIEL</div>
                  <div className="font-sans font-extrabold text-sm text-white uppercase">PUNICA PROMOTION SCOOTER</div>
                </div>
                <a 
                  href="#projekte"
                  className="p-2 bg-[#005496] text-white rounded-xs hover:bg-[#0066C2] transition-colors"
                  aria-label="Projekt ansehen"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
