"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface CollaborationCardProps {
  title: string
  description: string
  images: string[]
  className?: string
}

export function CollaborationCard({ title, description, images, className }: CollaborationCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500",
      className
    )}>
      {/* Image Grid */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {images.length === 1 && (
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {images.length === 2 && (
          <div className="grid grid-cols-2 h-full">
            {images.map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={img}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
        {images.length >= 3 && (
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            <div className="relative row-span-2 overflow-hidden">
              <Image
                src={images[0]}
                alt={`${title} 1`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src={images[1]}
                alt={`${title} 2`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src={images[2]}
                alt={`${title} 3`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        
        {/* Title on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight text-balance">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
