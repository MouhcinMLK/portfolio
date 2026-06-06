import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { PERSONAL } from '../../data/portfolioData'

const LINKS = [
  { icon: FiMail,     label: 'Email',    value: PERSONAL.email,                   href: `mailto:${PERSONAL.email}`, color: '#06b6d4' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mouhcine-malek', href: PERSONAL.linkedin,          color: '#8b5cf6' },
  { icon: FiGithub,   label: 'GitHub',   value: 'github.com/MohcnMalek',          href: PERSONAL.github,            color: '#10b981' },
  { icon: FiMapPin,   label: 'Location', value: PERSONAL.location,                href: null,                       color: '#f97316' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="section-padding px-5 sm:px-8" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
            Open to PFA internship opportunities, collaborations, and AI projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {LINKS.map(({ icon: Icon, label, value, href, color }, i) => {
            const inner = (
              <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}14` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-gray-400 mb-0.5">{label}</div>
                  <div className="text-sm text-gray-700 truncate">{value}</div>
                </div>
              </div>
            )

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <FiMail className="w-4 h-4" /> Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
