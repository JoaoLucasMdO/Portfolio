'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function NewWeather() {
  type WeatherData = {
    name: string;
    sys: { country: string };
    main: { temp: number };
    weather: { description: string; icon: string }[];
  };

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const getWeather = async () => {
    const apiKey = '5a6dbc367b74700ff55f22a655c45ddb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Cidade não encontrada');
      const data: WeatherData = await response.json();
      setWeather(data);
      setError('');
    } catch (err: unknown) {
      setWeather(null);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro desconhecido ao buscar o clima.');
      }
    }
  };

  return (
    <div className="text-center py-8">
      <h5 className="text-2xl font-semibold text-gray-800 mb-6">
        Exemplo de funcionalidade da API utilizada no projeto web NewWeather
      </h5>

      <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={getWeather}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Buscar
        </button>
      </div>

      <div id="weather">
        {weather && (
          <div className="bg-blue-100 rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h6 className="text-xl font-semibold text-gray-700 mb-4">
              {weather.name}, {weather.sys.country}
            </h6>
            <div className="flex justify-center">
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Ícone do clima"
                width={80}
                height={80}
                className="mb-4"
              />
            </div>
            <p className="text-gray-800">
              🌡️ Temperatura: <strong>{weather.main.temp}°C</strong>
            </p>
            <p className="text-gray-800">
              🌤️ Clima: <strong>{weather.weather[0].description}</strong>
            </p>
          </div>
        )}

        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}
