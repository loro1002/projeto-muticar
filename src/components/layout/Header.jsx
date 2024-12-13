import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-sm">
          Atendimento: Segunda a Sexta, 8h - 18h
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://wa.me/SEU_NUMERO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp size={24} />
          </a>
          <a 
            href="https://instagram.com/multcar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header