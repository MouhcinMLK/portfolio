import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiCpu, FiZap, FiCode, FiSettings, FiDatabase } from 'react-icons/fi'
import { SKILLS } from '../../data/portfolioData'

const ICON_MAP = { cpu: FiCpu, zap: FiZap, code: FiCode, settings: FiSettings, database: FiDatabase }

export default function Skills() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const current = SKILLS[active]

  return (
    <section id="skills" className="section-padding px-5 sm:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Technical Arsenal</h2>
          <p className="text-gray-500 mt-3 text-base">Select a category to explore.</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2.5 mb-8"
        >
          {SKILLS.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] || FiCpu
            const isActive = active === i
            return (
              <button
                key={cat.name}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border"
                style={
                  isActive
                    ? { backgroundColor: cat.color, borderColor: cat.color, color: '#fff' }
                    : { backgroundColor: '#fff', borderColor: '#e5e7eb', color: '#4b5563' }
                }
              >
                <Icon className="w-4 h-4" style={isActive ? {} : { color: cat.color }} />
                {cat.name}
              </button>
            )
          })}
        </motion.div>

        {/* Skill chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#f9fafb] rounded-3xl p-8"
          >
            <div className="flex flex-wrap gap-3">
              {current.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${current.color}14`, color: current.color }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
