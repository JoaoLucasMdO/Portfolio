'use client';

import { useState } from 'react';
import Image from 'next/image';
import { title } from 'process';

const images = [
  {
    title: 'Projeto Integrador - EcosRev',
    src: '/EcosRev.png',
    alt: 'Projeto EcosRev',
    description: 'Ecosrev é uma plataforma web desenvolvida com o objetivo de incentivar o descarte correto de resíduos eletroeletrônicos.',
    link: 'https://github.com/Ecosrev/PI-DSM-front',
  },
  {
    title: 'Projeto Integrador - NewWeather',
    src: '/newweather.png',
    alt: 'Projeto NewWeather',
    description: 'NewWeather é uma aplicação que fornece informações meteorológicas em tempo real.',
    link: 'https://github.com/JoaoLucasMdO/New_Weather',
  },
];

export default function ProjectCarousel() {
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
        {/* Título do projeto */}
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 text-center">
          {images[currentIndex].title}
        </h3>
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
          href={images[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          Acessar Projeto ↗
        </a>
      </div>

    </div>
  );
}
