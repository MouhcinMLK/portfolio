import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail, FiZap, FiBarChart2, FiCpu, FiEye } from 'react-icons/fi'
import ProfileImage from './ProfileImage'
import CNNArchitecture from './CNNArchitecture'
import { PERSONAL } from '../data/portfolioData'

const TIMING = { scan: 700, explode: 800 }

const TAGS = [
  { icon: FiZap,      label: 'Agentic AI' },
  { icon: FiBarChart2,label: 'Data Science' },
  { icon: FiCpu,      label: 'Machine Learning' },
  { icon: FiEye,      label: 'Computer Vision' },
]

export default function HeroSection() {
  const [phase, setPhase]           = useState('idle')   // idle|scanning|exploding|cnn
  const [activeLayerId, setActiveLayerId] = useState(null)

  const triggerCNN = useCallback(() => {
    if (phase !== 'idle') return
    setPhase('scanning')
    setTimeout(() => setPhase('exploding'), TIMING.scan)
    setTimeout(() => setPhase('cnn'),       TIMING.scan + TIMING.explode)
  }, [phase])

  const handleReset = useCallback(() => {
    setActiveLayerId(null)
    setPhase('idle')
  }, [])

  const isCNN          = phase === 'cnn'
  const isTransitioning = phase === 'scanning' || phase === 'exploding'

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* ══════════════════════════════════════════════════════════
          HERO VIEW
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!isCNN && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="min-h-screen flex items-center pt-24 pb-8"
          >
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
              <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-8 lg:gap-12 items-center">

                {/* ── Left: text content ────────────────────────── */}
                <motion.div
                  animate={isTransitioning ? { opacity: 0, x: -40 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="order-2 lg:order-1 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.7 }}
                      className="font-black tracking-tight leading-[1.02]"
                      style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
                    >
                      <span className="block text-white">Mouhcine</span>
                      <span className="block gradient-text">Malek</span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45 }}
                      className="text-white/45 font-mono text-sm tracking-wider mt-2"
                    >
                      AI Engineering Student
                    </motion.p>
                  </div>

                  {/* Tag chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="flex flex-wrap gap-2"
                  >
                    {TAGS.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium"
                        style={{
                          border: '1px solid rgba(255,255,255,0.12)',
                          background: 'rgba(255,255,255,0.04)',
                          color: 'rgba(255,255,255,0.7)',
                        }}
                      >
                        <Icon className="w-3 h-3 text-cyan-400" />
                        {label}
                      </span>
                    ))}
                  </motion.div>

                  {/* Bio */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="text-white/55 leading-relaxed max-w-lg"
                    style={{ fontSize: '1.05rem' }}
                  >
                    {PERSONAL.bio}
                  </motion.p>

                  {/* CTA buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-3"
                  >
                    {/* Primary — gradient button that triggers CNN */}
                    <button
                      onClick={triggerCNN}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)',
                        boxShadow: '0 4px 24px rgba(0,180,255,0.25)',
                      }}
                    >
                      Explore My Neural Profile <FiArrowRight className="w-4 h-4" />
                    </button>

                    {/* Secondary buttons */}
                    <a
                      href={PERSONAL.cv}
                      download
                      className="flex items-center gap-2 px-5 py-3 rounded-xl text-[15px] font-semibold text-white/70 hover:text-white transition-all"
                      style={{ border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.04)' }}
                    >
                      Download CV <FiDownload className="w-4 h-4" />
                    </a>

                    <a
                      href="#contact"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl text-[15px] font-semibold text-white/70 hover:text-white transition-all"
                      style={{ border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.04)' }}
                    >
                      Contact Me <FiMail className="w-4 h-4" />
                    </a>
                  </motion.div>
                </motion.div>

                {/* ── Right: profile photo ──────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                  <ProfileImage phase={phase} onClick={triggerCNN} />
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════
          CNN VIEW
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isCNN && (
          <motion.div
            key="cnn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center pt-24 pb-12 px-6"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-screen-2xl mb-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-60" />
                      <span className="relative rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                    <span className="font-mono text-[11px] text-cyan-400/70 tracking-widest uppercase">
                      Analyzing: Mouhcine Malek
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    CNN{' '}
                    <span className="gradient-text">Portfolio Architecture</span>
                  </h2>
                  <p className="text-sm text-white/35 mt-1">
                    Click any layer to explore · Each layer reveals a part of my story
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/50 hover:text-cyan-400 transition-all font-mono"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  ← Reset View
                </button>
              </div>
            </motion.div>

            {/* Architecture */}
            <div className="w-full max-w-screen-2xl flex-1 flex items-center justify-center">
              <CNNArchitecture
                activeLayerId={activeLayerId}
                onLayerClick={(id) => setActiveLayerId(activeLayerId === id ? null : id)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
