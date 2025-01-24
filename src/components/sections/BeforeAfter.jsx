import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const beforeAfterImages = [
    {
      before: '/antes-1.jpg',
      after: '/depois-1.jpg',
      title: 'Recuperação Completa',
      description: 'Transformação total da lataria'
    },
    {
      before: '/pinturacompletaantes.jpg',
      after: '/pinturacompletadepois.jpg',
      title: 'Pintura Especializada',
      description: 'Restauração perfeita da pintura original'
    },
    {
      before: '/martelihoantes.jpg',
      after: '/marteliho-depois.jpg',
      title: 'Martelinho de Ouro',
      description: 'Correção precisa de pequenos danos'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % beforeAfterImages.length
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? beforeAfterImages.length - 1 : prev - 1
    )
  }

  return (
    <section ref={ref} id="before-after" className="bg-gray-50 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Galeria <span className="text-orange-500">Antes e Depois</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Veja as transformações impressionantes de nossos serviços
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slide Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
              bg-white/50 rounded-full p-2 hover:bg-white/75"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
              bg-white/50 rounded-full p-2 hover:bg-white/75"
          >
            <FaChevronRight className="text-gray-800" />
          </button>

          {/* Current Slide */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div 
              key={`before-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={beforeAfterImages[currentSlide].before}
                alt="Antes"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
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
              className="relative"
            >
              <img
                src={beforeAfterImages[currentSlide].after}
                alt="Depois"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded">
                Depois
              </div>
            </motion.div>
          </div>

          {/* Slide Description */}
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
  )
}

export default BeforeAfter