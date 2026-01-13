import { motion } from 'framer-motion'

function About({ setActiveSection }) {
  return (
    <section 
      id="about" 
      className="py-24 bg-coffee-100"
      onMouseEnter={() => setActiveSection('about')}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-coffee-800 mb-6">
              Наша История
            </h2>
            <p className="text-lg text-coffee-700 mb-4">
              CoffeeEco - это не просто платформа, это движение, 
              объединяющее технологии и кофейную культуру.
            </p>
            <p className="text-coffee-600">
              Мы создали экосистему, которая помогает каждому участнику 
              кофейного мира: от фермеров до конечных потребителей.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
              alt="Кофейная ферма" 
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About