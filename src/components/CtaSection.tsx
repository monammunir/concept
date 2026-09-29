import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenContactModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-r from-[#003B6D] via-[#005496] to-[#0066C2] text-white relative overflow-hidden shadow-2xl">
      
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between"
        >
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs text-white/80 tracking-widest uppercase font-bold block">
              BERATUNG & KONZEPTION
            </span>
            <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              IHRE IDEE. <br />
              <span className="text-white/90">UNSERE UMSETZUNG.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl pt-1">
              Von der Planung bis zur fertigen Promotion – wir begleiten Ihr Projekt mit unserem Full-Service.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onOpenContactModal}
              className="group inline-flex items-center space-x-3 px-8 py-5 bg-white hover:bg-[#F4F5F6] text-[#005496] text-xs font-extrabold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-2xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>PROJEKT BESPRECHEN</span>
              <ArrowRight className="w-4 h-4 text-[#005496] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
