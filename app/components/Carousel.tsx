'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number // tempo entre slides em ms
}

export default function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6 aspect-video rounded-lg overflow-hidden border border-gray-300 shadow-md">
      <Image
        key={images[current].src}
        src={images[current].src}
        alt={images[current].alt}
        fill
        className="object-cover transition-all duration-700"
        priority
      />

      {/* Botões de navegação */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 px-3 py-1 rounded-full shadow-md"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 px-3 py-1 rounded-full shadow-md"
      >
        ▶
      </button>
    </div>
  )
}
