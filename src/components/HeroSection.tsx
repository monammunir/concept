import React, { useState } from 'react';
import { ArrowDown, Cpu, ShieldCheck, Compass, Layers } from 'lucide-react';
import { Industrial3DCanvas } from './Industrial3DCanvas';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#0A0B0D] bg-tech-grid">
      {/* Background Lighting Gradients (Strict Palette: Warm safety-orange core spotlight, cold titanium ambient) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#121418] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Massive Editorial Typography & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Technical System Header Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#121418] border border-white/10 text-xs font-mono text-[#8E95A2] rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
              <span className="tracking-widest uppercase text-white">SYS_ID: C-CONCEPTS.EU</span>
              <span className="text-white/20">|</span>
              <span className="text-[#FF4500]">EST. 1993</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase">
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#8E95A2]">
                IDEAS INTO
              </span> <br />
              <span className="text-[#FF4500] underline decoration-[#FF4500]/30 underline-offset-8">
                REALITY.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#8E95A2] font-sans font-light leading-relaxed max-w-xl">
              Creative concepts, custom products, experiences and complete production solutions — from the first idea to the final execution.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenContactModal}
                className="px-8 py-4 bg-[#FF4500] hover:bg-[#E63900] text-white font-mono text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-300 shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:shadow-[0_0_45px_rgba(255,69,0,0.6)] flex items-center space-x-3"
              >
                <span>START A PROJECT</span>
                <span className="text-lg">↗</span>
              </button>

              <a
                href="#selected-work"
                className="px-6 py-4 bg-[#121418] hover:bg-[#1A1D24] border border-white/15 hover:border-white/40 text-white font-mono text-sm tracking-wider uppercase rounded-xs transition-all flex items-center space-x-2"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4 text-[#8E95A2]" />
              </a>
            </div>

            {/* Quick Verified Specs Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs text-[#8E95A2]">
              <div>
                <div className="text-white font-bold text-lg font-sans">30+ YEARS</div>
                <div className="text-[11px] text-[#8E95A2]">MADE IN GERMANY</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg font-sans">3,500+</div>
                <div className="text-[11px] text-[#8E95A2]">REAL PROJECTS</div>
              </div>
              <div>
                <div className="text-[#FF4500] font-bold text-lg font-sans">FULL SERVICE</div>
                <div className="text-[11px] text-[#8E95A2]">CAD → EVENT SETUP</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Precision 3D Interactive Canvas */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] w-full flex items-center justify-center">
            {/* Tech Corner Annotation Marks */}
            <div className="absolute top-2 left-2 text-[10px] font-mono text-white/30">
              [LAT_COR: 50.0003° N, 7.5186° E]
            </div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-white/30">
              3D_CAD_ENG_v4.2
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#FF4500]/60">
              + ROTATE OR CLICK DIAGNOSTIC NODES
            </div>

            {/* 3D Object Render Component */}
            <Industrial3DCanvas
              currentStageIndex={activeStage}
              onSelectStage={(idx) => setActiveStage(idx)}
            />
          </div>

        </div>
      </div>

      {/* Bottom Technical Marquee / Flow Indicator */}
      <div className="w-full border-y border-white/10 bg-[#121418]/60 backdrop-blur-md py-3 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8E95A2]">
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">PROCESS FLOW:</span>
            <span className="text-[#FF4500]">IDEA</span>
            <span>→</span>
            <span className="text-[#FF4500]">DESIGN</span>
            <span>→</span>
            <span className="text-[#FF4500]">ENGINEERING</span>
            <span>→</span>
            <span className="text-[#FF4500]">PRODUCTION</span>
            <span>→</span>
            <span className="text-[#FF4500]">EXPERIENCE</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <span>SIMMERN (WESTERWALD)</span>
            <span>5,000M² PRODUCTION & LOGISTICS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
