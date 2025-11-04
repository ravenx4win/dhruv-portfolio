import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
              DK
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <p className="text-lg">
              I'm a passionate Python developer with a strong focus on building intelligent and scalable software solutions. 
              My expertise lies in developing AI-powered applications, automating complex workflows, and creating robust 
              backend systems using modern Python frameworks.
            </p>
            <p className="text-lg">
              I specialize in web automation, API development, and data engineering. I'm particularly interested in 
              leveraging technologies like FastAPI, Playwright, and BeautifulSoup to solve real-world problems and 
              enhance operational efficiency.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy exploring cloud technologies, contributing to open-source projects, and 
              staying updated with the latest trends in software development and AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

