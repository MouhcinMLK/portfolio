import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { CNN_LAYERS } from '../data/portfolioData'
import LayerDetailsPanel from './LayerDetailsPanel'

// ── Stage definitions ─────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 'input',  label: 'INPUT',  sublabel: 'Identity',   type: 'input',
    color: '#06b6d4', techLabel: '3 × 224 × 224', description: 'Input Layer',
  },
  {
    id: 'conv1',  label: 'CONV 1', sublabel: 'Education',  type: 'conv',
    color: '#8b5cf6', techLabel: '32 filters · 3×3', description: 'Feature Extraction',
  },
  {
    id: 'pool',   label: 'POOL',   sublabel: 'Skills',     type: 'pooling',
    color: '#10b981', techLabel: 'MaxPool 2×2', description: 'Compression',
  },
  {
    id: 'conv2',  label: 'CONV 2', sublabel: 'Projects',   type: 'conv',
    color: '#f97316', techLabel: '64 filters · 3×3', description: 'Pattern Recognition',
  },
  {
    id: 'dense',  label: 'DENSE',  sublabel: 'Experience', type: 'dense',
    color: '#ec4899', techLabel: '128 neurons', description: 'Decision Layer',
  },
  {
    id: 'output', label: 'OUTPUT', sublabel: 'Result',     type: 'output',
    color: '#06b6d4', techLabel: 'Softmax · 98%', description: 'Recruiter Result',
  },
]

// ── NODE VISUALS ───────────────────────────────────────────────────────────────

function InputNode({ color, active }) {
  return (
    <div
      style={{
        width: 130, height: 170,
        border: `2.5px solid ${active ? color : '#e5e7eb'}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: active
          ? `0 0 0 4px ${color}22, 0 6px 24px ${color}30`
          : '0 2px 10px rgba(0,0,0,0.07)',
        transform: active ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.25s',
      }}
    >
      <img src="/photo2.png" alt="input" className="w-full h-full object-cover object-center"
           style={{ opacity: 0.9 }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg,  ${color}16 0, ${color}16 1px, transparent 1px, transparent 14px),
          repeating-linear-gradient(90deg, ${color}16 0, ${color}16 1px, transparent 1px, transparent 14px)`,
      }} />
      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
           style={{ background: `${color}ee` }}>
        <span className="text-white font-mono font-semibold" style={{ fontSize: 9 }}>3×224×224</span>
      </div>
    </div>
  )
}

