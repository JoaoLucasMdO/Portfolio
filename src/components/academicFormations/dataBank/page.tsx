'use client';
import Image from 'next/image'

export default function DataBank() {
  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="mb-4 md:mb-0 md:w-1/3 flex justify-center">
  
          <Image
            src="/Portfolio/etec-votorantim.png"
            alt="Imagem da Etec Elias Miguel Jr."
            width={220}
            height={220}
            className="mx-auto"
          />

        </div>

        <div className="md:w-2/3 md:ml-8">
          <h4 className="text-2xl font-semibold text-gray-800">Etec Elias Miguel Jr.</h4>
          
          <div className="mb-4">
            <p><strong className="font-semibold">Curso:</strong> Administração de Banco de Dados</p>
            <p><strong className="font-semibold">Início:</strong> Fevereiro de 2019</p>
            <p><strong className="font-semibold">Término:</strong> Dezembro de 2022</p>
            <p>
              <strong className="font-semibold">Site:</strong>{' '}
              <a
                href="https://www.cps.sp.gov.br/etecs/etec-prof-elias-miguel-junior/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Etec Elias Miguel Jr.
              </a>
            </p>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            É o profissional que modela, instala, configura, atualiza e faz manutenção de banco de dados. Presta suporte a usuários e auxilia no desenvolvimento de aplicações com acesso a banco
            de dados. Atua em equipe multidisciplinar de forma presencial e também à distância.
          </p>
        </div>
      </div>
    </div>
  );
}
