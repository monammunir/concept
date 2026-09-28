import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Send } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectConfiguratorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    category: 'Promotion-Fahrzeug / Mofa',
    features: ['Individuelles Firmen-Branding', 'Konfektionierung & Verpackung'],
    timeline: '4-6 Wochen',
    budget: '€10.000 - €25.000',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  if (!isOpen) return null;

  const categories = [
    'Promotion-Fahrzeug / Mofa',
    'Interaktive Game & POS-Unit',
    'Sonderanfertigung & Konstruktion',
    'Verpackung & Konfektionierung',
    'Full-Service Tournee-Logistik',
    'Sonstige Marketing-Maßnahme',
  ];

  const featureOptions = [
    '3D CAD-Entwurf & Visualisierung',
    'Präzisions-Metall- & Holzbau',
    'Integrierte Kühlung & Elektronik',
    'Spezial-Verpackung & Transportkisten',
    'Lagerung im Hochregallager Simmern',
    'Point-of-Sale Logistik & Anlieferung',
  ];

  const handleToggleFeature = (feat: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0A0B0D] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0D0F14]/90 text-xs text-[#8E95A2] backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#005496] animate-pulse" />
            <span className="text-white font-bold">C-CONCEPTS PROJEKT-ANFRAGE</span>
            <span className="text-white/20">|</span>
            <span className="text-[#0077E6] font-semibold">SCHRITT 0{step} VON 03</span>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 text-[#8E95A2] hover:text-white hover:bg-white/10 rounded-xl transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <span className="text-xs uppercase font-semibold hidden sm:inline">SCHLIESSEN [ESC]</span>
            <X className="w-5 h-5 text-[#0077E6]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#005496]/20 border border-[#005496] text-[#0077E6] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,84,150,0.4)]">
                <CheckCircle2 className="w-8 h-8 text-[#0077E6]" />
              </div>

              <h2 className="font-extrabold text-3xl sm:text-4xl text-white uppercase">
                ANFRAGE ERFOLGREICH ÜBERMITTELT
              </h2>

              <p className="text-[#8E95A2] text-base max-w-md mx-auto leading-relaxed">
                Vielen Dank, <span className="text-white font-semibold">{formData.name || 'Partner'}</span>. Unser Experten-Team in Simmern (Westerwald) wird Ihre Angaben prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.
              </p>

              <div className="p-6 bg-[#111318]/70 border border-white/10 rounded-xl max-w-md mx-auto text-left text-xs text-[#8E95A2] space-y-2">
                <div className="text-white font-bold border-b border-white/10 pb-2 uppercase tracking-wider">
                  ZUSAMMENFASSUNG:
                </div>
                <div>PROJEKT-KATEGORIE: <span className="text-[#0077E6] font-semibold">{formData.category}</span></div>
                <div>ZEITRAUM: <span className="text-white">{formData.timeline}</span></div>
                <div>GEWÄHLTE OPTIONEN: <span className="text-white">{formData.features.join(', ')}</span></div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-8 py-3.5 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg cursor-pointer"
              >
                ZURÜCK ZUR WEBSITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: CATEGORY SELECTION */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block mb-1">
                      SCHRITT 01 // KATEGORIE
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-white uppercase">
                      WELCHE PROMOTION-IDEE MÖCHTEN SIE UMSETZEN?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((cat) => {
                      const isSelected = formData.category === cat;
                      return (
                        <div
                          key={cat}
                          onClick={() => setFormData((prev) => ({ ...prev, category: cat }))}
                          className={`p-4 rounded-xl border cursor-pointer text-xs transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#111318] border-[#005496] text-white shadow-[0_0_15px_rgba(0,84,150,0.25)]'
                              : 'bg-[#111318]/60 border-white/10 text-[#8E95A2] hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span className="font-bold">{cat}</span>
                          <div className={`w-3.5 h-3.5 rounded-full border ${isSelected ? 'bg-[#005496] border-[#0077E6]' : 'border-white/20'}`} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3.5 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center space-x-2 cursor-pointer shadow-lg"
                    >
                      <span>WEITER: ANFORDERUNGEN</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: REQUIREMENTS & FEATURES */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block mb-1">
                      SCHRITT 02 // SERVICES & BAUSTEINE
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-white uppercase">
                      BENÖTIGTE LEISTUNGEN AUSWÄHLEN
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featureOptions.map((feat) => {
                      const isChecked = formData.features.includes(feat);
                      return (
                        <div
                          key={feat}
                          onClick={() => handleToggleFeature(feat)}
                          className={`p-4 rounded-xl border cursor-pointer text-xs transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-[#111318] border-[#005496] text-white'
                              : 'bg-[#111318]/60 border-white/10 text-[#8E95A2] hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span>{feat}</span>
                          <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-[#0077E6]' : 'text-white/20'}`} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">GEPLANTER ZEITRAUM</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none"
                      >
                        <option value="Dringend (1-3 Wochen)">Dringend (1-3 Wochen)</option>
                        <option value="Standard (4-6 Wochen)">Standard (4-6 Wochen)</option>
                        <option value="Flexibel (8+ Wochen)">Flexibel (8+ Wochen)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">GEPLANTES BUDGET</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none"
                      >
                        <option value="€5.000 - €10.000">€5.000 - €10.000</option>
                        <option value="€10.000 - €25.000">€10.000 - €25.000</option>
                        <option value="€25.000 - €50.000">€25.000 - €50.000</option>
                        <option value="€50.000+">€50.000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 bg-[#111318] text-[#8E95A2] text-xs tracking-wider uppercase rounded-xl border border-white/10 hover:text-white cursor-pointer"
                    >
                      ZURÜCK
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3.5 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center space-x-2 cursor-pointer shadow-lg"
                    >
                      <span>WEITER: KONTAKT</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-[#0077E6] tracking-widest uppercase font-semibold block mb-1">
                      SCHRITT 03 // KONTAKTANGABEN
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-white uppercase">
                      AN WEN DÜRFEN WIR DAS ANGEBOT SENDEN?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">IHR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="z.B. Max Mustermann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">UNTERNEHMEN / MARKE *</label>
                      <input
                        type="text"
                        required
                        placeholder="z.B. Firmenname GmbH"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">E-MAIL ADRESSE *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@firma.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">TELEFONNUMMER</label>
                      <input
                        type="tel"
                        placeholder="+49 (0) ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none"
                      />
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block text-[#8E95A2] mb-1 uppercase font-semibold">PROJEKT-BESCHREIBUNG & DETAILS</label>
                    <textarea
                      rows={3}
                      placeholder="Beschreiben Sie kurz Ihre Vorstellungen, Stückzahlen oder Terminwünsche..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#0A0B0D] border border-white/10 text-white rounded-xl focus:border-[#005496] outline-none text-sm font-light"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="modalConsent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#005496] rounded-md w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="modalConsent" className="text-xs text-[#8E95A2] leading-relaxed cursor-pointer">
                      Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden, dass meine Daten verarbeitet werden.
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 bg-[#111318] text-[#8E95A2] text-xs tracking-wider uppercase rounded-xl border border-white/10 hover:text-white cursor-pointer"
                    >
                      ZURÜCK
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#005496] hover:bg-[#0066C2] text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center space-x-2 shadow-lg cursor-pointer"
                    >
                      <span>ANFRAGE ABSENDEN</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
