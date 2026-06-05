import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail, FiChevronDown } from 'react-icons/fi'
import SystemStatus from './SystemStatus'

const ROLES = [
  'AI Engineering Student',
  'Agentic AI Developer',
  'Deep Learning Engineer',
  'Data Science Practitioner',
]

function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    const speed = deleting ? 38 : 75

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 2200)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setIdx((idx + 1) % texts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, deleting, idx, texts])

  return (
    <span className="font-mono text-cyan-400">
      {displayed}
      <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Hero radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-cyan-400/4 blur-[100px] -translate-x-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left: content */}
          <div className="max-w-2xl">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-400/80 font-mono tracking-wide">
                AI Engineer · Available for PFA Internship
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-[1.05] tracking-tight"
            >
              <span className="block text-white">Mouhcine</span>
              <span className="block gradient-text">Malek</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg mb-6 h-7 flex items-center"
            >
              <Typewriter texts={ROLES} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              I design intelligent systems that connect data, models, and real-world applications.
              From deep learning pipelines to multi-agent workflows — building AI that matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all glow-cyan"
              >
                View Projects <FiArrowRight />
              </a>
              <a
                href="/CVENG_MouhcineMalek.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold hover:bg-purple-500/20 hover:border-purple-400/50 transition-all"
              >
                Download CV <FiDownload />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white/55 text-sm font-semibold hover:border-white/25 hover:text-white/90 transition-all"
              >
                Contact Me <FiMail />
              </a>
            </motion.div>
          </div>

          {/* Right: system status (desktop) */}
          <div className="hidden lg:block">
            <SystemStatus />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/18 font-mono tracking-widest uppercase">Scroll</span>
        <FiChevronDown className="text-white/18 animate-bounce" />
      </motion.div>
    </section>
  )
}
