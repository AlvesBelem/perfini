'use client'

import Image from 'next/image'
import Carousel from './Carousel'

export default function FeaturedProductReversed() {
  const whatsappLink = `https://wa.me/5516982847922?text=${encodeURIComponent(
    'Olá! Tenho interesse no produto: Cristaleira Cerrado'
  )}`

  const gallery = [
    {
      src: '/produtos/MESA HARPIA1.jpg',
      alt: 'MESA HARPIA',
    },
    {
      src: '/produtos/MESA HARPIA1.jpg',
      alt: 'MESA HARPIA',
    },
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* LADO ESQUERDO - IMAGEM DO MÓVEL */}
        <div className="flex-1 flex justify-center items-stretch">
          <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="/produtos/MESA HARPIA1.jpg"
              alt="MESA HARPIA"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* LADO DIREITO - TEXTO + IMAGEM INSPIRAÇÃO */}
        <div className="flex-1 bg-stone-100 p-6 md:p-10 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-4 uppercase tracking-widest">
              HARPIA OU GAVIÃO REAL
            </h2>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
              Como a Harpia ou gavião Real, a mesa é para quem busca voar alto. Design arrojado, inspirado na bela crista de penas da poderosa ave habitante das florestas brasileiras.
              A base é o fruto principal da mesa, com posição favorável ao bom encaixe das cadeiras e um desenho que prende o olhar. O tampo possui angulação nas cabeceiras, e referencias ao habitat natural da Harpia.
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src="/produtos/gaviao_real.png"
              alt="Imagem de Gavião Real"
              width={800}
              height={500}
              className="object-cover w-full h-auto rounded-lg border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Carrossel */}
      <div className="max-w-4xl mx-auto">
        <Carousel images={gallery} />
      </div>

      {/* Botão abaixo centralizado */}
      <div className="flex justify-center mt-10">
        <a
          href={whatsappLink}
          target="_blank"
          className="inline-block bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
        >
          📞 Saiba mais no WhatsApp
        </a>
      </div>
    </section>
  )
}
