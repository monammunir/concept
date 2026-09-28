import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#005496]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2 text-xs text-[#0077E6] tracking-widest uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INNOVATIVE MARKETING CONCEPTS</span>
            </div>

            {/* Headline */}
            <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              GIVEAWAYS, GIMMICKS, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077E6] via-white to-[#8E95A2]">
                PROMOTION FÜR EVENTS
              </span>
            </h2>

            {/* Main Body */}
            <p className="text-lg sm:text-xl text-[#E6E9EE] font-light leading-relaxed">
              Sie haben eine Idee für eine spannende Werbemaßnahme? Dann sind Sie bei uns in den richtigen Händen. 
              <strong className="font-semibold text-white"> C-Concepts ist Ihr Partner vom Anfang bis zum Ende. </strong>
              Egal ob Entwurf, Design oder Produktion, wir organisieren die Produktion und Organisation Ihrer Werbeartikel mit individuellem Branding – von der Idee bis zu Ihren Kunden an den Point of Sale.
            </p>

            {/* Additional Text */}
            <p className="text-base text-[#8E95A2] font-light leading-relaxed pt-2 border-t border-white/10">
              Dank unserer langjährigen Erfahrung und umfassenden Organisationsstruktur sind wir in der Lage, auch Projekte flexibel, verlässlich und zeitnah umzusetzen.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#E6E9EE] pt-4 font-medium">
              <div className="flex items-center space-x-3 p-3.5 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#0077E6] shrink-0" />
                <span>Individuelles Firmen-Branding</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#0077E6] shrink-0" />
                <span>Eigene Fertigung & Verpackung</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121418] shadow-2xl group">
              <img
                src="/images/perfect-match.jpg"
                alt="C-Concepts Produktion & Werbeartikel Konfektionierung"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="text-xs text-[#0077E6] uppercase tracking-widest font-semibold">MADE IN GERMANY</div>
                <div className="font-bold text-sm text-white">Full-Service Werbeartikel aus Simmern</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
