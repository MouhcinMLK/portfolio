import { motion } from 'framer-motion'

// ─── Feature map stack ────────────────────────────────────────────────────────
function FeatureMaps({ maps, mapW, mapH, color, isActive, isInput }) {
  const OX = 7   // horizontal offset per map
  const OY = 6   // vertical offset per map
  const count = maps
  const totalW = mapW + (count - 1) * OX
  const totalH = mapH + (count - 1) * OY

  if (isInput) {
    return (
      <motion.div
        className="relative overflow-hidden"
        style={{
          width: mapW,
          height: mapH,
          background: `linear-gradient(160deg, ${color}22, ${color}0a)`,
          border: `2px solid ${color}${isActive ? 'cc' : '55'}`,
          boxShadow: isActive
            ? `0 0 28px ${color}45, 0 0 56px ${color}18, inset 0 0 24px ${color}12`
            : `0 0 12px ${color}22`,
        }}
      >
        <img
          src="/photo.jpg"
          alt="input"
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.55, mixBlendMode: 'luminosity' }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, ${color}18 0, ${color}18 1px, transparent 1px, transparent 12px),
              repeating-linear-gradient(90deg, ${color}18 0, ${color}18 1px, transparent 1px, transparent 12px)
            `,
          }}
        />
        {isActive && <div className="absolute inset-0" style={{ background: `${color}18` }} />}
      </motion.div>
    )
  }

  return (
    <div style={{ position: 'relative', width: totalW, height: totalH }}>
      {Array.from({ length: count }).map((_, i) => {
        const left      = i * OX
        const top       = (count - 1 - i) * OY
        const heightMod = [0.95, 1.0, 0.97, 0.93, 1.0, 0.96, 0.98, 0.92][i % 8]
        const h         = Math.round(mapH * heightMod)
        const topAdjust = Math.round((mapH - h) / 2)

        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left,
              top: top + topAdjust,
              width: mapW,
              height: h,
              zIndex: i + 1,
              background: `linear-gradient(170deg, ${color}2a 0%, ${color}10 100%)`,
              border: `1.5px solid ${color}${isActive ? 'aa' : '44'}`,
              boxShadow: isActive
                ? i === count - 1
                  ? `0 0 18px ${color}45, inset 0 0 10px ${color}18`
                  : `0 0 8px ${color}22`
                : 'none',
            }}
          />
        )
      })}
    </div>
  )
}

// ─── Dense layer (circles + connections) ─────────────────────────────────────
function DenseNodes({ count, color, isActive }) {
  const nodeR   = 18
  const spacing = 46
  const svgW    = 110
  const svgH    = (count - 1) * spacing + nodeR * 2 + 4

  const connections = []
  for (let a = 0; a < count; a++) {
    for (let b = a + 1; b < count; b++) {
      if (b - a <= 2) connections.push({ a, b })
    }
  }

  const cx = svgW / 2
  const cy = (i) => nodeR + 2 + i * spacing

  return (
    <svg width={svgW} height={svgH} style={{ overflow: 'visible' }}>
      {connections.map(({ a, b }, idx) => (
        <line key={idx} x1={cx} y1={cy(a)} x2={cx} y2={cy(b)}
          stroke={`${color}${isActive ? '55' : '25'}`} strokeWidth="1.5" />
      ))}
      {count >= 3 && [0, 1].map((a) =>
        [count - 2, count - 1].map((b) => (
          <line key={`cross-${a}-${b}`}
            x1={cx - 10} y1={cy(a)} x2={cx + 10} y2={cy(b)}
            stroke={`${color}${isActive ? '35' : '15'}`} strokeWidth="1" />
        ))
      )}
      {Array.from({ length: count }).map((_, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy(i)} r={nodeR}
            fill={`${color}18`}
            stroke={`${color}${isActive ? 'cc' : '55'}`}
            strokeWidth="2" />
          <circle cx={cx} cy={cy(i)} r={nodeR * 0.38}
            fill={isActive ? color : `${color}80`} />
          {isActive && (
            <circle cx={cx} cy={cy(i)} r={nodeR} fill="none" stroke={color} strokeWidth="1.5" opacity="0.3">
              <animate attributeName="r" from={nodeR} to={nodeR + 8} dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
    </svg>
  )
}

// ─── Output node ──────────────────────────────────────────────────────────────
function OutputNode({ color, isActive }) {
  return (
    <div className="flex flex-col items-center justify-center" style={{ height: 300 }}>
      <motion.div
        animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 92,
          height: 92,
          background: `${color}20`,
          border: `2.5px solid ${color}${isActive ? '' : '88'}`,
          boxShadow: isActive
            ? `0 0 40px ${color}60, 0 0 80px ${color}22, 0 0 120px ${color}08`
            : `0 0 20px ${color}30`,
        }}
      >
        <span className="text-3xl">✓</span>
        {isActive && (
          <div className="absolute inset-0 rounded-full animate-ping"
            style={{ background: `${color}20`, animationDuration: '2s' }} />
        )}
      </motion.div>
      <motion.div
        animate={isActive ? { opacity: 1 } : { opacity: 0.6 }}
        className="mt-4 text-center"
      >
        <div className="font-mono text-xs font-bold tracking-widest" style={{ color }}>
          AI ENGINEER
        </div>
        <div className="text-[11px] text-white/30 font-mono mt-1">Confidence: 99.8%</div>
      </motion.div>
    </div>
  )
}

// ─── Main CNNLayer component ──────────────────────────────────────────────────
export default function CNNLayer({ layer, isActive, onSelect }) {
  const { type, label, badge, annotation, color, maps, mapW, mapH, isDense, isOutput, isInput } = layer

  const vizH = isDense
    ? (maps - 1) * 46 + 36 + 4
    : isOutput
      ? 92
      : isInput
        ? mapH
        : mapH + (maps - 1) * 6

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onClick={() => onSelect(layer.id)}
      data-vizh={vizH}
      className="flex flex-col items-center cursor-pointer group flex-shrink-0"
      style={{ minWidth: isDense ? 110 : isOutput ? 92 : undefined }}
    >
      {/* Top label */}
      <div className="text-center mb-4" style={{ minWidth: isDense ? 110 : 100 }}>
        <div className="text-[11px] text-white/32 font-mono tracking-widest uppercase mb-1">
          {type}
        </div>
        <motion.div
          animate={isActive ? { color } : { color: `${color}88` }}
          className="font-mono text-sm font-bold tracking-widest"
        >
          {label}
        </motion.div>
      </div>

      {/* Visual */}
      <motion.div
        animate={isActive
          ? { filter: `drop-shadow(0 0 16px ${color}80)` }
          : { filter: 'drop-shadow(0 0 0px transparent)' }
        }
        transition={{ duration: 0.3 }}
        className="group-hover:scale-[1.04] transition-transform duration-200"
      >
        {isDense
          ? <DenseNodes count={maps} color={color} isActive={isActive} />
          : isOutput
            ? <OutputNode color={color} isActive={isActive} />
            : <FeatureMaps maps={maps} mapW={mapW} mapH={mapH} color={color} isActive={isActive} isInput={isInput} />
        }
      </motion.div>

      {/* Bottom label */}
      <div className="text-center mt-4" style={{ minWidth: isDense ? 110 : 100 }}>
        <div className="text-[11px] text-white/32 font-mono mb-2">{annotation}</div>
        <motion.div
          animate={isActive
            ? { backgroundColor: `${color}25`, borderColor: `${color}55`, color }
            : { backgroundColor: `${color}0d`, borderColor: `${color}22`, color: `${color}99` }
          }
          className="text-xs font-semibold px-3 py-1 rounded-full border inline-block"
        >
          {badge}
        </motion.div>
      </div>
    </motion.div>
  )
}
