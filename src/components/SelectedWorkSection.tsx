import React, { useState } from 'react';
import { REAL_PROJECTS, Project } from '../data/projectsData';
import { ArrowUpRight, Filter, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onOpenContactModal: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkProps> = ({ onOpenContactModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['ALL', 'VEHICLES', 'GAME UNITS', 'CUSTOM BUILDS', 'EVENT RIGS'];

  const filteredProjects = selectedCategory === 'ALL'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="selected-work" className="relative py-28 bg-[#0A0B0D] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Technical Header */}
        <div className="flex flex-wrap items-center justify-between font-mono text-xs text-[#8E95A2] pb-6 border-b border-white/10 mb-12 gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[#FF4500] font-bold">02 // ARCHIVE</span>
            <span className="text-white">VERIFIED REAL BUILDS</span>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>FILTER BY CATEGORY</span>
          </div>
        </div>

        {/* Headline & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              SELECTED <br />
              <span className="text-[#FF4500]">WORK.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-xs tracking-wider uppercase rounded-xs transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.3)]'
                    : 'bg-[#121418] text-[#8E95A2] border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Portfolio Grid */}
        <div className="space-y-20">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-[#121418]/60 hover:bg-[#121418] border border-white/10 hover:border-[#FF4500]/60 rounded-xs transition-all duration-500 shadow-xl"
              >
                {/* Tech Corner Accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#FF4500] transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#FF4500] transition-colors" />

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center space-x-4 font-mono text-xs">
                    <span className="font-extrabold text-3xl text-[#FF4500]">
                      {project.number}
                    </span>
                    <span className="text-[#8E95A2]">//</span>
                    <span className="px-2 py-0.5 bg-[#0A0B0D] border border-white/10 text-[#8E95A2] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase group-hover:text-[#FF4500] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#8E95A2] tracking-wider uppercase mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm font-sans font-light text-[#8E95A2] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Specs Pill Summary */}
                  <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-[#8E95A2]">
                      <span>CLIENT:</span>
                      <span className="text-white font-medium">{project.client}</span>
                    </div>
                    <div className="flex justify-between text-[#8E95A2]">
                      <span>PRODUCTION:</span>
                      <span className="text-[#FF4500]">{project.leadTime || 'In-House Build'}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-white group-hover:text-[#FF4500] transition-colors">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FF4500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Oversized Image Column */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] rounded-xs overflow-hidden border border-white/10 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <div className="px-6 py-3 bg-[#FF4500] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs shadow-2xl flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>VIEW PROJECT ↗</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onStartProject={onOpenContactModal}
      />
    </section>
  );
};
