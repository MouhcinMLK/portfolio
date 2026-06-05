import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { PERSONAL } from '../../data/portfolioData'

const LINKS = [
  { icon: FiMail,     label: 'Email',    value: PERSONAL.email,                   href: `mailto:${PERSONAL.email}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mouhcine-malek', href: PERSONAL.linkedin },
  { icon: FiGithub,   label: 'GitHub',   value: 'github.com/MohcnMalek',          href: PERSONAL.github },
  { icon: FiMapPin,   label: 'Location', value: PERSONAL.location,                href: null },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="section-padding px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">06. Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-white/35 mt-3 text-base max-w-xl">
            Open to PFA internship opportunities, collaborations, and AI projects.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LINKS.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 border border-white/7 hover:border-cyan-400/25 transition-all group flex flex-col gap-4 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/8 flex items-center justify-center group-hover:bg-cyan-400/16 transition-colors">
                    <Icon className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/28 font-mono tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-base text-white/70 group-hover:text-cyan-400 transition-colors break-all leading-snug">{value}</div>
                  </div>
                </a>
              ) : (
                <div className="glass-card rounded-2xl p-6 border border-white/7 flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon className="text-white/40 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/28 font-mono tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-base text-white/65 leading-snug">{value}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-6 glass-card rounded-2xl p-6 border border-emerald-400/20 bg-emerald-400/3 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <div>
              <p className="text-base font-semibold text-emerald-400">Available for PFA Internship</p>
              <p className="text-sm text-white/40 mt-0.5">
                Open to on-site and remote positions in AI, Data Science, or Agentic Systems.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-emerald-400 border border-emerald-400/30 hover:bg-emerald-400/10 transition-all flex-shrink-0"
          >
            <FiMail className="w-4 h-4" /> Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
