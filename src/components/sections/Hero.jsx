import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const heroItems = [
    {
      image: '/hero-image-1.jpg',
      title: 'MuiltCar - Excelência em Funilaria Automotiva',
      description: 'Consertamos amassados e danos estruturais com alta precisão e acabamento perfeito.',
      link: '#services',
      buttonText: 'Conheça nossa Funilaria',
      highlight: true, // Destaque para o primeiro slide
    },
    {
      image: 'hero-2.jpg',
      title: 'Pintura Automotiva Premium',
      description: 'Transforme a aparência do seu veículo com pinturas que brilham como novas.',
      link: '#services',
      buttonText: 'Saiba mais sobre Pintura',
    },
    {
      image: '/hero-3.jpg',
      title: 'Martelinho de Ouro de Qualidade',
      description: 'Recupere pequenos danos sem comprometer a pintura original do veículo.',
      link: '#services',
      buttonText: 'Descubra o Martelinho de Ouro',
    },
  ];

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute top-1/2 right-4 z-10 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-all"
      >
        <FaChevronRight className="text-gray-800" />
      </button>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute top-1/2 left-4 z-10 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-all"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
    );
  }

  return (
    <section id="home" className="relative">
      <Slider ref={sliderRef} {...settings}>
        {heroItems.map((item, index) => (
          <div key={index} className="relative">
            <div 
              className="h-[60vh] md:h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left text-white px-6 w-full"
                >
                  {/* Container para limitar o tamanho e alinhar à esquerda */}
                  <div className="max-w-[50%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[50%]">
                    <h1 
                      className={`text-3xl md:text-5xl font-bold mb-4 ${
                        item.highlight ? 'text-orange-500' : ''
                      }`}
                      style={{
                        fontSize: '2rem', // Ajuste para telas pequenas
                      }}
                    >
                      {item.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-6" style={{ fontSize: '1.1rem' }}>
                      {item.description}
                    </p>
                    <a 
                      href={item.link} 
                      className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full transition-colors inline-block mt-4 sm:mt-6 md:mt-8"
                      style={{
                        maxWidth: 'auto', // Largura ajustada ao texto
                        padding: '8px 16px', // Ajuste do padding para o botão
                        fontSize: '1rem', // Tamanho de fonte ajustado para responsividade
                      }}
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
