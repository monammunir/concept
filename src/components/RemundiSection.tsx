import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Play, ArrowRight, Sparkles, Check } from 'lucide-react';

interface RemundiSectionProps {
  onOpenContactModal: () => void;
}

export const RemundiSection: React.FC<RemundiSectionProps> = ({ onOpenContactModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-28 sm:py-36 bg-[#005496] text-white border-t border-[#00467d] relative overflow-hidden shadow-lg">
      
      {/* Subtle ambient light glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Top Feature Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>CUSTOM CONSTRUCTION</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-100 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <span>PROMOTION • PRODUCT EXPERIENCE</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Headline */}
            <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.92]">
              DAS REMUNDI <br />
              <span className="text-slate-100">
                GRILL-ERLEBNIS
              </span>
            </h2>

            {/* Copy */}
            <div className="space-y-4 text-base sm:text-lg text-slate-100 font-light leading-relaxed">
              <p>
                Vorbei sind die Zeiten, in denen der Grillmeister im Abseits sein Dasein fristete. Ab jetzt gibt es das gemeinsame Grill- und Genuss-Erlebnis.
              </p>
              <p className="text-slate-200 text-base">
                Remundi ist ein komplettes Konzept für Events aller Art. Ob Familien-Grillen oder Riesen-Party – hier haben alle zusammen Spaß. Remundi, der Profi Grill für Restaurants, Hotels & anspruchsvolle Griller.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-100">
                <div className="p-1 bg-white/20 border border-white/30 rounded-full text-white">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Wetterfester Cortenstahl mit Edelstahl-Laser-Branding</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-100">
                <div className="p-1 bg-white/20 border border-white/30 rounded-full text-white">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>10mm Hitzespeicher-Carbonstahlplatte für perfekte Grillergebnisse</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-100">
                <div className="p-1 bg-white/20 border border-white/30 rounded-full text-white">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Ideal für Events, Hotel-Terrassen und Marken-Promotions</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenContactModal}
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white hover:bg-slate-100 text-[#005496] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-500 shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <span>PROJEKT ENTDECKEN</span>
                <ArrowRight className="w-4 h-4 text-[#005496] group-hover:translate-x-1.5 transition-transform duration-500" />
              </button>
            </div>

          </motion.div>

          {/* Right Column: Prominent Immersive Video Case Study Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl group">
              
              {!isPlaying ? (
                <>
                  <img
                    src="/images/remundi-grill.jpg"
                    alt="Remundi Grill-Erlebnis C-Concepts"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Play Video Trigger */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center space-y-3 group/play cursor-pointer"
                    aria-label="Remundi Video abspielen"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-[#005496] border border-white/60 flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-slate-100 transition-all duration-500 shadow-2xl">
                      <Play className="w-6 h-6 fill-[#005496] translate-x-0.5" />
                    </div>
                    <span className="text-xs text-white uppercase tracking-widest font-bold bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                      VIDEO ANSEHEN
                    </span>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl flex items-center justify-between text-xs text-slate-600 shadow-md">
                    <span className="flex items-center space-x-2 text-slate-900 font-medium">
                      <Flame className="w-4 h-4 text-[#005496]" />
                      <span>REMUNDI FIRE GRILL</span>
                    </span>
                    <span className="font-light text-slate-500">C-CONCEPTS FABRICATION</span>
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
