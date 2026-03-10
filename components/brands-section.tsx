"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const brandLogos = [
  { 
    name: "Avianca", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avianca-Logo-Za8lpMukSBclWzpfbOAzYZT1CNM4sz.png",
    category: "airline"
  },
  { 
    name: "Avianca Lifemiles", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20AVLM%20normal-01-ABVgQCFZ0KsBByn50NH0wFtQR1nrAR.png",
    category: "airline"
  },
  { 
    name: "Arajet", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arajet-O5ta8hD9kGBJ8s6wNvDYE1slkbpO4b.png",
    category: "airline"
  },
  { 
    name: "Curaçao Tourist Board", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nuevo-logo-Oficina-de-Turismo-de-Cura%C3%A7ao-1-2sp1ZAY0nMALLIpTTZFazwM4YstF99.webp",
    category: "tourism"
  },
  { 
    name: "Mövenpick Resort Petra", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movenpick%20resort%20Petra-kYQlz3ZCadgxKLcC9cJ7p3geSZUCeO.jpg",
    category: "hotel"
  },
  { 
    name: "Viajero Hostels", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_hotel-viajero-ctg-hWCRHgIndWR4XR06QZSodtRamrdjci.png",
    category: "hotel"
  },
  { 
    name: "Holafly", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Holalfy-l5m7P6GiTNXqQrgDHggxIdZqtWU4Pi.png",
    category: "travel"
  },
  { 
    name: "IATI Seguros", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IATILOGO-gC7X01QwheD5b6BGdJC2oinXbeMFZu.jpg",
    category: "travel"
  },
  { 
    name: "Europcar", 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/europcar-logo-vector-download-free-11574196313yuhv673szz-JeYbreOt7mCtSeGt1gOMCGHTvcD0l2.png",
    category: "transportation"
  },
]

export function BrandsSection() {
  const { t } = useLanguage()

  return (
    <section id="brands" className="py-16 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            {t("brands.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
            {t("brands.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 md:p-6 bg-card rounded-xl border border-border/50 aspect-[3/2] hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground/60 mt-10 text-sm italic">
          {t("brands.subtitle")}
        </p>
      </div>
    </section>
  )
}
