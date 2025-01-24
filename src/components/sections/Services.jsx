import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaintRoller, 
  FaCar, 
  FaWrench, 
  FaPalette
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaPaintRoller,
      title: 'Pintura Automotiva',
      description: 'Transformação completa com tecnologia de ponta e precisão milimétrica.',
      details: [
        'Cabine de pintura moderna',
        'Tintas de alta qualidade',
        'Técnicos especializados'
      ],
      color: 'orange',
      images: ['/p-1.jpg', '/p-2.jpg']
    },
    {
      icon: FaCar,
      title: 'Funilaria Profissional',
      description: 'Restauração estrutural com técnicas avançadas de correção.',
      details: [
        'Reparo de colisões',
        'Alinhamento preciso',
        'Recuperação estrutural'
      ],
      color: 'blue',
      images: ['/funilaria-1.jpg', '/funilaria-2.jpeg']
    },
    {
      icon: FaWrench,
      title: 'Polimento Especializado',
      description: 'Recuperação do brilho original com tratamento de alta performance.',
      details: [
        'Correção de imperfeições',
        'Proteção cerâmica',
        'Restauração de acabamento'
      ],
      color: 'green',
      images: ['/poli-1.jpg', '/poli-2.jpg']
    },
    {
      icon: FaPalette,
      title: 'Personalização Premium',
      description: 'Estilo único com soluções personalizadas de alto padrão.',
      details: [
        'Design exclusivo',
        'Materiais premium',
        'Técnicas customizadas'
      ],
      color: 'purple',
      images: ['/per-1.jpg', '/per-2.jpg']
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Serviços <span className="text-orange-500">Premium</span>
          </h2>
          <p className="text-gray-600 mt-4 text-xl">Excelência em cada detalhe</p>
        </div>

        <div className="hidden lg:grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex"
            >
              <div className="w-1/3 p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`mr-4 text-2xl text-${service.color}-500`} />
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {service.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-${service.color}-50 p-2 rounded`}
                    >
                      <p className={`text-${service.color}-600 text-sm font-semibold`}>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-2/3 grid grid-cols-2 gap-4 p-4">
                {service.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Serviço ${service.title}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`mr-4 text-2xl text-${service.color}-500`} />
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {service.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-${service.color}-50 p-2 rounded text-center`}
                    >
                      <p className={`text-${service.color}-600 text-xs font-semibold`}>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 p-2">
                {service.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Serviço ${service.title}`}
                    className="w-full h-32 object-cover rounded"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;