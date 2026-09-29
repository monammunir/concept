import React from 'react';
import { X, ArrowUpRight, Wrench } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-xl overflow-y-auto">
      <div
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50/90 text-xs text-slate-600 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="text-[#005496] font-bold">PROJEKT_NR: {project.number}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-900 font-medium">KUNDE: {project.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <span className="text-xs uppercase font-semibold hidden sm:inline">SCHLIESSEN [ESC]</span>
            <X className="w-5 h-5 text-[#005496]" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          
          {/* Main Title & Hero Banner Image */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-[#005496] font-semibold rounded-full uppercase">
                {project.category}
              </span>
              <span className="font-medium">JAHR: {project.year}</span>
            </div>

            <h2 className="font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight uppercase">
              {project.title}
            </h2>
            <p className="text-xs text-[#005496] tracking-wider uppercase font-semibold">
              {project.subtitle}
            </p>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xs text-[#005496] tracking-widest uppercase font-semibold">
                PROJEKTÜBERSICHT & DETAIL
              </h3>
              <p className="text-lg text-slate-900 font-light leading-relaxed">
                {project.summary}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="p-4 bg-slate-50 border border-[#005496]/30 rounded-xl space-y-2 mt-6">
                <div className="text-xs text-[#005496] font-bold uppercase tracking-wider">
                  HIGHLIGHT
                </div>
                <div className="text-xs text-slate-700">
                  "{project.highlight}"
                </div>
              </div>
            </div>

            {/* Technical Parameters Box */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-6 text-xs">
              <div className="font-bold text-slate-900 border-b border-slate-200 pb-3 uppercase flex items-center justify-between">
                <span>SPEZIFIKATIONEN</span>
                <Wrench className="w-4 h-4 text-[#005496]" />
              </div>

              <div className="space-y-3">
                {project.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">{spec.label}:</span>
                    <span className="text-slate-900 text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              {project.dimensions && (
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">ABMESSUNGEN:</span>
                  <span className="text-slate-900 font-medium">{project.dimensions}</span>
                </div>
              )}
              {project.weight && (
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">GEWICHT:</span>
                  <span className="text-slate-900 font-medium">{project.weight}</span>
                </div>
              )}

              {/* Materials Pill List */}
              <div className="space-y-2 pt-2">
                <span className="text-slate-500 block font-medium">VERWENDETE MATERIALIEN:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((mat) => (
                    <span key={mat} className="px-2.5 py-1 bg-white border border-slate-200 text-[10px] text-slate-700 rounded-md font-medium shadow-xs">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Gallery Images */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h3 className="text-xs text-slate-500 tracking-widest uppercase font-semibold">
                PRODUKTIONS- & PROMOTION-GALERIE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.secondaryImages.map((img, idx) => (
                  <div key={idx} className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200">
                    <img src={img} alt={`${project.title} Detail ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Call To Action inside Modal */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-bold text-lg text-slate-900">ÄHNLICHE SONDERANFERTIGUNG GEPLANT?</div>
              <div className="text-xs text-slate-500">Sprechen Sie Ihre Ideen direkt mit unserem Team in Simmern ab.</div>
            </div>
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="px-6 py-3 bg-[#005496] hover:bg-[#003B6D] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <span>PROJEKT ANFRAGEN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
