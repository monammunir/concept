import React from 'react';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';

interface ImpossibleIdeaProps {
  onOpenContactModal: () => void;
}

export const ImpossibleIdeaSection: React.FC<ImpossibleIdeaProps> = ({ onOpenContactModal }) => {
  return (
    <section className="relative py-32 bg-[#0A0B0D] border-t border-white/10 overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#FF4500]/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Technical Label */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#121418] border border-[#FF4500]/40 font-mono text-xs text-[#FF4500] rounded-xs mb-8">
          <ShieldAlert className="w-4 h-4" />
          <span className="tracking-widest uppercase">CHALLENGE ACCEPTED</span>
        </div>

        {/* Large Typography Headline */}
        <h2 className="font-sans font-extrabold text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase mb-8">
          GOT AN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-white to-white">
            IMPOSSIBLE
          </span> <br />
          IDEA?
        </h2>

        {/* Supporting Text */}
        <div className="space-y-2 mb-12 max-w-md mx-auto">
          <p className="font-sans font-bold text-2xl text-white">Good.</p>
          <p className="font-sans font-light text-xl text-[#8E95A2]">We like those.</p>
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center">
          <button
            onClick={onOpenContactModal}
            className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-[#FF4500] hover:bg-[#E63900] text-white font-mono text-base font-bold tracking-widest uppercase rounded-xs transition-all duration-300 shadow-[0_0_40px_rgba(255,69,0,0.5)] hover:shadow-[0_0_60px_rgba(255,69,0,0.7)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Sub-label */}
        <div className="mt-8 font-mono text-xs text-[#8E95A2]">
          NO OBLIGATION // DIRECT CONSULTATION WITH OUR SIMMERN ENGINEERING LEAD
        </div>

      </div>
    </section>
  );
};
