import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { EXPERIENCE } from '../../data/portfolioData'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section-padding px-5 sm:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Experience</h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="border-l-2 border-gray-200 pl-6 sm:pl-8 space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: exp.accent }}
              />

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-7">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1.5">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <FiBriefcase className="text-gray-400 w-4 h-4" />
                      <span className="text-base font-semibold" style={{ color: exp.accent }}>
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1.5">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <FiCalendar className="w-3.5 h-3.5" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <FiMapPin className="w-3.5 h-3.5" /> {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-base text-gray-600 leading-relaxed mb-5">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-600 font-medium"
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
