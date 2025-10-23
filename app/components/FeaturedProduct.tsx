'use client'

import Image from 'next/image'
import Carousel from './Carousel'

export default function FeaturedProduct() {
    const whatsappLink = `https://wa.me/5516982847922?text=${encodeURIComponent(
        'Olá! Tenho interesse no produto: Buffet Encontro das Águas'
    )}`

    const gallery = [
        {
            src: '/produtos/encontro-das-aguas1.jpg',
            alt: 'Detalhe frontal do Buffet Encontro das Águas',
        },
        {
            src: '/produtos/encontro-das-aguas2.jpg',
            alt: 'Vista lateral do Buffet Encontro das Águas',
        },
    ]

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
                {/* LADO ESQUERDO - TEXTO */}
                <div className="flex-1 bg-stone-100 p-6 md:p-10 rounded-xl shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-4 uppercase tracking-widest">
                            Buffet Encontro das Águas
                        </h2>

                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                            O encontro entre o rio Tapajós e o rio Amazonas é um fenômeno natural que salta aos olhos de quem vê.
                            Isso porque é possível observar nitidamente a separação entre as águas deles, sendo o primeiro de águas
                            azuis-esverdeadas, e o segundo de águas barrentas, de forma a criar grande contraste na paisagem local.
                        </p>
                    </div>

                    <div className="w-full rounded-lg overflow-hidden">
                        <Image
                            src="/produtos/encontro-das-aguas.jpg"
                            alt="Referência do Encontro das Águas"
                            width={800}
                            height={500}
                            className="object-cover w-full h-auto rounded-lg border border-gray-300"
                        />
                    </div>
                </div>

                {/* LADO DIREITO - IMAGEM DO MÓVEL */}
                <div className="flex-1 flex justify-center items-stretch">
                    <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <Image
                            src="/produtos/buffet-encontro.jpg"
                            alt="Buffet Encontro das Águas - Móvel Planejado"
                            fill
                            className="object-contain"
                            priority
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
