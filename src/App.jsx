import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-coffee-50 text-coffee-900"
    >
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <Features setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <CTA setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App