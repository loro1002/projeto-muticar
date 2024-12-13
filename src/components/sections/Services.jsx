import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaintRoller, 
  FaCar, 
  FaWrench, 
  FaPalette 
} from 'react-icons/fa';

const Services = () => {
  const [expandedService, setExpandedService] = useState(0); // Inicializa com o primeiro serviço expandido
  const [isMobile, setIsMobile] = useState(false); // Para detectar se é mobile ou não

  const services = [
    {
      icon: FaPaintRoller,
      title: 'Pintura Completa',
      description: 'Serviço completo de pintura automotiva com técnicas modernas e precisão.',
      images: ['/p-1.jpg', '/p-2.jpg', '/p-3.jpg'],
    },
    {
      icon: FaCar,
      title: 'Funilaria',
      description: 'Reparos especializados em amassados, riscos e restauração de lataria.',
      images: ['/p-1.jpg', '/p-2.jpg', '/p-3.jpg'],
    },
    {
      icon: FaWrench,
      title: 'Polimento',
      description: 'Restauração do brilho original com polimento profissional.',
      images: ['/poli-1.jpg', '/poli-2.jpg', '/poli-3.jpeg'],
    },
    {
      icon: FaPalette,
      title: 'Personalização',
      description: 'Transforme o visual do seu veículo com nossos serviços de personalização.',
      images: ['/per-1.jpg', '/per-2.jpg', '/per-3.jpg'],
    }
  ];

  const toggleImages = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Nossos <span className="text-orange-500">Serviços</span>
        </h2>
        <p className="text-gray-600 mt-4">Soluções completas para seu veículo</p>
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        {/* Exibe os serviços */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all
              ${expandedService === index ? 'bg-blue-100 border-l-4 border-blue-600' : 'bg-white'} w-full md:w-[48%]`}
          >
            <service.icon className={`mr-4 text-3xl ${expandedService === index ? 'text-blue-600' : 'text-gray-600'}`} />
            <div>
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              
              {/* Botão "Ver mais" */}
              {isMobile && expandedService !== index && (
                <button
                  onClick={() => toggleImages(index)}
                  className="text-blue-500 text-sm mt-2"
                >
                  {expandedService === index ? 'Ver menos' : 'Ver mais'}
                </button>
              )}

              {/* Exibe as imagens quando o serviço está expandido */}
              {(isMobile ? expandedService === index : true) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {service.images.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img}
                      alt={`Imagem do serviço: ${service.title}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
