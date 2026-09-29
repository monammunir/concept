import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-28 sm:py-36 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background ambient light accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#005496]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            
            {/* Eyebrow Label */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 }}
              className="inline-flex items-center space-x-2 text-xs text-[#005496] tracking-widest uppercase font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#005496]" />
              <span>INNOVATIVE MARKETING CONCEPTS</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.25 }}
              className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight uppercase leading-[0.95]"
            >
              GIVEAWAYS, GIMMICKS, <br />
              <span className="text-[#005496]">
                PROMOTION FÜR EVENTS
              </span>
            </motion.h2>

            {/* Main Body */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed"
            >
              Sie haben eine Idee für eine spannende Werbemaßnahme? Dann sind Sie bei uns in den richtigen Händen. 
              <strong className="font-semibold text-slate-900"> C-Concepts ist Ihr Partner vom Anfang bis zum Ende. </strong>
              Egal ob Entwurf, Design oder Produktion, wir organisieren die Produktion und Organisation Ihrer Werbeartikel mit individuellem Branding – von der Idee bis zu Ihren Kunden an den Point of Sale.
            </motion.p>

            {/* Additional Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.55 }}
              className="text-base text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-200/80"
            >
              Dank unserer langjährigen Erfahrung und umfassenden Organisationsstruktur sind wir in der Lage, auch Projekte flexibel, verlässlich und zeitnah umzusetzen.
            </motion.p>

            {/* Feature Bullets */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-800 pt-2 font-medium"
            >
              <div className="flex items-center space-x-3 p-4 bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs hover:border-[#005496]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#005496] shrink-0" />
                <span>Individuelles Firmen-Branding</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs hover:border-[#005496]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#005496] shrink-0" />
                <span>Eigene Fertigung & Verpackung</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Immersive Authentic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-xl group">
              <img
                src="/images/perfect-match.jpg"
                alt="C-Concepts Produktion & Werbeartikel Konfektionierung"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] filter brightness-[0.98] contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl shadow-lg">
                <div className="text-xs text-[#005496] uppercase tracking-widest font-semibold">MADE IN GERMANY</div>
                <div className="font-bold text-sm text-slate-900">Full-Service Werbeartikel aus Simmern</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Large Statement Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 border-t border-slate-200/80 text-center space-y-3"
        >
          <div className="text-xs text-[#005496] tracking-widest uppercase font-semibold">
            UNSERE PHILOSOPHIE // FULL-SERVICE
          </div>
          <h3 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight uppercase leading-[0.95] max-w-5xl mx-auto">
            VON DER IDEE BIS ZUM <br />
            <span className="text-[#005496]">POINT OF SALE.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
};
