import { motion } from 'framer-motion'
import { ArrowDown, Coffee } from 'lucide-react'

function Hero({ setActiveSection }) {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center text-center relative bg-coffee-gradient text-white"
      onMouseEnter={() => setActiveSection('hero')}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Coffee 
            size={64} 
            className="mx-auto text-white mb-4"
            strokeWidth={1.5}
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Революция Кофейной Экосистемы
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Инновационная платформа, которая объединяет кофейных энтузиастов, 
            производителей и потребителей в единое технологичное сообщество
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-coffee-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Начать путешествие
          </motion.button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown 
            size={32} 
            className="text-white opacity-70 animate-bounce" 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero