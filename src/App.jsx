import React from 'react'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import BeforeAfter from './components/sections/BeforeAfter'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import WhatsappButton from './components/layout/WhatsappButton'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Mult Car - Funilaria e Pintura em Materlinho de Ouro</title>
        <meta 
          name="description" 
          content="Mult Car: Especialista em funilaria e pintura em Materlinho de Ouro. Serviços de alta qualidade para seu veículo."
        />
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
          <Hero />
          <Services />
          <BeforeAfter />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsappButton />
    </div>
  )
}

export default App