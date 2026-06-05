import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const EDUCATION = [
  {
    degree: 'Engineering Cycle in Artificial Intelligence',
    school: 'ENIAD',
    location: 'Berkane, Morocco',
    period: '2024 – Present',
    status: 'In Progress',
    description:
      'Specialization in artificial intelligence, machine learning, deep learning, computer vision, NLP, and agentic AI systems. Building end-to-end AI solutions as part of rigorous engineering training.',
    topics: ['Deep Learning', 'Computer Vision', 'NLP', 'Agentic AI', 'Data Engineering', 'Software Architecture'],
    accent: 'cyan',
  },
  {
    degree: 'DUT — Business Intelligence & Data Science',
    school: 'EST Essaouira',
    location: 'Essaouira, Morocco',
    period: '2022 – 2024',
    status: 'Completed',
    description:
      'Two-year university technology diploma covering data analysis, statistical modeling, database management, and decision-support systems. Built a foundation in SQL, Python, R, and Power BI.',
    topics: ['Data Analysis', 'Statistics', 'SQL', 'Python', 'R', 'Power BI', 'MERISE'],
    accent: 'purple',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section-padding px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">05. Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Academic Background</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-purple-500/20 to-transparent" />

          <div className="space-y-7 pl-12">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[40px] top-5 w-3 h-3 rounded-full border-2 ${
                    edu.accent === 'cyan'
                      ? 'border-cyan-400 bg-cyan-400/20'
                      : 'border-purple-500 bg-purple-500/20'
                  }`}
                />

                <div className="glass-card rounded-xl p-5 border border-white/6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-[15px] font-bold text-white/90 leading-tight">{edu.degree}</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <FiBook className="text-white/25 w-3 h-3" />
                        <span
                          className={`text-sm font-medium ${
                            edu.accent === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                          }`}
                        >
                          {edu.school}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full border tracking-wide uppercase ${
                          edu.status === 'In Progress'
                            ? 'border-emerald-400/30 text-emerald-400 bg-emerald-400/8'
                            : 'border-white/10 text-white/28'
                        }`}
                      >
                        {edu.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] text-white/30">
                        <FiCalendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-white/30">
                        <FiMapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-white/48 leading-relaxed mb-3">{edu.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.topics.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-white/8 text-white/35">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
