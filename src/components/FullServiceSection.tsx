import React from 'react';

export const FullServiceSection: React.FC = () => {
  const processSteps = ['IDEA', 'DESIGN', 'PRODUCTION', 'PACKAGING', 'LOGISTICS'];

  return (
    <section className="py-32 sm:py-40 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Large Statement */}
        <div className="mb-24">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-3">
            PROCESS
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
            ONE PARTNER. <br />
            FROM IDEA <br />
            <span className="text-[#8E95A2]">TO DELIVERY.</span>
          </h2>
        </div>

        {/* Simple Horizontal Process Specification */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center font-mono text-xs text-center">
            {processSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="p-6 border border-white/10 rounded-xs space-y-2 hover:border-[#FF4500] transition-colors">
                  <div className="text-[#8E95A2]">0{idx + 1}</div>
                  <div className="text-white font-bold tracking-widest text-sm">{step}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
