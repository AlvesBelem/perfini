'use client'

import Image from 'next/image'

const products = [
    {
        nome: 'APARADOR WING',
        imagem: '/produtos/APARADOR WING.jpg',
    },
    {
        nome: 'APARADOR WING',
        imagem: '/produtos/APARADOR WING.jpg',
    },
    {
        nome: 'APARADOR WING',
        imagem: '/produtos/APARADOR WING.jpg',
    },
    {
        nome: 'APARADOR WING',
        imagem: '/produtos/APARADOR WING.jpg',
    },

]

export default function ProductGallery() {
    return (
        <section className="bg-green-50 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                    Projetos Recentes
                </h2>
                <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                    Conheça alguns dos móveis planejados desenvolvidos pela Perfini sob medida para nossos clientes.
                </p>

                {/* Produtos em grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {products.slice(0, 4).map((produto, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200 flex flex-col"
                        >
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-green-700 mb-2">
                                        {produto.nome}
                                    </h3>
                                </div>

                                <a
                                    href={`https://wa.me/5516982847922?text=${encodeURIComponent(
                                        `Olá! Tenho interesse no produto: ${produto.nome}`
                                    )}`}
                                    target="_blank"
                                    className="mt-4 inline-block bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
                                >
                                    📞 Saiba mais no WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}