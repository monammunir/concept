import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const marqueeItems = [
    'WERBEARTIKEL',
    'GIVE-AWAYS',
    'PROMOTION',
    'FULL-SERVICE',
    'MADE IN GERMANY',
    'WERBEARTIKEL',
    'GIVE-AWAYS',
    'PROMOTION',
    'FULL-SERVICE',
    'MADE IN GERMANY',
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 sm:pt-40 pb-16 flex flex-col justify-between bg-[#0A0B0D] overflow-hidden">
      
      {/* 1. Full-Bleed Cinematic Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/perfect-match.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-[0.8] contrast-105"
        >
          <source src="/assets/cconcepts-hero.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-industrial-laser-engraving-4648/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-laser-cutting-metal-in-a-factory-41562-large.mp4" type="video/mp4" />
        </video>

        {/* Subtle Dark Gradient Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/95 via-[#0A0B0D]/80 to-[#0A0B0D]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-[#0A0B0D]/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#005496_0%,transparent_50%)] opacity-25 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto z-20 relative pt-6">
        <div className="max-w-3xl space-y-8">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#005496]/25 border border-[#005496]/45 text-[#0077E6] text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0077E6]" />
            <span>WERBEARTIKEL MIT FULL-SERVICE</span>
          </motion.div>

          {/* Main Title: Animated Line-by-Line */}
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              STARKE WERBUNG
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6E9EE] to-[#8E95A2]"
            >
              FÜR IHR UNTERNEHMEN
            </motion.div>
          </motion.h1>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#E6E9EE]/90 font-light leading-relaxed max-w-2xl"
          >
            Wir sind Ihr zuverlässiger Partner für Werbeartikel, Gimmicks, Give-Aways und Erlebnis-Promotion – von der Idee bis zum Point of Sale.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={onOpenContactModal}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg shadow-[#005496]/30 hover:shadow-2xl hover:shadow-[#005496]/60 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              <span>TERMIN VEREINBAREN</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#leistungen"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-widest uppercase rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>FULL-SERVICE ENTDECKEN</span>
              <ChevronRight className="w-4 h-4 text-[#8E95A2] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Bar: Stat Strip + Marquee Ticker */}
      <div className="z-20 relative pt-10">
        {/* Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-6"
        >
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#8E95A2]">
            <div className="space-y-1">
              <span className="block text-white font-bold text-sm tracking-wider uppercase">SEIT 1993</span>
              <span className="text-[#8E95A2] font-light">Made in Germany</span>
            </div>
            <div className="space-y-1 sm:border-l sm:border-white/15 sm:pl-8">
              <span className="block text-white font-bold text-sm tracking-wider uppercase">FULL-SERVICE</span>
              <span className="text-[#8E95A2] font-light">Von der Idee bis POS</span>
            </div>
            <div className="space-y-1 sm:border-l sm:border-white/15 sm:pl-8">
              <span className="block text-white font-bold text-sm tracking-wider uppercase">SEDEX PARTNER</span>
              <span className="text-[#8E95A2] font-light">Ethische Standards</span>
            </div>
          </div>
        </motion.div>

        {/* Continuous Horizontal Marquee Ticker */}
        <div className="w-full bg-[#0A0B0D]/80 backdrop-blur-md border-y border-white/10 py-3 overflow-hidden select-none">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
            className="flex items-center space-x-8 whitespace-nowrap w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <span className="text-xs font-semibold text-[#8E95A2] uppercase tracking-widest hover:text-[#0077E6] transition-colors">
                  {item}
                </span>
                <span className="text-[#0077E6] text-xs font-bold">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};
