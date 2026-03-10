"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4", className)}>
      {images.map((image, index) => (
        <div 
          key={index}
          className={cn(
            "relative overflow-hidden rounded-xl group",
            index === 0 && "col-span-2 row-span-2",
            index > 0 && "aspect-square"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}
