import { motion } from 'framer-motion'
import { FaPython, FaGithub, FaCloud } from 'react-icons/fa'
import { SiFastapi, SiPlaywright, SiFlask, SiScikitlearn } from 'react-icons/si'

const TechStack = () => {
  const technologies = [
    { name: "Python", icon: FaPython, color: "text-blue-500" },
    { name: "FastAPI", icon: SiFastapi, color: "text-green-500" },
    { name: "Playwright", icon: SiPlaywright, color: "text-emerald-500" },
    { name: "BeautifulSoup", icon: SiFastapi, color: "text-orange-500" },
    { name: "REST APIs", icon: SiFastapi, color: "text-indigo-500" },
    { name: "OAuth 2.0", icon: SiFastapi, color: "text-red-500" },
    { name: "Web Automation", icon: SiPlaywright, color: "text-purple-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-700 dark:text-gray-300" },
    { name: "CI/CD", icon: FaGithub, color: "text-blue-600" },
    { name: "Data Security", icon: FaCloud, color: "text-cyan-500" },
    { name: "Flask", icon: SiFlask, color: "text-gray-800 dark:text-gray-200" },
    { name: "scikit-learn", icon: SiScikitlearn, color: "text-orange-600" }
  ]

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl transition-shadow"
            >
              <tech.icon className={`w-12 h-12 ${tech.color}`} />
              <span className="text-gray-900 dark:text-white font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

