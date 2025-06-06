'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
    {
        src: '/certificates/FrontEndIntermediario.png',
        alt: 'Certificação Intermediária: Desenvolvedor Front-End',
        description: 'Certificação Intermediária: Desenvolvedor Front-End',
        certification: '/certificates/FrontEndIntermediario.pdf',
        validation: ''
    },
    {
        src: 'https://badge.cps.sp.gov.br/_files/60ecbd64c97644179b0a11b8320aa942.png',
        alt: 'Micro Certificação em Front-End Básico',
        description: 'Micro Certificação em Front-End Básico',
        certification: '/certificates/FrontEndBasico.pdf',
        validation: 'https://badge.cps.sp.gov.br//view.aspx?9069e54d-bddd-4f90-b983-4b7548f277cf'
    },
];

export default function FrontEnd() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full flex flex-col items-center py-10">

            <div className="relative w-full max-w-xl min-w-[280px] aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex h-full transition-transform duration-500 ease-in-out w-full"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 min-w-full flex justify-center items-center w-full relative"
                            style={{ height: '100%' }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 640px"
                                className="object-contain rounded-lg"
                            />
                        </div>
                    ))}
                </div>


                {/* Botões de navegação */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                    ⬅️
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                    ➡️
                </button>
            </div>
            
             {/* Indicadores */}
            <div className="flex justify-center mt-4 gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                    />
                ))}
            </div>

            {/* Descrição e link */}
            <div className="mt-4 text-center max-w-xl px-4">
                <p className="text-gray-700 mb-2">{images[currentIndex].description}</p>
                <a
                    href={images[currentIndex].certification}
                    download
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                >
                    Baixar Certificado ⬇️
                </a>

            </div>
            <div className="mt-4 text-center max-w-xl px-4">
                <a
                    href={images[currentIndex].validation}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                >
                    Validar Certificado ⬆️
                </a>

            </div>
        </div>
    );
}
