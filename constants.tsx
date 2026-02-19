
import React from 'react';
import { 
  Scissors, 
  Stethoscope, 
  Cpu, 
  Building2, 
  ShoppingBag, 
  Hotel, 
  MessageSquare, 
  Share2, 
  Home,
  Cloud,
  DollarSign,
  MapPin,
  Bot,
  Image,
  Globe,
  Code,
  Rocket,
  Truck,
  Video,
  PhoneCall,
  Zap,
  Layout
} from 'lucide-react';
import { APIItem, BusinessSector } from './types';

export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    id: 'delivery-mgmt',
    name: 'Management Platforme Livrare',
    icon: 'Truck',
    price: '1.500 RON/lună',
    description: 'Negociem comisioanele și bugetele pentru tine pe Glovo, Wolt și Bolt Food.',
    benefits: ['Negociere Comisioane (Economisești Bani)', 'Meniu Optimizat pentru Vânzare', 'Suport WhatsApp 24/7'],
    metrics: [
      { label: 'Comisioane Reduse', value: 'de la 35% la 25%', change: '-10%' },
      { label: 'Vânzări Upsell', value: '+25%', change: 'Target' }
    ],
    apisUsed: ['openai', 'google-maps', 'twilio', 'stripe'],
    automationLogic: 'Sincronizăm meniurile pe toate platformele și optimizăm razele de livrare pentru a minimiza costurile logistice.',
    features: [
      { title: 'Negociere Bugete Marketing', desc: 'Obținem bugete de campanie susținute direct de platforme.' },
      { title: 'Actualizare Zilnică Meniu', desc: 'Meniul zilei actualizat automat pentru a păstra clienții fideli.' }
    ]
  },
  {
    id: 'video-automation',
    name: 'Producție Video & Postare',
    icon: 'Video',
    price: '1.625 RON/lună',
    discount: '-35%',
    description: '16-20 Clipuri Premium / Lună. Noi creăm, noi postăm pe 4 platforme simultan.',
    benefits: ['Tehnologie VEO3 AI', 'Prezentatori Profesionali', 'Postare Automată Zilnică'],
    metrics: [
      { label: 'Engagement', value: '+300%', change: 'Săptămânal' },
      { label: 'Timp Economisit', value: '40 ore', change: '/lună' }
    ],
    apisUsed: ['google-gemini', 'youtube', 'newsapi', 'unsplash'],
    automationLogic: 'Folosim VEO3 pentru a genera videoclipuri cinematografice folosind chipul și vocea ta sau prezentatori virtuali.',
    features: [
      { title: 'Robot Postare Zilnică', desc: 'TikTok, Instagram Reels, FB Reels și YouTube Shorts la ore optime.' },
      { title: 'Storyboarding AI', desc: 'Idei virale create de AI bazate pe trendurile locale.' }
    ]
  },
  {
    id: 'virtual-assistant',
    name: 'Asistent Virtual AI',
    icon: 'PhoneCall',
    price: '1.500 RON/lună',
    discount: '-25%',
    description: 'Nu doarme niciodată, răspunde instant oricărui client prin Voce sau Chat.',
    benefits: ['Voice AI (Răspunde la Telefon)', 'Expert WhatsApp Chat', 'Rezervări Automate Google Calendar'],
    metrics: [
      { label: 'Apeluri Pierdute', value: '0', change: 'Target' },
      { label: 'Timp Răspuns', value: 'Instant', change: '24/7' }
    ],
    apisUsed: ['ibm-watson', 'google-calendar', 'twilio', 'libretranslate'],
    automationLogic: 'Agentul AI știe meniul, prețurile și ingredientele. Preia rezervări și le confirmă automat în calendar.',
    features: [
      { title: 'Voce Naturală', desc: 'Vorbește ca un om, fără latență și fără accent robotic.' },
      { title: 'Upselling Inteligent', desc: 'Sugerează sosuri, deserturi sau băuturi în timpul comenzii.' }
    ]
  },
  {
    id: 'autopilot-bundle',
    name: 'Afacere pe Pilot Automat',
    icon: 'Zap',
    price: '1.375 RON/lună',
    discount: '-45%',
    description: 'Tot ce ai nevoie pentru a vinde online într-o singură soluție completă.',
    benefits: ['App Mobilă & Website Propriat', 'Management Social Media', 'Fidelizare Automată'],
    metrics: [
      { label: 'ROI din Luna 1', value: 'Garantat', change: 'ROI' },
      { label: 'Economie Pachet', value: '45%', change: 'Salvat' }
    ],
    apisUsed: ['google-gemini', 'stripe', 'github', 'qr-gen'],
    automationLogic: 'Centralizează toate pachetele într-un singur sistem care rulează afacerea fără intervenție umană majoră.',
    features: [
      { title: 'Lansare iOS & Android', desc: 'Aplicația ta proprie pentru a scăpa de comisioanele platformelor.' },
      { title: 'Bază de Date Clienți', desc: 'Colectăm date și trimitem oferte automate prin WhatsApp.' }
    ]
  },
  {
    id: 'medical-ai',
    name: 'Cabinete Medicale',
    icon: 'Stethoscope',
    description: 'GDPR compliant, reducere 60% timp administrativ și asistență triaj.',
    benefits: ['Triaj preliminar AI', 'Sincronizare rețete', 'Portal pacient securizat'],
    metrics: [
      { label: 'Timp Admin', value: '-60%', change: 'Economie' },
      { label: 'Satisfacție', value: '4.9/5', change: '+0.5' }
    ],
    apisUsed: ['ibm-watson', 'google-maps', 'libretranslate', 'sendgrid'],
    automationLogic: 'Sistemul de triaj procesează simptomele inițiale și direcționează pacientul către specialistul potrivit.'
  },
  {
    id: 'retail-master',
    name: 'Magazine Retail',
    icon: 'ShoppingBag',
    description: '+30% vânzări prin personalizare și 90% stoc optimizat.',
    benefits: ['Recomandări personalizate', 'Gestiune stoc predictivă', 'Analiză sentiment'],
    metrics: [
      { label: 'Vânzări', value: '+30%', change: 'Target' },
      { label: 'Stoc', value: '92%', change: 'Acuratețe' }
    ],
    apisUsed: ['unsplash', 'stripe', 'google-gemini', 'newsapi'],
    automationLogic: 'Monitorizează tendințele din social media pentru a ajusta stocurile automat.'
  },
  {
    id: 'public-gov',
    name: 'Sector Public',
    icon: 'Building2',
    description: 'Digitalizare completă și 70% reducere a cozilor la ghișeu.',
    benefits: ['Cereri online AI', 'Hărți utilități', 'Transparență'],
    metrics: [
      { label: 'Timp Așteptare', value: '-70%', change: 'Reducere' },
      { label: 'Transparență', value: '100%', change: 'Target' }
    ],
    apisUsed: ['nominatim', 'iqair', 'openweather', 'qr-gen'],
    automationLogic: 'Cetățenii raportează incidente geo-localizate. AI clasifică urgența automat.'
  },
  {
    id: 'hotel-concierge',
    name: 'Hoteluri & Pensiuni',
    icon: 'Hotel',
    description: '95% auto check-in și independență față de Booking/Expedia.',
    benefits: ['Auto Check-in mobil', 'Upselling conciergie', 'Suport multilingv'],
    metrics: [
      { label: 'Comisioane', value: 'Salvate', change: '15-20%' },
      { label: 'Utilizare AI', value: '95%', change: 'Target' }
    ],
    apisUsed: ['exchangerate-api', 'ipinfo', 'libretranslate', 'spotify'],
    automationLogic: 'Recunoaște locația și limba clientului, oferind check-in instant.'
  },
  {
    id: 'real-estate-ai',
    name: 'Agenții Imobiliare',
    icon: 'Home',
    description: '+200% leads calificate și +60% conversie.',
    benefits: ['Tururi virtuale AI', 'Analiză preț piață', 'Follow-up automat'],
    metrics: [
      { label: 'Leads', value: '+200%', change: 'Creștere' },
      { label: 'Conversie', value: '+60%', change: 'Target' }
    ],
    apisUsed: ['google-maps', 'nasa', 'randomuser', 'geojs'],
    automationLogic: 'Analizează datele de mediu și seismice pentru evaluări precise.'
  }
];

