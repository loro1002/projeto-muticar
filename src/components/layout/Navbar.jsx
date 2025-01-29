import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Importe o useLocation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Usando useLocation para pegar a URL atual

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Contato', href: '#contact' },
  ];

  // Condicional para exibir somente "Home" se a página atual for "Quem Somos"
  const filteredNavItems = location.pathname === '/quem-somos'
    ? navItems.filter(item => item.name === 'Home') // Exibe apenas "Home"
    : navItems; // Exibe todos os itens

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50 h-20">
      <div className="container mx-auto px-4 flex justify-between items-center h-full max-w-6xl">
        {/* Logo */}
        <div className="flex items-center h-full">
          <a href="#home" aria-label="Voltar ao início">
            <img
              src="/multcar-logo.png"
              alt="Logo da Mult Car"
              className="max-h-40 object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {filteredNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          {/* Botão "Fale Conosco" */}
          <a
            href="https://wa.me/5544984470051?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
            aria-label="Fale Conosco pelo WhatsApp"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 text-white"
          >
            <div className="px-4 pt-2 pb-4 container max-w-6xl mx-auto">
              {filteredNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-2 rounded text-white hover:bg-gray-700 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Botão "Fale Conosco" para Mobile */}
              <a
                href="https://wa.me/5544984470051?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 w-full text-white py-2 mt-2 rounded-md hover:bg-orange-600 transition-all"
                aria-label="Fale Conosco pelo WhatsApp"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
