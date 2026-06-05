import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const EXPERIENCES = [
  {
    role: 'Web Developer Intern',
    company: 'POGO',
    location: 'Fès, Morocco',
    period: 'April 2024 – May 2024',
    description:
      'Developed a full-stack web application for managing electric vehicle charging points. Responsible for UI design, backend logic, and database architecture. Delivered a complete, functional product within the internship timeline.',
    tech: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    accent: 'cyan',
  },
  {
    role: 'Web Development Observation Internship',
    company: 'Office Régional de Mise en Valeur Agricole du Tadla',
    location: 'Fquih Ben Salah, Morocco',
    period: 'May 2023 – July 2023',
    description:
      'Followed and participated in the development of a web application for agricultural product commercialization. Gained professional exposure to the full development cycle using Django, Bootstrap, and SQLite in a real organizational context.',
    tech: ['Django', 'Bootstrap', 'SQLite'],
    accent: 'purple',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section-padding px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">04. Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-purple-500/20 to-transparent" />

          <div className="space-y-7 pl-12">
            {EXPERIENCES.map((exp, i) => (
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
                    exp.accent === 'cyan'
                      ? 'border-cyan-400 bg-cyan-400/20'
                      : 'border-purple-500 bg-purple-500/20'
                  }`}
                />

                <div
                  className={`glass-card rounded-xl p-5 border border-white/6 transition-colors ${
                    exp.accent === 'cyan'
                      ? 'hover:border-cyan-400/20'
                      : 'hover:border-purple-500/20'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-[15px] font-bold text-white/90 leading-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <FiBriefcase className="text-white/25 w-3 h-3" />
                        <span
                          className={`text-sm font-medium ${
                            exp.accent === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                          }`}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <div className="flex items-center gap-1.5 text-[11px] text-white/30">
                        <FiCalendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-white/30">
                        <FiMapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-white/48 leading-relaxed mb-3">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded border border-white/8 text-white/35"
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
      </div>
    </section>
  )
}
