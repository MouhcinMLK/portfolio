import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const NODES = [
  { cmd: '/home',       label: 'CNN_EXPLORER',      desc: 'Interactive AI architecture', href: '#home' },
  { cmd: '/skills',     label: 'TECH_STACK',         desc: 'Technical expertise',        href: '#skills' },
  { cmd: '/projects',   label: 'DEPLOYED_WORK',      desc: 'Selected projects',          href: '#projects' },
  { cmd: '/experience', label: 'WORK_HISTORY',        desc: 'Professional experience',    href: '#experience' },
  { cmd: '/education',  label: 'ACADEMIC_DATA',      desc: 'Academic background',        href: '#education' },
  { cmd: '/contact',    label: 'INIT_CONTACT',       desc: 'Get in touch',               href: '#contact' },
  { cmd: '/cv',         label: 'EXTRACT_RESUME',     desc: 'Download PDF resume',        href: '/CVENG_MouhcineMalek.pdf', download: true },
]

function CornerBracket({ pos }) {
  const base = 'absolute w-4 h-4'
  const borders = {
    tl: 'top-0 left-0 border-t border-l',
    tr: 'top-0 right-0 border-t border-r',
    bl: 'bottom-0 left-0 border-b border-l',
    br: 'bottom-0 right-0 border-b border-r',
  }
  return <div className={`${base} ${borders[pos]} border-cyan-400/50`} />
}

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [hovered, setHovered] = useState(null)
  const inputRef = useRef(null)

  const filtered = NODES.filter(
    (n) =>
      n.cmd.includes(query.toLowerCase()) ||
      n.label.toLowerCase().includes(query.toLowerCase()) ||
      n.desc.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
    else { setQuery(''); setHovered(null) }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const execute = (node) => {
    if (node.download) {
      const a = document.createElement('a')
      a.href = node.href
      a.download = 'CV_MouhcineMalek.pdf'
      a.click()
    } else {
      document.querySelector(node.href)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Neural Interface Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
            style={{
              filter: 'drop-shadow(0 0 40px rgba(0,200,255,0.08))',
            }}
          >
            {/* Outer glow border wrapper */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                background: 'rgba(5, 5, 18, 0.97)',
                boxShadow:
                  '0 0 0 1px rgba(0,200,255,0.2), 0 0 60px rgba(0,200,255,0.06), inset 0 1px 0 rgba(0,200,255,0.08)',
              }}
            >
              {/* Corner brackets */}
              <CornerBracket pos="tl" />
              <CornerBracket pos="tr" />
              <CornerBracket pos="bl" />
              <CornerBracket pos="br" />

              {/* Scanlines overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-20 opacity-30"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
                }}
              />

              {/* ── Header ── */}
              <div className="relative px-5 py-3.5 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Pulsing core indicator */}
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <span className="absolute w-5 h-5 rounded-full bg-cyan-400/10 animate-ping" />
                      <span className="relative w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-bold text-cyan-400 tracking-widest">
                        NEURAL_CORE
                      </div>
                      <div className="font-mono text-[9px] text-white/25 tracking-wider mt-0.5">
                        QUERY INTERFACE · ACTIVE
                      </div>
                    </div>
                  </div>

                  {/* Mini neural graph */}
                  <div className="flex items-center gap-2 mr-2">
                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                      <circle cx="6" cy="12" r="2.5" fill="rgba(0,200,255,0.5)" />
                      <circle cx="24" cy="5" r="2" fill="rgba(139,92,246,0.5)" />
                      <circle cx="24" cy="19" r="2" fill="rgba(0,200,255,0.4)" />
                      <circle cx="42" cy="12" r="2.5" fill="rgba(0,200,255,0.5)" />
                      <line x1="8" y1="11" x2="22" y2="6" stroke="rgba(0,200,255,0.2)" strokeWidth="0.8" />
                      <line x1="8" y1="13" x2="22" y2="18" stroke="rgba(0,200,255,0.2)" strokeWidth="0.8" />
                      <line x1="26" y1="6" x2="40" y2="11" stroke="rgba(139,92,246,0.2)" strokeWidth="0.8" />
                      <line x1="26" y1="18" x2="40" y2="13" stroke="rgba(0,200,255,0.2)" strokeWidth="0.8" />
                    </svg>
                  </div>

                  <button
                    onClick={onClose}
                    className="font-mono text-[9px] text-white/20 border border-white/8 px-1.5 py-0.5 rounded hover:border-cyan-400/30 hover:text-cyan-400/60 transition-colors"
                  >
                    ESC
                  </button>
                </div>
              </div>

              {/* ── Query Input ── */}
              <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2.5">
                <span className="font-mono text-cyan-400/70 text-sm select-none">&gt;_</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="type command or search..."
                  className="flex-1 bg-transparent font-mono text-sm text-cyan-400/80 placeholder-white/18 outline-none caret-cyan-400"
                />
              </div>

              {/* ── Node List ── */}
              <div className="py-1.5 max-h-[300px] overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="px-5 py-5 text-center font-mono text-[11px] text-white/20">
                    NO_NODE_FOUND :: "{query}"
                  </div>
                ) : (
                  filtered.map((node, i) => (
                    <motion.button
                      key={node.cmd}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className={`w-full flex items-center gap-0 px-5 py-2.5 transition-all text-left group relative ${
                        hovered === node.cmd ? 'bg-cyan-400/5' : 'hover:bg-cyan-400/4'
                      }`}
                      onClick={() => execute(node)}
                      onMouseEnter={() => setHovered(node.cmd)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Node dot */}
                      <div
                        className={`w-2 h-2 rounded-full border flex-shrink-0 transition-all ${
                          hovered === node.cmd
                            ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.8)]'
                            : 'border-white/20 bg-transparent'
                        }`}
                      />

                      {/* Connector line */}
                      <div
                        className={`h-px w-3 flex-shrink-0 transition-all ${
                          hovered === node.cmd ? 'bg-cyan-400/60' : 'bg-white/10'
                        }`}
                      />

                      {/* Command */}
                      <span
                        className={`font-mono text-xs w-[100px] flex-shrink-0 transition-colors ${
                          hovered === node.cmd ? 'text-cyan-400' : 'text-cyan-400/50'
                        }`}
                      >
                        {node.cmd}
                      </span>

                      {/* Separator line */}
                      <div
                        className={`h-px flex-1 mx-2 transition-all ${
                          hovered === node.cmd
                            ? 'bg-gradient-to-r from-cyan-400/40 to-transparent'
                            : 'bg-white/5'
                        }`}
                      />

                      {/* Label */}
                      <span
                        className={`font-mono text-[10px] w-[100px] flex-shrink-0 tracking-wider transition-colors ${
                          hovered === node.cmd ? 'text-white/75' : 'text-white/30'
                        }`}
                      >
                        {node.label}
                      </span>

                      {/* Desc */}
                      <span className="text-[10px] text-white/20 flex-1 hidden sm:block truncate">
                        {node.desc}
                      </span>

                      {/* Arrow */}
                      <span
                        className={`font-mono text-xs ml-2 flex-shrink-0 transition-all ${
                          hovered === node.cmd ? 'text-cyan-400 translate-x-0.5' : 'text-white/15'
                        }`}
                      >
                        {node.download ? <FiDownload className="w-3 h-3" /> : '──►'}
                      </span>
                    </motion.button>
                  ))
                )}
              </div>

              {/* ── Status Footer ── */}
              <div className="px-5 py-2.5 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4 font-mono text-[9px] text-white/18 tracking-wider">
                  <span>↵ EXECUTE</span>
                  <span>↑↓ NAVIGATE</span>
                  <span>ESC TERMINATE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[9px] text-emerald-400/60 tracking-wider">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
