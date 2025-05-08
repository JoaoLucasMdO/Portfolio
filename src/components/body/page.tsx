'use client';
import Projects from "../projects/page";
import Formations from "../academicFormations/page";

export default function Body() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Seção Sobre Mim */}
      <section id="inicio" className="mb-12">
        <div className="bg-gray-100 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Sobre Mim</h2>
          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
            Atualmente, sou aluno do curso de <strong>Desenvolvimento de Software Multiplataforma</strong> na <strong>Fatec Votorantim</strong>, onde venho aprimorando minhas habilidades em desenvolvimento web. 
            Participei de diversos projetos nos quais desenvolvi sistemas que consomem <strong>APIs REST</strong> criadas por mim, utilizando bancos de dados como <strong>MongoDB</strong> e <strong>Firebase</strong>.
            <br /><br />
            No <strong>Back-End</strong>, trabalho com <strong>JavaScript</strong> e <strong>TypeScript</strong>; no <strong>Front-End</strong>, utilizo frameworks como <strong>Next.js</strong> ou utilizo <strong>HTML</strong> puro. 
            Em todos os projetos, busco proporcionar a melhor experiência possível ao usuário, garantindo uma visualização de dados clara, eficiente e intuitiva.
          </p>
        </div>
      </section>

      <hr className="my-12 border-gray-300" />

      {/* Seção Projetos */}
      <section id="projetos" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Projetos</h2>
        <Projects />
      </section>

      <hr className="my-12 border-gray-300" />

      {/* Seção Formações Acadêmicas */}
      <section id="formacoes">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Formações Acadêmicas</h2>
        <Formations />
      </section>
    </main>
  );
}
