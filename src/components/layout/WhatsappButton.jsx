import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a 
      href="https://wa.me/5544984470051?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20orçamento." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all z-50 flex items-center space-x-2"
    >
      <FaWhatsapp size={24} />
      <span className="hidden md:inline">Orçamento</span>
    </a>
  );
};

export default WhatsappButton;
