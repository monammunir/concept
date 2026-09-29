import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id="kontakt" className="py-28 sm:py-36 bg-white text-[#0F172A] border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Copy & Direct Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs text-[#005496] tracking-widest uppercase font-semibold block">
                KONTAKT & BERATUNG
              </span>
              
              <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight uppercase leading-[0.95]">
                LASSEN SIE UNS <br />
                <span className="text-[#005496]">ETWAS BESONDERES </span> <br />
                UMSETZEN.
              </h2>

              <p className="text-base text-slate-600 font-light leading-relaxed pt-2">
                Gemeinsam klären wir, was Sie mit Ihrer Werbung erreichen wollen. Wir entwickeln außergewöhnliche Konzepte ohne dabei Ihre Kosten aus dem Blick zu verlieren.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-slate-200/80 text-sm">
              <div className="p-4 bg-[#F7F8FA] border border-slate-200/80 rounded-xl flex items-start space-x-4 shadow-xs">
                <MapPin className="w-5 h-5 text-[#005496] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F172A] uppercase text-xs tracking-wider">ANSCHRIFT</div>
                  <div className="text-slate-600 pt-1 leading-relaxed text-xs">
                    C-Concepts Vertriebs GmbH<br />
                    Im Maerenthal 6a<br />
                    56337 Simmern, Germany
                  </div>
                </div>
              </div>

              <a
                href="tel:026309637924"
                className="p-4 bg-[#F7F8FA] border border-slate-200/80 rounded-xl flex items-center space-x-4 hover:border-[#005496]/70 shadow-xs transition-colors block group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#005496] shrink-0" />
                <div>
                  <div className="font-bold text-[#0F172A] uppercase text-xs tracking-wider">TELEFON</div>
                  <div className="text-slate-800 text-sm font-semibold group-hover:text-[#005496] transition-colors">+49 (0) 2630 96379-24</div>
                </div>
              </a>

              <a
                href="mailto:info@cconcepts.de"
                className="p-4 bg-[#F7F8FA] border border-slate-200/80 rounded-xl flex items-center space-x-4 hover:border-[#005496]/70 shadow-xs transition-colors block group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-[#005496] shrink-0" />
                <div>
                  <div className="font-bold text-[#0F172A] uppercase text-xs tracking-wider">E-MAIL</div>
                  <div className="text-slate-800 text-sm font-semibold group-hover:text-[#005496] transition-colors">info@cconcepts.de</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F7F8FA] border border-slate-200/80 p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#005496] mx-auto" />
                  <h3 className="font-extrabold text-2xl uppercase text-[#0F172A]">Vielen Dank für Ihre Nachricht!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Wir haben Ihre Anfrage erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 text-xs uppercase font-bold tracking-widest rounded-xl cursor-pointer border border-slate-200"
                  >
                    NEUE NACHRICHT SENDEN
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-extrabold text-2xl text-[#0F172A] uppercase tracking-tight">
                    TERMIN VEREINBAREN
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ihr vollständiger Name"
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#005496] rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">
                        E-MAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.email@firma.de"
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#005496] rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">
                      TELEFON
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 (0) ..."
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#005496] rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">
                      NACHRICHT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben, benötigte Stückzahlen oder Wünsche..."
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#005496] rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none transition-colors"
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
                    <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                      Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-[#005496] hover:bg-[#003B6D] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-500 shadow-lg shadow-[#005496]/20 hover:shadow-2xl hover:shadow-[#005496]/40 cursor-pointer"
                  >
                    <span>TERMIN VEREINBAREN</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
