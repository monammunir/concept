import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Factory, PackageCheck, Truck, Store, UserCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const processSteps = [
    {
      id: '01',
      title: 'IDEA',
      subtitle: 'Entwurf & Visualisierung',
      icon: Lightbulb,
      description: 'Aus Ihrer ersten Werbeidee entwickeln wir konkrete 3D-Konzepte und Machbarkeitsanalysen.'
    },
    {
      id: '02',
      title: 'PLANUNG',
      subtitle: 'Konstruktion & Budget',
      icon: FileText,
      description: 'Präzise technische Planung, Materialauswahl und transparente Kostenkontrolle.'
    },
    {
      id: '03',
      title: 'PRODUKTION',
      subtitle: 'Fertigung in Simmern',
      icon: Factory,
      description: 'Eigene Fertigung von Sonderanfertigungen, Mofas, Display-Units und Give-Aways.'
    },
    {
      id: '04',
      title: 'KONFEKTIONIERUNG',
      subtitle: 'Verpackung & Branding',
      icon: PackageCheck,
      description: 'Individuelle Veredelung, Neu-Verpackung, Etikettierung und Stückzahl-Abfüllung.'
    },
    {
      id: '05',
      title: 'LOGISTIK',
      subtitle: 'Hochregallagerung',
      icon: Truck,
      description: 'Sichere Einlagerung in unserem Hochregallager Simmern und weltweiter Versand.'
    },
    {
      id: '06',
      title: 'POINT OF SALE',
      subtitle: 'Pünktliche Anlieferung',
      icon: Store,
      description: 'Pünktliche Anlieferung und Aufstellung direkt am Point of Sale für Ihre Promotion.'
    }
  ];

  const leadership = [
    {
      name: 'Andreas Sauer',
      role: 'Geschäftsführer & Gründer (seit 1993)',
      task: 'Strategie, Kundenberatung & Produktkonzepte'
    },
    {
      name: 'Ralf Weisbrod',
      role: 'Geschäftsführer & Gründer (seit 1993)',
      task: 'Produktion, Logistik & Konfektionierung'
    }
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#080A0E] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#005496]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-4"
        >
          <div className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
            PROZESS & ABWICKLUNG // FULL-SERVICE PIPELINE
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            VON DER IDEE BIS ZUM <br />
            <span className="text-[#0077E6]">POINT OF SALE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A2] font-light leading-relaxed max-w-3xl pt-2">
            Unser ganzheitlicher Full-Service begleitet Ihr Werbeprojekt durch alle sechs Phasen der Wertschöpfungskette – verlässlich, transparent und alles aus einer Hand.
          </p>
        </motion.div>

        {/* Modern Horizontal Process Pipeline (Desktop) / Vertical Timeline (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {processSteps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#111318]/80 border border-white/10 hover:border-[#005496]/70 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0077E6] uppercase tracking-wider">
                      PHASE {step.id}
                    </span>
                    <div className="p-2 bg-[#005496]/15 border border-[#005496]/30 rounded-xl text-[#0077E6] group-hover:bg-[#005496] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-extrabold text-lg text-white uppercase group-hover:text-[#0077E6] transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs text-[#0077E6] font-medium uppercase tracking-wider pt-0.5">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#8E95A2] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow */}
                <div className="pt-4 mt-4 border-t border-white/10 text-[10px] text-[#8E95A2] flex items-center justify-between font-semibold uppercase">
                  <span>SCHRITT {step.id}</span>
                  <span className="text-[#0077E6]">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership & Founding Trust Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {leadership.map((member) => (
            <div 
              key={member.name}
              className="p-5 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#005496]/20 border border-[#005496]/40 flex items-center justify-center text-[#0077E6] shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-white uppercase">{member.name}</div>
                <div className="text-xs text-[#0077E6] font-semibold">{member.role}</div>
                <div className="text-xs text-[#8E95A2] font-light">{member.task}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
