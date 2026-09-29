import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Play, ArrowRight, Sparkles, Check } from 'lucide-react';

interface RemundiSectionProps {
  onOpenContactModal: () => void;
}

export const RemundiSection: React.FC<RemundiSectionProps> = ({ onOpenContactModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-28 sm:py-36 bg-[#080A0E] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Ambient lighting background */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#005496]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Top Feature Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#005496]/20 border border-[#005496]/40 text-[#0077E6] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOM CONSTRUCTION</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#8E95A2] text-xs font-semibold tracking-widest uppercase">
            <span>PROMOTION • PRODUCT EXPERIENCE</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Headline */}
            <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.92]">
              DAS REMUNDI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6E9EE] to-[#0077E6]">
                GRILL-ERLEBNIS
              </span>
            </h2>

            {/* Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#E6E9EE] font-light leading-relaxed">
              <p>
                Vorbei sind die Zeiten, in denen der Grillmeister im Abseits sein Dasein fristete. Ab jetzt gibt es das gemeinsame Grill- und Genuss-Erlebnis.
              </p>
              <p className="text-[#8E95A2] text-base">
                Remundi ist ein komplettes Konzept für Events aller Art. Ob Familien-Grillen oder Riesen-Party – hier haben alle zusammen Spaß. Remundi, der Profi Grill für Restaurants, Hotels & anspruchsvolle Griller.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-[#E6E9EE]">
                <div className="p-1 bg-[#005496]/20 border border-[#005496]/40 rounded-full text-[#0077E6]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Wetterfester Cortenstahl mit Edelstahl-Laser-Branding</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#E6E9EE]">
                <div className="p-1 bg-[#005496]/20 border border-[#005496]/40 rounded-full text-[#0077E6]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>10mm Hitzespeicher-Carbonstahlplatte für perfekte Grillergebnisse</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#E6E9EE]">
                <div className="p-1 bg-[#005496]/20 border border-[#005496]/40 rounded-full text-[#0077E6]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Ideal für Events, Hotel-Terrassen und Marken-Promotions</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenContactModal}
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-xl shadow-[#005496]/20 hover:shadow-2xl hover:shadow-[#005496]/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>PROJEKT ENTDECKEN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </motion.div>

          {/* Right Column: Prominent Immersive Video Case Study Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0D0F14] shadow-2xl group">
              
              {!isPlaying ? (
                <>
                  <img
                    src="/images/remundi-grill.jpg"
                    alt="Remundi Grill-Erlebnis C-Concepts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-black/20 to-transparent" />
                  
                  {/* Play Video Trigger */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center space-y-3 group/play cursor-pointer"
                    aria-label="Remundi Video abspielen"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#005496]/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover/play:scale-110 group-hover/play:bg-[#0066C2] transition-all duration-300 shadow-2xl">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                    <span className="text-xs text-white uppercase tracking-widest font-bold bg-[#0A0B0D]/80 px-4 py-1.5 rounded-full border border-white/10">
                      VIDEO ANSEHEN
                    </span>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between text-xs text-[#8E95A2]">
                    <span className="flex items-center space-x-2 text-white font-medium">
                      <Flame className="w-4 h-4 text-[#0077E6]" />
                      <span>REMUNDI FIRE GRILL</span>
                    </span>
                    <span className="font-light">C-CONCEPTS FABRICATION</span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full relative bg-black">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Remundi Grill Presentation"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 px-3 py-1 bg-black/80 text-white text-xs rounded-lg border border-white/20 hover:bg-[#005496] cursor-pointer"
                  >
                    SCHLIESSEN ✕
                  </button>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
