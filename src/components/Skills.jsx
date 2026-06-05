import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const CATEGORIES = [
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    icon: '🧠',
    color: 'cyan',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLM', 'RAG', 'Data Analysis', 'Time Series'],
  },
  {
    id: 'agentic',
    label: 'Agentic AI',
    icon: '🤖',
    color: 'purple',
    skills: ['LangChain', 'LangGraph', 'MCP', 'Multi-Agent Systems', 'Tool Use', 'Prompt Engineering', 'RAG Pipelines'],
  },
  {
    id: 'langs',
    label: 'Programming',
    icon: '💻',
    color: 'cyan',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'R', 'PHP', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: '⚙️',
    color: 'purple',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Django', 'React.js', 'FastAPI', 'Streamlit'],
  },
  {
    id: 'tools',
    label: 'Databases & Tools',
    icon: '🛠️',
    color: 'cyan',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Power BI', 'Git', 'GitHub', 'UML', 'MERISE'],
  },
]

const PILL_STYLES = {
  cyan: 'border-cyan-400/22 text-cyan-400/80 bg-cyan-400/5 hover:border-cyan-400/50 hover:bg-cyan-400/10',
  purple: 'border-purple-500/22 text-purple-400/80 bg-purple-500/5 hover:border-purple-500/50 hover:bg-purple-500/10',
}

const TAB_ACTIVE = {
  cyan: 'border-cyan-400/40 text-cyan-400 bg-cyan-400/10',
  purple: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
}

export default function Skills() {
  const [active, setActive] = useState('ai')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const current = CATEGORIES.find((c) => c.id === active)

  return (
    <section id="skills" className="section-padding px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">02. Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Arsenal</h2>
          <p className="text-white/35 mt-2 text-sm">Click a category to explore the stack.</p>
        </motion.div>

        {/* Overview cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`glass-card rounded-xl p-3.5 border transition-all text-left group ${
                active === cat.id
                  ? cat.color === 'cyan'
                    ? 'border-cyan-400/35 bg-cyan-400/5'
                    : 'border-purple-500/35 bg-purple-500/5'
                  : 'border-white/6 hover:border-white/14'
              }`}
            >
              <div className="text-lg mb-1.5">{cat.icon}</div>
              <div className="text-[11px] font-semibold text-white/65 leading-tight">{cat.label}</div>
              <div className="text-[9px] text-white/25 font-mono mt-0.5">{cat.skills.length} skills</div>
            </button>
          ))}
        </motion.div>

        {/* Active category tabs (mobile-friendly alternative) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-5"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-all ${
                active === cat.id ? TAB_ACTIVE[cat.color] : 'border-white/8 text-white/35 hover:text-white/60 hover:border-white/16'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skill pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass-card rounded-xl p-6 border border-white/6"
          >
            <div className="flex flex-wrap gap-2.5">
              {current.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.035 }}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-default select-none ${PILL_STYLES[current.color]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
