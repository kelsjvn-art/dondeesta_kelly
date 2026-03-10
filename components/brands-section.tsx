"use client"

import { useLanguage } from "@/lib/language-context"

// Placeholder for brand logos - will be replaced when logos are uploaded
const brandLogos = [
  { name: "Brand 1", placeholder: true },
  { name: "Brand 2", placeholder: true },
  { name: "Brand 3", placeholder: true },
  { name: "Brand 4", placeholder: true },
  { name: "Brand 5", placeholder: true },
  { name: "Brand 6", placeholder: true },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 md:p-8 bg-card rounded-xl border border-border/50 aspect-[3/2] hover:shadow-md transition-shadow"
            >
              <div className="text-muted-foreground/40 text-sm text-center">
                {brand.placeholder ? "Logo" : brand.name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Logos coming soon
        </p>
      </div>
    </section>
  )
}
