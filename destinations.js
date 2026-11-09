// YOUR BRAND NAME - Indian Bespoke Travel & Expeditions Data Architecture

export const DESTINATIONS = [
  {
    id: 'kashmir',
    index: '01',
    name: 'Kashmir',
    region: 'Northern Himalayas',
    badge: '01 • Northern Himalayas',
    subtitle: 'Dal Lake & Gulmarg Sanctuary',
    tagline: 'HEAVEN ON EARTH',
    description: 'Kashmir has been celebrated for centuries as paradise on earth – its tranquil Dal Lake shikaras, cedar pine valleys, and snow-crowned Gulmarg summits.',
    longDescription: 'Drift across the mirror-calm waters of Dal Lake aboard handcrafted royal cedar houseboats, take private charter helicopters to the untouched powder slopes of Gulmarg, and stroll through Mughal pleasure gardens blooming with saffron and chinar trees.',
    bestSeason: 'Apr – Oct (Snow: Dec – Mar)',
    startingPriceEUR: 520, // Approx ₹45,000
    flightTime: '1h 15m Private Charter from Delhi',
    coordinates: '34.0837° N, 74.7973° E',
    originHub: 'New Delhi (DEL) / Mumbai (BOM)',
    airportCode: 'SXR (Sheikh ul-Alam Srinagar)',
    heroImage: '/images/hero-kashmir-4k.jpg',
    cardImage: '/images/dest-kashmir.jpg',
    highlights: [
      'Private cedar wood royal houseboat with personal wazwan chef',
      'Exclusive sunrise Shikara flotilla through the floating lotus gardens',
      'Helicopter charter over the Pir Panjal range to Apharwat peak',
      'Curated Pashmina spinning and saffron atelier experiences'
    ],
    itinerarySample: [
      { day: 'Day 1–3', title: 'Srinagar & Dal Lake Royal Living', desc: 'VIP tarmac greeting at Srinagar airport; private shikara escort to presidential cedar houseboat; evening wazwan banquet under starlight.' },
      { day: 'Day 4–6', title: 'Gulmarg Meadows & Apharwat Heli-Skiing', desc: 'Private helicopter transfer to Gulmarg; high-altitude gondola solitude; fireside single-malt tastings.' },
      { day: 'Day 7–9', title: 'Pahalgam Betaab Valley & Saffron Trails', desc: 'Chinar forest walks, Lidder river private trout angling, and Mughal garden dawn photography.' }
    ]
  },
  {
    id: 'kerala',
    index: '02',
    name: 'Kerala',
    region: 'Malabar Coast',
    badge: '02 • Malabar Coast',
    subtitle: 'Backwaters & Munnar Hills',
    tagline: 'MALABAR WATERWAYS & CLOUD FORESTS',
    description: 'Verdant rolling tea estates draped in morning mist, tranquil backwater lagoons navigated by royal houseboats, and ancestral Ayurvedic rejuvenation.',
    longDescription: 'Glide in absolute silence through the palm-fringed backwaters of Alleppey aboard a private solar-hybrid Kettuvallam. Ascend into the emerald folds of Munnar’s high-altitude tea sanctuaries where private planters’ bungalows overlook cascading mountain waterfalls.',
    bestSeason: 'Sep – Mar',
    startingPriceEUR: 440, // Approx ₹38,000
    flightTime: '1h 45m Charter from Mumbai',
    coordinates: '9.4981° N, 76.3388° E',
    originHub: 'Bengaluru (BLR) / Mumbai (BOM)',
    airportCode: 'COK (Cochin International Private Apron)',
    heroImage: '/images/hero-kerala-4k.jpg',
    cardImage: '/images/dest-kerala.jpg',
    highlights: [
      'Bespoke luxury Kettuvallam houseboat cruising Vembanad Lake',
      'Munnar private tea estate colonial bungalow residency',
      'Ancestral master-physician Ayurvedic wellness consultations',
      'Private Kathakali and Kalaripayattu salon performances'
    ],
    itinerarySample: [
      { day: 'Day 1–3', title: 'Kochi Heritage & Fort Solitude', desc: 'Private colonial mansion stay; private harbor yacht cruise observing Chinese fishing nets.' },
      { day: 'Day 4–6', title: 'Alleppey & Kumarakom Backwater Navigation', desc: 'Board dedicated presidential Kettuvallam with private chef; sunset dhow cruises and bird reserve walks.' },
      { day: 'Day 7–9', title: 'Munnar High-Altitude Tea Estates', desc: 'Helicopter transfer to cloud-covered tea plantations; private tea master blending session.' }
    ]
  },
  {
    id: 'rajasthan',
    index: '03',
    name: 'Rajasthan',
    region: 'Thar & Mewar',
    badge: '03 • Thar & Mewar',
    subtitle: 'Udaipur & Golden Thar Sands',
    tagline: 'PALATIAL DESERT SPLENDOR',
    description: 'Shimmering marble palaces floating on Lake Pichola, golden sandstone citadels rising from Thar dunes, and royal polo estates.',
    longDescription: 'Step into royal heritage at Udaipur’s white marble island palaces floating serenely upon Lake Pichola. Journey into the golden Thar desert of Jaisalmer, staying in ultra-luxe silk tented encampments with vintage open-top desert safaris and royal polo exhibitions.',
    bestSeason: 'Oct – Mar',
    startingPriceEUR: 600, // Approx ₹52,000
    flightTime: '1h 10m Charter from Delhi',
    coordinates: '24.5854° N, 73.7125° E',
    originHub: 'New Delhi (DEL) / Jaipur (JAI)',
    airportCode: 'UDR (Maharana Pratap Airport)',
    heroImage: '/images/hero-rajasthan-4k.jpg',
    cardImage: '/images/dest-rajasthan.jpg',
    highlights: [
      'Private boat arrival at floating Lake Pichola palace sanctuaries',
      'Helicopter transfer into secluded Thar golden dune royal tented camp',
      'Private museum & royal armory viewing with family custodians',
      'Desert stargazing accompanied by master Manganiyar folk musicians'
    ],
    itinerarySample: [
      { day: 'Day 1–3', title: 'Udaipur City of Lakes & Royal Mewar', desc: 'Private palace suite overlooking Pichola; royal royal solar-boat cruise; private dinner on Jagmandir Island.' },
      { day: 'Day 4–6', title: 'Jodhpur Blue Citadel & Rohet Estancias', desc: 'Private after-hours Mehrangarh Fort entry; equestrian safaris on Marwari royal horses.' },
      { day: 'Day 7–9', title: 'Jaisalmer & The Golden Dunes', desc: 'Luxury desert oasis tenting; dune dinners under unpolluted desert skies with live sufi performances.' }
    ]
  },
  {
    id: 'andaman',
    index: '04',
    name: 'Andaman',
    region: 'Bay of Bengal',
    badge: '04 • Bay of Bengal',
    subtitle: 'Havelock & Radhanagar Atolls',
    tagline: 'PRISTINE CORAL SANCTUARY',
    description: 'Powder-white beaches at Radhanagar, private superyacht sailing across untouched coral atolls, and bioluminescent night lagoons.',
    longDescription: 'Surrounded by crystalline turquoise waters of the Bay of Bengal, the Andaman archipelago offers unmatched tropical seclusion. Anchor off Radhanagar Beach, dive undisturbed barrier reefs with marine naturalists, and enjoy beachfront villas shaded by ancient rainforest canopies.',
    bestSeason: 'Oct – May',
    startingPriceEUR: 550, // Approx ₹48,000
    flightTime: '2h 15m Charter from Chennai',
    coordinates: '11.9761° N, 92.9876° E',
    originHub: 'Chennai (MAA) / Kolkata (CCU)',
    airportCode: 'IXZ (Veer Savarkar International)',
    heroImage: '/images/hero-andaman-4k.jpg',
    cardImage: '/images/dest-andaman.jpg',
    highlights: [
      'Private luxury catamaran charter across Havelock & Neil Islands',
      'Exclusive night-kayaking in bioluminescent mangrove lagoons',
      'PADI Master diver-led exploration of intact coral reefs',
      'Secluded beachfront villa pavilion on private coastal cove'
    ],
    itinerarySample: [
      { day: 'Day 1–3', title: 'Port Blair & Seaplane to Havelock', desc: 'VIP tarmac greeting; direct seaplane link to Havelock Island; beachfront plunge pool check-in.' },
      { day: 'Day 4–6', title: 'Radhanagar Sands & Elephant Beach Reefs', desc: 'Private yacht cruise to outer reefs; sea turtle sightings and sandbank champagne lunch.' },
      { day: 'Day 7–9', title: 'Neil Island & Mangrove Night Kayaking', desc: 'Bioluminescence exploration; starlit private seafood banquet on private sands.' }
    ]
  }
];

