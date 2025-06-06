'use client';
import Projects from "../projects/page";
import Formations from "../academicFormations/page";
import Certifications from "../certifications/page";

export default function Body() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Seção Sobre Mim */}
      <section id="inicio" className="mb-12">
        <div className="bg-gray-100 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Sobre Mim</h2>
          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
            Sou um entusiasta da tecnologia com formação técnica em <strong>Administração de Banco de Dados</strong> pela <strong>ETEC</strong>, onde tive meu primeiro contato com o <strong>SQL Server</strong> e desenvolvi uma base sólida no uso de bancos de dados relacionais.
            <br /><br />
            Atualmente, estou cursando <strong>Desenvolvimento de Software Multiplataforma</strong> na faculdade, ampliando meus conhecimentos em diversas áreas da programação.
            <br /><br />
            No <strong>Front-End</strong>, trabalho com <strong>React</strong> e tenho experiência com o framework <strong>Next.js</strong>, criando interfaces modernas e responsivas.
            <br />
            No <strong>Back-End</strong>, utilizo o <strong>Express</strong> para construir APIs robustas e escaláveis.
            <br />
            Também possuo conhecimento em bancos de dados <strong>NoSQL</strong>, como <strong>MongoDB</strong> e <strong>Firebase</strong>, além de experiência com bancos relacionais como <strong>MySQL</strong>.
            <br /><br />
            Estou sempre buscando novos desafios e aprendizados na área de desenvolvimento, com foco em criar soluções eficientes e bem estruturadas.
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

      <hr className="my-12 border-gray-300" />

      {/* Seção Projetos */}
      <section id="certificacoes">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Certificações</h2>
        <Certifications />
      </section>
    </main>
  );
}