export const API_CATALOG: APIItem[] = [
  // Weather
  { id: 'openweather', name: 'OpenWeather', category: 'Weather', description: 'Date meteo globale în timp real.', icon: 'Cloud' },
  { id: 'iqair', name: 'IQAir', category: 'Weather', description: 'Monitorizarea calității aerului.', icon: 'Cloud' },
  
  // Finance
  { id: 'exchangerate-api', name: 'ExchangeRate', category: 'Finance', description: 'Conversii valutare în timp real.', icon: 'DollarSign' },
  { id: 'stripe', name: 'Stripe', category: 'Finance', description: 'Procesare plăți online securizată.', icon: 'DollarSign' },
  
  // Maps
  { id: 'google-maps', name: 'Google Maps', category: 'Maps', description: 'Geocodare, rute și locuri.', icon: 'MapPin' },
  { id: 'ipinfo', name: 'IPinfo', category: 'Maps', description: 'Locație utilizator bazată pe IP.', icon: 'MapPin' },
  
  // AI
  { id: 'google-gemini', name: 'Google Gemini', category: 'AI', description: 'Model avansat pentru VEO3 și Logică.', icon: 'Bot' },
  { id: 'openai', name: 'OpenAI', category: 'AI', description: 'GPT-4o pentru chat și suport.', icon: 'Bot' },
  { id: 'ibm-watson', name: 'IBM Watson', category: 'AI', description: 'Voice AI și Speech-to-Text.', icon: 'Bot' },

  // Media
  { id: 'veo3', name: 'VEO3 AI Video', category: 'Media', description: 'Generare video cinematică.', icon: 'Video' },
  { id: 'unsplash', name: 'Unsplash', category: 'Media', description: 'Bibliotecă de imagini HD.', icon: 'Image' },
  { id: 'youtube', name: 'YouTube', category: 'Media', description: 'Postare automată video.', icon: 'Image' },

  // Social
  { id: 'newsapi', name: 'NewsAPI', category: 'Social', description: 'Știri de ultimă oră globale.', icon: 'Globe' },
  { id: 'tiktok-api', name: 'TikTok API', category: 'Social', description: 'Automatizare postări TikTok.', icon: 'Globe' },

  // Dev
  { id: 'twilio', name: 'Twilio', category: 'Dev', description: 'SMS și WhatsApp Business.', icon: 'Code' },
  { id: 'qr-gen', name: 'QR Generator', category: 'Dev', description: 'Generare coduri QR meniuri.', icon: 'Code' }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Hotel: <Hotel className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  PhoneCall: <PhoneCall className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Cloud: <Cloud className="w-4 h-4" />,
  DollarSign: <DollarSign className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  Image: <Image className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Rocket: <Rocket className="w-4 h-4" />
};
