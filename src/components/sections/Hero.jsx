import React from 'react';
import { motion } from 'framer-motion';
import { FaCarCrash, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const heroItem = {
    image: '/hero-image-1.jpg',
    icon: FaCarCrash,
    title: 'Funilaria de Precisão',
    description: 'Restauração especializada com tecnologia de ponta e técnicos certificados.',
    link: '#services',
    buttonText: 'Recupere seu Veículo',
    bgColor: 'bg-orange-600',
  };

  return (
    <section id="home" className="relative">
      <div className="relative">
        <div 
          className="h-[70vh] md:h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroItem.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left text-white px-6 w-full"
            >
              <div className="container mx-auto max-w-4xl">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <heroItem.icon className={`mr-4 text-4xl ${heroItem.bgColor}`} />
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {heroItem.title}
                    </h1>
                  </div>
                  <p className="text-xl md:text-2xl mb-8 font-light">
                    {heroItem.description}
                  </p>
                  <a 
                    href={heroItem.link} 
                    className={`${heroItem.bgColor} text-white px-6 py-3 rounded-full transition-all hover:brightness-110 inline-flex items-center`}
                  >
                    {heroItem.buttonText}
                    <FaChevronRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;