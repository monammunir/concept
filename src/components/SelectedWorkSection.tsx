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

  // Asymmetric column spans for editorial portfolio balance
  const getColSpanClass = (index: number) => {
    switch (index % 4) {
      case 0:
        return 'lg:col-span-7'; // Featured large
      case 1:
        return 'lg:col-span-5'; // Medium side
      case 2:
        return 'lg:col-span-5'; // Medium side
      case 3:
        return 'lg:col-span-7'; // Featured large
      default:
        return 'lg:col-span-6';
    }
  };

  return (
    <section id="werbeartikel" className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/5 scroll-mt-20">
      <div id="projekte" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-20">
        
        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 text-xs text-[#0077E6] tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED WORK // INDIVIDUELLE SONDERANFERTIGUNGEN</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.92]">
            INNOVATIVE WERBEPRODUKTE <br />
            <span className="text-[#8E95A2]">& PROJEKTE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A2] font-light leading-relaxed max-w-3xl pt-2">
            Wir entwickeln außergewöhnliche Produkte und Konstruktionen, die Ihren Kunden in Erinnerung bleiben. Dabei kombinieren wir innovative Werbeartikel & Give-Aways mit Ihrem Branding aus unserer eigenen Produktion. Entdecken Sie unsere maßgeschneiderten Lösungen – fernab der gängigen Katalogware.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {REAL_PROJECTS.map((project, index) => {
            const colSpan = getColSpanClass(index);
            const isFeaturedLarge = colSpan === 'lg:col-span-7';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                className={`${colSpan} col-span-12 group cursor-pointer bg-[#111318]/80 border border-white/10 hover:border-[#005496]/70 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(0,84,150,0.3)] flex flex-col justify-between`}
              >
                {/* IMAGE Showcase Area */}
                <div className={`relative ${isFeaturedLarge ? 'aspect-[16/9]' : 'aspect-[16/10]'} w-full rounded-xl overflow-hidden bg-[#0A0B0D]`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  {/* Eyebrow Editorial Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 text-[11px] text-[#0077E6] uppercase tracking-wider font-semibold rounded-full">
                      REALER PROJEKT-BEISPIEL
                    </span>
                    <span className="px-3 py-1 bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 text-[10px] text-[#8E95A2] uppercase tracking-wider font-medium rounded-full hidden sm:inline-block">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT Area */}
                <div className="pt-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8E95A2]">
                    <span className="text-[#0077E6] font-semibold tracking-wider uppercase">
                      PROJEKT {project.number}
                    </span>
                    <span className="font-light">
                      KUNDE: {project.client}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase group-hover:text-[#0077E6] group-hover:-translate-y-0.5 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#8E95A2] group-hover:text-[#E6E9EE] font-light leading-relaxed transition-colors duration-300">
                    {project.shortDescription || project.summary}
                  </p>
                </div>

                {/* ACTION: Minimal integrated arrow trigger */}
                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8E95A2] group-hover:text-white transition-colors">
                  <span className="font-bold tracking-widest uppercase text-[#E6E9EE]">CASE STUDY ANSEHEN</span>
                  <div className="flex items-center space-x-2 text-[#0077E6] group-hover:text-white font-semibold">
                    <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider">DETAILS</span>
                    <ArrowRight className="w-4 h-4 text-[#0077E6] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenContactModal}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>MEHR PRODUKTE & PROJEKTE ENTDECKEN</span>
            <ArrowRight className="w-4 h-4 text-[#0077E6] group-hover:translate-x-1 transition-transform" />
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
