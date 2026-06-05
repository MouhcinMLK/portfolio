import { useState, useEffect } from 'react'
import NeuralBackground from './components/NeuralBackground'
import Navbar from './components/Navbar'
import CommandPalette from './components/CommandPalette'
import HeroSection from './components/HeroSection'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCmdOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-[#020209] text-white relative">
      {/* Particle canvas background */}
      <NeuralBackground />

      {/* Ambient radial glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-cyan-400/4 blur-[140px]" />
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full bg-purple-600/4 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[100px]" />
      </div>

      <Navbar onCommandOpen={() => setCmdOpen(true)} />
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      <main className="relative z-10">
        <HeroSection />

        {/* Divider */}
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
