import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'
import { EDUCATION_ITEMS } from '../../data/portfolioData'

const ACCENT = ['#8b5cf6', '#3b82f6']

export default function Education() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section-padding px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">05. Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Academic Background</h2>
        </motion.div>

        {/* Grid layout — 2 columns on large screens */}
        <div className="grid lg:grid-cols-2 gap-6">
          {EDUCATION_ITEMS.map((edu, i) => {
            const accent = ACCENT[i] || '#8b5cf6'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="glass-card rounded-2xl p-7 border border-white/7 h-full">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-white/90 leading-tight mb-1.5">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2">
                        <FiBook className="text-white/30 w-4 h-4" />
                        <span className="text-base font-semibold" style={{ color: accent }}>
                          {edu.school}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 text-right">
                      <span
                        className="text-[11px] font-mono px-3 py-1 rounded-full border"
                        style={
                          edu.status === 'current'
                            ? { borderColor: '#10b98135', color: '#10b981', background: '#10b98110' }
                            : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.32)' }
                        }
                      >
                        {edu.status === 'current' ? 'In Progress' : 'Completed'}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm text-white/35">
                        <FiCalendar className="w-3.5 h-3.5" /> {edu.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-white/35">
                        <FiMapPin className="w-3.5 h-3.5" /> {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.topics.map((t) => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1 rounded-lg border border-white/8 text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
