import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '../../data/portfolioData'

function ProjectCard({ p, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card rounded-2xl p-7 border border-white/7 hover:border-white/14 transition-all duration-300 group flex flex-col"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
             style={{ background: `${p.accent}12` }}>
          {p.icon}
        </div>
        {index < 2 && (
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border tracking-widest uppercase"
            style={{ borderColor: `${p.accent}30`, color: p.accent, background: `${p.accent}10` }}>
            Featured
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-white/90 mb-1 leading-snug group-hover:text-white transition-colors">
          {p.title}
        </h3>
        <p className="font-mono text-[11px] mb-3" style={{ color: `${p.accent}99` }}>{p.subtitle}</p>
        <p className="text-sm text-white/52 leading-relaxed">{p.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {p.tags.map((t) => (
          <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-lg border"
            style={{ borderColor: `${p.accent}22`, color: `${p.accent}88`, background: `${p.accent}09` }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="section-padding px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="section-label"><div className="section-line" /><span className="section-tag">03. Projects</span></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Selected Work</h2>
          <p className="text-white/35 mt-3 text-base max-w-xl">
            Projects at the intersection of AI research and engineering — built to solve real problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} index={i} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}
