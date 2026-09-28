import React, { useState } from 'react';
import { REAL_PROJECTS, Project } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onOpenContactModal: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkProps> = ({ onOpenContactModal }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="selected-work" className="py-32 sm:py-40 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Headline */}
        <div className="mb-24 sm:mb-32">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-3">
            PORTFOLIO
          </span>
          <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            SELECTED <br />
            <span className="text-[#8E95A2]">WORK.</span>
          </h2>
        </div>

        {/* ONE LARGE PROJECT AT A TIME */}
        <div className="space-y-40 sm:space-y-52">
          {REAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer space-y-8"
            >
              {/* Project Title & Category */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block">
                    {project.number}
                  </span>
                  <h3 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase group-hover:text-[#FF4500] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs text-[#8E95A2] uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#FF4500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* VERY LARGE IMAGE */}
              <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden bg-[#121418]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Minimal Specs Sub-Line */}
              <div className="flex items-center justify-between font-mono text-xs text-[#8E95A2]">
                <span>CLIENT: {project.client}</span>
                <span>VIEW CASE STUDY ↗</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onStartProject={onOpenContactModal}
      />
    </section>
  );
};
