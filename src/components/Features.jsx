import { motion } from 'framer-motion'
import { 
  Layers, 
  Network, 
  Globe, 
  Zap 
} from 'lucide-react'

const featuresList = [
  {
    icon: Layers,
    title: 'Комплексный Подход',
    description: 'Полный цикл от производства до потребления кофе'
  },
  {
    icon: Network,
    title: 'Прозрачность',
    description: 'Отслеживание каждого этапа производства кофе'
  },
  {
    icon: Globe,
    title: 'Глобальная Сеть',
    description: 'Соединение кофейных фермеров и потребителей по всему миру'
  },
  {
    icon: Zap,
    title: 'Инновации',
    description: 'Постоянное развитие технологий кофейной индустрии'
  }
]

function Features({ setActiveSection }) {
  return (
    <section 
      id="features" 
      className="py-24 bg-white"
      onMouseEnter={() => setActiveSection('features')}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-800 mb-4">
            Наши Ключевые Преимущества
          </h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
            Мы создаем экосистему, которая трансформирует кофейную индустрию
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-coffee-50 p-6 rounded-xl shadow-md text-center"
            >
              <feature.icon 
                size={48} 
                className="mx-auto mb-4 text-coffee-700" 
                strokeWidth={1.5} 
              />
              <h3 className="text-xl font-bold text-coffee-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features