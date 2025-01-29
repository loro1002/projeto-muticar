import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const beforeAfterImages = [
    {
      before: '/antes-1.jpg',
      after: '/depois-1.jpg',
      title: 'Recuperação Completa',
      description: 'Transformação total da lataria',
    },
    {
      before: '/pinturacompletaantes.jpg',
      after: '/pinturacompletadepois.jpg',
      title: 'Pintura Especializada',
      description: 'Restauração perfeita da pintura original',
    },
    {
      before: '/martelihoantes.jpg',
      after: '/marteliho-depois.jpg',
      title: 'Martelinho de Ouro',
      description: 'Correção precisa de pequenos danos',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev === 0 ? beforeAfterImages.length - 1 : prev - 1)
    );
  };

  return (
    <section ref={ref} id="before-after" className="bg-gray-50 py-16" aria-labelledby="before-after-title">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <header className="text-center mb-12">
          <h2 id="before-after-title" className="text-4xl font-bold text-gray-800">
            Galeria <span className="text-orange-500">Antes e Depois</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Veja as transformações impressionantes de nossos serviços.
          </p>
        </header>

        <div className="relative max-w-4xl mx-auto">
          {/* Navegação do Slide */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2 hover:bg-white/75"
            aria-label="Slide anterior"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2 hover:bg-white/75"
            aria-label="Próximo slide"
          >
            <FaChevronRight className="text-gray-800" />
          </button>

          {/* Slide Atual */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              key={`before-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-full mx-auto"
            >
              <img
                src={beforeAfterImages[currentSlide].before}
                alt={`Imagem do antes de ${beforeAfterImages[currentSlide].title}`}
                className="w-full h-72 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded">
                Antes
              </div>
            </motion.div>

            <motion.div
              key={`after-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-full mx-auto"
            >
              <img
                src={beforeAfterImages[currentSlide].after}
                alt={`Imagem do depois de ${beforeAfterImages[currentSlide].title}`}
                className="w-full h-72 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded">
                Depois
              </div>
            </motion.div>
          </div>

          {/* Descrição do Slide */}
          <div className="text-center mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {beforeAfterImages[currentSlide].title}
            </h3>
            <p className="text-gray-600 mt-2">
              {beforeAfterImages[currentSlide].description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BeforeAfter;
