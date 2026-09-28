import React from 'react';
import { MapPin, Calendar, Building2, ShieldCheck, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#0A0B0D] border-t border-white/10 overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Technical Label */}
        <div className="flex flex-wrap items-center justify-between font-mono text-xs text-[#8E95A2] pb-6 border-b border-white/10 mb-16 gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[#FF4500] font-bold">04 // COMPANY HISTORY</span>
            <span className="text-white">C-CONCEPTS VERTRIEBS GMBH</span>
          </div>
          <span>SIMMERN (WESTERWALD), GERMANY</span>
        </div>

        {/* Large Headline & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              30+ YEARS <br />
              OF MAKING <br />
              <span className="text-[#FF4500]">IDEAS REAL.</span>
            </h2>

            <div className="p-4 bg-[#121418] border-l-2 border-[#FF4500] font-mono text-xs text-[#E6E9EE]">
              "INNOVATIVE MARKETING CONCEPTS — MADE IN GERMANY SINCE 1993."
            </div>
          </div>

          {/* Right Column: Narrative Details */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            <p className="text-lg text-white font-light leading-relaxed">
              Founded in 1993, C-Concepts Vertriebs GmbH in Simmern (Westerwald) has established itself as a premier European creative engineering partner for promotional builds, custom vehicles, and brand activations.
            </p>
            <p className="text-sm text-[#8E95A2] leading-relaxed font-light">
              Unlike traditional marketing agencies that rely on outsourced catalog items, C-Concepts operates a 5,000 m² combined workshop, high-bay warehouse, and assembly facility. We handle every step under one roof — from 3D CAD modeling and precision metal fabrication to kitting, freight, and on-site event setup.
            </p>

            {/* Verified Facts List */}
            <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs text-[#E6E9EE]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#FF4500]" />
                <span>Headquarters & Logistics: Simmern (Westerwald), Germany</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-[#FF4500]" />
                <span>Founded: 1993 (30+ Years Active Operation)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-4 h-4 text-[#FF4500]" />
                <span>Facilities: 5,000 m² High-Bay Storage & CNC Workshop</span>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-[#121418] border border-white/15 rounded-xs font-mono">
          <div className="space-y-1">
            <div className="text-4xl font-extrabold text-white font-sans">1993</div>
            <div className="text-xs text-[#FF4500]">FOUNDING YEAR</div>
            <div className="text-[11px] text-[#8E95A2] font-sans font-light">30+ years of continuous engineering leadership</div>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="text-4xl font-extrabold text-white font-sans">3,500+</div>
            <div className="text-xs text-[#FF4500]">VERIFIED BUILDS</div>
            <div className="text-[11px] text-[#8E95A2] font-sans font-light">Custom vehicles, game rigs & POS displays</div>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="text-4xl font-extrabold text-white font-sans">5,000 m²</div>
            <div className="text-xs text-[#FF4500]">FACILITY SIZE</div>
            <div className="text-[11px] text-[#8E95A2] font-sans font-light">High-bay warehouse & manufacturing plant</div>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="text-4xl font-extrabold text-[#FF4500] font-sans">100%</div>
            <div className="text-xs text-white">IN-HOUSE CONTROL</div>
            <div className="text-[11px] text-[#8E95A2] font-sans font-light">From CAD drawing to event teardown</div>
          </div>
        </div>

      </div>
    </section>
  );
};
