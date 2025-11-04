import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './sections/Landing'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Certifications from './sections/Certifications'


// ==========================================
// PROFILE CONFIGURATION
// ==========================================
// Add your profile image path here
// Place your image in the 'public' folder and reference it like: '/profile-photo.jpg'
// Or use an external URL: 'https://example.com/your-photo.jpg'
const PROFILE_CONFIG = {
  profileImage: '/Dhruv-Profile-Picture.jpg', // Place your image in the 'public' folder and name it 'profile-photo.jpg'
  // If you don't have an image yet, set it to null or empty string to show placeholder
  // profileImage: null,
  
  description: "I'm Dhruv Kanwar, a software engineer obsessed with the intersection of AI, automation, and cloud computing. I love building systems that think, learn, and adapt — blending the art of Python with the science of scalable cloud architecture. From developing robust APIs to designing intelligent workflows, I aim to engineer products that redefine how technology interacts with the world."
}
// ==========================================

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Landing 
          profileImage={PROFILE_CONFIG.profileImage} 
          description={PROFILE_CONFIG.description}
        />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

