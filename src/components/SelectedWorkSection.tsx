import React, { useState } from 'react';
import { REAL_PROJECTS, Project } from '../data/projectsData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onOpenContactModal: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkProps> = ({ onOpenContactModal }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="werbeartikel" className="py-28 sm:py-36 bg-[#0A0B0D] text-white border-t border-white/10 scroll-mt-20">
      <div id="projekte" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-20">
        
        {/* Section Headline */}
        <div className="max-w-4xl mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#0077E6] tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WERBEARTIKEL & GIVE AWAYS MIT INDIVIDUELLEM BRANDING</span>
          </div>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.92]">
            INNOVATIVE WERBEPRODUKTE <br />
            <span className="text-[#8E95A2]">& PROJEKTE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A2] font-sans font-light leading-relaxed max-w-3xl pt-2">
            Wir entwickeln außergewöhnliche Produkte und Konstruktionen, die Ihren Kunden in Erinnerung bleiben. Dabei kombinieren wir innovative Werbeartikel & Give-Aways mit Ihrem Branding aus unserer eigenen Produktion. Entdecken Sie unsere maßgeschneiderten Lösungen – fernab der gängigen Katalogware.
          </p>
        </div>

        {/* Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {REAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer space-y-6 bg-[#0D0F14] border border-white/10 rounded-xs p-6 hover:border-[#005496] transition-all duration-500 hover:shadow-2xl hover:shadow-[#005496]/20 flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#121418]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0B0D]/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#0077E6] uppercase tracking-widest rounded-xs">
                  {project.category}
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#0077E6] tracking-widest font-bold uppercase">
                    PROJEKT {project.number}
                  </span>
                  <span className="font-mono text-xs text-[#8E95A2]">
                    KUNDE: {project.client}
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase group-hover:text-[#0077E6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#8E95A2] uppercase tracking-wider">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[#8E95A2] font-sans font-light line-clamp-2 pt-2">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8E95A2] group-hover:text-white transition-colors">
                <span className="font-bold tracking-widest uppercase">CASE STUDY ANSEHEN</span>
                <ArrowUpRight className="w-4 h-4 text-[#0077E6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300"
          >
            <span>MEHR PRODUKTE & PROJEKTE ENTDECKEN</span>
            <ArrowUpRight className="w-4 h-4 text-[#0077E6]" />
          </button>
        </div>

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
