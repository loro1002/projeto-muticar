import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaComment, 
  FaMapMarkerAlt 
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    // Aqui você poderia adicionar integração com backend ou serviço de envio
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Entre em Contato
          </h2>
          <p className="text-gray-600 mt-4">
            Solicite um orçamento ou tire suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu Email"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Seu Telefone"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="relative">
                <FaComment className="absolute left-3 top-4 text-gray-400" />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua Mensagem"
                  required
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Informações de Contato
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-4 text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p className="text-gray-600">
                    Rua Principal, 123 - Materlinho de Ouro
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="mr-4 text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">contato@multcar.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Horário de Funcionamento</h4>
              <div className="text-gray-600">
                <p>Segunda a Sexta: 8h - 18h</p>
                <p>Sábado: 8h - 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact