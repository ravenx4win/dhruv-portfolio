import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: "Flipkart-Scraping",
      description: "Developed a Python-based Flipkart scraping tool to extract product information such as name, price, ratings, and reviews using BeautifulSoup and Requests, enabling structured data analysis for e-commerce insights.",
      technologies: ["Python", "BeautifulSoup", "Requests", "Web Scraping"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Intellichat",
      description: "Developed a local AI-powered Document Q&A app using Streamlit and SQLite to parse and query PDFs without external APIs.",
      technologies: ["Python", "Streamlit", "SQLite", "AI", "NLP"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "WeatherNow",
      description: "Real-time weather dashboard built with Flask - Get current weather conditions for any city with a modern, responsive UI.",
      technologies: ["Python", "Flask", "REST API", "Frontend"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "PCOS",
      description: "Implemented a predictive ML pipeline for PCOS diagnosis with scikit-learn — includes data preprocessing, feature engineering, and model performance analysis.",
      technologies: ["Python", "scikit-learn", "Machine Learning", "Data Science"],
      github: "https://github.com",
      demo: null
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

