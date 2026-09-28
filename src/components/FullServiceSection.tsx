import React from 'react';
import { Lightbulb, Truck, PackageCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/projectsData';

interface FullServiceSectionProps {
  onOpenContactModal?: () => void;
}

export const FullServiceSection: React.FC<FullServiceSectionProps> = ({ onOpenContactModal }) => {
  const serviceIcons = [Lightbulb, Truck, PackageCheck, ShieldCheck];

  return (
    <section id="leistungen" className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
            UNSERE KERNKOMPETENZEN
          </span>
          <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            FULL-SERVICE: <br />
            <span className="text-[#8E95A2]">WERBEARTIKEL AUS SIMMERN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A2] font-light leading-relaxed max-w-3xl pt-2">
            Wir bieten individuelle und ganzheitliche Werbeartikel-Lösungen für Ihr Unternehmen. Neben der Beschaffung zählt dazu auch die Konfektionierung Ihrer Ware. Das bedeutet, wir verpacken oder etikettieren Ihre Ware neu und füllen diese nach Gewicht oder Stückzahl — auch von Ihren bestehenden Waren.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="group relative bg-[#111318]/70 border border-white/10 hover:border-[#005496]/60 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#005496]/15 flex flex-col justify-between overflow-hidden"
              >
                {/* Image showcase container */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-[#0A0B0D]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0B0D]/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#0077E6] uppercase tracking-wider rounded-full">
                    SERVICE {service.id}
                  </div>
                  
                  <div className="absolute top-4 right-4 p-2.5 bg-[#005496]/80 backdrop-blur-md border border-[#005496]/40 rounded-xl text-white shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-extrabold text-2xl text-white tracking-tight uppercase group-hover:text-[#0077E6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#8E95A2] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#8E95A2] group-hover:text-white transition-colors">
                  <button
                    onClick={onOpenContactModal}
                    className="inline-flex items-center space-x-2 text-[#0077E6] group-hover:text-white font-bold tracking-widest uppercase cursor-pointer"
                  >
                    <span>MEHR ERFAHREN</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
