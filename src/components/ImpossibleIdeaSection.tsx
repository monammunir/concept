import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ImpossibleIdeaProps {
  onOpenContactModal: () => void;
}

export const ImpossibleIdeaSection: React.FC<ImpossibleIdeaProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-40 sm:py-52 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-12">
          
          {/* Huge Typography */}
          <h2 className="font-sans font-extrabold text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-[0.88]">
            HAVE <br />
            AN <br />
            <span className="text-[#FF4500]">IDEA?</span>
          </h2>

          {/* Small Text */}
          <p className="text-xl sm:text-2xl text-[#8E95A2] font-sans font-light">
            Let's build something people remember.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center space-x-3 px-10 py-5 bg-[#FF4500] hover:bg-[#E63900] text-white font-mono text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-300"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
