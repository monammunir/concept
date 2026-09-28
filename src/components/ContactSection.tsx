import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-28 sm:py-36 bg-[#080A0E] text-white border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Copy & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
                KONTAKT & BERATUNG
              </span>
              <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
                SIE HABEN NOCH FRAGEN? <br />
                <span className="text-[#0077E6]">JETZT TERMIN VEREINBAREN!</span>
              </h2>
              <p className="text-base text-[#8E95A2] font-sans font-light leading-relaxed pt-2">
                Gemeinsam klären wir, was Sie mit Ihrer Werbung erreichen wollen. Wir entwickeln außergewöhnliche Konzepte ohne dabei Ihre Kosten aus dem Blick zu verlieren.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-white/10 font-sans text-sm">
              <div className="p-4 bg-[#0D0F14] border border-white/10 rounded-xs flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#0077E6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-xs font-mono">ANSCHRIFT</div>
                  <div className="text-[#E6E9EE]">
                    C-Concepts Vertriebs GmbH<br />
                    Im Maerenthal 6a<br />
                    56337 Simmern, Germany
                  </div>
                </div>
              </div>

              <a
                href="tel:026309637924"
                className="p-4 bg-[#0D0F14] border border-white/10 rounded-xs flex items-center space-x-4 hover:border-[#005496] transition-colors block"
              >
                <Phone className="w-5 h-5 text-[#0077E6] shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase text-xs font-mono">TELEFON</div>
                  <div className="text-[#E6E9EE] font-mono text-sm">+49 (0) 2630 96379-24</div>
                </div>
              </a>

              <a
                href="mailto:info@cconcepts.de"
                className="p-4 bg-[#0D0F14] border border-white/10 rounded-xs flex items-center space-x-4 hover:border-[#005496] transition-colors block"
              >
                <Mail className="w-5 h-5 text-[#0077E6] shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase text-xs font-mono">E-MAIL</div>
                  <div className="text-[#E6E9EE] font-mono text-sm">info@cconcepts.de</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D0F14] border border-white/10 p-8 sm:p-10 rounded-xs shadow-2xl space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#0077E6] mx-auto" />
                  <h3 className="font-sans font-extrabold text-2xl uppercase text-white">Vielen Dank für Ihre Nachricht!</h3>
                  <p className="text-sm text-[#8E95A2] max-w-md mx-auto">
                    Wir haben Ihre Anfrage erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase rounded-xs"
                  >
                    NEUE NACHRICHT SENDEN
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-sans font-extrabold text-2xl text-white uppercase tracking-tight">
                    TERMIN & ANFRAGE FORMULAR
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#8E95A2] uppercase tracking-wider block">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ihr vollständiger Name"
                        className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xs text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#8E95A2] uppercase tracking-wider block">
                        E-MAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.email@firma.de"
                        className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xs text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#8E95A2] uppercase tracking-wider block">
                      TELEFON
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 (0) ..."
                      className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xs text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#8E95A2] uppercase tracking-wider block">
                      NACHRICHT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben, benötigte Stückzahlen oder Wünsche..."
                      className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xs text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#005496] rounded-xs w-4 h-4"
                    />
                    <label htmlFor="consent" className="text-xs text-[#8E95A2] font-sans leading-relaxed cursor-pointer">
                      Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-[#005496] hover:bg-[#0066C2] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300 shadow-lg shadow-[#005496]/20 cursor-pointer"
                  >
                    <span>SENDEN</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
