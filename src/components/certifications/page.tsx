'use client';
import PowerBICe from './powerBI/page';
import FrontEndCe from './frontEnd/page';
import BackEndCe from './backEnd/page';
import { useState } from 'react';

function PowerBICertifications() {
  return <PowerBICe />;
}

function FrontEndCertifications() {
  return <FrontEndCe />;
}

function BackEndCertifications() {
  return <BackEndCe />;
}

export default function Certifications() {
  const [activeCertification, setActiveCertification] = useState<'powerbi' | 'front' | 'back'>('powerbi');

  return (
    <div className="w-full">
      {/* Botões de seleção de projeto */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveCertification('powerbi')}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ${
            activeCertification === 'powerbi'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          PowerBI
        </button>
        <button
          onClick={() => setActiveCertification('front')}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ${
            activeCertification === 'front'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          Front End
        </button>
        <button
          onClick={() => setActiveCertification('back')}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ${
            activeCertification === 'back'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          Back End
        </button>
      </div>

      {/* Container do conteúdo do projeto */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {activeCertification === 'powerbi' && <PowerBICertifications />}
        {activeCertification === 'front' && <FrontEndCertifications />}
        {activeCertification === 'back' && <BackEndCertifications />}
      </div>
    </div>
  );
}
