import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Truck, PackageCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/projectsData';

interface FullServiceSectionProps {
  onOpenContactModal?: () => void;
}

export const FullServiceSection: React.FC<FullServiceSectionProps> = ({ onOpenContactModal }) => {
  const serviceIcons = [Lightbulb, Truck, PackageCheck, ShieldCheck];

  return (
    <section id="leistungen" className="py-28 sm:py-36 bg-[#F7F8FA] text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20 space-y-4"
        >
          <motion.span 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="text-xs text-[#005496] tracking-widest uppercase font-semibold block"
          >
            OUR SERVICES // KERNKOMPETENZEN
          </motion.span>
          
          <h2 className="font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight uppercase leading-[0.95]">
            FULL-SERVICE: <br />
            <span className="text-[#005496]">WERBEARTIKEL AUS SIMMERN</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
            Wir bieten individuelle und ganzheitliche Werbeartikel-Lösungen für Ihr Unternehmen. Neben der Beschaffung zählt dazu auch die Konfektionierung Ihrer Ware. Das bedeutet, wir verpacken oder etikettieren Ihre Ware neu und füllen diese nach Gewicht oder Stückzahl — auch von Ihren bestehenden Waren.
          </p>
        </motion.div>

        {/* 4 Premium Editorial Light & Strategic Blue Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            const isBlueCard = index === 2; // Card 3 (VERPACKUNG & KONFEKTIONIERUNG) is C-CONCEPTS BLUE

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.3, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between overflow-hidden border ${
                  isBlueCard
                    ? 'bg-[#005496] text-white border-[#005496] shadow-md hover:bg-[#00467d] hover:shadow-[#005496]/25'
                    : 'bg-white text-slate-900 border-slate-200/80 hover:border-[#005496]/50 shadow-sm hover:shadow-[#005496]/10'
                }`}
              >
                {/* Image showcase container with 1.03x slow zoom */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out filter brightness-[0.98] contrast-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isBlueCard ? 'from-[#005496]/80' : 'from-slate-900/60'} via-transparent to-transparent opacity-70`} />
                  
                  {/* Small Number & Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className={`px-3.5 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full shadow-xs ${
                      isBlueCard 
                        ? 'bg-white/95 text-[#005496]' 
                        : 'bg-white/90 text-[#005496] border border-slate-200/80'
                    }`}>
                      {service.id}
                    </span>
                    <span className={`px-3.5 py-1 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-xs ${
                      isBlueCard 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-white/90 text-slate-700 border border-slate-200/80'
                    }`}>
                      {service.category}
                    </span>
                  </div>
                  
                  <div className={`absolute top-4 right-4 p-2.5 rounded-xl shadow-md transition-colors ${
                    isBlueCard 
                      ? 'bg-white text-[#005496]' 
                      : 'bg-[#005496] text-white group-hover:bg-[#003B6D]'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content: Title & Short Description */}
                <div className="space-y-3">
                  <h3 className={`font-extrabold text-2xl tracking-tight uppercase transition-colors ${
                    isBlueCard ? 'text-white' : 'text-slate-900 group-hover:text-[#005496]'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${
                    isBlueCard ? 'text-slate-100' : 'text-slate-600 group-hover:text-slate-800'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className={`pt-6 mt-6 flex items-center justify-between text-xs transition-colors border-t ${
                  isBlueCard ? 'border-white/20 text-white' : 'border-slate-200/80 text-slate-600 group-hover:text-slate-900'
                }`}>
                  <button
                    onClick={onOpenContactModal}
                    className={`inline-flex items-center space-x-2 font-bold tracking-widest uppercase cursor-pointer ${
                      isBlueCard ? 'text-white hover:text-slate-200' : 'text-[#005496] group-hover:text-[#003B6D]'
                    }`}
                  >
                    <span>MEHR ERFAHREN</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 ${
                      isBlueCard ? 'text-white' : 'text-[#005496]'
                    }`} />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
