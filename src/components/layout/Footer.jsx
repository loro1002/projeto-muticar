import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Coluna da Empresa */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Mult Car</h3>
          <p className="text-gray-400">
            Especialistas em funilaria e pintura, transformando seu veículo com 
            qualidade e precisão em Umuarama/PR.
          </p>
          <p className="mt-4 text-gray-400">
            Nosso compromisso é entregar resultados excepcionais, com foco na sua satisfação.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a></li>
            <li><a href="#before-after" className="hover:text-blue-400 transition-colors">Galeria</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Redes Sociais e Contato */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contato</h4>
          <div className="space-y-2 text-gray-400">
            <p>Tel: (44) 98447-0051</p>
            <p>Email: contato@multcarpinturas.com.br</p>
            <p>Endereço: Avenida Alexandre ceranto, 2368, Jardim Nova América, Umuarama/PR</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/www.multicar.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/multcar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5544984470051"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Mult Car. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 mt-2">
          Desenvolvido por{' '}
          <a
            href="https://gpxwebsolutions.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GPX WebSolutions
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
