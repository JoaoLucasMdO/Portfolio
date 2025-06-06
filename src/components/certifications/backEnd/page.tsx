'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
    {
        src: '/certificates/BackEndIntermediario.png',
        alt: 'Certificação Intermediária: Desenvolvedor Back-End',
        description: 'Certificação Intermediária: Desenvolvedor Back-End',
        certification: '/certificates/BackEndIntermediario.pdf',
    }, 
];

export default function BackEnd() {
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
        </div>
    );
}