export const SIGNATURE_JOURNEYS = [
  {
    id: 'royal-rajputana-grandeur',
    title: 'The Royal Rajputana Grandeur',
    destination: 'Rajasthan • Udaipur • Jodhpur • Jaisalmer',
    duration: '12 Days / 11 Nights',
    priceEUR: 8500, // Approx ₹7,40,000
    priceNote: '/ couple',
    description: 'Experience the regal splendor of India’s grandest dynasties. From floating marble palaces in Udaipur to private helicopter links into golden Thar desert dunes and private royal polo matches.',
    features: [
      'Private Charter Aviation Between Palaces',
      'Lake Pichola Presidential Island Suite',
      'After-Hours Private Access to Royal Forts',
      'Dedicated Royal Khansama & Chauffeur'
    ],
    badge: 'All-Inclusive Royal Expedition'
  },
  {
    id: 'himalayan-valley-of-gods',
    title: 'The Himalayan & Valley of Gods Sanctuary',
    destination: 'Kashmir & Himachal • Gulmarg • Manali • Spiti',
    duration: '10 Days / 9 Nights',
    priceEUR: 7800, // Approx ₹6,80,000
    priceNote: '/ couple',
    description: 'Ascend into the divine roof of India. Drift on private Dal Lake cedar houseboats before taking private helicopter shuttles across Rohtang and the high-altitude moonscapes of Spiti Valley.',
    features: [
      'Private Helicopter Transfers Over High Passes',
      'Exclusive Cedar Wood Presidential Houseboat',
      'Monastery Blessings with High Lamas',
      'Oxygen-Calibrated Luxury Mountain Chalets'
    ],
    badge: 'All-Inclusive Mountain Expedition'
  },
  {
    id: 'malabar-backwater-haven',
    title: 'The Malabar & Backwater Haven',
    destination: 'Kerala • Alleppey • Munnar • Wayanad',
    duration: '8 Days / 7 Nights',
    priceEUR: 6200, // Approx ₹5,40,000
    priceNote: '/ couple',
    description: 'Immerse yourself in lush tropical serenity. Cruise private palm-fringed lagoons aboard a dedicated presidential Kettuvallam, accompanied by Ayurvedic wellness doctors and colonial tea estate residencies.',
    features: [
      'Dedicated Presidential Kettuvallam Houseboat',
      'Munnar Cloud-Forest Private Bungalow',
      'Daily Tailored Ayurvedic Spa Therapies',
      'Private Backwater Naturalist & Butler'
    ],
    badge: 'All-Inclusive Wellness Expedition'
  },
  {
    id: 'emerald-andaman-expedition',
    title: 'The Emerald Andaman & Nicobar Expedition',
    destination: 'Andaman • Havelock • Neil • Barren Island',
    duration: '10 Days / 9 Nights',
    priceEUR: 8900, // Approx ₹7,75,000
    priceNote: '/ couple',
    description: 'Sail through crystal turquoise waters aboard a chartered luxury catamaran. Snorkel pristine barrier reefs, witness bioluminescent night waters, and retreat to private coastal pavilions on Radhanagar Beach.',
    features: [
      'Private Yacht Charter Across Archipelagos',
      'Direct Seaplane Inter-Island Transfers',
      'Marine Biologist Escort for Deep Reef Diving',
      'Private Sandbank Dinners Under the Stars'
    ],
    badge: 'All-Inclusive Marine Expedition'
  }
];

