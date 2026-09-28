import React from 'react';
import { Lightbulb, Truck, PackageCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/projectsData';

interface FullServiceSectionProps {
  onOpenContactModal?: () => void;
}

export const FullServiceSection: React.FC<FullServiceSectionProps> = ({ onOpenContactModal }) => {
  const serviceIcons = [Lightbulb, Truck, PackageCheck, ShieldCheck];

  return (
    <section id="leistungen" className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <span className="font-mono text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
            UNSERE KERNKOMPETENZEN
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            FULL-SERVICE: <br />
            <span className="text-[#8E95A2]">WERBEARTIKEL AUS SIMMERN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A2] font-sans font-light leading-relaxed max-w-3xl pt-2">
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
                className="group relative bg-[#0D0F14] border border-white/10 hover:border-[#005496] rounded-xs p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#005496]/15 flex flex-col justify-between overflow-hidden"
              >
                {/* Background image preview on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Top card header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0077E6] tracking-widest uppercase">
                      SERVICE {service.id}
                    </span>
                    <div className="p-3 bg-[#005496]/10 border border-[#005496]/20 rounded-xs text-[#0077E6] group-hover:bg-[#005496] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight uppercase group-hover:text-[#0077E6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#8E95A2] font-sans font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8E95A2] group-hover:text-white transition-colors">
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
