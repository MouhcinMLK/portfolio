import { useMemo } from 'react'
import { motion } from 'framer-motion'

const GRID      = 6
const PHOTO     = 380   // circle diameter
const CONTAINER = 480   // total container (rings + dots fit inside)
const C         = 240   // center = CONTAINER / 2

// Stable tile explosion data
const TILE_DATA = Array.from({ length: GRID * GRID }, (_, idx) => {
  const row = Math.floor(idx / GRID)
  const col = idx % GRID
  const h1  = ((idx * 2654435761)          >>> 0) / 0xffffffff
  const h2  = (((idx + 37) * 1234567891)   >>> 0) / 0xffffffff
  const h3  = (((idx + 99) * 987654321)    >>> 0) / 0xffffffff
  const ang = h1 * Math.PI * 2
  const d   = 300 + h2 * 420
  return { row, col, dx: Math.cos(ang)*d, dy: Math.sin(ang)*d, rotate: (h3-0.5)*420, delay: h1*0.35 }
})

// Orbit particles around the photo
const ORBIT = [
  { angle: 20,  r: 218, size: 6,   delay: 0,   dur: 2.0 },
  { angle: 65,  r: 228, size: 4,   delay: 0.4, dur: 1.6 },
  { angle: 110, r: 213, size: 5,   delay: 0.9, dur: 2.3 },
  { angle: 155, r: 224, size: 4,   delay: 0.2, dur: 1.8 },
  { angle: 200, r: 219, size: 6,   delay: 0.7, dur: 2.1 },
  { angle: 250, r: 226, size: 4,   delay: 0.5, dur: 1.5 },
  { angle: 295, r: 215, size: 5,   delay: 1.1, dur: 2.0 },
  { angle: 340, r: 222, size: 4,   delay: 0.3, dur: 1.7 },
  { angle: 42,  r: 202, size: 3,   delay: 0.6, dur: 1.9 },
  { angle: 135, r: 206, size: 3,   delay: 0.1, dur: 2.2 },
  { angle: 225, r: 200, size: 2.5, delay: 0.8, dur: 1.6 },
  { angle: 315, r: 208, size: 2.5, delay: 0.4, dur: 2.0 },
]

export default function ProfileImage({ onClick, phase }) {
  const isExploding = phase === 'exploding'
  const isScanning  = phase === 'scanning'
  const inset       = (CONTAINER - PHOTO) / 2  // 50px

  return (
    <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: CONTAINER }}>
      {/* ── Photo container ──────────────────────────────────────── */}
      <div className="relative" style={{ width: CONTAINER, height: CONTAINER }}>

        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.13) 0%, rgba(139,92,246,0.06) 40%, transparent 68%)',
        }} />

        {/* Slow rotating dashed outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute pointer-events-none"
          style={{ inset: inset-30, borderRadius:'50%', border:'1px dashed rgba(0,212,255,0.22)' }}
        />

        {/* Counter-rotating second ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute pointer-events-none"
          style={{ inset: inset-16, borderRadius:'50%', border:'1px solid rgba(139,92,246,0.2)' }}
        />

        {/* Inner glow border ring */}
        <div className="absolute pointer-events-none" style={{
          inset: inset-4,
          borderRadius: '50%',
          border: '2px solid rgba(0,212,255,0.38)',
          boxShadow: '0 0 35px rgba(0,212,255,0.18), 0 0 70px rgba(0,212,255,0.07), inset 0 0 24px rgba(0,212,255,0.06)',
        }} />

        {/* Orbit dots */}
        {ORBIT.map((d, i) => {
          const rad = (d.angle * Math.PI) / 180
          const x   = C + Math.cos(rad) * d.r - d.size / 2
          const y   = C + Math.sin(rad) * d.r - d.size / 2
          return (
            <motion.div key={i}
              style={{ position:'absolute', left:x, top:y, width:d.size, height:d.size, borderRadius:'50%',
                       background: i%3===0 ? '#8b5cf6' : '#00d4ff', pointerEvents:'none' }}
              animate={{ opacity:[0.25,0.9,0.25], scale:[1,1.6,1] }}
              transition={{ duration:d.dur, repeat:Infinity, delay:d.delay, ease:'easeInOut' }}
            />
          )
        })}

        {/* Photo circle */}
        <div
          className="absolute cursor-pointer"
          style={{
            inset,
            borderRadius: '50%',
            overflow: isExploding ? 'visible' : 'hidden',
            border: '3px solid rgba(0,212,255,0.52)',
            boxShadow: '0 0 50px rgba(0,212,255,0.24), inset 0 0 36px rgba(0,212,255,0.07)',
            maskImage: isExploding ? 'none'
              : 'radial-gradient(ellipse 88% 95% at 50% 36%, black 40%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.4) 72%, transparent 85%)',
            WebkitMaskImage: isExploding ? 'none'
              : 'radial-gradient(ellipse 88% 95% at 50% 36%, black 40%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.4) 72%, transparent 85%)',
          }}
          onClick={phase === 'idle' ? onClick : undefined}
        >
          {TILE_DATA.map((tile) => {
            const xPct = (tile.col / GRID) * 100
            const yPct = (tile.row / GRID) * 100
            const bgX  = tile.col === 0 ? 0 : (tile.col / (GRID-1)) * 100
            const bgY  = tile.row === 0 ? 0 : (tile.row / (GRID-1)) * 100
            return (
              <motion.div key={`${tile.row}-${tile.col}`}
                style={{
                  position:'absolute', left:`${xPct}%`, top:`${yPct}%`,
                  width:`${100/GRID}%`, height:`${100/GRID}%`,
                  backgroundImage:'url(/photo.jpg)',
                  backgroundSize:`${GRID*100}% ${GRID*100}%`,
                  backgroundPosition:`${bgX}% ${bgY}%`,
                }}
                animate={isExploding
                  ? { x:tile.dx, y:tile.dy, rotate:tile.rotate, opacity:0, scale:0.08 }
                  : { x:0, y:0, rotate:0, opacity:1, scale:1 }
                }
                transition={{
                  duration: isExploding ? 0.7 : 0.5,
                  delay:    isExploding ? tile.delay : tile.delay * 0.2,
                  ease:     isExploding ? [0.4,0,1,1] : [0,0,0.2,1],
                }}
              />
            )
          })}

          {/* Scan line */}
          {isScanning && (
            <motion.div className="absolute inset-x-0 pointer-events-none z-10"
              style={{ height:'3px', background:'linear-gradient(90deg,transparent,#00d4ff 30%,#00d4ff 70%,transparent)', filter:'blur(1px)' }}
              initial={{ top:'-2%' }} animate={{ top:'102%' }}
              transition={{ duration:0.6, ease:'linear' }}
            />
          )}

          {/* Hover hint */}
          {phase === 'idle' && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs"
                style={{ background:'rgba(0,0,0,0.65)', border:'1px solid rgba(0,212,255,0.4)', color:'#00d4ff' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Analyze →
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hint text below */}
      <motion.p
        animate={isExploding ? { opacity:0 } : { opacity:1 }}
        className="text-center pointer-events-none mt-1"
        style={{ color:'rgba(0,212,255,0.38)', fontSize:'11px', fontFamily:'monospace', letterSpacing:'0.1em' }}
      >
        ↑ Click on my image to discover my AI architecture
      </motion.p>
    </div>
  )
}
