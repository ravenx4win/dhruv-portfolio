import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experience = {
    title: "Software Developer",
    company: "TechMarbles Web Solutions Pvt. Ltd.",
    period: "August 2024 – November 2025",
    location: "Mohali, India",
    contributions: [
      "Developed and optimized AI-powered solutions, leveraging Python-based frameworks to automate business workflows and enhance operational efficiency.",
      "Built intelligent web automation systems using Playwright and BeautifulSoup, integrating scraping and browser automation to streamline large-scale data collection and analysis.",
      "Designed and implemented RESTful APIs with FastAPI, ensuring secure, high-performance communication between backend services and frontend applications.",
      "Led security enhancement initiatives, including the implementation of OAuth 2.0, access-level validations, and credential-based error handling to strengthen application integrity.",
      "Created custom web crawlers for healthcare platforms to safely extract patient demographic and medical data — significantly improving data acquisition speed and accuracy.",
      "Collaborated with cross-functional teams to deploy production-grade applications, focusing on scalability, security, and maintainable architecture.",
      "Utilized GitHub for source control, CI/CD workflows, and collaborative version management across multiple development environments."
    ]
  }

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {experience.title}
            </h3>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {experience.company}
            </h4>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Key Contributions & Achievements:
            </h5>
            <ul className="space-y-3">
              {experience.contributions.map((contribution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                  <span className="leading-relaxed">{contribution}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

