import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS, TESTIMONIALS } from '../data/projectsData';
import { Quote } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0B0D] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
            REFERENZEN & VERTRAUEN
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
            KUNDEN & PARTNER
          </h2>
          <p className="text-base text-[#8E95A2] font-light leading-relaxed">
            Wir sind sehr stolz auf unsere namhaften Kunden, die uns über Jahre hinweg ihr Vertrauen geschenkt haben.
          </p>
        </motion.div>

        {/* Clean Minimalist Client Logo Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 border-y border-white/10 mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-3 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain filter grayscale contrast-120 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
