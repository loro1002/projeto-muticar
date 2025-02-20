import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Usando Routes ao invés de Switch
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';

import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import BeforeAfter from './components/sections/BeforeAfter';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import WhatsappButton from './components/layout/WhatsappButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Gallery from './components/sections/Gallery';
import { seoConfig } from './utils/seo'; // Importando o seoConfig
import QuemSomos from './components/layout/QuemSomos'; // Importando a nova página Quem Somos

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>{seoConfig.title}</title>
          <meta name="description" content={seoConfig.description} />
          <link rel="canonical" href="https://www.multcar.com.br" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Header />
        <Navbar />

        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<><Hero /><Services /><BeforeAfter /><Gallery /><Contact /></>} />
              <Route path="/quem-somos" element={<QuemSomos />} /> {/* Rota para Quem Somos */}
            </Routes>
          </motion.main>
        </AnimatePresence>

        <Footer />
        <WhatsappButton />
      </div>
    </Router>
  );
}

export default App;