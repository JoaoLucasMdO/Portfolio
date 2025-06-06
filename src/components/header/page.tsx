'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-900 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <span className="text-white text-2xl font-bold ">
            João Lucas Melo de Oliveira
          </span>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              data-target="mobile-demo"
              className="text-white text-2xl"
            // Aqui você pode colocar a lógica para mostrar o menu em dispositivos móveis
            >
              <i className="material-icons">menu</i>
            </button>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <a href="#inicio" className="hover:text-cyan-300">Início</a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-cyan-300">Projetos</a>
            </li>
            <li>
              <a href="#formacoes" className="hover:text-cyan-300">Formações</a>
            </li>
            <li>
              <a href="#certificacoes" className="hover:text-cyan-300">Certificações</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
