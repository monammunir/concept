import React, { useState } from 'react';

export const ProcessSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      num: '01',
      title: 'CONCEPT & PLANNING',
      desc: 'Translating creative ideas into physical strategy, material selection, spatial design, and structural feasibility.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    },
    {
      num: '02',
      title: 'CUSTOM PRODUCTION',
      desc: 'In-house manufacturing of bespoke promotional products, custom vehicles, gaming hardware, and special builds.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
    },
    {
      num: '03',
      title: 'PACKAGING & LOGISTICS',
      desc: 'Custom engineered flight cases, high-bay warehousing in Simmern, automated kitting, and global freight dispatch.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    },
    {
      num: '04',
      title: 'FULL-SERVICE SOLUTIONS',
      desc: 'End-to-end execution including on-site event assembly, operator training, live support, and long-term storage.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="services" className="py-32 sm:py-40 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-3">
            SERVICES
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            OUR CAPABILITIES
          </h2>
        </div>

        {/* Clean Editorial Service List */}
        <div className="border-t border-white/10">
          {services.map((srv, idx) => (
            <div
              key={srv.num}
              onMouseEnter={() => setActiveService(idx)}
              onMouseLeave={() => setActiveService(null)}
              className="group py-12 border-b border-white/10 transition-colors duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-2 font-mono text-xl text-[#FF4500]">
                  {srv.num}
                </div>

                <div className="lg:col-span-6">
                  <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase group-hover:text-[#FF4500] transition-colors">
                    {srv.title}
                  </h3>
                </div>

                <div className="lg:col-span-4 text-sm font-sans font-light text-[#8E95A2] leading-relaxed">
                  {srv.desc}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
