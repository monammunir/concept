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
    <section id="kontakt" className="py-28 sm:py-36 bg-[#080A0E] text-white border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Copy & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block">
                KONTAKT & BERATUNG
              </span>
              <h2 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
                SIE HABEN NOCH FRAGEN? <br />
                <span className="text-[#0077E6]">JETZT TERMIN VEREINBAREN!</span>
              </h2>
              <p className="text-base text-[#8E95A2] font-light leading-relaxed pt-2">
                Gemeinsam klären wir, was Sie mit Ihrer Werbung erreichen wollen. Wir entwickeln außergewöhnliche Konzepte ohne dabei Ihre Kosten aus dem Blick zu verlieren.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="p-4 bg-[#111318]/70 border border-white/10 rounded-xl flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#0077E6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">ANSCHRIFT</div>
                  <div className="text-[#E6E9EE] pt-1 leading-relaxed">
                    C-Concepts Vertriebs GmbH<br />
                    Im Maerenthal 6a<br />
                    56337 Simmern, Germany
                  </div>
                </div>
              </div>

              <a
                href="tel:026309637924"
                className="p-4 bg-[#111318]/70 border border-white/10 rounded-xl flex items-center space-x-4 hover:border-[#005496]/60 transition-colors block"
              >
                <Phone className="w-5 h-5 text-[#0077E6] shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">TELEFON</div>
                  <div className="text-[#E6E9EE] text-sm font-semibold">+49 (0) 2630 96379-24</div>
                </div>
              </a>

              <a
                href="mailto:info@cconcepts.de"
                className="p-4 bg-[#111318]/70 border border-white/10 rounded-xl flex items-center space-x-4 hover:border-[#005496]/60 transition-colors block"
              >
                <Mail className="w-5 h-5 text-[#0077E6] shrink-0" />
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">E-MAIL</div>
                  <div className="text-[#E6E9EE] text-sm font-semibold">info@cconcepts.de</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111318]/80 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#0077E6] mx-auto" />
                  <h3 className="font-extrabold text-2xl uppercase text-white">Vielen Dank für Ihre Nachricht!</h3>
                  <p className="text-sm text-[#8E95A2] max-w-md mx-auto">
                    Wir haben Ihre Anfrage erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-bold tracking-widest rounded-xl cursor-pointer"
                  >
                    NEUE NACHRICHT SENDEN
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-extrabold text-2xl text-white uppercase tracking-tight">
                    TERMIN & ANFRAGE FORMULAR
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-[#8E95A2] uppercase tracking-wider font-semibold block">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ihr vollständiger Name"
                        className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xl text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-[#8E95A2] uppercase tracking-wider font-semibold block">
                        E-MAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.email@firma.de"
                        className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xl text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-[#8E95A2] uppercase tracking-wider font-semibold block">
                      TELEFON
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 (0) ..."
                      className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xl text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-[#8E95A2] uppercase tracking-wider font-semibold block">
                      NACHRICHT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben, benötigte Stückzahlen oder Wünsche..."
                      className="w-full px-4 py-3.5 bg-[#0A0B0D] border border-white/15 focus:border-[#005496] rounded-xl text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#005496] rounded-md w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs text-[#8E95A2] leading-relaxed cursor-pointer">
                      Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg shadow-[#005496]/20 cursor-pointer"
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