export const TRAVEL_FORMATS = [
  {
    id: 'heritage',
    index: '01',
    title: 'Royal Palace Heritage',
    tag: 'Atmosphere 01',
    image: '/images/format-heritage.jpg',
    description: 'Private heritage wings, courtyards glowing with hand-cut lanterns, and private museum tours with former royal family custodians.',
    details: 'Live like royalty in restored palace suites in Udaipur, Jodhpur, and Jaipur with dedicated personal butlers and antique open-top car escorts.'
  },
  {
    id: 'houseboat',
    index: '02',
    title: 'Backwater Houseboat Sanctuaries',
    tag: 'Atmosphere 02',
    image: '/images/format-houseboat.jpg',
    description: 'Total solitude on Vembanad Lake. Handcrafted teakwood houseboats with air-conditioned glass salons and private open-air sun decks.',
    details: 'Glide through secluded river waterways far from commercial routes, with dedicated chef preparing traditional coastal Malabar delicacies.'
  },
  {
    id: 'himalayas',
    index: '03',
    title: 'High-Altitude Himalayan Treks',
    tag: 'Atmosphere 03',
    image: '/images/format-himalayas.jpg',
    description: 'Snow-capped peaks, ancient gompas, private heated alpine glamping domes, and helicopter hops over dramatic mountain passes.',
    details: 'Curated high-altitude expeditions in Gulmarg, Manali, Spiti Valley, and Sikkim designed for discerning mountain lovers.'
  },
  {
    id: 'coastal',
    index: '04',
    title: 'Private Island & Coastal Villas',
    tag: 'Atmosphere 04',
    image: '/images/format-coastal.jpg',
    description: 'Secluded beachfront estates along the Andaman Sea, South Goa, and Konkan coastlines with private plunge pools and yacht access.',
    details: 'Unrivaled coastal serenity with private chefs, daily sunset catamaran sails, and pristine golden sandbars.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Our bespoke Kashmir expedition with YOUR BRAND NAME was transcendent. Taking a private helicopter to Gulmarg’s pristine slopes, followed by evenings on Dal Lake with hot kehwa prepared by our personal wazwan chef, was sheer perfection.',
    author: 'Maharaja Y. Gaekwad & Family',
    location: 'Kashmir Valley & Gulmarg Sanctuary • October 2025',
    rating: 5
  },
  {
    quote: 'The private solar Kettuvallam cruising through the untouched Alleppey backwaters felt like a dream. The silence, the culinary excellence, and the flawless Ayurvedic treatments made this our finest journey in India.',
    author: 'Aisha & Vikram Singhania',
    location: 'Kerala Backwater Haven • December 2025',
    rating: 5
  },
  {
    quote: 'Arriving by private boat to the floating palace on Lake Pichola before sunset was pure magic. YOUR BRAND NAME orchestrated after-hours palace tours and desert tenting in Jaisalmer with unparalleled royal grace.',
    author: 'Sir Arthur & Lady Sterling',
    location: 'Royal Rajputana Grandeur • February 2026',
    rating: 5
  }
];

export const CURRENCIES = {
  INR: { symbol: '₹', rate: 90.0, label: 'INR (₹)' },
  EUR: { symbol: '€', rate: 1.0, label: 'EUR (€)' },
  USD: { symbol: '$', rate: 1.08, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.85, label: 'GBP (£)' }
};
