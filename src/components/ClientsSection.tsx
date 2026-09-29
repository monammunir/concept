import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS, TESTIMONIALS } from '../data/projectsData';
import { Quote } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F8FA] text-[#0F172A] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-xs text-[#005496] tracking-widest uppercase font-semibold block">
            REFERENZEN & VERTRAUEN
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-[#0F172A] tracking-tight uppercase leading-[0.95]">
            KUNDEN & PARTNER
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            Wir sind sehr stolz auf unsere namhaften Kunden, die uns über Jahre hinweg ihr Vertrauen geschenkt haben.
          </p>
        </motion.div>

        {/* Partner / Client Logo Grid (Increased logo size by 20-30%, ample breathing room) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="py-12 px-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-10 items-center justify-items-center">
            {CLIENT_LOGOS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center p-3 opacity-80 hover:opacity-100 transition-opacity duration-500 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 max-w-full object-contain filter grayscale contrast-120 group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
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
              transition={{ duration: 1.3, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-6 relative shadow-sm hover:shadow-xl hover:shadow-[#005496]/5 transition-all duration-700 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#005496]/30" />
              <p className="text-lg text-slate-700 font-light italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                <img
                  src={t.logo}
                  alt={t.author}
                  className="w-10 h-10 object-contain rounded-full bg-slate-100 p-1 border border-slate-200"
                />
                <div>
                  <div className="font-bold text-[#0F172A] uppercase text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
