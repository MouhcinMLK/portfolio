import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiBook, FiTarget, FiAward } from 'react-icons/fi'

const highlights = [
  { icon: FiBook,     label: 'AI Engineering @ ENIAD',     sub: 'Berkane, Morocco · 2024 – Present' },
  { icon: FiAward,    label: 'DUT Business Intelligence',   sub: 'EST Essaouira · 2022 – 2024' },
  { icon: FiBriefcase,label: 'Web Dev Internship @ POGO',   sub: 'Fès · April – May 2024' },
  { icon: FiTarget,   label: 'Seeking PFA Internship',      sub: 'AI / Data Science · 2025' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding px-4" ref={ref}>
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
            <span className="section-tag">01. About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            {/* Photo frame */}
            <div className="relative group w-44 lg:w-full">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-purple-500/20 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Inner frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/photo.jpg"
                  alt="Mouhcine Malek"
                  className="w-full aspect-square object-cover object-top"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020209]/50 via-transparent to-transparent" />
              </div>

              {/* Corner brackets */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-cyan-400/60" />
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-cyan-400/60" />
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-purple-500/60" />
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-purple-500/60" />
            </div>

            {/* Name tag below photo */}
            <div className="glass-card rounded-xl px-4 py-3 border border-white/6 w-44 lg:w-full">
              <div className="font-mono text-[9px] text-cyan-400/50 tracking-widest mb-1">IDENTIFIED</div>
              <div className="text-sm font-bold text-white/90">Mouhcine Malek</div>
              <div className="text-[11px] text-white/35 mt-0.5">AI Engineering Student</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[9px] text-emerald-400/70">Available · PFA</span>
              </div>
            </div>
          </motion.div>

          {/* Right: bio + highlights */}
          <div>
            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 mb-8"
            >
              <p className="text-white/60 leading-relaxed text-[15px]">
                I'm <span className="text-white font-semibold">Mouhcine Malek</span>, an AI Engineering
                student at <span className="text-cyan-400 font-medium">ENIAD</span> in Berkane, Morocco.
                My journey started with a{' '}
                <span className="text-white/85 font-medium">DUT in Business Intelligence and Data Science</span>{' '}
                from EST Essaouira — giving me a solid foundation in data analysis, statistical modeling,
                and decision-support systems.
              </p>
              <p className="text-white/60 leading-relaxed text-[15px]">
                I'm passionate about building{' '}
                <span className="text-white/85 font-medium">end-to-end AI solutions</span> — from raw data
                and model training all the way to deployment and user-facing interfaces. My work spans
                deep learning, NLP, computer vision, and the frontier of{' '}
                <span className="text-cyan-400 font-medium">Agentic AI</span>, where I build intelligent
                multi-agent workflows using LangGraph and LangChain.
              </p>
              <p className="text-white/60 leading-relaxed text-[15px]">
                I believe great AI engineering is about more than accuracy scores — it's about building
                systems that <span className="text-white/85 font-medium">work in the real world</span>.
                Medical decision support, automated data analysis, clinical multi-agent pipelines — I focus
                on reliability, usability, and real impact.
              </p>
              <p className="text-white/60 leading-relaxed text-[15px]">
                Currently looking for a{' '}
                <span className="text-cyan-400 font-semibold">PFA internship</span> where I can contribute
                to ambitious AI projects and grow as an engineer.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {highlights.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="glass-card rounded-xl p-4 border border-white/6 hover:border-cyan-400/20 transition-colors group cursor-default"
                >
                  <Icon className="text-cyan-400/60 w-4 h-4 mb-2.5 group-hover:text-cyan-400 transition-colors" />
                  <div className="text-[13px] font-semibold text-white/80 leading-tight">{label}</div>
                  <div className="text-[11px] text-white/30 mt-1">{sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
