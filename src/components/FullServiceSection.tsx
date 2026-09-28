import React, { useState } from 'react';
import { Layers, ShieldCheck, Box, Compass, Truck, Flame, Wrench, Check } from 'lucide-react';

export const FullServiceSection: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState(0);

  const capabilities = [
    {
      title: 'CONCEPT & FEASIBILITY',
      short: 'CONCEPT',
      description: 'Comprehensive analysis of creative concepts. We evaluate structural loads, weight constraints, transportability, and material feasibility before initial modeling.',
      icon: Compass,
      specs: ['Initial CAD Sketches', 'Budget Optimization', 'Material Feasibility', 'Kinematic Studies'],
    },
    {
      title: '3D CAD & SURFACE DESIGN',
      short: 'DESIGN',
      description: 'SolidWorks parametric 3D CAD modeling with exact surface curvature, ergonomic interaction points, and photorealistic KeyShot renderings for client approval.',
      icon: Layers,
      specs: ['SolidWorks 3D CAD', 'Surface Modeling', 'KeyShot Photoreal Renders', 'Tolerancing (ISO 2768)'],
    },
    {
      title: 'PRECISION METAL & PLASTICS',
      short: 'ENGINEERING',
      description: 'In-house manufacturing using 5-axis CNC milling machines, TIG/MIG welding, fiber laser cutting, thermoforming, and specialized composite layups.',
      icon: Wrench,
      specs: ['5-Axis CNC Milling', 'TIG / MIG Welding', 'Fiber Laser Cutting', 'Composite Moldings'],
    },
    {
      title: 'SPECIALIST ELECTRONICS & LIGHTING',
      short: 'ELECTRONICS',
      description: 'Integrating custom microcontrollers, programmable RGBW LED arrays, tactile audio-visual sensors, sound systems, and high-capacity battery units.',
      icon: Flame,
      specs: ['Custom PCB / Microcontrollers', 'IP67 Weatherproof LEDs', 'Telemetry Sensors', 'Power Distribution'],
    },
    {
      title: 'CUSTOM PACKAGING & FLIGHT CASES',
      short: 'PACKAGING',
      description: 'Engineered transport protection designed for repeated tour assembly. Heavy-duty flight cases with custom CNC-routed foam inserts.',
      icon: Box,
      specs: ['Custom Flight Cases', 'CNC Foam Inserts', 'Euro-Pallet Compatibility', 'Vibration Damping'],
    },
    {
      title: 'HIGH-BAY WAREHOUSING & LOGISTICS',
      short: 'LOGISTICS',
      description: 'Our 5,000m² facility in Simmern acts as a central European logistics hub, offering inventory management, storage, and direct venue dispatch.',
      icon: Truck,
      specs: ['5,000m² Storage Hub', 'Inventory Tracking', 'Euro Freight Logistics', 'Express Venue Dispatch'],
    },
    {
      title: 'ON-SITE EVENT INSTALLATION',
      short: 'INSTALLATION',
      description: 'Experienced technician crews deployed directly to trade fairs, promotional venues, and sports arenas for rapid assembly and electrical check.',
      icon: ShieldCheck,
      specs: ['Certified Install Crew', 'Fast-Track Setup', 'Safety Sign-off', 'On-Call Event Support'],
    },
    {
      title: 'MAINTENANCE & REFURBISHMENT',
      short: 'MAINTENANCE',
      description: 'Post-event inspection, deep cleaning, component replacement, vinyl wrap updates, and long-term asset preservation between marketing tours.',
      icon: Check,
      specs: ['Post-Tour Overhaul', 'Re-Branding Updates', 'Long-Term Storage', 'Asset Preservation'],
    },
  ];

  const active = capabilities[selectedCapability];

  return (
    <section id="services" className="relative py-28 bg-[#0A0B0D] border-t border-white/10 overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Code */}
        <div className="flex flex-wrap items-center justify-between font-mono text-xs text-[#8E95A2] pb-6 border-b border-white/10 mb-16 gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[#FF4500] font-bold">03 // FULL SERVICE</span>
            <span className="text-white">END-TO-END CAPABILITIES</span>
          </div>
          <span>SINGLE POINT OF CONTACT</span>
        </div>

        {/* Headline */}
        <div className="mb-16">
          <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.92]">
            ONE PARTNER. <br />
            <span className="text-[#FF4500]">THE COMPLETE PROCESS.</span>
          </h2>
        </div>

        {/* Technical Capabilities Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Technical Stage Selector Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {capabilities.map((cap, idx) => {
              const isSelected = selectedCapability === idx;
              const IconComp = cap.icon;
              return (
                <button
                  key={cap.short}
                  onClick={() => setSelectedCapability(idx)}
                  className={`w-full p-4 rounded-xs border text-left transition-all duration-300 flex items-center justify-between font-mono text-xs ${
                    isSelected
                      ? 'bg-[#121418] border-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.2)]'
                      : 'bg-[#121418]/60 border-white/10 text-[#8E95A2] hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#FF4500]' : 'text-[#8E95A2]'}`} />
                    <span className="font-bold tracking-wider">{cap.title}</span>
                  </div>
                  <span className={`text-[10px] ${isSelected ? 'text-[#FF4500]' : 'text-white/30'}`}>
                    [0{idx + 1}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Inspection Panel */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/15 rounded-xs p-8 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl">
            {/* Tech Corner Annotation */}
            <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 text-[#8E95A2]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                <span className="text-white font-bold">CAPABILITY_INSPECTOR</span>
              </div>
              <span className="text-[#FF4500]">0{selectedCapability + 1} / 08</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                {active.title}
              </h3>
              <p className="text-base text-[#8E95A2] font-sans font-light leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Technical Parameters Checklist */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="font-mono text-xs text-[#FF4500] font-bold uppercase">
                DELIVERABLES & STANDARDS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#E6E9EE]">
                {active.specs.map((item) => (
                  <div key={item} className="flex items-center space-x-2.5 p-2 bg-[#0A0B0D] border border-white/5 rounded-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-House Manufacturing Guarantee Banner */}
            <div className="p-4 bg-[#0A0B0D] border border-white/10 rounded-xs flex items-center justify-between font-mono text-xs text-[#8E95A2]">
              <span>SIMMERN HQ FACILITY:</span>
              <span className="text-white font-semibold">100% IN-HOUSE QUALITY ASSURANCE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
