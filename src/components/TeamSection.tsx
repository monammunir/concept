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
    <section className="py-28 sm:py-36 bg-[#005496] text-white border-t border-[#00467d] relative overflow-hidden shadow-lg">
      
      {/* Background ambient lighting */}
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-4"
        >
          <div className="text-xs text-white/80 tracking-widest uppercase font-semibold block">
            PROZESS & ABWICKLUNG // FULL-SERVICE PIPELINE
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            VON DER IDEE BIS ZUM <br />
            <span className="text-slate-100">POINT OF SALE</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-100 font-light leading-relaxed max-w-3xl pt-2">
            Unser ganzheitlicher Full-Service begleitet Ihr Werbeprojekt durch alle sechs Phasen der Wertschöpfungskette – verlässlich, transparent und alles aus einer Hand.
          </p>
        </motion.div>

        {/* 3-Column Desktop Grid (Wider, shorter, balanced cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.3, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white text-slate-900 border border-white/20 rounded-2xl p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#005496] uppercase tracking-wider">
                      PHASE {step.id}
                    </span>
                    <div className="p-3 bg-slate-100 border border-slate-200/80 rounded-xl text-[#005496] group-hover:bg-[#005496] group-hover:text-white transition-colors duration-500">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900 uppercase group-hover:text-[#005496] transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs text-[#005496] font-semibold uppercase tracking-wider pt-1">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow */}
                <div className="pt-5 mt-5 border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between font-semibold uppercase">
                  <span>SCHRITT {step.id}</span>
                  <span className="text-[#005496] group-hover:translate-x-1.5 transition-transform duration-500">→</span>
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
          transition={{ duration: 1.2 }}
          className="pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {leadership.map((member) => (
            <div 
              key={member.name}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center space-x-4 text-white shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-white text-[#005496] flex items-center justify-center shrink-0 shadow-md">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base text-white uppercase">{member.name}</div>
                <div className="text-xs text-slate-200 font-semibold">{member.role}</div>
                <div className="text-xs text-slate-300 font-light">{member.task}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
