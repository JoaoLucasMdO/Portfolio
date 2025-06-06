'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    title: 'Projeto Integrador - EcosRev',
    src: '/EcosRev.png',
    alt: 'Projeto EcosRev',
    description: (
      <div>
        Ecosrev é uma plataforma web desenvolvida com o objetivo de incentivar o descarte correto de resíduos eletroeletrônicos.<br /><br />
        <strong className="block mb-2">Tecnologias principais:</strong>
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          {/* Frontend */}
          <span title="React Native" className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm font-semibold">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><g><ellipse cx="128" cy="128" rx="100" ry="40" stroke="#61DAFB" strokeWidth="16" /><ellipse cx="128" cy="128" rx="40" ry="100" stroke="#61DAFB" strokeWidth="16" /><circle cx="128" cy="128" r="16" fill="#61DAFB" /></g></svg>
            React Native
          </span>
          <span title="Expo" className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-black text-sm font-semibold">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><g><path d="M128 32L240 224H16L128 32Z" stroke="#000" strokeWidth="16" fill="none"/></g></svg>
            Expo
          </span>
          <span title="Express" className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-800 text-sm font-semibold">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><g><circle cx="128" cy="128" r="100" stroke="#404D59" strokeWidth="16" fill="none"/><text x="50%" y="55%" textAnchor="middle" fill="#404D59" fontSize="60" fontFamily="Arial" dy=".3em">Ex</text></g></svg>
            Express
          </span>
          <span title="MySQL" className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm font-semibold">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><ellipse cx="128" cy="128" rx="100" ry="40" stroke="#00758F" strokeWidth="16" fill="none"/><text x="50%" y="55%" textAnchor="middle" fill="#00758F" fontSize="60" fontFamily="Arial" dy=".3em">M</text></svg>
            MySQL
          </span>
          <span title="MongoDB" className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 text-sm font-semibold">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><ellipse cx="128" cy="128" rx="100" ry="40" stroke="#47A248" strokeWidth="16" fill="none"/><text x="50%" y="55%" textAnchor="middle" fill="#47A248" fontSize="60" fontFamily="Arial" dy=".3em">M</text></svg>
            MongoDB
          </span>
        </div>
        <a
          href="https://www.figma.com/design/bXL4WXW3bh4LPZq1Nl6Mbh/EcosRev---com-tratamento-de-exce%C3%A7%C3%A3o?node-id=0-1&t=NFlEy2NGOc1szUI9-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium block mt-2"
        >
          Protótipo no Figma ↗
        </a>
      </div>
    ),
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
      <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 text-center">
        {images[currentIndex].title}
      </h3>
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
        <div className="text-gray-700 mb-2">
          {typeof images[currentIndex].description === 'string'
            ? images[currentIndex].description
            : images[currentIndex].description}
        </div>
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
