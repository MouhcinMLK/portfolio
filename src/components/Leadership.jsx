import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiMessageSquare, FiActivity, FiStar } from 'react-icons/fi'

const QUALITIES = [
  { icon: FiUsers,        label: 'Team Collaboration' },
  { icon: FiMessageSquare,label: 'Communication' },
  { icon: FiActivity,     label: 'Event Organization' },
  { icon: FiStar,         label: 'Member Management' },
]

export default function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="leadership" className="section-padding px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">06. Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Community & Leadership</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="glass-card rounded-xl p-6 border border-white/6 hover:border-cyan-400/18 transition-colors"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/8 flex items-center justify-center text-2xl flex-shrink-0">
              🌟
            </div>
            <div>
              <h3 className="text-base font-bold text-white/90">HR Member</h3>
              <p className="text-cyan-400 text-sm font-medium mt-0.5">Nurl AI Student Club</p>
              <p className="text-white/28 text-[11px] mt-0.5 font-mono">2025 · ENIAD, Berkane</p>
            </div>
          </div>

          <p className="text-sm text-white/52 leading-relaxed mb-5">
            Active member of the Human Resources team at{' '}
            <span className="text-white/75 font-medium">Nurl AI</span>, a student club at ENIAD
            dedicated to advancing AI education and culture. Contributing to member onboarding,
            team coordination, event organization, and community building among AI enthusiasts
            and aspiring engineers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {QUALITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-white/2 border border-white/5"
              >
                <Icon className="text-cyan-400/55 w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-[11px] text-white/45 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
