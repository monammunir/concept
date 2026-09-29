import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REAL_PROJECTS, Project } from '../data/projectsData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onOpenContactModal: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkProps> = ({ onOpenContactModal }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Editorial 3-column / asymmetric layout mapping
  const getColSpan = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:col-span-12'; // Featured main project
      case 1:
        return 'lg:col-span-6';  // Two side-by-side
      case 2:
        return 'lg:col-span-6';
      case 3:
        return 'lg:col-span-6';  // Two side-by-side
      case 4:
        return 'lg:col-span-6';
      default:
        return 'lg:col-span-6';
    }
  };

  return (
    <section id="werbeartikel" className="py-28 sm:py-36 bg-[#F7F8FA] text-slate-900 border-t border-slate-200/80 scroll-mt-20">
      <div id="projekte" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-20">
        
        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 text-xs text-[#005496] tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED WORK // REALE C-CONCEPTS PROJEKTE</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight uppercase leading-[0.92]">
            INNOVATIVE WERBEPRODUKTE <br />
            <span className="text-[#005496]">& PROJEKTE</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
            Wir entwickeln außergewöhnliche Produkte und Konstruktionen, die Ihren Kunden in Erinnerung bleiben. Dabei kombinieren wir innovative Werbeartikel & Give-Aways mit Ihrem Branding aus unserer eigenen Produktion. Entdecken Sie unsere maßgeschneiderten Lösungen – fernab der gängigen Katalogware.
          </p>
        </motion.div>

        {/* Editorial Asymmetric Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {REAL_PROJECTS.map((project, index) => {
            const colSpan = getColSpan(index);
            const isFeatured = index === 0;
            const isBlueCard = index === 1; // 1 strategic blue project card accent (e.g. Punica Scooter)

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.3, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                className={`${colSpan} col-span-12 group cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between border ${
                  isBlueCard
                    ? 'bg-[#005496] text-white border-[#005496] shadow-md hover:bg-[#00467d] hover:shadow-[#005496]/20'
                    : 'bg-white text-slate-900 border-slate-200/80 hover:border-[#005496]/50 shadow-sm hover:shadow-[#005496]/10'
                }`}
              >
                {/* IMAGE Showcase Area */}
                <div className={`relative ${isFeatured ? 'aspect-[21/9] sm:aspect-[21/9]' : 'aspect-[16/10]'} w-full rounded-xl overflow-hidden bg-slate-100`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out filter brightness-[0.98] contrast-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isBlueCard ? 'from-[#005496]/80' : 'from-slate-900/60'} via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Eyebrow Project Type Pill */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className={`px-3.5 py-1 backdrop-blur-md text-[11px] uppercase tracking-wider font-bold rounded-full shadow-xs ${
                      isBlueCard 
                        ? 'bg-white/95 text-[#005496]' 
                        : 'bg-white/90 text-[#005496] border border-slate-200/80'
                    }`}>
                      {project.subtitle || 'CUSTOM PROMOTION'}
                    </span>
                    <span className={`px-3.5 py-1 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold rounded-full shadow-xs hidden sm:inline-block ${
                      isBlueCard 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-white/90 text-slate-700 border border-slate-200/80'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT Area */}
                <div className="pt-6 space-y-3">
                  <div className={`flex items-center justify-between text-xs ${isBlueCard ? 'text-slate-200' : 'text-slate-500'}`}>
                    <span className={`font-bold tracking-wider uppercase ${isBlueCard ? 'text-white' : 'text-[#005496]'}`}>
                      PROJEKT {project.number}
                    </span>
                    <span className="font-light">
                      KUNDE: {project.client}
                    </span>
                  </div>

                  <h3 className={`font-extrabold text-2xl sm:text-3xl tracking-tight uppercase transition-colors ${
                    isBlueCard ? 'text-white' : 'text-slate-900 group-hover:text-[#005496]'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${
                    isBlueCard ? 'text-slate-100' : 'text-slate-600 group-hover:text-slate-800'
                  }`}>
                    {project.shortDescription || project.summary}
                  </p>
                </div>

                {/* ACTION Trigger Link */}
                <div className={`pt-6 mt-4 flex items-center justify-between text-xs transition-colors border-t ${
                  isBlueCard ? 'border-white/20 text-white' : 'border-slate-200/80 text-slate-600 group-hover:text-slate-900'
                }`}>
                  <span className={`font-bold tracking-widest uppercase ${isBlueCard ? 'text-white' : 'text-slate-800'}`}>PROJEKT ANSEHEN</span>
                  <div className={`flex items-center space-x-2 font-semibold ${isBlueCard ? 'text-white' : 'text-[#005496] group-hover:text-[#003B6D]'}`}>
                    <span className="text-[11px] uppercase tracking-wider">DETAILS</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 ${isBlueCard ? 'text-white' : 'text-[#005496]'}`} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenContactModal}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-bold tracking-widest uppercase rounded-xl shadow-xs transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>ALLE PRODUKTE & PROJEKTE ENTDECKEN</span>
            <ArrowRight className="w-4 h-4 text-[#005496] group-hover:translate-x-1.5 transition-transform duration-500" />
          </button>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onStartProject={onOpenContactModal}
      />
    </section>
  );
};
