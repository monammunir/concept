import React from 'react';
import { CLIENT_LOGOS } from '../data/projectsData';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="relative py-20 bg-[#0A0B0D] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label */}
        <div className="flex items-center justify-between font-mono text-xs text-[#8E95A2] pb-6 border-b border-white/10 mb-12">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-white font-bold tracking-widest">TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <span>30+ YEARS OF PARTNERSHIP</span>
        </div>

        {/* Minimalist Monochrome Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="group p-6 bg-[#121418]/60 border border-white/10 hover:border-[#FF4500]/50 rounded-xs transition-all duration-300 flex flex-col justify-between h-32 hover:bg-[#121418]"
            >
              <div className="font-mono text-[10px] text-[#8E95A2] group-hover:text-[#FF4500] transition-colors">
                // {client.industry}
              </div>

              <div className="font-sans font-black text-xl sm:text-2xl tracking-tighter text-[#8E95A2] group-hover:text-white transition-colors uppercase">
                {client.name}
              </div>

              <div className="w-full h-[1px] bg-white/5 group-hover:bg-[#FF4500]/40 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
