import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiActivity, FiLayers, FiBarChart2, FiZap } from 'react-icons/fi'
import { PROJECTS } from '../../data/portfolioData'

const ICON_MAP = { activity: FiActivity, layers: FiLayers, barchart: FiBarChart2, zap: FiZap }

function ProjectCard({ p, index, inView }) {
  const Icon = ICON_MAP[p.icon] || FiActivity
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-7 flex flex-col"
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${p.accent}14` }}
        >
          <Icon className="w-5 h-5" style={{ color: p.accent }} />
        </div>
        {p.featured && (
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ backgroundColor: `${p.accent}14`, color: p.accent }}
          >
            Featured
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{p.title}</h3>
        <p className="font-mono text-xs text-gray-400 mb-3">{p.subtitle}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="section-padding px-5 sm:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl">
            Projects at the intersection of AI research and engineering — built to solve real problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
