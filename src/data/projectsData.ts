export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'FAHRZEUGE' | 'GAME-UNITS' | 'SONDERANFERTIGUNGEN' | 'PROMOTION-SETUPS';
  client: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  secondaryImages: string[];
  specs: {
    label: string;
    value: string;
  }[];
  materials: string[];
  dimensions?: string;
  weight?: string;
  leadTime?: string;
  highlight: string;
}

export const REAL_PROJECTS: Project[] = [
  {
    id: 'punica-scooter',
    number: '01',
    title: 'PUNICA SCOOTER',
    subtitle: 'SONDERANFERTIGUNG PROMOTION-FAHRZEUG',
    category: 'FAHRZEUGE',
    client: 'Punica (PepsiCo)',
    year: '2022',
    summary: 'Speziell entwickeltes und gebautes Promotion-Mofa/Scooter-Fahrzeug mit integrierter Kühlung für bundesweite Produkt-Sampling-Touren.',
    description: 'Für bundesweite Werbeaktionen und Sampling-Touren entwickelten wir das Punica Promotion-Fahrzeug. Basierend auf einem hochleistungsfähigen Fahrgestell vereint dieses Retro-Mofa maximale Mobilität mit auffälligem Markenbranding und integrierter Produktkühlung für den direkten Einsatz am Point of Sale.',
    image: '/images/punica-mofa.jpg',
    secondaryImages: [
      '/images/punica-mofa.jpg',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1600'
    ],
    specs: [
      { label: 'Konstruktion', value: 'Individualisierter Stahlrohr-Rahmen' },
      { label: 'Kühlung', value: 'Integrierte Isolier-Kühlbox (180L Payload)' },
      { label: 'Branding', value: 'Wetterfestes, hochauflösendes UV-Branding' },
      { label: 'Einsatzbereich', value: 'Fußgängerzonen, Eventgelände & POS' },
      { label: 'Full-Service', value: 'Entwicklung, Fertigung & Logistik durch C-Concepts' }
    ],
    materials: ['Spezialstahl', 'GFK-Formteile', 'Aluminium eloxiert', 'PE-Schaumisolierung'],
    dimensions: '2200mm x 950mm x 1400mm',
    weight: '210 kg',
    leadTime: '6 Wochen von der Idee bis zum POS',
    highlight: 'Optimiert für über 100 Sampling-Stopps täglich in europäischen Metropolen.'
  },
  {
    id: 'pepsi-kicker-table',
    number: '02',
    title: 'KICKER-TISCH FÜR PEPSI',
    subtitle: 'HEAVY-DUTY EVENT FOOSBALL-UNIT',
    category: 'GAME-UNITS',
    client: 'PepsiCo Europe',
    year: '2023',
    summary: 'Massiver, individuell gebrandeter Kicker-Tisch im Pepsi-Design, entwickelt für hochfrequentierte Fan-Zonen und Event-Promotion.',
    description: 'Extrem robuster Profi-Kicker für Sport-Fanzonen und Marken-Promotions. Ausgestattet mit präzisionsgefrästen Seitenwänden, gehärteten Edelstahlstangen, integrierter LED-Spielfeldbeleuchtung und maßgeschneiderten Spielfiguren in den Pepsi-Markenfarben.',
    image: '/images/kicker-table.jpg',
    secondaryImages: [
      '/images/kicker-table.jpg',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1600'
    ],
    specs: [
      { label: 'Gehäuse', value: '25mm Verbundbauweise mit gebürstetem Aluminium' },
      { label: 'Stangen', value: '16mm Nahtlose Edelstahl-Hohlstangen' },
      { label: 'Spielfeld', value: 'Entspiegeltes Spezialglas mit Markenaufdruck' },
      { label: 'Beleuchtung', value: 'Integrierte IP65 LED-Lichtleisten' },
      { label: 'Transport', value: 'Klappbare Spezialbeine für schnelle Tourneen' }
    ],
    materials: ['CNC-Aluminium', 'Sicherheitsglas', 'Edelstahl', 'HDPE-Kunststoff'],
    dimensions: '1450mm x 750mm x 900mm',
    weight: '115 kg',
    leadTime: '4 Wochen Fertigung',
    highlight: 'Geprüft auf über 50.000 Spieldurchgänge unter extremen Event-Bedingungen.'
  },
  {
    id: 'popcorn-machine',
    number: '03',
    title: 'POPCORN-MASCHINE',
    subtitle: 'RETRO-BRAND ACTIVATION DISPENSER',
    category: 'SONDERANFERTIGUNGEN',
    client: 'Kino & Event Agentur',
    year: '2023',
    summary: 'Event-Popcorn-Maschine im ikonischen Custom-Design mit integrierter Beleuchtung und professioneller Warmhalte-Technologie.',
    description: 'Kombiniert Retro-Design mit deutscher Industriequalität. Das Gehäuse besteht aus schwarz eloxiertem Aluminium, hitzebeständigem Sicherheitsglas und digital gesteuerter Kesselheizung für höchste hygienische Ansprüche bei Großveranstaltungen.',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Rahmen', value: 'Eloxiertes Aluminium-Profilgehäuse' },
      { label: 'Thermik', value: '1800W Heizsystem mit Umluft-Warmhaltung' },
      { label: 'Verglasung', value: '4mm Bruchfestes ESG-Sicherheitsglas' },
      { label: 'Zertifizierung', value: 'Lebensmittelecht nach CE-Standard' }
    ],
    materials: ['Edelstahl 304', 'Eloxiertes Aluminium', 'ESG-Glas'],
    dimensions: '700mm x 600mm x 1850mm',
    weight: '85 kg',
    leadTime: '3 Wochen',
    highlight: 'Eingesetzt auf über 40 Premiers & Marken-Promotions deutschlandweit.'
  },
  {
    id: 'skate-game-arena',
    number: '04',
    title: 'SKATE-GAME',
    subtitle: 'MODULARE INTERAKTIVE EVENT-INSTALLATION',
    category: 'GAME-UNITS',
    client: 'Action Sports Activation',
    year: '2022',
    summary: 'Modulare Skate-Arena für Contest-Promotions mit integrierter Zeitmessung und robustem Transportsystem.',
    description: 'Entwickelt für rasche Aufbauten bei Festival- und Sportevents. Die Holz-Stahl-Konstruktion bietet extrem hohe Stabilität bei gleichzeitig optimaler Transportierbarkeit auf Standard-Palettenmaß.',
    image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Struktur', value: 'CNC-gefrästes Birken-Multiplex mit Stahlverstärkung' },
      { label: 'Oberfläche', value: 'Skatelite Pro High-Density Riding Surface' },
      { label: 'Aufbauzeit', value: 'Unter 2 Stunden durch 2 Personen' }
    ],
    materials: ['Birken-Multiplex', 'Laser-Stahl', 'Skatelite Pro'],
    dimensions: '6000mm x 4000mm x 1200mm',
    weight: '680 kg (Gesamt)',
    leadTime: '5 Wochen',
    highlight: 'Mehrfach im Tournee-Einsatz in 6 europäischen Ländern.'
  },
  {
    id: 'remundi-grill',
    number: '05',
    title: 'DAS REMUNDI GRILL-ERLEBNIS',
    subtitle: 'ARCHITEKTONISCHE GRILL- & GENUSS-STATION',
    category: 'SONDERANFERTIGUNGEN',
    client: 'Remundi / Gastronomie & Event',
    year: '2023',
    summary: 'Einzigartiges Outdoorkonzept aus Cortenstahl mit individuellem Laser-Branding für Events, Gastronomie und Hotels.',
    description: 'Das Remundi Grill-Erlebnis revolutioniert das klassische Grilling. Statt abseits zu stehen, bringt der kreisrunde Cortenstahl-Grill alle Gäste zusammen. Ausgestattet mit präzisem Edelstahl-Laserbranding, verstellbarer Zuluftregelung und extremer Wärmespeicherung.',
    image: '/images/remundi-grill.jpg',
    secondaryImages: [
      '/images/remundi-grill.jpg',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600'
    ],
    specs: [
      { label: 'Korpus', value: '3mm Wetterfester Cortenstahl mit Edel-Rost-Patina' },
      { label: 'Grillplatte', value: '10mm Massiver Carbonstahl für ideale Hitzeverteilung' },
      { label: 'Branding', value: 'Laser-gravierte Edelstahl-Logoplatte' },
      { label: 'Einsatz', value: 'Hotels, Event-Catering, Firmenveranstaltungen' }
    ],
    materials: ['Cortenstahl', 'Carbonstahl-Platte', 'Edelstahl 316'],
    dimensions: '1020mm x 1020mm x 880mm',
    weight: '142 kg',
    leadTime: '3 Wochen Fertigung',
    highlight: 'Hält die Grilltemperatur über 4 Stunden mit geringem Holzverbrauch.'
  },
  {
    id: 'coffee-bike',
    number: '06',
    title: 'RETRO COFFEE-BIKE & GASTRO MOBIL',
    subtitle: 'MOBILES GASTRO- & SAMPLING-MOBIL',
    category: 'FAHRZEUGE',
    client: 'C-Concepts Premium Line',
    year: '2023',
    summary: 'Autarkes Verkaufs- und Sampling-Fahrzeug auf Dreirad-Basis mit edler Holzverkleidung und integrierter Espressotechnik.',
    description: 'Maßgeschneidertes Retro-Kaffee- und Gastro-Mobil für Promotions, Messen und Outdoor-Events. Ausgestattet mit autarker Strom- und Wasserversorgung, ausklappbaren Systemtheken und hochwertigem Kundenbranding.',
    image: '/images/coffee-bike.jpg',
    secondaryImages: [
      '/images/coffee-bike.jpg',
      '/images/pepsi-becher.jpg'
    ],
    specs: [
      { label: 'Fahrgestell', value: 'Schwerlast-Lastenrad mit hydraulischen Bremsen' },
      { label: 'Aufbau', value: 'Massivholz-System mit wetterfester Versiegelung' },
      { label: 'Technik', value: 'Integrierter Wassertank, Abwasser & 230V Stromanschluss' }
    ],
    materials: ['Echtholz', 'Edelstahl', 'Stahlrohrrahmen'],
    dimensions: '2400mm x 1000mm x 2100mm',
    weight: '190 kg',
    leadTime: '4 Wochen',
    highlight: 'Vollständig autarker Betrieb für bis zu 8 Stunden ohne externen Anschluss.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'PEPSI COLA', logo: '/images/logo-pepsi.jpg', industry: 'Global Beverage & FMCG' },
  { name: 'OASIS', logo: '/images/logo-oasis.jpg', industry: 'Beverage & Promotions' },
  { name: 'PUNICA', logo: '/images/logo-punica.jpg', industry: 'FMCG & Softdrinks' },
  { name: 'ROCKSTAR', logo: '/images/logo-rockstar.jpg', industry: 'Energy Drinks' },
  { name: 'LIPTON', logo: '/images/logo-lipton.jpg', industry: 'Refreshments' },
  { name: 'CHIO', logo: '/images/logo-chio.jpg', industry: 'Snacks & POS' },
  { name: 'FUNNY-FRISCH', logo: '/images/logo-funny.jpg', industry: 'Consumer Goods' }
];

