import React from 'react';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="uber-uns" className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
            ÜBER C-CONCEPTS
          </span>
          <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.92]">
            INNOVATIVE MARKETING CONCEPTS <br />
            <span className="text-[#8E95A2]">– MADE IN GERMANY</span>
          </h2>
        </div>

        {/* Story & Facility Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121418] relative group">
            <img
              src="/images/barrel-prod.jpg"
              alt="C-Concepts Fertigung & Konfektionierung Simmern"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 rounded-xl text-xs">
              <span className="text-[#0077E6] uppercase font-bold block">STANDORT SIMMERN (WESTERWALD)</span>
              <span className="text-[#8E95A2]">Eigene Produktion, Konfektionierung & Hochregallagerung</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="text-lg text-white font-light leading-relaxed">
              Die Firma <strong className="font-semibold text-white">C-Concepts Vertriebs GmbH</strong> mit Sitz in Simmern wurde im Jahr 1993 von Andreas Sauer und Ralf Weisbrod gegründet.
            </p>
            <p className="text-base text-[#8E95A2] font-light leading-relaxed">
              Wir haben es uns als Aufgabe gesetzt, individuelle und ganzheitliche Werbeartikel-Lösungen zu entwickeln. Hierzu zählen neben der Beschaffung auch die Konfektionierung Ihrer Ware. Das bedeutet, wir verpacken oder etikettieren Ihre Ware neu und füllen diese nach Gewicht oder Stückzahl — auch von Ihren bestehenden Waren.
            </p>
            <p className="text-base text-[#8E95A2] font-light leading-relaxed">
              Durch Innovation und qualitativ hochwertige Arbeit ist es uns gelungen, unser Geschäftsmodell stetig weiter zu entwickeln. So haben wir in großen, international agierenden Unternehmen als kompetente und zuverlässige Partner Anerkennung gewonnen.
            </p>

            {/* Verified Facts Grid */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <div className="flex items-center space-x-2 text-[#0077E6]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">GEGRÜNDET</span>
                </div>
                <div className="text-white font-bold text-sm">1993</div>
              </div>

              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <div className="flex items-center space-x-2 text-[#0077E6]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">STANDORT</span>
                </div>
                <div className="text-white font-bold text-sm">Simmern (Westerwald)</div>
              </div>

              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <div className="flex items-center space-x-2 text-[#0077E6]">
                  <Users className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">GRÜNDER</span>
                </div>
                <div className="text-white font-bold text-xs">A. Sauer & R. Weisbrod</div>
              </div>

              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <div className="flex items-center space-x-2 text-[#0077E6]">
                  <Award className="w-3.5 h-3.5" />
                  <span className="font-bold uppercase">QUALITÄT</span>
                </div>
                <div className="text-white font-bold text-xs">Made in Germany</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
