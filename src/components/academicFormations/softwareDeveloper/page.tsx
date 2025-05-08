'use client';
import Image from 'next/image'


export default function SoftwareDevelopment() {
  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="mb-4 md:mb-0 md:w-1/3 flex justify-center">
          <Image
            src="/Portfolio/fatec-votorantim.png"
            alt="Imagem da Fatec Votorantim"
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>

        <div className="md:w-2/3 md:ml-8">
          <h4 className="text-2xl font-semibold text-gray-800">Fatec Votorantim</h4>
          
          <div className="mb-4">
            <p><strong className="font-semibold">Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
            <p><strong className="font-semibold">Início:</strong> Fevereiro de 2023</p>
            <p><strong className="font-semibold">Término:</strong> Dezembro de 2025</p>
            <p>
              <strong className="font-semibold">Site:</strong>{' '}
              <a
                href="https://fatecvotorantim.cps.sp.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Faculdade de Tecnologia de Votorantim
              </a>
            </p>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            O curso visa capacitar profissionais para desenvolver aplicações multiplataforma, abrangendo o uso de tecnologias modernas
            como React, Next.js, APIs REST, bancos de dados NoSQL e SQL, com foco em desempenho, usabilidade e boas práticas de programação.
          </p>
        </div>
      </div>
    </div>
  );
}