function ConvNode({ color, active }) {
  const CELL = 14, GAP = 3, G = 6
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10,
                  transform: active ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.25s' }}>
      {/* Grid + kernel */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${G}, ${CELL}px)`, gap: GAP }}>
          {Array.from({ length: G * G }).map((_, i) => {
            const r = Math.floor(i / G), c = i % G
            const hot = r >= 1 && r <= 3 && c >= 1 && c <= 3
            return (
              <div key={i} style={{
                width: CELL, height: CELL, borderRadius: 2,
                background: hot ? `${color}48` : '#f1f5f9',
                border: `1px solid ${hot ? color : '#e2e8f0'}`,
                transition: 'background 0.2s',
              }} />
            )
          })}
        </div>
        <div className="text-center text-gray-400 font-mono mt-2" style={{ fontSize: 9 }}>kernel 3×3</div>
      </div>

      {/* Mini arrow */}
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
        <path d="M2 8 L13 8 M9 4 L13 8 L9 12" stroke={`${color}99`} strokeWidth="2"
              fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Feature maps — 4 stacked */}
      <div style={{ position: 'relative', width: 60, height: 96 }}>
        {[3, 2, 1, 0].map((z) => (
          <div key={z} style={{
            position: 'absolute', borderRadius: 8,
            width: 34, height: 80,
            left: z * 7, top: z * 4,
            background: `${color}18`,
            border: `1.5px solid ${color}aa`,
          }} />
        ))}
      </div>
    </div>
  )
}

function PoolingNode({ color, active }) {
  const SM = 14, LG = 28
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12,
                  transform: active ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.25s' }}>
      {/* 4×4 */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(4, ${SM}px)`, gap: 3 }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{ width: SM, height: SM, borderRadius: 2,
                                  background: '#e2e8f0', border: '1px solid #cbd5e1' }} />
          ))}
        </div>
        <div className="text-center text-gray-400 font-mono mt-2" style={{ fontSize: 9 }}>before</div>
      </div>

      <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
        <path d="M2 10 L17 10 M12 5 L17 10 L12 15" stroke={`${color}99`} strokeWidth="2"
              fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* 2×2 */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(2, ${LG}px)`, gap: 4 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ width: LG, height: LG, borderRadius: 6,
                                  background: `${color}38`, border: `2px solid ${color}` }} />
          ))}
        </div>
        <div className="text-center text-gray-400 font-mono mt-2" style={{ fontSize: 9 }}>after</div>
      </div>
    </div>
  )
}

function DenseNode({ color, active }) {
  const W = 158, H = 150
  const iN = 5, oN = 3
  const ix = 20, ox = 138
  const iy = (i) => 14 + i * (H - 28) / (iN - 1)
  const oy = (j) => 28 + j * (H - 56) / (oN - 1)
  return (
    <svg width={W} height={H} style={{ overflow: 'visible', flexShrink: 0,
                                       transform: active ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.25s' }}>
      {/* connections */}
      {Array.from({ length: iN }).map((_, i) =>
        Array.from({ length: oN }).map((_, j) => (
          <line key={`${i}${j}`} x1={ix} y1={iy(i)} x2={ox} y2={oy(j)}
                stroke={`${color}28`} strokeWidth="1.2" />
        ))
      )}
      {/* input neurons */}
      {Array.from({ length: iN }).map((_, i) => (
        <g key={`i${i}`}>
          <circle cx={ix} cy={iy(i)} r={12} fill={`${color}18`} stroke={color} strokeWidth="2" />
          <circle cx={ix} cy={iy(i)} r={4.5} fill={color} opacity={0.55} />
        </g>
      ))}
      {/* output neurons */}
      {Array.from({ length: oN }).map((_, j) => (
        <g key={`o${j}`}>
          <circle cx={ox} cy={oy(j)} r={15} fill={`${color}30`} stroke={color} strokeWidth="2.2" />
          <circle cx={ox} cy={oy(j)} r={6}  fill={color} opacity={0.65} />
        </g>
      ))}
    </svg>
  )
}

function OutputNode({ color, active }) {
  return (
    <div style={{
      width: 155, padding: 16, borderRadius: 18,
      border: `2px solid ${active ? color : '#e5e7eb'}`,
      background: active ? `${color}08` : 'white',
      boxShadow: active ? `0 0 0 4px ${color}18, 0 8px 28px ${color}22` : '0 2px 10px rgba(0,0,0,0.06)',
      transition: 'all 0.25s', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
          <circle cx="10" cy="10" r="9" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8"/>
          <polyline points="6,10 9,13 14,7" stroke="#16a34a" strokeWidth="2"
                    fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#111827', fontFamily: 'monospace' }}>
          AI Engineer
        </span>
      </div>

      <div style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 9, color: '#9ca3af', fontFamily: 'monospace' }}>confidence</span>
          <span style={{ fontSize: 9, color, fontFamily: 'monospace', fontWeight: 700 }}>98%</span>
        </div>
        <div style={{ height: 6, background: '#f1f5f9', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ width: '98%', height: '100%', borderRadius: 99,
                        background: `linear-gradient(90deg, ${color}, #10b981)` }} />
        </div>
      </div>

      <div style={{ fontSize: 10, color: '#6b7280', lineHeight: 1.7 }}>
        <div style={{ fontWeight: 700, color: '#374151' }}>PFA Internship</div>
        <div style={{ color }}>AI · Data · Agentic</div>
        <div>Morocco</div>
      </div>
    </div>
  )
}

const NODE = { input: InputNode, conv: ConvNode, pooling: PoolingNode, dense: DenseNode, output: OutputNode }

// ── Connectors ─────────────────────────────────────────────────────────────────

