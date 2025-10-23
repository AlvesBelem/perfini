'use client'

import Image from 'next/image'


export default function Hero() {
    return (
        <section className="bg-linear-to-br from-green-100 to-green-50 py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12 min-h-[60px]">
                {/* LEFT - Texto */}
                <div className="flex-1 flex flex-col justify-center h-full">
                    <h1 className="text-4xl md:text-3xl font-bold text-green-800 mb-0.5 text-center">
                        Móveis Planejados em Madeira Sob Medida
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-green-900 mb-0.5 text-center">
                        Transformando madeira em ambientes sofisticados e personalizados. Cada detalhe feito para você.
                    </p>

                    <div className="mt-8 flex justify-center mb-6">
                        <a
                            href="https://wa.me/5516982847922"
                            target="_blank"
                            className="inline-block bg-green-700 text-white text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
                        >
                            📞 Fale conosco no WhatsApp
                        </a>
                    </div>

                    <h2 className="text-xl font-semibold text-green-900 mb-2 text-center">Bem-vindo à Amazônia!</h2>
                    <p className="mb-4">
                        O design é fruto da necessidade humana, passando pelos seus sonhos e ideias. Isso nos motiva a inovar e buscar novas tecnologias desde <strong>1991</strong>,
                        desenvolvendo, produzindo e comercializando móveis de madeira que surpreendam e satisfaçam nossos clientes.
                    </p>
                    <p className="mb-0.2">
                        A madeira é nossa principal matéria-prima. Sua beleza, forma e textura nos proporcionam navegar no universo criativo com amor, responsabilidade e respeito.
                        Trabalhar com a natureza é manter viva sua essência, transformando-a em móveis com identidade única, alto padrão e significado duradouro.
                    </p>



                </div>

                {/* RIGHT - Imagem com altura igual ao texto */}
                <div className="flex-1 relative h-[500px] rounded-xl overflow-hidden border border-gray-300 shadow-lg">
                    <Image
                        src="/hero-madeira.jpg"
                        alt="Ambiente planejado em madeira sob medida"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
