import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const SedexSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0B0D] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 px-8 bg-[#111318]/60 border border-white/10 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          
          {/* Logo & Trust Badge */}
          <div className="lg:col-span-4 flex items-center space-x-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl shrink-0 flex items-center justify-center">
              <img
                src="/images/sedex-logo.png"
                alt="Sedex Member Logo"
                className="h-12 w-auto object-contain filter contrast-120"
              />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-[10px] text-[#0077E6] tracking-widest uppercase font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SEDEX MEMBER PARTNER</span>
              </div>
              <div className="font-bold text-sm text-white uppercase">ETHISCHE LIEFERKETTE</div>
            </div>
          </div>

          {/* Content Summary */}
          <div className="lg:col-span-8 text-xs sm:text-sm text-[#8E95A2] font-light leading-relaxed">
            Als offizielles Mitglied bei Sedex verpflichten wir uns zu höchsten ethischen Standards, Arbeitssicherheit und Umweltverantwortung in der gesamten Produktion und Lieferkette unserer Werbeartikel.
          </div>

        </motion.div>
      </div>
    </section>
  );
};
