import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-32 sm:py-40 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-10">
          
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95]">
            FROM IDEA <br />
            <span className="text-[#8E95A2]">TO REALITY.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#E6E9EE] font-sans font-light leading-relaxed max-w-3xl">
            C-Concepts develops innovative promotional products, custom constructions, event solutions and complete production services — from concept and design through production, packaging and logistics.
          </p>

        </div>
      </div>
    </section>
  );
};
