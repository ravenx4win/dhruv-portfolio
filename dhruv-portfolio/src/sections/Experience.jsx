import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    title: "Backend Developer",
    company: "DevPeak Innovations Pvt. Ltd.",
    period: "November 2025 – Present",
    location: "India",
    contributions: [
      "Built and maintained asynchronous backend services using Python and FastAPI, ensuring system health, scalability, and reliability.",
      "Designed and developed a mini-n8n–style workflow orchestration engine supporting modular, extensible, node-based execution.",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines by integrating LLMs with vector search for context-aware AI workflows.",
      "Developed production-ready REST APIs with async SQLAlchemy, Pydantic validation, retries, timeouts, and structured error handling.",
      "Implemented secure sandboxed Python execution with restricted environments and safe runtime controls."
    ]
  },
  {
    title: "Junior Python Developer",
    company: "TechMarbles Web Solutions Pvt. Ltd.",
    period: "October 2024 – November 2025",
    location: "Mohali, India",
    contributions: [
      "Developed and optimized AI-powered solutions using Python to automate business workflows and improve operational efficiency.",
      "Built intelligent web automation systems using Playwright and BeautifulSoup for large-scale data collection and analytics.",
      "Designed and implemented secure RESTful APIs with FastAPI for seamless backend–frontend integration.",
      "Led security enhancements including OAuth 2.0 implementation, access-level validations, and credential-based error handling.",
      "Created custom healthcare web crawlers to extract and normalize patient data, significantly improving data acquisition speed.",
      "Collaborated with cross-functional teams to deliver scalable, secure, and production-grade applications.",
      "Utilized GitHub for source control, CI/CD workflows, and collaborative development."
    ]
  }
]

const Experience = () => {
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

        <div className="space-y-10 max-w-4xl mx-auto">
          {experiences.map((experience, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10"
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
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span className="leading-relaxed">{contribution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
