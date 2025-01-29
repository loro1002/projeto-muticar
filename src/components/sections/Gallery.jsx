import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const galleryCategories = [
    {
      name: 'Pintura',
      color: 'orange',
      images: ['/g-pintura-1.jpg', '/g-pintura-2.jpeg', '/g-pintura-3.jpg', '/g-pintura-4.jpg']
    },
    {
      name: 'Funilaria',
      color: 'blue',
      images: ['/g-funilaria-1.jpg', '/g-funilaria-2.jpg', '/g-funilaria-3.jpg', '/g-funilaria-4.jpeg']
    },
    {
      name: 'Polimento',
      color: 'green',
      images: ['/gallery-polish-1.jpg', '/gallery-polish-2.jpg', '/gallery-polish-3.jpg', '/gallery-polish-4.jpg']
    },
    // {
    //   name: 'Personalização',
    //   color: 'purple',
    //   images: ['/gallery-custom-1.jpg', '/gallery-custom-2.jpg', '/gallery-custom-3.jpg', '/gallery-custom-4.jpg']
    // }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-gray-50 py-16" >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Nossa <span className="text-orange-500">Galeria</span>
          </h2>
          <p className="text-gray-600 mt-4 text-xl">Trabalhos que contam nossa história</p>
        </div>

        {galleryCategories.slice(0, showAllCategories ? 4 : 2).map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 text-${category.color}-600`}>
              {category.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                  onClick={() => openImageModal(image)}
                >
                  <img
                    src={image}
                    alt={`${category.name} gallery image ${imgIndex + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 text-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          {!showAllCategories ? (
            <button
              onClick={() => setShowAllCategories(true)}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Ver Mais
            </button>
          ) : (
            <button
              onClick={() => setShowAllCategories(false)}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Ver Menos
            </button>
          )}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          >
            <button 
              onClick={closeImageModal} 
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Expanded gallery image"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;