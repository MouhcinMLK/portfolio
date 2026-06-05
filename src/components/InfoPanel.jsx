import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiDownload, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { PERSONAL } from '../data/portfolioData'

// ─── Content renderers ────────────────────────────────────────────────────────

function ProfileContent({ content, color }) {
  return (
    <div className="space-y-5">
      <p className="text-white/65 leading-relaxed text-sm">{content.description}</p>
      <div className="space-y-2">
        {content.facts.map((fact, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
            <span className="text-sm text-white/55">{fact}</span>
          </div>
        ))}
      </div>
      {/* AI Status card */}
      <div className="glass-card rounded-xl p-4 border mt-4" style={{ borderColor: `${color}25`, background: `${color}08` }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] text-emerald-400 tracking-widest">STATUS</span>
        </div>
        <p className="text-sm font-semibold text-white/90">Available for PFA Internship</p>
        <p className="text-xs text-white/40 mt-0.5 font-mono">Mode: Learning · Building · Deploying</p>
      </div>
    </div>
  )
}

function EducationContent({ content, color }) {
  return (
    <div className="space-y-4">
      {content.items.map((edu, i) => (
        <div key={i} className="glass-card rounded-xl p-4 border border-white/6 hover:border-white/12 transition-colors">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h4 className="text-sm font-bold text-white/90 leading-tight">{edu.degree}</h4>
              <p className="font-mono text-xs mt-0.5" style={{ color }}>{edu.school}</p>
            </div>
            <span
              className="text-[9px] font-mono px-2 py-0.5 rounded-full border flex-shrink-0"
              style={edu.status === 'current'
                ? { borderColor: '#10b98155', color: '#10b981', background: '#10b98110' }
                : { borderColor: '#ffffff15', color: '#ffffff40' }
              }
            >
              {edu.status === 'current' ? 'In Progress' : 'Completed'}
            </span>
          </div>
          <p className="text-[11px] text-white/30 font-mono mb-2">{edu.period} · {edu.location}</p>
          <div className="flex flex-wrap gap-1.5">
            {edu.topics.map((t) => (
              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded border border-white/8 text-white/35">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function SkillsContent({ content }) {
  return (
    <div className="space-y-4">
      {content.groups.map((group) => (
        <div key={group.name}>
          <div className="font-mono text-[10px] font-bold tracking-widest mb-2" style={{ color: group.color }}>
            {group.name.toUpperCase()}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all"
                style={{ borderColor: `${group.color}30`, color: `${group.color}cc`, background: `${group.color}08` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectsContent({ content, color }) {
  return (
    <div className="space-y-3">
      {content.items.map((proj, i) => (
        <div key={i} className="glass-card rounded-xl p-4 border border-white/6 hover:border-white/12 transition-colors">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-xl flex-shrink-0">{proj.icon}</span>
            <div>
              <h4 className="text-sm font-bold text-white/90 leading-tight">{proj.title}</h4>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: proj.accent }}>{proj.subtitle}</p>
            </div>
          </div>
          <p className="text-xs text-white/50 leading-relaxed mb-2">{proj.description}</p>
          <div className="flex flex-wrap gap-1">
            {proj.tags.map((t) => (
              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded border border-white/8 text-white/35">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ExperienceContent({ content, color }) {
  return (
    <div className="space-y-4">
      {content.items.map((exp, i) => (
        <div key={i} className="glass-card rounded-xl p-4 border border-white/6">
          <h4 className="text-sm font-bold text-white/90 mb-0.5">{exp.role}</h4>
          <p className="font-mono text-xs mb-1" style={{ color: exp.accent }}>{exp.company}</p>
          <p className="text-[10px] text-white/30 font-mono mb-2">{exp.period} · {exp.location}</p>
          <p className="text-xs text-white/50 leading-relaxed mb-2">{exp.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded border border-white/8 text-white/35">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function OutputContent({ content, color }) {
  return (
    <div className="space-y-5">
      {/* Status */}
      <div className="glass-card rounded-xl p-4 border" style={{ borderColor: `${color}30`, background: `${color}08` }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] text-emerald-400 tracking-widest">CLASSIFICATION RESULT</span>
        </div>
        <p className="text-base font-bold text-white">{content.status}</p>
        <p className="text-xs text-white/40 font-mono mt-1">{content.mode}</p>
      </div>

      {/* Focus areas */}
      <div>
        <div className="font-mono text-[10px] text-white/35 tracking-widest mb-2 uppercase">Focus Areas</div>
        <div className="flex flex-wrap gap-2">
          {content.focus.map((f) => (
            <span key={f} className="text-xs px-3 py-1 rounded-lg border font-medium"
              style={{ borderColor: `${color}35`, color, background: `${color}10` }}>
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-white/50">
        <FiMapPin className="text-cyan-400/60 w-3.5 h-3.5" />
        <span>{content.location}</span>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <a href={PERSONAL.cv} download
          className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold border transition-all"
          style={{ borderColor: `${color}40`, color, background: `${color}10` }}
        >
          <FiDownload className="w-3.5 h-3.5" /> Download CV
        </a>
        <a href={`mailto:${PERSONAL.email}`}
          className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold border border-white/10 text-white/60 hover:border-white/25 hover:text-white transition-all">
          <FiMail className="w-3.5 h-3.5" /> Email Me
        </a>
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold border border-white/10 text-white/60 hover:border-white/25 hover:text-white transition-all">
          <FiGithub className="w-3.5 h-3.5" /> GitHub
        </a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold border border-white/10 text-white/60 hover:border-white/25 hover:text-white transition-all">
          <FiLinkedin className="w-3.5 h-3.5" /> LinkedIn
        </a>
      </div>
    </div>
  )
}

// ─── Panel ────────────────────────────────────────────────────────────────────
function PanelContent({ layer }) {
  const { content, color } = layer
  switch (content.type) {
    case 'profile':    return <ProfileContent content={content} color={color} />
    case 'education':  return <EducationContent content={content} color={color} />
    case 'skills':     return <SkillsContent content={content} />
    case 'projects':   return <ProjectsContent content={content} color={color} />
    case 'experience': return <ExperienceContent content={content} color={color} />
    case 'output':     return <OutputContent content={content} color={color} />
    default:           return null
  }
}

export default function InfoPanel({ layer, onClose, onPrev, onNext, currentIdx, total }) {
  // Detect desktop vs mobile for animation direction
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true)
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const slideAxis = isDesktop
    ? { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } }
    : { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } }

  return (
    <AnimatePresence>
      {layer && (
        <>
          {/* Backdrop (mobile only) */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            {...slideAxis}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className={[
              'fixed z-50 overflow-hidden',
              'lg:right-0 lg:top-0 lg:bottom-0 lg:w-[420px] lg:rounded-none',
              'left-0 right-0 bottom-0 max-h-[80vh] rounded-t-2xl',
            ].join(' ')}
            style={{
              background: 'rgba(5, 5, 18, 0.97)',
              backdropFilter: 'blur(20px)',
              borderLeft: isDesktop ? `1px solid ${layer.color}25` : 'none',
              borderTop: !isDesktop ? `1px solid ${layer.color}25` : 'none',
              boxShadow: isDesktop
                ? `-20px 0 60px rgba(0,0,0,0.5), -1px 0 0 ${layer.color}15`
                : `0 -20px 60px rgba(0,0,0,0.5)`,
            }}
          >
            {/* Mobile drag handle */}
            <div className="lg:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/15" />
            </div>

            <div className="h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex-shrink-0 px-5 py-4 border-b border-white/6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest" style={{ color: layer.color }}>
                      {layer.type.toUpperCase()} · LAYER {currentIdx + 1}/{total}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{layer.title}</h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-colors flex-shrink-0 mt-0.5"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <PanelContent layer={layer} />
              </div>

              {/* Navigation footer */}
              <div className="flex-shrink-0 px-5 py-3 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={onPrev}
                  disabled={currentIdx <= 0}
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors font-mono"
                >
                  <FiChevronLeft className="w-4 h-4" /> Prev
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: total }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full transition-all"
                      style={{ background: i === currentIdx ? layer.color : 'rgba(255,255,255,0.15)' }}
                    />
                  ))}
                </div>
                <button
                  onClick={onNext}
                  disabled={currentIdx >= total - 1}
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors font-mono"
                >
                  Next <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
