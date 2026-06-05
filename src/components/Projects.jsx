import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    icon: '🧠',
    title: "Alzheimer's Disease Detection & Classification",
    subtitle: 'Deep Learning · NLP · RAG · Medical AI',
    description:
      'Medical decision-support system combining brain MRI analysis with Deep Learning and NLP. Built classification models with PyTorch and integrated a RAG pipeline with vector databases to generate contextual scientific answers from medical literature.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'NLP', 'RAG', 'Medical AI'],
    accent: 'cyan',
    featured: true,
  },
  {
    icon: '🤖',
    title: 'Clinical Orientation Multi-Agent Workflow',
    subtitle: 'LangGraph · Agentic AI · FastAPI · MCP',
    description:
      'Multi-agent workflow using LangGraph and LangChain to simulate a preliminary clinical orientation process. Includes specialized agents for information collection, synthesis, human-in-the-loop validation, and final report generation.',
    tags: ['LangGraph', 'LangChain', 'MCP', 'FastAPI', 'Streamlit', 'Agentic AI'],
    accent: 'purple',
    featured: true,
  },
  {
    icon: '📊',
    title: 'Automated Data Analysis Platform',
    subtitle: 'Django · Machine Learning · Web App',
    description:
      'Django web platform allowing users to import datasets, run exploratory data analysis, and automatically identify the most suitable Machine Learning algorithms based on data characteristics.',
    tags: ['Django', 'Machine Learning', 'Data Analysis', 'Python'],
    accent: 'cyan',
    featured: false,
  },
  {
    icon: '⚡',
    title: 'EV Charging Points Management App',
    subtitle: 'Django · PostgreSQL · JavaScript',
    description:
      'Full-stack web application developed during internship at POGO for managing electric vehicle charging infrastructure. Includes real-time status monitoring, user management, and an administrative dashboard.',
    tags: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    accent: 'purple',
    featured: false,
  },
]

const STYLES = {
  cyan: {
    border: 'hover:border-cyan-400/28',
    tag: 'bg-cyan-400/6 text-cyan-400/65 border-cyan-400/14',
    icon: 'bg-cyan-400/10',
    badge: 'border-cyan-400/25 text-cyan-400 bg-cyan-400/8',
  },
  purple: {
    border: 'hover:border-purple-500/28',
    tag: 'bg-purple-500/6 text-purple-400/65 border-purple-500/14',
    icon: 'bg-purple-500/10',
    badge: 'border-purple-500/25 text-purple-400 bg-purple-500/8',
  },
}

function ProjectCard({ p, index, inView }) {
  const s = STYLES[p.accent]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`glass-card rounded-xl p-6 border border-white/6 ${s.border} transition-all duration-300 group flex flex-col`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${s.icon}`}>
          {p.icon}
        </div>
        {p.featured && (
          <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border tracking-widest uppercase ${s.badge}`}>
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 mb-4">
        <h3 className="text-[15px] font-bold text-white/88 mb-1 group-hover:text-white transition-colors leading-snug">
          {p.title}
        </h3>
        <p className="text-[11px] text-white/28 font-mono mb-3">{p.subtitle}</p>
        <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {p.tags.map((t) => (
          <span key={t} className={`text-[10px] px-2 py-0.5 rounded-md border ${s.tag}`}>
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
    <section id="projects" className="section-padding px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">03. Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-white/35 mt-2 text-sm max-w-lg">
            Projects at the intersection of AI research and engineering — built to solve real problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
