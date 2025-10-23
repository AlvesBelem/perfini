import Image from 'next/image'

export default function IbamaSeal() {
    return (

        <div className="flex flex-col items-center justify-center my-2">
            <Image
                src="/ibama-logo.png"
                alt="Selo do IBAMA - Instituto Brasileiro do Meio Ambiente"
                width={60}
                height={60}
                priority
            />
            <p className='text-base '><strong>Nº 1667310</strong></p>


            <p className="text-sm text-center text-gray-800 font-medium">
                Perfini, desde 1991 desenvolvendo e produzindo, colaborando para o fim<br />do desmatamento ilegal e mantendo a floresta Amazônica.
            </p>
        </div>
    )
}
