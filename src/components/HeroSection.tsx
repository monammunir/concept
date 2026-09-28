import React from 'react';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen pt-36 sm:pt-44 pb-20 flex flex-col justify-center bg-[#0A0B0D] overflow-hidden">
      
      {/* 1. Full-Bleed Background Video Hero */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/perfect-match.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-105"
        >
          <source src="/assets/cconcepts-hero.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-industrial-laser-engraving-4648/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-laser-cutting-metal-in-a-factory-41562-large.mp4" type="video/mp4" />
        </video>

        {/* Subtle Dark Overlay / Gradients for High Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/95 via-[#0A0B0D]/80 to-[#0A0B0D]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-[#0A0B0D]/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#005496_0%,transparent_50%)] opacity-20 z-10 pointer-events-none" />
      </div>

      {/* Hero Typography & Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto z-20 relative">
        <div className="max-w-3xl space-y-8">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#005496]/20 border border-[#005496]/40 text-[#0077E6] text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WERBEARTIKEL MIT FULL-SERVICE</span>
          </div>

          {/* Main Title */}
          <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase">
            STARKE WERBUNG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6E9EE] to-[#8E95A2]">
              FÜR IHR UNTERNEHMEN
            </span>
          </h1>

          {/* Body */}
          <p className="text-lg sm:text-xl text-[#E6E9EE]/90 font-light leading-relaxed max-w-2xl">
            Wir sind Ihr zuverlässiger Partner für Werbeartikel, Gimmicks, Give-Aways und Erlebnis-Promotion – von der Idee bis zum Point of Sale.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-xl shadow-[#005496]/30 hover:shadow-[#005496]/50 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>TERMIN VEREINBAREN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#leistungen"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-widest uppercase rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <span>FULL-SERVICE ENTDECKEN</span>
              <ChevronRight className="w-4 h-4 text-[#8E95A2]" />
            </a>
          </div>

          {/* Small Stat / Feature Row (Requirement 10) */}
          <div className="pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-xs text-[#8E95A2]">
            <div className="space-y-1">
              <span className="block text-white font-bold text-sm tracking-wider uppercase">SEIT 1993</span>
              <span className="text-[#8E95A2] font-light">Made in Germany</span>
            </div>
            <div className="space-y-1 sm:border-l sm:border-white/15 sm:pl-8">
              <span className="block text-white font-bold text-sm tracking-wider uppercase">FULL-SERVICE</span>
              <span className="text-[#8E95A2] font-light">Von der Idee bis zum POS</span>
            </div>
            <div className="space-y-1 sm:border-l sm:border-white/15 sm:pl-8">
              <span className="block text-white font-bold text-sm tracking-wider uppercase">SEDEX PARTNER</span>
              <span className="text-[#8E95A2] font-light">Ethische Standards</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
