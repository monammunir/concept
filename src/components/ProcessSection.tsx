import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/projectsData';
import { ChevronRight, Settings, CheckCircle2, Cpu } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative py-28 bg-[#0A0B0D] border-t border-white/10 overflow-hidden bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Technical Blueprint Header */}
        <div className="flex flex-wrap items-center justify-between font-mono text-xs text-[#8E95A2] pb-6 border-b border-white/10 mb-16 gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
            <span className="text-white font-bold tracking-widest">SYSTEM BLUEPRINT // FLOW DIAGRAM</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>TOLERANCE: ISO-2768-m</span>
            <span>CAD-ENG PROTOCOL</span>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-2">
            PRECISION METHODOLOGY
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
            ENGINEERING <span className="text-[#8E95A2]">WORKFLOW</span>
          </h2>
        </div>

        {/* Technical Line Connector + Step Selector Buttons */}
        <div className="relative mb-16">
          {/* Connecting Thin Technical Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/15 -translate-y-1/2 hidden md:block" />
          
          {/* Active Progress Line */}
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-[#FF4500] -translate-y-1/2 transition-all duration-500 hidden md:block shadow-[0_0_12px_#FF4500]"
            style={{ width: `${((activeStepIndex + 1) / PROCESS_STEPS.length) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group p-4 rounded-xs border text-left transition-all duration-300 backdrop-blur-md relative ${
                    isActive
                      ? 'bg-[#121418] border-[#FF4500] text-white shadow-[0_0_20px_rgba(255,69,0,0.25)] scale-105'
                      : 'bg-[#121418]/80 border-white/10 text-[#8E95A2] hover:border-white/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className={isActive ? 'text-[#FF4500] font-bold' : 'text-[#8E95A2]'}>
                      {step.number}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-ping" />}
                  </div>

                  <div className="font-sans font-bold text-sm tracking-wider uppercase">
                    {step.title}
                  </div>

                  {/* Corner Accent Box */}
                  <div
                    className={`absolute bottom-0 right-0 w-2 h-2 ${
                      isActive ? 'bg-[#FF4500]' : 'bg-white/10 group-hover:bg-white/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Inspection Blueprint Card */}
        <div className="bg-[#121418] border border-white/15 rounded-xs p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Grid Watermark Background */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left: Step Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-3 px-3 py-1 bg-[#0A0B0D] border border-[#FF4500]/40 text-xs font-mono text-[#FF4500]">
                <span>STAGE {activeStep.number} OF 06</span>
                <span>//</span>
                <span>{activeStep.title}</span>
              </div>

              <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                {activeStep.headline}
              </h3>

              <p className="text-base text-[#8E95A2] font-sans font-light leading-relaxed">
                {activeStep.description}
              </p>

              {/* Specs Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs text-[#E6E9EE]">
                {activeStep.specs.map((spec) => (
                  <div key={spec} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4500] flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Blueprint Graphic Box */}
            <div className="lg:col-span-5 bg-[#0A0B0D] border border-white/10 p-6 rounded-xs space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#8E95A2] border-b border-white/10 pb-3">
                <span className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-[#FF4500]" />
                  <span className="text-white font-bold">CAD_PARAM_LOG</span>
                </span>
                <span>REV_3.2</span>
              </div>

              <div className="space-y-2.5 text-[11px] text-[#8E95A2]">
                <div className="flex justify-between">
                  <span>STAGE STATUS:</span>
                  <span className="text-emerald-400 font-bold">VERIFIED OK</span>
                </div>
                <div className="flex justify-between">
                  <span>IN-HOUSE LEAD:</span>
                  <span className="text-white">Simmern Workshop Eng. Team</span>
                </div>
                <div className="flex justify-between">
                  <span>TYPICAL LEAD TIME:</span>
                  <span className="text-[#FF4500]">3-10 Days</span>
                </div>
                <div className="flex justify-between">
                  <span>CAD FORMATS:</span>
                  <span className="text-white">STEP, IGES, SolidWorks, OBJ</span>
                </div>
              </div>

              {/* Graphic Blueprint Vector Box */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#8E95A2]">
                <span>NEXT STAGE:</span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  className="flex items-center space-x-1.5 text-white hover:text-[#FF4500] transition-colors"
                >
                  <span className="font-bold">PROCEED TO {PROCESS_STEPS[(activeStepIndex + 1) % PROCESS_STEPS.length].title}</span>
                  <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
