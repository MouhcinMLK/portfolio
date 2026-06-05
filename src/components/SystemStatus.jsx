import { motion } from 'framer-motion'
import { FiZap, FiMapPin, FiCpu, FiActivity } from 'react-icons/fi'

const rows = [
  { icon: FiZap,      label: 'Status',   value: 'Available for PFA', green: true },
  { icon: FiCpu,      label: 'Focus',    value: 'AI / Agentic Systems' },
  { icon: FiMapPin,   label: 'Location', value: 'Morocco' },
  { icon: FiActivity, label: 'Mode',     value: 'Build · Learn · Deploy' },
]

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="glass-card rounded-xl p-4 border border-white/8 w-[230px]"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          System Status
        </span>
      </div>

      {/* Rows */}
      <div className="space-y-2.5">
        {rows.map(({ icon: Icon, label, value, green }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="text-cyan-400/50 w-3 h-3 flex-shrink-0" />
            <span className="text-[10px] font-mono text-white/25 w-14 flex-shrink-0">{label}</span>
            <span className={`text-[11px] font-medium leading-tight ${green ? 'text-emerald-400' : 'text-white/60'}`}>
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Terminal line */}
      <div className="mt-3 pt-2.5 border-t border-white/5 font-mono text-[9px] text-white/18">
        <span className="text-cyan-400/50">{'>'}</span>{' '}
        <span className="animate-pulse">ready_for_opportunities</span>
      </div>
    </motion.div>
  )
}
