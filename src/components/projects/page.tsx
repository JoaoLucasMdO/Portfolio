'use client';
import InteractiveEx from './interactiveEx/page';
import NewWeatherEx from './newWeather/page';
import { useState } from 'react';

function PowerBI() {
  return <InteractiveEx />;
}

function NewWeather() {
  return <NewWeatherEx />;
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'powerbi' | 'weather'>('powerbi');

  return (
    <div className="w-full">
      {/* Botões de seleção de projeto */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveProject('powerbi')}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ${
            activeProject === 'powerbi'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          PowerBI
        </button>
        <button
          onClick={() => setActiveProject('weather')}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ${
            activeProject === 'weather'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          NewWeather
        </button>
      </div>

      {/* Container do conteúdo do projeto */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {activeProject === 'powerbi' && <PowerBI />}
        {activeProject === 'weather' && <NewWeather />}
      </div>
    </div>
  );
}
