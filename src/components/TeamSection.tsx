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
    <section className="py-24 sm:py-32 bg-[#080A0E] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs text-[#0077E6] tracking-widest uppercase font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>PERSÖNLICHE BETREUUNG</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
            UNSER EXPERTEN-TEAM
          </h2>
          <p className="text-base sm:text-lg text-[#E6E9EE] font-light leading-relaxed">
            Durch unsere langjährige Erfahrung und unserem engen Kundenkontakt wissen wir, worauf es ankommt. Unsere Mitarbeiter nehmen sich Zeit für Sie. Denn wir haben es uns zum Ziel gesetzt, Ihren Kundenwunsch zur vollsten Zufriedenheit umzusetzen.
          </p>
          <p className="text-xs font-semibold text-[#0077E6] pt-1 uppercase tracking-wider">
            Unser Team besteht derzeit aus fünf Mitarbeitern und zwei Geschäftsführern.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="p-8 bg-[#111318]/70 border border-white/10 rounded-2xl space-y-4 hover:border-[#005496]/60 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#005496]/20 border border-[#005496]/40 flex items-center justify-center text-[#0077E6]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white uppercase">{member.name}</h3>
                  <div className="text-xs text-[#0077E6] font-bold uppercase tracking-wider">{member.role}</div>
                </div>
              </div>
              <p className="text-sm text-[#8E95A2] font-light leading-relaxed pt-2 border-t border-white/10">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
