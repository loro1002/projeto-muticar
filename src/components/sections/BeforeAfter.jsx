import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from 'react-slick'

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const beforeAfterImages = [
    {
      before: 'antes-1.jpg',
      after: 'depois-1.jpg',
      title: 'Recuperação Completa'
    },
    {
      before: '/images/before-after/2-before.jpg',
      after: '/images/before-after/2-after.jpg',
      title: 'Restauração Profissional'
    },
    {
      before: '/images/before-after/3-before.jpg',
      after: '/images/before-after/3-after.jpg',
      title: 'Pintura de Alta Qualidade'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  function CustomNextArrow(props) {
    const { onClick } = props
    return (
      <button 
        onClick={onClick}
        className="absolute top-1/2 right-4 z-10 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-all"
      >
        <FaChevronRight className="text-gray-800" />
      </button>
    )
  }

  function CustomPrevArrow(props) {
    const { onClick } = props
    return (
      <button 
        onClick={onClick}
        className="absolute top-1/2 left-4 z-10 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-all"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
    )
  }

  return (
    <section id="before-after" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Galeria
          </h2>
          <p className="text-gray-600 mt-4 ">
            Transformações que falam por si
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <img 
                      src={item.before} 
                      alt="Antes" 
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded">
                      Antes
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt="Depois" 
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded">
                      Depois
                    </div>
                  </div>
                </motion.div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter