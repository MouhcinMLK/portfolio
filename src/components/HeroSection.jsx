import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import ProfileCard from './ProfileCard'
import CNNArchitecture from './CNNArchitecture'
import { PERSONAL, HERO_BADGES } from '../data/portfolioData'

const BADGE_COLORS = [
  { text: 'text-cyan-700',   bg: 'bg-cyan-50'   },
  { text: 'text-purple-700', bg: 'bg-purple-50' },
  { text: 'text-green-700',  bg: 'bg-green-50'  },
  { text: 'text-orange-700', bg: 'bg-orange-50' },
]

export default function HeroSection() {
  const [showCNN, setShowCNN] = useState(false)
  const open  = useCallback(() => setShowCNN(true),  [])
  const close = useCallback(() => setShowCNN(false), [])

  return (
    <section id="home" className="relative">
      <AnimatePresence mode="wait">

        {/* ── Hero view ────────────────────────────────── */}
        {!showCNN && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="min-h-screen flex items-center pt-32 pb-16 px-6 sm:px-10 lg:px-16"
          >
            <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — text */}
              <div className="space-y-7 order-2 lg:order-1">
                <div className="flex flex-wrap gap-2">
                  {HERO_BADGES.map((badge, i) => {
                    const c = BADGE_COLORS[i % BADGE_COLORS.length]
                    return (
                      <span key={badge} className={`px-3.5 py-1.5 rounded-full text-xs font-medium ${c.bg} ${c.text}`}>
                        {badge}
                      </span>
                    )
                  })}
                </div>

                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                    {PERSONAL.name}
                  </h1>
                  <p className="text-xl text-gray-500 font-medium">{PERSONAL.role}</p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  {PERSONAL.bio}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={open}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors active:scale-95"
                  >
                    Explore My AI Journey <FiArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={PERSONAL.cv}
                    download
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-gray-700 border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Download CV <FiDownload className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-gray-500 hover:text-cyan-600 transition-colors"
                  >
                    Contact Me <FiMail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right — profile card */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <ProfileCard onClick={open} />
              </div>
            </div>
          </motion.div>
        )}

        {/* ── CNN view ─────────────────────────────────── */}
        {showCNN && (
          <motion.div
            key="cnn"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="min-h-screen pt-32 pb-20 px-6 sm:px-10 lg:px-14"
          >
            <CNNArchitecture onBack={close} />
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  )
}
