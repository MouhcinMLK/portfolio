import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SKILLS_GROUPS } from '../../data/portfolioData'

export default function Skills() {
  const [active, setActive] = useState(0)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const current = SKILLS_GROUPS[active]

  return (
    <section id="skills" className="section-padding px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="section-label"><div className="section-line" /><span className="section-tag">02. Skills</span></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Technical Arsenal</h2>
          <p className="text-white/35 mt-3 text-base">Select a category to explore.</p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6"
        >
          {SKILLS_GROUPS.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setActive(i)}
              className="glass-card rounded-2xl p-5 border text-left transition-all"
              style={{
                borderColor: active === i ? `${g.color}40` : 'rgba(255,255,255,0.07)',
                background:  active === i ? `${g.color}09` : undefined,
              }}
            >
              <div className="font-mono text-[11px] font-bold tracking-widest mb-1.5"
                   style={{ color: active === i ? g.color : `${g.color}66` }}>
                {g.name.toUpperCase().split(' ')[0]}
              </div>
              <div className="text-sm font-medium text-white/65 leading-tight">{g.name}</div>
              <div className="text-[10px] text-white/25 font-mono mt-1.5">{g.skills.length} skills</div>
            </button>
          ))}
        </motion.div>

        {/* Skills pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass-card rounded-2xl p-8 border border-white/7"
          >
            <div className="flex flex-wrap gap-3">
              {current.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="px-4 py-2 rounded-xl border text-sm font-medium cursor-default"
                  style={{
                    borderColor: `${current.color}28`,
                    color:       `${current.color}cc`,
                    background:  `${current.color}09`,
                  }}
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
