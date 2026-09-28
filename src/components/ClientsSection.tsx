import React from 'react';
import { CLIENT_LOGOS } from '../data/projectsData';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Minimal Label */}
        <div className="font-mono text-xs text-[#8E95A2] tracking-widest uppercase mb-12">
          TRUSTED BY
        </div>

        {/* Clean Horizontal Monochrome List */}
        <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 py-6 border-y border-white/10">
          {CLIENT_LOGOS.map((client) => (
            <span
              key={client.name}
              className="font-sans font-black text-xl sm:text-2xl text-[#8E95A2] hover:text-white transition-colors tracking-tight uppercase"
            >
              {client.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
