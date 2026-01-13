import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

function CTA({ setActiveSection }) {
  return (
    <section 
      id="cta" 
      className="py-24 bg-coffee-gradient text-white"
      onMouseEnter={() => setActiveSection('cta')}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Zap 
            size={64} 
            className="mx-auto mb-6 text-white" 
            strokeWidth={1.5} 
          />
          <h2 className="text-4xl font-bold mb-4">
            Присоединяйтесь к Революции
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Станьте частью инновационной кофейной экосистемы уже сегодня
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-coffee-700 px-8 py-3 rounded-full text-lg font-semibold"
            >
              Начать
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Узнать больше
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA