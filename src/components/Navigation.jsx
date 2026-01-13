import { Coffee, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'features', label: 'Возможности' },
  { id: 'about', label: 'О нас' },
  { id: 'cta', label: 'Присоединиться' }
]

function Navigation({ activeSection, setActiveSection }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-coffee-100/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-700" size={32} />
          <span className="text-xl font-bold text-coffee-800">CoffeeEco</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                text-coffee-700 font-medium transition-colors
                ${activeSection === item.id ? 'text-coffee-900 font-bold' : ''}
              `}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
        
        <div className="md:hidden">
          <Menu className="text-coffee-700" size={24} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation