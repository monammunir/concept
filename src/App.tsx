import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronRight,
  Lightbulb,
  PenTool,
  Cpu,
  PackageCheck,
  Truck,
  Sparkles,
  Layers,
  Box,
  ShieldCheck,
  Quote,
  Calendar,
  Award,
  ChevronDown
} from 'lucide-react';

export function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Stat Counter State
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    satisfaction: 0,
    brands: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll behavior
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // About section stats
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && counters.years === 0) {
          let step = 0;
          const timer = setInterval(() => {
            step += 1;
            setCounters({
              years: Math.min(Math.floor((30 / 50) * step), 30),
              projects: Math.min(Math.floor((5000 / 50) * step), 5000),
              satisfaction: Math.min(Math.floor((100 / 50) * step), 100),
              brands: Math.min(Math.floor((150 / 50) * step), 150)
            });
            if (step >= 50) clearInterval(timer);
          }, 30);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [counters.years]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Das C-Concepts Team meldet sich in Kürze.');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#1250B0] selection:text-white">
      
      {/* 1. HEADER (Fixed position, transparent over hero, turns solid white on scroll) */}
      <header
        className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3">
            <img
              src={isScrolled ? '/images/cconcepts-logo.png' : '/images/cconcepts-logo-light.png'}
              alt="C-Concepts Logo"
              className="h-10 w-auto object-contain transition-opacity duration-300"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold tracking-wide">
            <a href="#services" className={`py-2 transition-colors ${isScrolled ? 'text-[#475569] hover:text-[#1250B0]' : 'text-white/90 hover:text-[#38BDF8]'}`}>Leistungen</a>
            <a href="#process" className={`py-2 transition-colors ${isScrolled ? 'text-[#475569] hover:text-[#1250B0]' : 'text-white/90 hover:text-[#38BDF8]'}`}>Ablauf</a>
            <a href="#projects" className={`py-2 transition-colors ${isScrolled ? 'text-[#475569] hover:text-[#1250B0]' : 'text-white/90 hover:text-[#38BDF8]'}`}>Projekte & Werbemittel</a>
            <a href="#remundi" className={`py-2 transition-colors ${isScrolled ? 'text-[#475569] hover:text-[#1250B0]' : 'text-white/90 hover:text-[#38BDF8]'}`}>Remundi Grill</a>
            <a href="#about" className={`py-2 transition-colors ${isScrolled ? 'text-[#475569] hover:text-[#1250B0]' : 'text-white/90 hover:text-[#38BDF8]'}`}>Über Uns</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-[15px] text-white bg-[#1250B0] hover:bg-[#2E7BF6] btn-glow transition-all"
            >
              <span>Projekt Anfragen</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-[#0A1F44] hover:bg-[#EAF2FF]' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-20 inset-x-0 bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl z-50">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#0A1F44] font-bold text-base border-b border-slate-100">Leistungen</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#0A1F44] font-bold text-base border-b border-slate-100">Ablauf</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#0A1F44] font-bold text-base border-b border-slate-100">Projekte & Werbemittel</a>
            <a href="#remundi" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#0A1F44] font-bold text-base border-b border-slate-100">Remundi Grill</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#0A1F44] font-bold text-base border-b border-slate-100">Über Uns</a>
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
              className="w-full text-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#1250B0] hover:bg-[#2E7BF6] text-base"
            >
              Projekt Anfragen
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative bg-[#0A1F44] text-white min-h-screen min-h-[680px] flex items-center overflow-hidden pt-20">
        
        {/* Full-Bleed High-Res Unsplash Hero Image */}
        {/* Photo by Alexandre Pellaes on Unsplash: https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80 */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
            alt="C-Concepts Brand Activation Display"
            width={2000}
            height={1125}
            // @ts-ignore
            fetchpriority="high"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.parentElement) {
                target.parentElement.style.background = 'linear-gradient(135deg, #0A1F44 0%, #1250B0 100%)';
              }
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(10,31,68,0.92) 0%, rgba(10,31,68,0.70) 40%, rgba(10,31,68,0.15) 75%, rgba(10,31,68,0.05) 100%)' }}></div>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(18,80,176,0.10)' }}></div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,31,68,0.5), transparent 30%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-20 w-full grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="absolute -top-12 -left-12 w-96 h-96 bg-[#38BDF8]/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[13px] font-bold text-[#38BDF8] uppercase tracking-[0.12em] shadow-sm">
              <Star className="w-4 h-4 text-[#38BDF8]" />
              <span>Innovative Marketing Concepts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
              STARKE WERBUNG FÜR IHR <span className="text-gradient-sky">UNTERNEHMEN</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#EAF2FF]/90 max-w-xl font-normal leading-[1.65]">
              Von der ersten kreativen Idee über meisterhafte Sonderanfertigungen bis hin zur weltweiten POS-Logistik. Wir schaffen emotionale Markenmomente, die nachhaltig im Gedächtnis bleiben.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-[15px] text-white bg-[#1250B0] hover:bg-[#2E7BF6] btn-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Kostenloses Erstgespräch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl font-bold text-[15px] text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all text-center"
              >
                Projekte Entdecken
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-1 gap-4 lg:gap-6 justify-end">
            
            <div className="glass-card p-5 flex items-center gap-4 shadow-xl max-w-md ml-auto" style={{ background: 'rgba(10, 31, 68, 0.35)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div className="w-12 h-12 rounded-xl bg-[#2E7BF6]/25 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">Seit 1993 in Neuss</div>
                <div className="text-xs text-white/90 font-medium">30+ Jahre Markt- & Produktionskompetenz</div>
              </div>
            </div>

            <div className="glass-card p-5 flex items-center gap-4 shadow-xl max-w-md ml-auto" style={{ background: 'rgba(10, 31, 68, 0.35)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div className="w-12 h-12 rounded-xl bg-[#2E7BF6]/25 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">Made in Germany</div>
                <div className="text-xs text-white/90 font-medium">Höchste Qualitäts- & Sedex-Zertifizierung</div>
              </div>
            </div>

            <div className="glass-card p-5 flex items-center gap-4 shadow-xl max-w-md ml-auto" style={{ background: 'rgba(10, 31, 68, 0.35)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div className="w-12 h-12 rounded-xl bg-[#2E7BF6]/25 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">5.000+ Projekte</div>
                <div className="text-xs text-white/90 font-medium">Erfolgreich realisierte Marken-Promotions</div>
              </div>
            </div>

          </div>

        </div>

        <a href="#intro" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2">
          <span className="text-[11px] font-extrabold tracking-widest uppercase">Scrollen</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#38BDF8]" />
        </a>
      </section>

      {/* 3. INTRO SECTION (Centered Header) */}
      <section id="intro" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#1250B0] uppercase">Kreative Werbemittel & Promotions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] mt-2 sky-underline-center">
              Werbeartikel, die Begeisterung wecken
            </h2>
            <p className="text-[#475569] mt-5 text-[17px] leading-[1.65]">
              Standard-Werbeartikel landen schnell in der Schublade. Wir gestalten Werbemittel und POS-Installationen, die haptisch überzeugen.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[#0F172A] text-[16px] leading-[1.65]">
                Wir bei <strong className="text-[#0A1F44]">C-Concepts Vertriebs GmbH</strong> entwickeln exklusive Sonderanfertigungen, Marken-Gimmicks und komplette Handelsaktionen, die nachhaltige Kundenbindung schaffen.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAF2FF] flex items-center justify-center text-[#2E7BF6] font-bold shrink-0 mt-0.5">✓</div>
                  <div className="text-[#0A1F44] font-semibold text-[16px]">Eigene Sonderanfertigungen nach Corporate Design Vorgaben</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAF2FF] flex items-center justify-center text-[#2E7BF6] font-bold shrink-0 mt-0.5">✓</div>
                  <div className="text-[#0A1F44] font-semibold text-[16px]">Höchste Qualitätsprüfungen und nachhaltige Materialauswahl</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAF2FF] flex items-center justify-center text-[#2E7BF6] font-bold shrink-0 mt-0.5">✓</div>
                  <div className="text-[#0A1F44] font-semibold text-[16px]">Termingenaue Direktbelieferung an Filialen, Events oder Kunden</div>
                </div>
              </div>

              <div className="pt-4">
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center text-[#1250B0] font-bold hover:text-[#2E7BF6] text-[15px]">
                  <span>Jetzt Beratung anfordern</span>
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl img-tint-container">
                  <img src="/images/service-beratung.jpg" alt="Beratung C-Concepts" className="w-full h-[420px] object-cover rounded-2xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROCESS STRIP (52px Gradient Numbers, Lucide icons, Connecting line) */}
      <section id="process" className="py-16 lg:py-24 bg-[#F5F8FC] border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#1250B0] uppercase">Nahtloser Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] mt-2 sky-underline-center">
              Von der Idee bis zum Point of Sale
            </h2>
            <p className="text-[#475569] mt-5 text-[17px] leading-[1.65]">
              Ein strukturierter 5-Stufen-Prozess garantiert erstklassige Ergebnisse ohne unerwartete Überraschungen.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-[140px] left-8 right-8 h-0.5 bg-slate-200/80 -z-0 pointer-events-none"></div>

            {[
              { num: '01', title: 'Beratung & Idee', text: 'Analysieren Ihrer Zielgruppe, Budgets und Kampagnenziele für maßgeschneiderte Werbeideen.', icon: Lightbulb },
              { num: '02', title: 'Design & Muster', text: 'Visualisierung in 3D, Materialmuster und Freigabeprotokoll vor Serienstart.', icon: PenTool },
              { num: '03', title: 'Produktion', text: 'Präzise Fertigung und Veredelung unter Qualitätskontrolle.', icon: Cpu },
              { num: '04', title: 'Konfektion', text: 'Set-Zusammenstellung und gebrandetes Packaging.', icon: PackageCheck },
              { num: '05', title: 'POS-Logistik', text: 'Pünktliche Verteilung direkt an den Point of Sale.', icon: Truck }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md card-hover flex flex-col justify-between relative z-10 border border-[#1250B0]/10">
                <div>
                  <div className="text-[52px] font-extrabold leading-none bg-gradient-to-r from-[#1250B0] to-[#38BDF8] bg-clip-text text-transparent mb-3">
                    {step.num}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#2E7BF6] mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1F44] mb-2">{step.title}</h3>
                  <p className="text-[#475569] text-[16px] leading-[1.65] line-clamp-3">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-SERVICE SECTION (Centered Header) */}
      <section id="services" className="py-16 lg:py-24 bg-[#EAF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#1250B0] uppercase">Rundum-Sorglos-Paket</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] mt-2 sky-underline-center">
              Unsere 4 Säulen des Werbemittel-Erfolgs
            </h2>
            <p className="text-[#475569] mt-5 text-[17px] leading-[1.65]">
              Alles aus einer Hand – von der strategischen Planung bis zur weltweiten Logistik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-md card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#2E7BF6] flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Planung & Beratung</h3>
                <p className="text-[#475569] text-[16px] leading-[1.65] line-clamp-3">
                  Konzeption, Machbarkeitsprüfung und Auswahl optimaler Veredelungstechniken.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-[#2E7BF6] uppercase">Kreative Strategie</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#2E7BF6] flex items-center justify-center mb-6">
                  <Box className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Logistik & Lagerung</h3>
                <p className="text-[#475569] text-[16px] leading-[1.65] line-clamp-3">
                  Moderne Hochregallager in Deutschland für flexible Abrufe und Filialversand.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-[#2E7BF6] uppercase">Effiziente Abläufe</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#2E7BF6] flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Verpackung & Konfektion</h3>
                <p className="text-[#475569] text-[16px] leading-[1.65] line-clamp-3">
                  Konfektionierung mehrteiliger Sets, Geschenkverpackungen und Mailings.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-[#2E7BF6] uppercase">Perfekt Verpackt</span>
              </div>
            </div>

            <div className="bg-[#0A1F44] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between border-2 border-[#2E7BF6]">
              <div className="absolute top-4 right-4 bg-[#38BDF8] text-[#0A1F44] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                FEATURED
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#38BDF8] flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Full-Service Abwicklung</h3>
                <p className="text-[#EAF2FF]/90 text-[16px] leading-[1.65] line-clamp-3">
                  Komplettes Projektmanagement aus einer Hand. Ein fester Ansprechpartner für maximale Entlastung.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3.5 bg-[#1250B0] hover:bg-[#2E7BF6] text-white font-bold rounded-xl text-[15px] transition-all btn-glow"
                >
                  Full-Service Anfragen
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA STRIP */}
      <section className="py-16 bg-gradient-to-r from-[#1250B0] via-[#2E7BF6] to-[#1250B0] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Ihre Idee. Unsere Umsetzung.
          </h2>
          <p className="text-lg text-[#EAF2FF]/90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Werbemittel entwickeln, die begeistern.
          </p>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-9 py-4 rounded-xl font-extrabold text-[15px] text-[#0A1F44] bg-white hover:bg-[#EAF2FF] shadow-xl transition-all"
            >
              Jetzt unverbindlich anfragen
            </button>
          </div>
        </div>
      </section>

      {/* 7. STRICT PROJECTS CSS GRID */}
      <section id="projects" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#1250B0] uppercase">Portfolio & Referenzen</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] mt-2 sky-underline-center">
              Innovative Werbeprodukte & Projekte
            </h2>
            <p className="text-[#475569] mt-5 text-[17px] leading-[1.65]">
              Ein Einblick in herausragende Kundenprojekte und maßgeschneiderte Sonderanfertigungen.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Featured Pepsi Card (Full Width, 2 Columns, 16/9 Aspect, min 380px) */}
            <div className="bg-[#F5F8FC] rounded-[20px] overflow-hidden shadow-md card-hover border border-slate-200 grid lg:grid-cols-12 items-center min-h-[380px]">
              <div className="lg:col-span-5 p-8 lg:p-10 space-y-5">
                <span className="inline-block bg-[#1250B0]/10 text-[#1250B0] font-bold text-xs px-3 py-1 rounded-full uppercase">
                  ★ HERO CASE STUDY: PEPSI PROMOTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F44]">
                  Punica & Pepsi Promotion-Scooter & Mofa Branding
                </h3>
                <p className="text-[#475569] text-[16px] leading-[1.65] line-clamp-3">
                  Vollständige Konzeption und Veredelung von Retro-Mofas für bundesweite POS-Gewinnspiele und Event-Promotions.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[#1250B0] font-bold text-[15px] hover:text-[#2E7BF6] pt-2"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:col-span-7 aspect-[16/9] h-full relative img-tint-container">
                <img src="/images/punica-mofa.jpg" alt="Punica Mofa" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 3-Column Equal Height Cards below (6 total) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Rockstar Energy Snowboard Edition', desc: 'Exklusiv gebrandete High-Performance Snowboards für Wintersport-Aktionen.', img: 'rockstar-snowboard.jpg' },
                { title: 'Chio Chips Kicker-Tisch', desc: 'Robustes Gastro-Tischkicker-System im vollen Markenbranding für Gewinnspiele.', img: 'kicker-table.jpg' },
                { title: 'Mobile Coffee Bar Bike', desc: 'Mobiles Barista-Fahrrad mit gebrandeten Bechern & Schirmen für Messen.', img: 'coffee-bike.jpg' },
                { title: 'Holzfass-Kühler POS Installation', desc: 'Authentische Echtholz-Fässer mit integrierter Kühlung am Point of Sale.', img: 'barrel-prod.jpg' },
                { title: 'Pepsi Event Becher-Serie', desc: 'Hochwertige Mehrweg-Becherserie mit 360-Grad IML-Druck für Festivals.', img: 'pepsi-becher.jpg' },
                { title: 'Custom POS Promotion Set', desc: 'Vollständig konfektionierte Promotion-Pakete inklusive Displays und Beilagen.', img: 'service-konfektion.jpg' }
              ].map((project, idx) => (
                <div key={idx} className="bg-[#F5F8FC] rounded-[20px] p-6 shadow-md card-hover border border-slate-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 img-tint-container relative">
                      <img src={`/images/${project.img}`} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#0A1F44] mb-2">{project.title}</h3>
                    <p className="text-[#475569] text-[16px] leading-[1.65] line-clamp-3">{project.desc}</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-[#1250B0] font-bold text-[15px] hover:text-[#2E7BF6] pt-4 mt-auto"
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 8. PARTNER LOGOS (Directly on white, no pills, 44-56px height) & TESTIMONIALS (36px padding, 18px quote) */}
      <section className="py-16 lg:py-24 bg-[#F5F8FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#1250B0] uppercase">Vertrauen führender Marken</span>
            <h2 className="text-3xl font-extrabold text-[#0A1F44] mt-2 sky-underline-center">
              Unsere Partner & Auftraggeber
            </h2>
          </div>

          {/* Clean Logos without background pills */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 py-10">
            {['logo-pepsi.jpg', 'logo-lipton.jpg', 'logo-chio.jpg', 'logo-funny.jpg', 'logo-rockstar.jpg', 'logo-punica.jpg', 'logo-oasis.jpg'].map((logo, i) => (
              <img key={i} src={`/images/${logo}`} alt="Client Logo" className="logo-clean h-12 md:h-14 w-auto object-contain" />
            ))}
          </div>

          {/* Testimonial Cards (Padding 36px / p-9, Quote 18px in ink) */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-9 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between card-hover h-full">
              <div>
                <Quote className="w-10 h-10 text-[#38BDF8] mb-5" />
                <p className="text-[#0F172A] text-[18px] leading-[1.7] italic mb-8">
                  „C-Concepts setzt unsere Werbeartikel-Ideen seit Jahren punktgenau um. Selbst bei extrem knappen Terminen bleibt die Qualität erstklassig.“
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1250B0] text-white font-extrabold flex items-center justify-center text-base">MK</div>
                  <div>
                    <div className="text-base font-bold text-[#0A1F44]">Marketing & Brand Lead</div>
                    <div className="text-xs text-slate-500">Getränkekonzern</div>
                  </div>
                </div>
                <img src="/images/logo-pepsi.jpg" alt="Pepsi" className="h-8 w-auto object-contain opacity-70" />
              </div>
            </div>

            <div className="bg-white p-9 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between card-hover h-full">
              <div>
                <Quote className="w-10 h-10 text-[#38BDF8] mb-5" />
                <p className="text-[#0F172A] text-[18px] leading-[1.7] italic mb-8">
                  „Die Flexibilität in der Konfektionierung und die professionelle Lagerlogistik entlasten unser eigenes Team enorm.“
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E7BF6] text-white font-extrabold flex items-center justify-center text-base">TL</div>
                  <div>
                    <div className="text-base font-bold text-[#0A1F44]">Trade Logistics Director</div>
                    <div className="text-xs text-slate-500">Snack Brand</div>
                  </div>
                </div>
                <img src="/images/logo-chio.jpg" alt="Chio" className="h-8 w-auto object-contain opacity-70" />
              </div>
            </div>

            <div className="bg-white p-9 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between card-hover h-full">
              <div>
                <Quote className="w-10 h-10 text-[#38BDF8] mb-5" />
                <p className="text-[#0F172A] text-[18px] leading-[1.7] italic mb-8">
                  „Vom Remundi-Grill Incentive bis zu den Merchandise-Sets: Made in Germany ist bei C-Concepts ein echtes Versprechen.“
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A1F44] text-white font-extrabold flex items-center justify-center text-base">SB</div>
                  <div>
                    <div className="text-base font-bold text-[#0A1F44]">Senior Event Manager</div>
                    <div className="text-xs text-slate-500">Promotion Agency</div>
                  </div>
                </div>
                <img src="/images/logo-funny.jpg" alt="funny-frisch" className="h-8 w-auto object-contain opacity-70" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. REMUNDI GRILL */}
      <section id="remundi" className="py-16 lg:py-24 bg-gradient-to-br from-[#0A1F44] to-[#1250B0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block bg-[#2E7BF6]/20 text-[#38BDF8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase">
                EXKLUSIVES PREMIUM-HIGHLIGHT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Remundi Grill-Erlebnis – Das ultimative Outdoor-Incentive
              </h2>
              <p className="text-[#EAF2FF]/90 text-[17px] leading-[1.65]">
                Feuer, Genuss und Markenpräsenz in Vollendung. Wir veredeln Remundi Feuer- und Grillstellen als VIP-Präsente.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  'Exklusive Outdoor-Veredelung mit hitzebeständiger Laser-Gravur.',
                  'Skalierbare Serienfertigung für B2B-Incentives.',
                  'Komplette POS-Logistik & Einzelversand direkt zum Kunden.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] font-bold shrink-0">
                      ✓
                    </div>
                    <p className="text-[16px] text-[#EAF2FF]/90 leading-[1.65] mt-1">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button onClick={() => setIsModalOpen(true)} className="px-7 py-3.5 bg-[#1250B0] hover:bg-[#2E7BF6] text-white font-bold rounded-xl text-[15px] btn-glow">
                  Remundi Incentive Anfragen
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl img-tint-container">
                <img src="/images/remundi-grill.jpg" alt="Remundi Grill" className="w-full h-[450px] object-cover rounded-2xl" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. ABOUT SECTION (Centered Header) */}
      <section id="about" className="py-16 lg:py-24 bg-[#EAF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#1250B0] uppercase">Tradition & Innovation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] mt-2 sky-underline-center">
              Innovative Marketing Concepts
            </h2>
            <p className="text-[#475569] mt-5 text-[17px] leading-[1.65]">
              Seit 1993 Ihr zuverlässiger Partner für Markenwerbung und POS-Marketing.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="relative">
                <img src="/images/service-logistik.jpg" alt="C-Concepts Logistik" className="w-full h-[420px] object-cover rounded-2xl shadow-xl" />
                <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 border border-slate-100">
                  <img src="/images/sedex-logo.png" alt="Sedex Audit Member" className="h-10 w-auto object-contain" />
                  <div>
                    <div className="text-xs font-bold text-[#0A1F44]">Sedex Zertifiziert</div>
                    <div className="text-[11px] text-[#475569]">Ethische Standards</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-[#0F172A] text-[16px] leading-[1.65]">
                Seit 1993 steht <strong className="text-[#0A1F44]">C-Concepts Vertriebs GmbH</strong> in Neuss für absolute Verlässlichkeit, Erfindungsreichtum und erstklassige Abwicklung im Werbemittel-Sektor.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-extrabold text-[#38BDF8]">{counters.years}+</div>
                  <div className="text-xs font-bold text-[#0A1F44] mt-1">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#38BDF8]">{counters.projects}+</div>
                  <div className="text-xs font-bold text-[#0A1F44] mt-1">Projekte Realisiert</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#38BDF8]">{counters.satisfaction}%</div>
                  <div className="text-xs font-bold text-[#0A1F44] mt-1">Termintreue</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#38BDF8]">{counters.brands}+</div>
                  <div className="text-xs font-bold text-[#0A1F44] mt-1">Starke Marken</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1250B0] via-[#2E7BF6] to-[#1250B0] text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            BEREIT FÜR IHRE NÄCHSTE ERFOLGREICHE PROMOTION?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 rounded-xl font-extrabold text-lg text-[#0A1F44] bg-white hover:bg-[#EAF2FF] shadow-2xl transition-all"
            >
              Jetzt Projekt Anfragen
            </button>
            <a
              href="tel:+49213192680"
              className="px-8 py-5 rounded-xl font-bold text-lg text-white border-2 border-white/40 hover:border-white transition-all"
            >
              ☎ +49 (0) 2131 92 68 0
            </a>
          </div>
        </div>
      </section>

      {/* 12. FOOTER (Top padding 80px pt-20 pb-12, column headings 16px/700 white, 14px link spacing space-y-3.5) */}
      <footer className="bg-[#0A1F44] text-white pt-20 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
            <div className="lg:col-span-2 space-y-5">
              <img src="/images/cconcepts-logo-light.png" alt="C-Concepts Logo Light" className="h-10 w-auto object-contain" />
              <p className="text-slate-300 text-[15px] leading-[1.65] max-w-sm">
                C-Concepts Vertriebs GmbH – Ihr Spezialist für emotionale Markenwerbung, Sonderanfertigungen und POS-Full-Service seit 1993.
              </p>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-white uppercase tracking-wider mb-6">Navigation</h4>
              <ul className="space-y-3.5 text-[15px] text-slate-300">
                <li><a href="#services" className="hover:text-white">Leistungen</a></li>
                <li><a href="#process" className="hover:text-white">Ablauf</a></li>
                <li><a href="#projects" className="hover:text-white">Projekte</a></li>
                <li><a href="#about" className="hover:text-white">Über Uns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-white uppercase tracking-wider mb-6">Leistungen</h4>
              <ul className="space-y-3.5 text-[15px] text-slate-300">
                <li>Planung & Design</li>
                <li>Sonderanfertigungen</li>
                <li>Event-Promotions</li>
                <li>Konfektionierung</li>
                <li>POS-Lager & Logistik</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-white uppercase tracking-wider mb-6">Kontakt</h4>
              <address className="not-italic text-[15px] text-slate-300 space-y-3.5">
                <p className="font-bold text-white text-[16px]">C-Concepts Vertriebs GmbH</p>
                <p>Jägerstraße 46, 41464 Neuss</p>
                <p>Tel: +49 (0) 2131 92 68 0</p>
                <p>Mail: info@c-concepts.de</p>
              </address>
            </div>
          </div>
          <div className="pt-8 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© 1993 - 2026 C-Concepts Vertriebs GmbH. Alle Rechte vorbehalten.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Impressum</a>
              <a href="#" className="hover:text-white">Datenschutz</a>
              <a href="#" className="hover:text-white">AGB</a>
            </div>
          </div>
        </div>
      </footer>

      {/* INQUIRY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A1F44]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-slate-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-[#0A1F44]">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">Projekt Anfragen</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required placeholder="Ihr Name *" className="w-full p-3 border border-slate-300 rounded-xl" />
              <input type="email" required placeholder="E-Mail Adresse *" className="w-full p-3 border border-slate-300 rounded-xl" />
              <textarea placeholder="Projektbeschreibung..." rows={3} className="w-full p-3 border border-slate-300 rounded-xl"></textarea>
              <button type="submit" className="w-full py-4 bg-[#1250B0] hover:bg-[#2E7BF6] text-white font-bold rounded-xl">
                Anfrage Senden
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
