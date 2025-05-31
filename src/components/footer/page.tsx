import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Ícones sociais */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/JoaoLucasMdO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-400 transform hover:scale-125 transition duration-300"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://wa.me/5515992501246"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-400 transform hover:scale-125 transition duration-300"
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="mailto:projetofatec01@gmail.com"
            aria-label="Gmail"
            className="hover:text-red-400 transform hover:scale-125 transition duration-300"
          >
            <FaEnvelope size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-oliveira-b08461269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Direitos autorais */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} João Lucas Melo de Oliveira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
