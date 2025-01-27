import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-sm">
          Atendimento: Segunda a Sexta, 8h - 18h
        </div>
        <div className="flex space-x-4">
          {/* Ícone do WhatsApp */}
          <a
            href="https://wa.me/SEU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 transition-all"
            style={{
              color: '#32E676', // Cor viva com verde mais forte
              textShadow: '0px 0px 8px #32E676', // Efeito de brilho
            }}
          >
            <FaWhatsapp size={26} />
          </a>

          {/* Ícone do Instagram */}
          <a
            href="https://instagram.com/multcar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 transition-all"
            style={{
              color: '#FF0099', // Cor viva com tom forte de rosa
              textShadow: '0px 0px 8px #FF0099', // Efeito de brilho
            }}
          >
            <FaInstagram size={26} />
          </a>

          {/* Ícone do Facebook */}
          <a
            href="https://www.facebook.com/www.multicar.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 transition-all"
            style={{
              color: '#3399FF', // Azul mais vibrante
              textShadow: '0px 0px 8px #3399FF', // Efeito de brilho
            }}
          >
            <FaFacebook size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
