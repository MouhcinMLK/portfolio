import { motion } from 'framer-motion'
import {
  FiX, FiDownload, FiMail, FiGithub, FiLinkedin, FiMapPin, FiCheckCircle,
} from 'react-icons/fi'
import { PERSONAL } from '../data/portfolioData'

function Chip({ children, color }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: `${color}14`, color }}
    >
      {children}
    </span>
  )
}

function StatusBadge({ color, label }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
      style={{ backgroundColor: `${color}10` }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="text-xs font-semibold text-gray-600">{label}</span>
    </div>
  )
}

function Body({ layer }) {
  const { content, color } = layer

  // ── Profile ──
  if (content.type === 'profile') {
    return (
      <div className="space-y-5">
        <p className="text-base text-gray-600 leading-relaxed">{content.description}</p>
        <StatusBadge color={color} label={PERSONAL.status} />
      </div>
    )
  }

  // ── Education ──
  if (content.type === 'education') {
    return (
      <div className="space-y-4">
        {content.items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-sm font-bold text-gray-800 leading-snug">{item.degree}</h4>
              {item.status === 'current' && (
                <span
                  className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${color}18`, color }}
                >
                  Current
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500 mt-1">{item.school}</div>
            <div className="text-xs text-gray-400 mt-0.5">{item.period}</div>
          </div>
        ))}
      </div>
    )
  }

  // ── Skills ──
  if (content.type === 'skills') {
    return (
      <div className="space-y-5">
        {content.groups.map((group) => (
          <div key={group.name}>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
              {group.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Chip key={skill} color={color}>{skill}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // ── Projects ──
  if (content.type === 'projects') {
    return (
      <div className="space-y-4">
        {content.items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <h4 className="text-sm font-bold text-gray-800 leading-snug mb-2">{item.title}</h4>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <Chip key={tag} color={color}>{tag}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // ── Experience ──
  if (content.type === 'experience') {
    return (
      <div className="space-y-4">
        {content.items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-sm font-bold text-gray-800">{item.role}</h4>
              <span className="flex-shrink-0 text-xs text-gray-400">{item.period}</span>
            </div>
            <div className="text-sm font-medium mt-0.5" style={{ color }}>{item.company}</div>
            <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
              <FiMapPin className="w-3 h-3" /> {item.location}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    )
  }

  // ── Output ──
  if (content.type === 'output') {
    return (
      <div className="space-y-6">
        {/* Status */}
        <div
          className="flex items-center gap-2.5 rounded-2xl border p-4"
          style={{ borderColor: `${color}33`, backgroundColor: `${color}08` }}
        >
          <FiCheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#10b981' }} />
          <span className="text-sm font-semibold text-gray-700">{content.status}</span>
        </div>

        {/* Confidence */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-gray-500">Match Confidence</span>
            <span className="text-xs font-bold" style={{ color }}>{content.confidence}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${content.confidence}%`,
                background: `linear-gradient(90deg, ${color}, #10b981)`,
              }}
            />
          </div>
        </div>

        {/* Focus */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-2">
            {content.focus.map((f) => (
              <Chip key={f} color={color}>{f}</Chip>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FiMapPin className="w-4 h-4" style={{ color }} /> {content.location}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <a
            href={PERSONAL.cv}
            download
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <FiDownload className="w-4 h-4" /> Download CV
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FiMail className="w-4 h-4" /> Contact
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FiGithub className="w-4 h-4" /> GitHub
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FiLinkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    )
  }

  return null
}

function PanelInner({ stage, layer, onClose }) {
  const color = stage.color
  return (
    <div className="flex h-full">
      {/* Colored accent line on the right edge */}
      <div className="order-last w-1 flex-shrink-0" style={{ backgroundColor: color }} />

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full"
                style={{ background: `${color}15`, color }}
              >
                {stage.label}
              </span>
              <span className="text-xs text-gray-400">{stage.description}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{stage.sublabel}</h3>
            <p className="text-xs text-gray-400 font-mono mt-1">{stage.techLabel}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <Body layer={layer} />
      </div>
    </div>
  )
}

export default function LayerDetailsPanel({ stage, layer, onClose }) {
  if (!stage || !layer) return null

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-gray-900/30 backdrop-blur-sm"
      />

      {/* Bottom sheet — mobile */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed z-50 bg-white shadow-2xl overflow-y-auto
                   inset-x-0 bottom-0 max-h-[75vh] rounded-t-2xl
                   lg:hidden"
      >
        <PanelInner stage={stage} layer={layer} onClose={onClose} />
      </motion.div>

      {/* Left slide-in — desktop */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 320 }}
        className="hidden lg:block fixed z-50 bg-white shadow-2xl overflow-y-auto
                   inset-y-0 left-0 w-[400px]"
      >
        <PanelInner stage={stage} layer={layer} onClose={onClose} />
      </motion.div>
    </>
  )
}
