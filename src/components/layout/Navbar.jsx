import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50 h-20">
      <div className="container mx-auto px-4 flex justify-between items-center h-full max-w-6xl">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src="/multcar-logo.png"
            alt="Mult Car Logo"
            className="max-h-40 object-contain"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all">
            Fale Conosco
          </button>
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-2 rounded text-white hover:bg-gray-700 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-orange-500 w-full text-white py-2 mt-2 rounded-md hover:bg-orange-600 transition-all">
                Fale Conosco
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;