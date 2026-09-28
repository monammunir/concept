export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'VEHICLES' | 'GAME UNITS' | 'CUSTOM BUILDS' | 'EVENT RIGS';
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
    subtitle: 'CUSTOM PROMOTIONAL VEHICLE',
    category: 'VEHICLES',
    client: 'Punica (PepsiCo)',
    year: '2022',
    summary: 'Custom-engineered mobile brand activation scooter featuring custom retro-fitted bodywork, integrated cooling payload, and on-the-go product sampling system.',
    description: 'Developed for nationwide German promotion tours, the Punica Promotional Scooter converts a heavy-duty electric vehicle chassis into an eye-catching, high-mobility sampling station. Built to withstand continuous outdoor transport, high-traffic city centers, and fast daily redeployment.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Chassis Type', value: 'Custom Reinforced Tubular Steel' },
      { label: 'Power Unit', value: '48V High-Torque Electric Hub Motor' },
      { label: 'Payload Bay', value: 'Dual-Zone Insulated Cooling Unit (180L)' },
      { label: 'Branding Finish', value: 'UV-Resistant Matte Vinyl Wrap' },
      { label: 'Logistics', value: 'Fits Standard Euro-Pallet Footprint' }
    ],
    materials: ['Tubular Steel', 'Fiberglass Moldings', 'Anodized Aluminum', 'Polyurethane Foam'],
    dimensions: '2200mm x 950mm x 1400mm',
    weight: '210 kg (dry)',
    leadTime: '6 Weeks Concept to Delivery',
    highlight: 'Engineered for 100+ sampling stops per day across major European pedestrian zones.'
  },
  {
    id: 'pepsi-kicker-table',
    number: '02',
    title: 'PEPSI KICKER TABLE',
    subtitle: 'HEAVY-DUTY INDUSTRIAL FOOSBALL UNIT',
    category: 'GAME UNITS',
    client: 'PepsiCo Europe',
    year: '2023',
    summary: 'Ultra-durable custom foosball table built for high-energy promotional events, bar activations, and outdoor fan zones.',
    description: 'Designed to survive aggressive competitive play at sports fan zones and brand festivals. Features precision CNC-milled aluminum sidewalls, solid stainless steel player rods, integrated LED under-lighting, and high-impact custom molded figures dressed in official brand colors.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Side Panels', value: '25mm High-Density Composite + Brushed Aluminum' },
      { label: 'Rods', value: '16mm Solid Stainless Steel (Hollow High-Speed option)' },
      { label: 'Pitch Surface', value: 'Anti-Glare Tempered Glass Field' },
      { label: 'Lighting', value: 'Integrated RGBW Technical LED Strip (IP65)' },
      { label: 'Transportation', value: 'Quick-Release Foldable Steel Legs' }
    ],
    materials: ['CNC Milled Aluminum', 'Tempered Safety Glass', 'Solid Stainless Steel', 'HDPE Plastic'],
    dimensions: '1450mm x 750mm x 900mm',
    weight: '115 kg',
    leadTime: '4 Weeks Production',
    highlight: 'Tested for over 50,000 continuous intense game matches without structural deflection.'
  },
  {
    id: 'popcorn-machine',
    number: '03',
    title: 'POPCORN MACHINE',
    subtitle: 'RETRO-FUTURISTIC BRAND ACTIVATION DISPENSER',
    category: 'CUSTOM BUILDS',
    client: 'Cinema & Event Agency',
    year: '2023',
    summary: 'Industrial-grade popcorn dispensing unit with custom illuminated branding, thermal control engineering, and high-capacity batch output.',
    description: 'Combining mid-century cinema aesthetics with contemporary German industrial engineering, this popcorn unit features custom-molded black anodized aluminum framing, heat-resistant toughened glass, digital thermostatic kettle management, and automated warm-air recirculating floor.',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Housing', value: 'TIG-Welded Anodized Aluminum Frame' },
      { label: 'Heating Elements', value: '1800W Dual Precision Thermal System' },
      { label: 'Glazing', value: '4mm Shatterproof Tempered Safety Glass' },
      { label: 'Illumination', value: '3000K Soft Warm Diffused LED Array' },
      { label: 'Compliance', value: 'CE & Food-Grade Hygiene Certification' }
    ],
    materials: ['304 Stainless Steel', 'Anodized Black Aluminum', 'Tempered Glass', 'Brass Accents'],
    dimensions: '700mm x 600mm x 1850mm',
    weight: '85 kg',
    leadTime: '3 Weeks Production',
    highlight: 'Delivered to 40+ cinema premieres with zero food-contact component failures.'
  },
  {
    id: 'skate-game-arena',
    number: '04',
    title: 'SKATE GAME ARENA',
    subtitle: 'MODULAR INTERACTIVE EVENT INSTALLATION',
    category: 'GAME UNITS',
    client: 'Extreme Sports Activation',
    year: '2022',
    summary: 'Modular physical skate contest installation with integrated digital timing sensors, custom steel obstacles, and rapid flight-case packing system.',
    description: 'A modular, high-impact skate contest platform engineered for fast assembly at urban brand festivals. Constructed with reinforced plywood sub-frames and laser-cut steel coping edges, accompanied by built-in pressure sensors that trigger real-time score graphics on connected LED walls.',
    image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Ramp Structure', value: 'CNC-Machined Birch Plywood + Steel Ribbing' },
      { label: 'Riding Surface', value: 'Skatelite Pro High-Density Surface' },
      { label: 'Sensory Telemetry', value: 'Embedded Piezoelectric Landing Sensors' },
      { label: 'Deployment Time', value: '2 Hours (2-Person Installation Crew)' }
    ],
    materials: ['Birch Plywood', 'Laser-Cut Steel', 'Skatelite Pro', 'Custom Electronics'],
    dimensions: '6000mm x 4000mm x 1200mm',
    weight: '680 kg (Modular Total)',
    leadTime: '5 Weeks',
    highlight: 'Assembled and disassembled 18 times across 6 European countries during summer tour.'
  },
  {
    id: 'formula-1-promo-vehicle',
    number: '05',
    title: 'FORMULA 1 PROMO RIG',
    subtitle: 'FULL-SCALE PRECISION REPLICA & EXPERIENCE RIG',
    category: 'EVENT RIGS',
    client: 'Motorsport Sponsor Network',
    year: '2024',
    summary: '1:1 scale carbon-composite Formula 1 show car engineered for premium hospitality VIP zones and interactive racing simulator integration.',
    description: 'An exact 1:1 scale replica of a modern Formula 1 chassis built for static brand exhibition and interactive simulator experiences. Features authentic carbon-weave finish, real Pirelli racing slick tires, functional LED rear rain light, and an integrated force-feedback wheel cockpit.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Bodywork', value: 'Vac-Formed Carbon Fiber & Kevlar Composite' },
      { label: 'Wheel Assemblies', value: 'Authentic 18" Alloy Wheels & Race Slicks' },
      { label: 'Cockpit', value: 'Direct-Drive Force Feedback Steering + Adjustable Pedals' },
      { label: 'Transport Rig', value: 'Custom Air-Cushioned Enclosed Trailer' }
    ],
    materials: ['Pre-preg Carbon Fiber', 'Aerospace Grade Aluminum', 'Glass Fiber Composite'],
    dimensions: '5400mm x 2000mm x 950mm',
    weight: '340 kg',
    leadTime: '8 Weeks Custom Fabrication',
    highlight: 'Featured in VIP paddocks at Nürburgring, Hockenheimring, and Spa-Francorchamps.'
  },
  {
    id: 'remundi-grill',
    number: '06',
    title: 'REMUNDI FIRE GRILL',
    subtitle: 'CUSTOM BRANDED CULINARY EXPERIENCE UNIT',
    category: 'CUSTOM BUILDS',
    client: 'Remundi / Premium Hospitality',
    year: '2023',
    summary: 'Architectural Corten steel outdoor fire grill and cooking ring customized with precision laser branding and thermal distribution tuning.',
    description: 'Developed in partnership with Remundi, this architectural outdoor cooking center turns open-fire grilling into an elite event experience. Heavy Corten steel develops a protective rust patina over time, contrasted against precision CNC laser-etched stainless steel logo accents.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600',
    secondaryImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000'
    ],
    specs: [
      { label: 'Base Shell', value: '3mm Weathering Corten Steel' },
      { label: 'Grill Ring', value: '10mm Solid Hot-Rolled Carbon Steel Plate' },
      { label: 'Air Intake', value: 'Calibrated Mechanical Draught Regulator' },
      { label: 'Branding Plate', value: 'Laser-Etched 316 Stainless Steel' }
    ],
    materials: ['Corten Steel', 'Carbon Steel Plate', '316 Stainless Steel'],
    dimensions: '1020mm x 1020mm x 880mm',
    weight: '142 kg',
    leadTime: '3 Weeks',
    highlight: 'Retains cooking temperature up to 4 hours with minimal wood consumption.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'PEPSICO', industry: 'Global Beverage & FMCG' },
  { name: 'PUNICA', industry: 'Fruit Juice & Refreshments' },
  { name: 'REMUNDI', industry: 'Outdoor Culinary Engineering' },
  { name: 'FORMULA 1 SPONSORS', industry: 'Global Motorsport Network' },
  { name: 'RED BULL', industry: 'Extreme Sports & Media' },
  { name: 'HENKEL', industry: 'Industrial & Consumer Goods' },
  { name: 'PORSCHE', industry: 'Automotive Engineering' },
  { name: 'HARIBO', industry: 'Confectionery & POS Promotions' }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'CONCEPT',
    headline: 'FEASIBILITY & STRATEGY',
    description: 'We translate raw marketing ideas into realistic physical blueprints. Analyzing spatial requirements, structural loads, payload constraints, and brand storytelling.',
    specs: ['Idea Analysis', 'Budget Optimization', 'Kinematic Studies', 'Material Strategy']
  },
  {
    number: '02',
    title: 'DESIGN',
    headline: 'CAD & INDUSTRIAL STYLING',
    description: 'Our industrial design team models photorealistic 3D CAD geometry with exact manufacturing tolerances, ergonomic interaction points, and brand styling.',
    specs: ['SolidWorks 3D CAD', 'Surface Modeling', 'KeyShot Renders', 'Ergonomic Testing']
  },
  {
    number: '03',
    title: 'ENGINEERING',
    headline: 'STRUCTURAL & MECHANICAL',
    description: 'Calculating mechanical stresses, electrical loads, safety compliance, thermal dispersion, and CNC tooling paths for flawless precision fabrication.',
    specs: ['FEA Stress Analysis', 'Wiring Schematics', 'Toolpath Generation', 'Safety Certification']
  },
  {
    number: '04',
    title: 'PRODUCTION',
    headline: 'IN-HOUSE FABRICATION',
    description: 'Executed in our 5,000m² facility in Simmern. Precision CNC metal milling, laser cutting, composite molding, powder coating, and specialized hand assembly.',
    specs: ['5-Axis CNC Milling', 'TIG/MIG Welding', 'Composite Layup', 'Quality Assurance']
  },
  {
    number: '05',
    title: 'LOGISTICS',
    headline: 'PACKAGING & FREIGHT',
    description: 'Custom flight cases, euro-pallet packaging, warehousing, inventory management, and reliable global freight directly to event venues or POS locations.',
    specs: ['Custom Flight Cases', 'Simmern High-Bay Warehouse', 'EU Transport Network', 'Kitting Services']
  },
  {
    number: '06',
    title: 'EXPERIENCE',
    headline: 'ACTIVATION & SUPPORT',
    description: 'On-site technical setup, electrical wiring, operator training, live event monitoring, post-tour maintenance, and long-term storage.',
    specs: ['On-Site Assembly', 'Live Event Support', 'Teardown & Transport', 'Refurbishment']
  }
];
