import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Send, Cpu, ShieldCheck } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectConfiguratorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    category: 'Custom Promotional Vehicle',
    features: ['3D CAD Modeling', 'Precision Metalwork'],
    timeline: '4-6 Weeks',
    budget: '€10k - €25k',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const categories = [
    'Custom Promotional Vehicle',
    'Interactive Game & POS Unit',
    'Special Build / Architecture',
    'Custom Packaging & Kitting',
    'Full Tour & Event Activation',
    'Other Sonderanfertigung',
  ];

  const featureOptions = [
    '3D CAD Modeling & Rendering',
    'Precision Metal & CNC Milling',
    'Custom Electronics & RGB LED',
    'Custom Flight Case Packaging',
    'Simmern Storage & Logistics',
    'On-Site Event Crew Setup',
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
        className="relative w-full max-w-4xl bg-[#0A0B0D] border border-white/20 rounded-xs shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#121418]/90 font-mono text-xs text-[#8E95A2] backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
            <span className="text-white font-bold">PROJECT CONFIGURATOR</span>
            <span className="text-white/20">|</span>
            <span className="text-[#FF4500]">STEP 0{step} OF 03</span>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 text-[#8E95A2] hover:text-white hover:bg-white/10 rounded-xs transition-colors flex items-center space-x-1"
          >
            <span className="font-mono text-xs uppercase hidden sm:inline">CLOSE [ESC]</span>
            <X className="w-5 h-5 text-[#FF4500]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#FF4500]/20 border border-[#FF4500] text-[#FF4500] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,69,0,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white uppercase">
                SPECIFICATION RECEIVED
              </h2>

              <p className="text-[#8E95A2] font-sans text-base max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name || 'Partner'}</span>. Our engineering director in Simmern (Westerwald) will review your CAD parameters and respond within 24 hours.
              </p>

              <div className="p-6 bg-[#121418] border border-white/10 rounded-xs max-w-md mx-auto text-left font-mono text-xs text-[#8E95A2] space-y-2">
                <div className="text-white font-bold border-b border-white/10 pb-2">
                  SUMMARY SPECIFICATION:
                </div>
                <div>PROJECT TYPE: <span className="text-[#FF4500]">{formData.category}</span></div>
                <div>TIMELINE: <span className="text-white">{formData.timeline}</span></div>
                <div>SELECTED FEATURES: <span className="text-white">{formData.features.join(', ')}</span></div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-8 py-3 bg-[#FF4500] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs shadow-[0_0_20px_rgba(255,69,0,0.4)]"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 font-sans">
              
              {/* STEP 1: CATEGORY SELECTION */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-1">
                      STEP 01 // CATEGORY
                    </span>
                    <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white uppercase">
                      WHAT ARE WE BUILDING?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((cat) => {
                      const isSelected = formData.category === cat;
                      return (
                        <div
                          key={cat}
                          onClick={() => setFormData((prev) => ({ ...prev, category: cat }))}
                          className={`p-4 rounded-xs border cursor-pointer font-mono text-xs transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#121418] border-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.25)]'
                              : 'bg-[#121418]/60 border-white/10 text-[#8E95A2] hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span className="font-bold">{cat}</span>
                          <div className={`w-3 h-3 rounded-full border ${isSelected ? 'bg-[#FF4500] border-[#FF4500]' : 'border-white/20'}`} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#FF4500] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs flex items-center space-x-2 shadow-[0_0_20px_rgba(255,69,0,0.3)]"
                    >
                      <span>NEXT: REQUIREMENTS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: REQUIREMENTS & FEATURES */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-1">
                      STEP 02 // TECHNICAL REQUIREMENTS
                    </span>
                    <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white uppercase">
                      SELECT IN-HOUSE SERVICES
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featureOptions.map((feat) => {
                      const isChecked = formData.features.includes(feat);
                      return (
                        <div
                          key={feat}
                          onClick={() => handleToggleFeature(feat)}
                          className={`p-4 rounded-xs border cursor-pointer font-mono text-xs transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-[#121418] border-[#FF4500] text-white'
                              : 'bg-[#121418]/60 border-white/10 text-[#8E95A2] hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span>{feat}</span>
                          <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-[#FF4500]' : 'text-white/20'}`} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase">TARGET TIMELINE</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none"
                      >
                        <option value="Urgent (1-3 Weeks)">Urgent (1-3 Weeks)</option>
                        <option value="Standard (4-6 Weeks)">Standard (4-6 Weeks)</option>
                        <option value="Flexible (8+ Weeks)">Flexible (8+ Weeks)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase">ESTIMATED BUDGET</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none"
                      >
                        <option value="€5k - €10k">€5,000 - €10,000</option>
                        <option value="€10k - €25k">€10,000 - €25,000</option>
                        <option value="€25k - €50k">€25,000 - €50,000</option>
                        <option value="€50k+">€50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 bg-[#121418] text-[#8E95A2] font-mono text-xs tracking-wider uppercase rounded-xs"
                    >
                      BACK
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#FF4500] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs flex items-center space-x-2 shadow-[0_0_20px_rgba(255,69,0,0.3)]"
                    >
                      <span>NEXT: CONTACT DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase block mb-1">
                      STEP 03 // CONTACT DIRECTORY
                    </span>
                    <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white uppercase">
                      WHERE SHOULD WE SEND THE CAD BRIEF?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexander Weber"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase">COMPANY / BRAND *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Red Bull / PepsiCo"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase">BUSINESS EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="weber@company.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8E95A2] mb-1 uppercase">PHONE NUMBER</label>
                      <input
                        type="tel"
                        placeholder="+49 (0) 6761 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none"
                      />
                    </div>
                  </div>

                  <div className="font-mono text-xs">
                    <label className="block text-[#8E95A2] mb-1 uppercase">PROJECT BRIEF & DETAILS</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your creative vision, dimensions, target event, or custom features..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#121418] border border-white/10 text-white rounded-xs focus:border-[#FF4500] outline-none font-sans text-sm font-light"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 bg-[#121418] text-[#8E95A2] font-mono text-xs tracking-wider uppercase rounded-xs"
                    >
                      BACK
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#FF4500] hover:bg-[#E63900] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xs flex items-center space-x-2 shadow-[0_0_30px_rgba(255,69,0,0.4)]"
                    >
                      <span>TRANSMIT PROJECT BRIEF</span>
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
