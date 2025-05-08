'use client';
import { useState } from 'react';
import SoftwareDevelopment from './softwareDeveloper/page';
import DataBank from './dataBank/page';

export default function Formations() {
  const [formacaoAtual, setFormacaoAtual] = useState<'banco' | 'dsm'>('dsm');

  return (
    <div className="w-full">
      {/* Botões de seleção de formação */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-center">
        <button
          onClick={() => setFormacaoAtual('dsm')}
          className={`px-6 py-2 rounded-lg font-medium transition duration-300 text-sm md:text-base ${
            formacaoAtual === 'dsm'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          Desenvolvimento de Software Multiplataforma
        </button>
        <button
          onClick={() => setFormacaoAtual('banco')}
          className={`px-6 py-2 rounded-lg font-medium transition duration-300 text-sm md:text-base ${
            formacaoAtual === 'banco'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          Administração de Banco de Dados
        </button>
      </div>

      {/* Conteúdo da formação ativa */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {formacaoAtual === 'dsm' && <SoftwareDevelopment />}
        {formacaoAtual === 'banco' && <DataBank />}
      </div>
    </div>
  );
}
