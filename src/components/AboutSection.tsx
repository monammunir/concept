import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 sm:py-40 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Large Editorial Headline */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-3">
            ABOUT C-CONCEPTS
          </span>
          <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            MADE IN <br />
            GERMANY. <br />
            <span className="text-[#8E95A2]">BUILT FOR IDEAS.</span>
          </h2>
        </div>

        {/* Large Workshop / Facility Image & Verified Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 aspect-[16/9] w-full rounded-xs overflow-hidden bg-[#121418]">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600"
              alt="C-Concepts Workshop & Manufacturing Facility"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>

          <div className="lg:col-span-4 space-y-6 font-sans">
            <p className="text-lg text-white font-light leading-relaxed">
              Founded in 1993, C-Concepts Vertriebs GmbH in Simmern (Westerwald) specializes in custom promotional products, bespoke constructions, event promotions, and full-service logistics.
            </p>
            <p className="text-sm text-[#8E95A2] font-light leading-relaxed">
              With over 30 years of operational experience, our team combines 3D CAD design, precision manufacturing, packaging, and high-bay warehousing under one roof — serving leading European brands with total quality control.
            </p>

            <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#8E95A2] space-y-1">
              <div>LOCATION: SIMMERN (WESTERWALD), GERMANY</div>
              <div>FOUNDED: 1993</div>
              <div>FACILITY: 5,000 M² HIGH-BAY STORAGE & WORKSHOP</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
