import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen pt-32 sm:pt-40 pb-16 flex flex-col justify-between bg-[#F7F8FA] overflow-hidden"
    >
      
      {/* 1. Full-Bleed Embedded Authentic C-Concepts Video Background */}
      <motion.div 
        style={{ y: videoY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-[115%] -top-[5%] overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1&disablekb=1&modestbranding=1"
            title="Authentic C-Concepts Promotional Video"
            className="w-[160%] h-[160%] -translate-x-[18%] -translate-y-[18%] object-cover border-0 filter brightness-[0.92] contrast-105 pointer-events-none"
            allow="autoplay; encrypted-media"
          />
        </div>

        {/* Asymmetric Gradient Overlay: Dark left side for crisp typography, fading to Light #F7F8FA at bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F8FA] via-[#F7F8FA]/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#005496_0%,transparent_50%)] opacity-25 z-10 pointer-events-none" />
      </motion.div>

      {/* 2. Hero Content Area with Slow Cinematic Reveal Animations */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto z-20 relative pt-8"
      >
        <div className="max-w-3xl space-y-7">
          
          {/* Eyebrow Label: Delay 200ms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#005496]/20 border border-[#005496]/40 text-[#38BDF8] text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>WERBEARTIKEL MIT FULL-SERVICE</span>
          </motion.div>

          {/* Main Headline: Delay 400ms */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.04] uppercase"
          >
            STARKE WERBUNG <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8]">
              FÜR IHR UNTERNEHMEN
            </span>
          </motion.h1>

          {/* Description Paragraph: Delay 650ms */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#F1F5F9] font-light leading-relaxed max-w-2xl"
          >
            Wir sind Ihr zuverlässiger Partner für Werbeartikel, Give-Aways, Erlebnis-Promotion und deren Konfektionierung.
          </motion.p>

          {/* CTA Buttons: Delay 850ms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={onOpenContactModal}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#005496] hover:bg-[#003B6D] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-700 shadow-xl shadow-[#005496]/25 hover:shadow-2xl hover:shadow-[#005496]/40 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              <span>TERMIN VEREINBAREN</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1.5" />
            </button>

            <a
              href="#leistungen"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 text-white text-xs font-bold tracking-widest uppercase rounded-xl backdrop-blur-md transition-all duration-700 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>FULL-SERVICE ENTDECKEN</span>
              <ChevronRight className="w-4 h-4 text-white/80 transition-transform duration-700 group-hover:translate-x-1.5" />
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* 3. Bottom Hero Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.05 }}
        className="z-20 relative text-center pb-2"
      >
        <a 
          href="#intro" 
          className="inline-flex flex-col items-center text-slate-500 hover:text-[#005496] transition-colors group text-xs uppercase tracking-widest font-semibold"
        >
          <span className="text-[11px] mb-1">SCROLLEN</span>
          <ChevronDown className="w-4 h-4 text-[#005496] animate-bounce" />
        </a>
      </motion.div>

    </section>
  );
};
