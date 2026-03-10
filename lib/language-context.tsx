"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", es: "Inicio" },
  "nav.about": { en: "About", es: "Sobre Mí" },
  "nav.destinations": { en: "Destinations", es: "Destinos" },
  "nav.upcoming": { en: "Upcoming Travel", es: "Próximos Viajes" },
  "nav.collaborations": { en: "Collaborations", es: "Colaboraciones" },
  "nav.brands": { en: "Brands", es: "Marcas" },
  "nav.work": { en: "Work", es: "Trabajo" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  
  // Hero
  "hero.subtitle": { en: "Travel Storyteller & Photographer", es: "Narradora de Viajes y Fotógrafa" },
  "hero.title": { en: "Collaboration Opportunities", es: "Oportunidades de Colaboración" },
  
  // About
  "about.title": { en: "Let's Create Together", es: "Creemos Juntos" },
  "about.description": { 
    en: "I collaborate with brands, destinations and travel platforms to create authentic visual stories that inspire people to explore the world. Each partnership is approached with intention, creativity, and a focus on meaningful storytelling.",
    es: "Colaboro con marcas, destinos y plataformas de viajes para crear historias visuales auténticas que inspiren a las personas a explorar el mundo. Cada asociación se aborda con intención, creatividad y un enfoque en la narración significativa."
  },
  
  // Destinations
  "destinations.label": { en: "Featured Places", es: "Lugares Destacados" },
  "destinations.title": { en: "Destinations", es: "Destinos" },
  
  // Upcoming
  "upcoming.label": { en: "Where I'm Going", es: "A Dónde Voy" },
  "upcoming.title": { en: "Upcoming Travel", es: "Próximos Viajes" },
  "upcoming.description": { 
    en: "Stay tuned for upcoming adventures. I'm always exploring new destinations and creating fresh content.",
    es: "Mantente atento a las próximas aventuras. Siempre estoy explorando nuevos destinos y creando contenido nuevo."
  },
  
  // Collaborations
  "collaborations.label": { en: "Partnership Types", es: "Tipos de Asociación" },
  "collaborations.title": { en: "Ways to Work Together", es: "Formas de Trabajar Juntos" },
  
  // Categories
  "category.destinations.title": { en: "Destinations & Tourism", es: "Destinos y Turismo" },
  "category.destinations.description": { 
    en: "Storytelling content designed to showcase destinations through cinematic travel experiences. Ideal for tourism boards and destination marketing organizations.",
    es: "Contenido narrativo diseñado para mostrar destinos a través de experiencias de viaje cinematográficas. Ideal para juntas de turismo y organizaciones de marketing de destinos."
  },
  "category.hotels.title": { en: "Hotels & Unique Stays", es: "Hoteles y Estancias Únicas" },
  "category.hotels.description": { 
    en: "Content focused on the experience of staying in unique properties such as boutique hotels, lodges, eco-hotels and glamping locations.",
    es: "Contenido centrado en la experiencia de alojarse en propiedades únicas como hoteles boutique, lodges, eco-hoteles y glamping."
  },
  "category.brands.title": { en: "Travel Brands", es: "Marcas de Viaje" },
  "category.brands.description": { 
    en: "Collaborations with brands that are part of the travel experience, including outdoor gear, travel equipment, technology and adventure brands.",
    es: "Colaboraciones con marcas que forman parte de la experiencia de viaje, incluyendo equipos outdoor, tecnología y marcas de aventura."
  },
  "category.platforms.title": { en: "Travel Platforms & Experiences", es: "Plataformas y Experiencias" },
  "category.platforms.description": { 
    en: "Creation of storytelling content around guided experiences, tours and local activities offered by travel platforms.",
    es: "Creación de contenido narrativo sobre experiencias guiadas, tours y actividades locales ofrecidas por plataformas de viajes."
  },
  "category.airlines.title": { en: "Airlines & Transportation", es: "Aerolíneas y Transporte" },
  "category.airlines.description": { 
    en: "Collaborations with airlines and transportation companies to document travel routes and the experience of reaching unique destinations.",
    es: "Colaboraciones con aerolíneas y empresas de transporte para documentar rutas de viaje y la experiencia de llegar a destinos únicos."
  },
  
  // Brands
  "brands.label": { en: "Trusted Partners", es: "Socios de Confianza" },
  "brands.title": { en: "Brands I've Worked With", es: "Marcas con las que He Trabajado" },
  "brands.subtitle": { en: "Proud to collaborate with these amazing brands", es: "Orgullosa de colaborar con estas increíbles marcas" },
  
  // Work
  "work.label": { en: "Visual Stories", es: "Historias Visuales" },
  "work.title": { en: "Recent Work", es: "Trabajo Reciente" },
  
  // Contact
  "contact.title": { en: "Let's Create Something Meaningful", es: "Creemos Algo Significativo" },
  "contact.description": { 
    en: "If you're interested in collaborating on travel stories, destination campaigns or visual content projects, I would love to connect.",
    es: "Si estás interesado en colaborar en historias de viajes, campañas de destinos o proyectos de contenido visual, me encantaría conectar."
  },
  "contact.footer": { en: "Kelly Vega • Travel Content Director & Photographer", es: "Kelly Vega • Directora de Contenido de Viajes y Fotógrafa" },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