export const TESTIMONIALS = [
  {
    quote: "Wir arbeiten seit 15 Jahren mit der Firma C-Concepts erfolgreich auf höchsten Niveau zusammen. Vielen Dank dafür!",
    author: "Pepsi Cola Germany",
    role: "Marketing & POS Activation",
    logo: "/images/logo-pepsi.jpg"
  },
  {
    quote: "Vielen Dank für die Zusammenarbeit in den Bereichen Dekoration & Floristik. 12 Jahre absolute Zufriedenheit.",
    author: "Oasis Refreshments",
    role: "Event & Decor Management",
    logo: "/images/logo-oasis.jpg"
  }
];

export const SERVICES_LIST = [
  {
    id: "01",
    title: "Planung & Beratung",
    description: "Sie haben eine Idee für eine spannende Werbemaßnahme? Wir unterstützen Sie gerne von der ersten Skizze bis zur Machbarkeitsanalyse.",
    image: "/images/service-beratung.jpg"
  },
  {
    id: "02",
    title: "Logistik & Lagerung",
    description: "Von der Produktion bis zum Point of Sale. Wir organisieren die weltweite Logistik und Lagerung Ihrer Produkte in unseren Hochregallagern.",
    image: "/images/service-logistik.jpg"
  },
  {
    id: "03",
    title: "Verpackung & Konfektionierung",
    description: "Sichere und praktische Verpackungs-Lösungen. Wir verpacken oder etikettieren Ihre Ware neu und füllen sie nach Gewicht oder Stückzahl ab.",
    image: "/images/service-konfektion.jpg"
  },
  {
    id: "04",
    title: "Full-Service Dienstleistung",
    description: "Alles aus einer Hand. Das volle Spektrum an Betreuung, Konfektionierung, Veredelung und termingerechter POS-Anlieferung.",
    image: "/images/barrel-prod.jpg"
  }
];
