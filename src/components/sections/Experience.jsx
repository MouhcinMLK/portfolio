import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { EXPERIENCES } from '../../data/portfolioData'

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section-padding px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">04. Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Work Experience</h2>
        </motion.div>

        {/* Timeline — on wide screens use a 2-col grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div
                className="glass-card rounded-2xl p-7 border border-white/7 hover:border-white/14 transition-colors h-full"
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white/90 leading-tight mb-1.5">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <FiBriefcase className="text-white/30 w-4 h-4" />
                      <span className="text-base font-semibold" style={{ color: exp.accent }}>
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 text-right">
                    <div className="flex items-center gap-1.5 text-sm text-white/35">
                      <FiCalendar className="w-3.5 h-3.5" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-white/35">
                      <FiMapPin className="w-3.5 h-3.5" /> {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-base text-white/55 leading-relaxed mb-5">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
