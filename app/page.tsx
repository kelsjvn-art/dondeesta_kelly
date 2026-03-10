import { CollaborationCard } from "@/components/collaboration-card"
import { ImageGallery } from "@/components/image-gallery"
import { MapPin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

const collaborationCategories = [
  {
    title: "Destinations & Tourism",
    description: "Storytelling content designed to showcase destinations through cinematic travel experiences. Ideal for tourism boards and destination marketing organizations.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%281%29-FAp60OqYjBfy7ywwwwvjplLtbnDFyO.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%283%29-9ZF7U5w36Y9dGWiW1c0crOUgytox2Y.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%285%29-NLxz71Xty93uQ3NBAV0Eu9U80TxTox.jpeg",
    ],
  },
  {
    title: "Hotels & Unique Stays",
    description: "Content focused on the experience of staying in unique properties such as boutique hotels, lodges, eco-hotels and glamping locations.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM-2VaPYPKkAZ1fkmT01rmCf4BQnXrfOn.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%288%29-oqMotvym0aN6hFtzQX9E3PMVrkjBTs.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%285%29-VlBZNjuP0SjMCcLgCjXK6WCW2QAazO.jpeg",
    ],
  },
  {
    title: "Travel Brands",
    description: "Collaborations with brands that are part of the travel experience, including outdoor gear, travel equipment, technology and adventure brands.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%284%29-Y74B2Q7EWnbLu4djfFGf23l51UKAcL.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%286%29-GJeXJ3dmIO95EEGjVLcSjUniY2Nj4K.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.39%20PM-aNk8LfiUCDkxI3sZR8x3WDn1AlEcxh.jpeg",
    ],
  },
  {
    title: "Travel Platforms & Experiences",
    description: "Creation of storytelling content around guided experiences, tours and local activities offered by travel platforms like Expedia, GetYourGuide, and Steller.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%282%29-EC9axtoz2yd0oFarhwUqGT9PZhZDrm.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%287%29-JDWboiM7QDR2cC5o76Tf9DecwS77rS.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%286%29-19178IDcriyh0GyLNRCYd5N7l7H8e3.jpeg",
    ],
  },
  {
    title: "Airlines & Transportation",
    description: "Collaborations with airlines and transportation companies to document travel routes and the experience of reaching unique destinations.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%282%29-FNS9qBm6L9vsC2DlgtF76x0qTXC9uv.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%287%29-S3sVkibahlm1h4cfStqJWd2ioI4WuW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.39%20PM%20%281%29-8AFp0paFxVL0i0nMZRP6Pn8KQaAKst.jpeg",
    ],
  },
]

const galleryImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%288%29-oefY7c507vHo6hNfdiou3PDn54VTJx.jpeg", alt: "Aerial pool view" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%283%29-tCDl8KoYWUm9fB5OIkMJs9xGnHeFKF.jpeg", alt: "Couple in hotel bathroom" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%289%29-gZJYdbbrz5dK9bGA8zLHOSQXwroSdu.jpeg", alt: "Pool from above" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%287%29-JDWboiM7QDR2cC5o76Tf9DecwS77rS.jpeg", alt: "Floating in pool" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%285%29-NLxz71Xty93uQ3NBAV0Eu9U80TxTox.jpeg", alt: "Infinity pool sunset" },
]

export default function CollaborationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%285%29-NLxz71Xty93uQ3NBAV0Eu9U80TxTox.jpeg"
          alt="Kelly Vega - Travel Storyteller"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Travel Storyteller & Photographer
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight text-balance max-w-4xl">
            Collaboration Opportunities
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 tracking-tight">
            {"Let's Create Together"}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I collaborate with brands, destinations and travel platforms to create authentic visual stories that inspire people to explore the world. Each partnership is approached with intention, creativity, and a focus on meaningful storytelling.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Collaboration Categories */}
      <section className="py-16 md:py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Partnership Types
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              Ways to Work Together
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collaborationCategories.map((category, index) => (
              <CollaborationCard
                key={index}
                title={category.title}
                description={category.description}
                images={category.images}
                className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Visual Stories
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              Recent Work
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%288%29-oqMotvym0aN6hFtzQX9E3PMVrkjBTs.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%282%29-EC9axtoz2yd0oFarhwUqGT9PZhZDrm.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.38%20PM%20%286%29-GJeXJ3dmIO95EEGjVLcSjUniY2Nj4K.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%202.19.37%20PM%20%286%29-19178IDcriyh0GyLNRCYd5N7l7H8e3.jpeg",
            ].map((src, index) => (
              <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`Recent work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight">
            {"Let's Create Something Meaningful"}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            If you&apos;re interested in collaborating on travel stories, destination campaigns or visual content projects, I would love to connect.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <a 
              href="mailto:Dondeestakelly@gmail.com"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Dondeestakelly@gmail.com</span>
            </a>
            <a 
              href="https://instagram.com/dondeesta_kelly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@dondeesta_kelly</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Kelly Vega • Travel Content Director & Photographer</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
