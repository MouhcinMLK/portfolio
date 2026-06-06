import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900">
      <Navbar />

      <main>
        <HeroSection />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
