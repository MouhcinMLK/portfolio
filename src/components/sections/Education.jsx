import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'
import { EDUCATION } from '../../data/portfolioData'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section-padding px-5 sm:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-[#f9fafb] rounded-2xl shadow-sm p-7 h-full"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1.5">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FiBook className="text-gray-400 w-4 h-4" />
                    <span className="text-base font-semibold" style={{ color: edu.accent }}>
                      {edu.school}
                    </span>
                  </div>
                </div>

                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    edu.status === 'current'
                      ? { backgroundColor: '#dcfce7', color: '#15803d' }
                      : { backgroundColor: '#f3f4f6', color: '#6b7280' }
                  }
                >
                  {edu.status === 'current' ? 'In Progress' : 'Completed'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-5 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="w-3.5 h-3.5" /> {edu.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <FiMapPin className="w-3.5 h-3.5" /> {edu.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.topics.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full bg-white text-gray-600 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
