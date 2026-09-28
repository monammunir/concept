import React from 'react';
import { CLIENT_LOGOS, TESTIMONIALS } from '../data/projectsData';
import { Quote } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0B0D] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
            REFERENZEN
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
            KUNDEN & PARTNER
          </h2>
          <p className="text-base text-[#8E95A2] font-light leading-relaxed">
            Wir sind sehr stolz auf unsere namhaften Kunden, die uns über Jahre hinweg ihr Vertrauen geschenkt haben.
          </p>
        </div>

        {/* Client Logo Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center py-8 border-y border-white/10 mb-16">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center h-20 hover:border-[#005496]/60 transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain filter grayscale contrast-120 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="p-8 bg-[#111318]/70 border border-white/10 rounded-2xl space-y-6 relative hover:border-[#005496]/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#0077E6]/40" />
              <p className="text-lg text-[#E6E9EE] font-light italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <img
                  src={t.logo}
                  alt={t.author}
                  className="w-10 h-10 object-contain rounded-full bg-white/10 p-1"
                />
                <div>
                  <div className="font-bold text-white uppercase text-sm">{t.author}</div>
                  <div className="text-xs text-[#8E95A2]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
