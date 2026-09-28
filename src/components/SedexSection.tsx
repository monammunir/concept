import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const SedexSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0B0D] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 bg-[#0D0F14] border border-white/10 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Logo / Badge */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <div className="inline-flex items-center space-x-2 font-mono text-[10px] text-[#0077E6] tracking-widest uppercase font-bold px-3 py-1 bg-[#005496]/10 border border-[#005496]/20 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ZERTIFIZIERUNG & VERANTWORTUNG</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xs w-full max-w-xs flex items-center justify-center">
              <img
                src="/images/sedex-logo.png"
                alt="Sedex Member Logo"
                className="max-h-16 w-auto object-contain filter contrast-120"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              C-CONCEPTS: MITGLIED UND PARTNER BEI SEDEX.
            </h3>
            <p className="text-sm sm:text-base text-[#E6E9EE] font-sans font-light leading-relaxed">
              Sedex bietet Mitgliedsunternehmen eine sichere Online-Plattform für den Austausch und die Verwaltung von Informationen zu vier wichtigen Säulen: Gesundheit und Sicherheit, Arbeitsnormen, Unternehmensethik und Umwelt.
            </p>
            <p className="text-xs sm:text-sm text-[#8E95A2] font-sans font-light leading-relaxed">
              Die Mitgliedschaft bei Sedex ist ein Zeichen für die Bereitschaft von C-Concepts, Informationen auszutauschen und diese Informationen zu nutzen, um ethische Standards in der Lieferkette zu verwalten und zu verbessern.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
