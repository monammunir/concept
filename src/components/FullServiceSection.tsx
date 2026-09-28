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
    <section id="leistungen" className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20 space-y-4"
        >
          <motion.span 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block"
          >
            OUR SERVICES // KERNKOMPETENZEN
          </motion.span>
          
          <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            FULL-SERVICE: <br />
            <span className="text-[#8E95A2]">WERBEARTIKEL AUS SIMMERN</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#8E95A2] font-light leading-relaxed max-w-3xl pt-2">
            Wir bieten individuelle und ganzheitliche Werbeartikel-Lösungen für Ihr Unternehmen. Neben der Beschaffung zählt dazu auch die Konfektionierung Ihrer Ware. Das bedeutet, wir verpacken oder etikettieren Ihre Ware neu und füllen diese nach Gewicht oder Stückzahl — auch von Ihren bestehenden Waren.
          </p>
        </motion.div>

        {/* 4 Premium Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#111318]/80 border border-white/10 hover:border-[#005496]/70 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(0,84,150,0.3)] flex flex-col justify-between overflow-hidden"
              >
                {/* Image showcase container with 1.04x zoom */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-[#0A0B0D]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-80" />
                  
                  {/* Small Number & Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 text-xs font-bold text-[#0077E6] uppercase tracking-wider rounded-full">
                      {service.id}
                    </span>
                    <span className="px-3 py-1 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-[#8E95A2] uppercase tracking-wider rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 p-2.5 bg-[#005496]/80 backdrop-blur-md border border-[#005496]/40 rounded-xl text-white shadow-lg group-hover:bg-[#0066C2] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content: Title & Short Description */}
                <div className="space-y-3">
                  <h3 className="font-extrabold text-2xl text-white tracking-tight uppercase group-hover:text-[#0077E6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#8E95A2] group-hover:text-[#E6E9EE] font-light leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer Trigger Link & Sliding Arrow */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#8E95A2] group-hover:text-white transition-colors">
                  <button
                    onClick={onOpenContactModal}
                    className="inline-flex items-center space-x-2 text-[#0077E6] group-hover:text-white font-bold tracking-widest uppercase cursor-pointer"
                  >
                    <span>MEHR ERFAHREN</span>
                    <ArrowRight className="w-4 h-4 text-[#0077E6] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1.5" />
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
