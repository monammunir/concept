import React from 'react';
import { Shield, Wrench, Package, Truck, Award } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#0A0B0D] text-white overflow-hidden border-t border-white/10 bg-tech-dots">
      {/* Blueprint Grid Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Code */}
        <div className="flex items-center justify-between font-mono text-xs text-[#8E95A2] pb-8 border-b border-white/10 mb-16">
          <span className="text-[#FF4500]">01 // OVERVIEW</span>
          <span>CREATIVE ENGINEERING & PRODUCTION</span>
          <span>MADE IN GERMANY</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase">
              FROM THE FIRST <br />
              <span className="text-[#8E95A2]">SKETCH</span> <br />
              TO THE <br />
              <span className="text-[#FF4500]">FINAL PRODUCT.</span>
            </h2>
          </div>

          {/* Right Column: Statement & Key Pillars */}
          <div className="lg:col-span-4 space-y-8 lg:pt-4">
            <p className="text-xl sm:text-2xl font-light text-[#E6E9EE] leading-relaxed">
              C-Concepts develops and produces custom promotional products, bespoke constructions, event experiences, brand packaging, and complete turn-key solutions.
            </p>
            <p className="text-sm font-mono text-[#8E95A2] leading-relaxed">
              We bridge the gap between abstract creative vision and physical manufacturing. Since 1993, our in-house engineering studio and production facility in Simmern have transformed bold concepts into high-precision, real-world experiences.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#8E95A2]">
                <span>FACILITY AREA:</span>
                <span className="text-white">5,000 m² High-Bay Storage & Workshop</span>
              </div>
              <div className="flex items-center justify-between text-[#8E95A2]">
                <span>IN-HOUSE DEPTS:</span>
                <span className="text-white">CAD / CNC / Welding / Assembly / Kitting</span>
              </div>
              <div className="flex items-center justify-between text-[#8E95A2]">
                <span>SERVICE REGION:</span>
                <span className="text-white">Germany, Austria, Switzerland & EU-Wide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
          {[
            {
              num: '01',
              title: 'CUSTOM BUILDS',
              desc: 'One-off promotional vehicles, gaming hardware, and custom interactive structures designed from zero.',
              icon: Wrench,
            },
            {
              num: '02',
              title: 'PROMOTIONAL ITEMS',
              desc: 'Bespoke marketing giveaways and premium merchandise that exceed off-the-shelf catalog standards.',
              icon: Package,
            },
            {
              num: '03',
              title: 'EVENT EXPERIENCES',
              desc: 'Point-of-sale setups, exhibition stands, VIP hospitality rigs, and roadshow installations.',
              icon: Award,
            },
            {
              num: '04',
              title: 'FULL LOGISTICS',
              desc: 'High-bay storage, automated assembly, packaging, and synchronized transport to event venues.',
              icon: Truck,
            },
          ].map((item) => (
            <div
              key={item.num}
              className="group p-6 bg-[#121418] border border-white/10 hover:border-[#FF4500]/50 rounded-xs transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[#8E95A2] mb-6">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">{item.num}</span>
                <item.icon className="w-5 h-5 text-[#8E95A2] group-hover:text-[#FF4500] transition-colors" />
              </div>

              <h3 className="font-sans font-bold text-xl text-white mb-2 tracking-wide uppercase group-hover:text-[#FF4500] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#8E95A2] leading-relaxed font-sans font-light">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4500] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