// Horizontal — fixed width connector
function HConnector() {
  return (
    <div style={{ width: 72, flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div className="cnn-dash" style={{ flex: 1, height: 2, borderRadius: 1 }} />
        <div style={{ width: 0, height: 0, flexShrink: 0,
                      borderTop:    '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      borderLeft:   '10px solid #cbd5e1' }} />
      </div>
    </div>
  )
}

// Vertical — for mobile
function VConnector() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2px 0', height: 52 }}>
      <div className="cnn-dash-v" style={{ flex: 1, width: 2, borderRadius: 1 }} />
      <div style={{ width: 0, height: 0, flexShrink: 0,
                    borderLeft:  '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop:   '10px solid #cbd5e1' }} />
    </div>
  )
}

// ── Stage block ────────────────────────────────────────────────────────────────

function StageBlock({ stage, active, onClick, delay }) {
  const NodeComp = NODE[stage.type]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay ?? 0, ease: [0, 0, 0.2, 1] }}
      onClick={onClick}
      className="group"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
               cursor: 'pointer', userSelect: 'none', flexShrink: 0 }}
    >
      {/* Visual node */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                    minHeight: 180, position: 'relative',
                    filter: active ? `drop-shadow(0 4px 18px ${stage.color}40)` : 'none',
                    transition: 'filter 0.25s' }}>
        <NodeComp color={stage.color} active={active} />
      </div>

      {/* Labels */}
      <div style={{ textAlign: 'center', marginTop: 14, minWidth: 120, padding: '0 4px' }}>
        <div style={{ fontSize: 11, fontWeight: 900, fontFamily: 'monospace',
                      letterSpacing: '0.1em', color: active ? stage.color : '#111827',
                      transition: 'color 0.2s' }}>
          {stage.label}
        </div>
        <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 500, marginTop: 2 }}>
          {stage.description}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: active ? stage.color : stage.color + 'cc',
                      marginTop: 3, transition: 'color 0.2s' }}>
          {stage.sublabel}
        </div>
        <div style={{ fontSize: 9, color: '#d1d5db', fontFamily: 'monospace', marginTop: 3 }}>
          {stage.techLabel}
        </div>
        {/* Hover hint */}
        <div style={{ fontSize: 8, color: '#d1d5db', marginTop: 5,
                      opacity: 0, transition: 'opacity 0.2s' }}
             className="group-hover:!opacity-100">
          click to explore
        </div>
      </div>
    </motion.div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────

export default function CNNArchitecture({ onBack }) {
  const [activeId, setActiveId] = useState(null)

  const toggle   = (id) => setActiveId((p) => (p === id ? null : id))
  const active   = STAGES.find((s) => s.id === activeId) || null
  const layerData = CNN_LAYERS.find((l) => l.id === activeId) || null

  return (
    <div style={{ width: '100%' }}>

      {/* ── Left-aligned header ─────────────────────────────── */}
      <div style={{ marginBottom: 48 }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '9px 18px', borderRadius: 12, fontSize: 13, fontWeight: 500,
            color: '#6b7280', background: 'white', border: '1px solid #e5e7eb',
            cursor: 'pointer', transition: 'all 0.15s', marginBottom: 20,
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#374151' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6b7280' }}
        >
          <FiArrowLeft size={15} /> Back to Profile
        </button>

        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800,
                     color: '#111827', letterSpacing: '-0.02em', marginBottom: 6 }}>
          CNN Portfolio Architecture
        </h2>
        <p style={{ fontSize: 14, color: '#9ca3af' }}>
          My profile processed as a neural network — click any layer to explore
        </p>
      </div>

      {/* ── Desktop horizontal pipeline ─────────────────────── */}
      <div className="hidden lg:flex" style={{ alignItems: 'flex-start', justifyContent: 'center', width: '100%', overflowX: 'auto',
                                               paddingBottom: 12, paddingTop: 8 }}>
        {STAGES.flatMap((stage, idx) => {
          const items = [
            <StageBlock
              key={stage.id}
              stage={stage}
              active={activeId === stage.id}
              onClick={() => toggle(stage.id)}
              delay={idx * 0.09}
            />,
          ]
          if (idx < STAGES.length - 1) items.push(<HConnector key={`h${idx}`} />)
          return items
        })}
      </div>

      {/* ── Mobile vertical pipeline ─────────────────────────── */}
      <div className="flex lg:hidden" style={{ flexDirection: 'column', alignItems: 'center' }}>
        {STAGES.flatMap((stage, idx) => {
          const items = [
            <StageBlock
              key={stage.id}
              stage={stage}
              active={activeId === stage.id}
              onClick={() => toggle(stage.id)}
              delay={idx * 0.07}
            />,
          ]
          if (idx < STAGES.length - 1) items.push(<VConnector key={`v${idx}`} />)
          return items
        })}
      </div>

      {/* ── Legend strip (desktop) ────────────────────────────── */}
      <div className="hidden lg:flex" style={{ alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 28, flexWrap: 'wrap' }}>
        {STAGES.map((s) => (
          <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'monospace' }}>{s.sublabel}</span>
          </div>
        ))}
      </div>

      {/* ── Details panel ─────────────────────────────────────── */}
      <AnimatePresence>
        {active && layerData && (
          <LayerDetailsPanel
            stage={active}
            layer={layerData}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
