import { Coffee, Github, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee size={32} className="text-white" />
              <span className="text-xl font-bold">CoffeeEco</span>
            </div>
            <p className="text-coffee-200">
              Технологическая платформа, объединяющая кофейный мир
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {['Главная', 'Возможности', 'О нас', 'Контакты'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-coffee-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              {[Github, Twitter, Instagram].map((Icon) => (
                <a 
                  key={Icon.name} 
                  href="#" 
                  className="text-coffee-200 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-coffee-700 text-center">
          <p className="text-coffee-300">
            © 2024 CoffeeEco. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer