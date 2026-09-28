import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Smooth Parallax Scroll Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoError(true);
        });
      }
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-center bg-[#0A0B0D] overflow-hidden"
    >
      
      {/* 1. Full-Bleed Cinematic Background Video */}
      <motion.div 
        style={{ y: videoY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-[115%] -top-[5%] overflow-hidden z-0 pointer-events-none"
      >
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover filter brightness-[0.9] contrast-105"
          >
            <source src="/assets/cconcepts-hero.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-laser-cutting-metal-in-a-factory-41562-large.mp4" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-industrial-laser-engraving-4648/1080p.mp4" type="video/mp4" />
          </video>
        ) : null}

        {/* Video Embed Background (Fallback when direct HTML5 mp4 CORS fails) */}
        {videoError && (
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1&disablekb=1&modestbranding=1"
              title="C-Concepts Promotional Video Background"
              className="w-[160%] h-[160%] -translate-x-[18%] -translate-y-[18%] object-cover border-0 filter brightness-[0.88] contrast-105 pointer-events-none"
              allow="autoplay; encrypted-media"
            />
          </div>
        )}

        {/* Asymmetric Gradient Overlay: Left side darker for text contrast, Right side visible for video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/95 via-[#0A0B0D]/70 to-[#0A0B0D]/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-[#0A0B0D]/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#005496_0%,transparent_50%)] opacity-20 z-10 pointer-events-none" />
      </motion.div>

      {/* Hero Content & Sequential Animations */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto z-20 relative"
      >
        <div className="max-w-3xl space-y-7">
          
          {/* Step 2: Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#005496]/20 border border-[#005496]/40 text-[#0077E6] text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0077E6]" />
            <span>WERBEARTIKEL MIT FULL-SERVICE</span>
          </motion.div>

          {/* Step 3: Main Headline (Slightly reduced size, natural 2-line composition) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.04] uppercase"
          >
            STARKE WERBUNG <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6E9EE] to-[#8E95A2]">
              FÜR IHR UNTERNEHMEN
            </span>
          </motion.h1>

          {/* Step 4: Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#E6E9EE]/90 font-light leading-relaxed max-w-2xl"
          >
            Wir sind Ihr zuverlässiger Partner für Werbeartikel, Gimmicks, Give-Aways und Erlebnis-Promotion – von der Idee bis zum Point of Sale.
          </motion.p>

          {/* Step 5: CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
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
      </motion.div>

    </section>
  );
};
