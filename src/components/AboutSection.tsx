import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="uber-uns" className="py-28 sm:py-36 bg-white text-[#0F172A] border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20 space-y-4"
        >
          <span className="text-xs text-[#005496] tracking-widest uppercase font-semibold block">
            ÜBER C-CONCEPTS // TRADITION & INNOVATION
          </span>
          <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#0F172A] tracking-tight uppercase leading-[0.92]">
            INNOVATIVE MARKETING CONCEPTS <br />
            <span className="text-slate-500">– MADE IN GERMANY</span>
          </h2>
        </motion.div>

        {/* Story & Facility Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200/80 bg-[#F7F8FA] shadow-md relative group"
          >
            <img
              src="/images/barrel-prod.jpg"
              alt="C-Concepts Fertigung & Konfektionierung Simmern"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl text-xs shadow-md">
              <span className="text-[#005496] uppercase font-bold block">STANDORT SIMMERN (WESTERWALD)</span>
              <span className="text-slate-600">Eigene Produktion, Konfektionierung & Hochregallagerung</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xl sm:text-2xl text-[#0F172A] font-light leading-relaxed">
              Die Firma <strong className="font-extrabold text-[#0F172A]">C-Concepts Vertriebs GmbH</strong> mit Sitz in Simmern wurde im Jahr 1993 von Andreas Sauer und Ralf Weisbrod gegründet.
            </p>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Wir haben es uns als Aufgabe gesetzt, individuelle und ganzheitliche Werbeartikel-Lösungen zu entwickeln. Hierzu zählen neben der Beschaffung auch die Konfektionierung Ihrer Ware. Das bedeutet, wir verpacken oder etikettieren Ihre Ware neu und füllen diese nach Gewicht oder Stückzahl — auch von Ihren bestehenden Waren.
            </p>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Durch Innovation und qualitativ hochwertige Arbeit ist es uns gelungen, unser Geschäftsmodell stetig weiter zu entwickeln. So haben wir in großen, international agierenden Unternehmen als kompetente und zuverlässige Partner Anerkennung gewonnen.
            </p>

            {/* Authentic Verified Facts Grid */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-[#F7F8FA] border border-slate-200/80 rounded-xl space-y-1 shadow-xs">
                <div className="flex items-center space-x-2 text-[#005496]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">GEGRÜNDET</span>
                </div>
                <div className="text-[#0F172A] font-bold text-sm">1993</div>
              </div>

              <div className="p-3.5 bg-[#F7F8FA] border border-slate-200/80 rounded-xl space-y-1 shadow-xs">
                <div className="flex items-center space-x-2 text-[#005496]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">STANDORT</span>
                </div>
                <div className="text-[#0F172A] font-bold text-sm">Simmern (Westerwald)</div>
              </div>

              <div className="p-3.5 bg-[#F7F8FA] border border-slate-200/80 rounded-xl space-y-1 shadow-xs">
                <div className="flex items-center space-x-2 text-[#005496]">
                  <Users className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">GRÜNDER</span>
                </div>
                <div className="text-[#0F172A] font-bold text-xs">A. Sauer & R. Weisbrod</div>
              </div>

              <div className="p-3.5 bg-[#F7F8FA] border border-slate-200/80 rounded-xl space-y-1 shadow-xs">
                <div className="flex items-center space-x-2 text-[#005496]">
                  <Award className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">QUALITÄT</span>
                </div>
                <div className="text-[#0F172A] font-bold text-xs">Made in Germany</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
