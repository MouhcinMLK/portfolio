import { motion } from 'framer-motion'
import CNNLayer from './CNNLayer'
import InfoPanel from './InfoPanel'
import { CNN_LAYERS } from '../data/portfolioData'

// Visual height of each layer — must stay in sync with CNNLayer.jsx constants
function getVizH(layer) {
  if (layer.isDense)  return (layer.maps - 1) * 46 + 36 + 4  // nodeR=18, spacing=46
  if (layer.isOutput) return 92
  if (layer.isInput)  return layer.mapH
  return layer.mapH + (layer.maps - 1) * 6                    // OY=6
}

// SVG connector drawn between two adjacent layers
function LayerConnector({ leftH, rightH, color = '#00d4ff', vertical = false }) {
  const N    = 6
  const W    = 60
  const maxH = Math.max(leftH, rightH, 100)
  const lS   = (maxH - leftH)  / 2
  const rS   = (maxH - rightH) / 2

  if (vertical) {
    return (
      <div className="flex justify-center w-full my-2">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <line x1="18" y1="0" x2="18" y2="26" stroke={`${color}55`} strokeWidth="1.5" />
          <polygon points="11,20 18,32 25,20" fill={`${color}55`} />
        </svg>
      </div>
    )
  }

  return (
    <motion.svg
      width={W} height={maxH}
      className="flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {Array.from({ length: N }).map((_, i) => {
        const r = N === 1 ? 0.5 : i / (N - 1)
        return (
          <motion.line
            key={i}
            x1="0"  y1={lS + leftH  * r}
            x2={W}  y2={rS + rightH * r}
            stroke={`${color}45`}
            strokeWidth="0.9"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
          />
        )
      })}
    </motion.svg>
  )
}

export default function CNNArchitecture({ activeLayerId, onLayerClick }) {
  const activeLayer = CNN_LAYERS.find((l) => l.id === activeLayerId) || null

  return (
    <div className="w-full">

      {/* ── Desktop: horizontal scroll ──────────────────────────────── */}
      <div className="hidden lg:flex items-center justify-center gap-0 overflow-x-auto pb-6 px-4"
           style={{ scrollbarWidth: 'thin', minHeight: '420px' }}>
        {CNN_LAYERS.map((layer, idx) => (
          <motion.div
            key={layer.id}
            className="flex items-center gap-0 flex-shrink-0"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.1, duration: 0.5 }}
          >
            <CNNLayer
              layer={layer}
              isActive={activeLayerId === layer.id}
              onSelect={onLayerClick}
            />
            {idx < CNN_LAYERS.length - 1 && (
              <LayerConnector
                leftH={getVizH(layer)}
                rightH={getVizH(CNN_LAYERS[idx + 1])}
                color={layer.color}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* ── Mobile: vertical scroll ──────────────────────────────────── */}
      <div className="flex lg:hidden flex-col items-center gap-0 overflow-y-auto max-h-[75vh] pb-4">
        {CNN_LAYERS.map((layer, idx) => (
          <motion.div
            key={layer.id}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            <CNNLayer
              layer={layer}
              isActive={activeLayerId === layer.id}
              onSelect={onLayerClick}
            />
            {idx < CNN_LAYERS.length - 1 && (
              <LayerConnector
                leftH={getVizH(layer)}
                rightH={getVizH(CNN_LAYERS[idx + 1])}
                color={layer.color}
                vertical
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* ── Flow labels row (desktop) ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="hidden lg:flex items-center justify-center gap-2 mt-5 px-4 overflow-x-auto"
      >
        {[
          'Identity', '──', 'Feature Extraction', '──', 'Pooling',
          '──', 'Pattern Recognition', '──', 'Decision Layer', '──', 'Output',
        ].map((lbl, i) =>
          lbl === '──' ? (
            <span key={i} className="text-white/12 text-sm font-mono flex-shrink-0">──</span>
          ) : (
            <span key={i} className="text-xs text-white/28 font-mono tracking-wide text-center flex-shrink-0"
                  style={{ minWidth: 90 }}>
              {lbl}
            </span>
          )
        )}
      </motion.div>

      {/* ── Info panel ───────────────────────────────────────────────── */}
      <InfoPanel
        layer={activeLayer}
        onClose={() => onLayerClick(activeLayerId)}
        onPrev={() => {
          const idx = CNN_LAYERS.findIndex((l) => l.id === activeLayerId)
          if (idx > 0) onLayerClick(CNN_LAYERS[idx - 1].id)
        }}
        onNext={() => {
          const idx = CNN_LAYERS.findIndex((l) => l.id === activeLayerId)
          if (idx < CNN_LAYERS.length - 1) onLayerClick(CNN_LAYERS[idx + 1].id)
        }}
        currentIdx={CNN_LAYERS.findIndex((l) => l.id === activeLayerId)}
        total={CNN_LAYERS.length}
      />
    </div>
  )
}
