import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

const Landing = ({ profileImage, description }) => {
  const defaultDescription = "Building intelligent and scalable software solutions."

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center section-padding pt-24 relative">
      <div className="container mx-auto flex-1 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            {profileImage ? (
              <motion.img
                src={profileImage}
                alt="Dhruv Kanwar"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ) : (
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-2xl">
                DK
              </div>
            )}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Dhruv Kanwar
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6"
            >
              Python Developer | Cloud Enthusiast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              {description || defaultDescription}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <HiArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </section>
  )
}

export default Landing

