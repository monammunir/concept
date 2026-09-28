import React from 'react';
import { Users, UserCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const leadership = [
    {
      name: 'Andreas Sauer',
      role: 'Geschäftsführer & Gründer',
      description: 'Verantwortlich für Strategie, Kundenberatung und Produktkonzepte seit 1993.'
    },
    {
      name: 'Ralf Weisbrod',
      role: 'Geschäftsführer & Gründer',
      description: 'Experte für Produktion, Logistik und Konfektionierung im Full-Service.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#080A0E] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#0077E6] tracking-widest uppercase font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>PERSÖNLICHE BETREUUNG</span>
          </div>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
            UNSER EXPERTEN-TEAM
          </h2>
          <p className="text-base sm:text-lg text-[#E6E9EE] font-sans font-light leading-relaxed">
            Durch unsere langjährige Erfahrung und unserem engen Kundenkontakt wissen wir, worauf es ankommt. Unsere Mitarbeiter nehmen sich Zeit für Sie. Denn wir haben es uns zum Ziel gesetzt, Ihren Kundenwunsch zur vollsten Zufriedenheit umzusetzen.
          </p>
          <p className="text-sm font-mono text-[#0077E6] font-semibold pt-1">
            Unser Team besteht derzeit aus fünf Mitarbeitern und zwei Geschäftsführern.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="p-8 bg-[#0D0F14] border border-white/10 rounded-xs space-y-4 hover:border-[#005496] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#005496]/20 border border-[#005496]/40 flex items-center justify-center text-[#0077E6]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-white uppercase">{member.name}</h3>
                  <div className="font-mono text-xs text-[#0077E6] font-bold uppercase">{member.role}</div>
                </div>
              </div>
              <p className="text-sm text-[#8E95A2] font-sans font-light leading-relaxed pt-2 border-t border-white/10">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
