import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Industrial3DCanvas } from './Industrial3DCanvas';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-center bg-[#0A0B0D] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clean Editorial Typography */}
          <div className="lg:col-span-6 space-y-8 z-10">
            
            {/* Small Brand Label */}
            <div className="font-mono text-xs text-[#8E95A2] tracking-widest uppercase">
              C-CONCEPTS
            </div>

            {/* Huge Headline */}
            <h1 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase">
              WE BUILD <br />
              IDEAS <br />
              <span className="text-[#8E95A2]">INTO REALITY.</span>
            </h1>

            {/* Small Supporting Text */}
            <p className="text-base sm:text-lg text-[#8E95A2] font-sans font-light leading-relaxed max-w-md">
              Creative concepts, custom products and complete production solutions.
            </p>

            {/* Small CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#FF4500] hover:bg-[#E63900] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: One Single Large Premium 3D Industrial Object */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] w-full flex items-center justify-center">
            <Industrial3DCanvas />
          </div>

        </div>
      </div>

    </section>
  );
};
