'use client'

import { useEffect, useRef } from 'react'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current
          if (!video) return

          if (entry.isIntersecting) {
            // Se quiser autoplay ao entrar:
            // video.play().catch(() => {})
          } else {
            // Pausa o vídeo se sair da tela
            video.pause()
          }
        })
      },
      {
        threshold: 0.25, // 25% visível para considerar "em tela"
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <section className="bg-linear-to-br from-green-100 to-green-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título e subtítulo */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          A Arte de Transformar Madeira em Design
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Assista ao vídeo institucional da <strong>Perfini Móveis</strong> e descubra como combinamos tradição, tecnologia e respeito à natureza
          para criar móveis únicos, feitos para durar.
        </p>

        {/* Vídeo com pausa automática */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <video
            ref={videoRef}
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            poster="/video-poster.png"
          >
            <source src="/perfini-video.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      </div>
    </section>
  )
}
