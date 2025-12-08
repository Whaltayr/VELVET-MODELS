import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícones hamburger e fechar

export default function Navbar() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Array de links (boa prática: fácil de manter)
  const navLinks = [
    { name: "Modelos", path: "/models" },
    { name: "Junte-se a nós", path: "/join" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-velvet-black/90 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Logo (Sempre visível) */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-display font-semibold tracking-wider hover:text-velvet-gray transition-colors"
        >
          VELVET
        </Link>

        {/* Menu Desktop (Visível apenas em telas maiores que 'md') */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg uppercase hover:text-velvet-gray transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botão Mobile (Visível apenas em telas menores que 'md') */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu Mobile (Abre e fecha com base no estado 'isOpen') */}
      {isOpen && (
        <nav className="md:hidden absolute top-20 w-full bg-velvet-black border-t border-velvet-gray/50 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-3 text-xl uppercase border-b border-velvet-gray/30 last:border-b-0 hover:bg-velvet-gray/20"
              onClick={() => setIsOpen(false)} // Fecha ao clicar
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
