import { motion } from 'framer-motion'
import { FiMapPin, FiCpu } from 'react-icons/fi'
import { PERSONAL } from '../data/portfolioData'

export default function ProfileCard({ onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.18)' }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer select-none"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={PERSONAL.photo}
          alt={PERSONAL.name}
          className="w-full h-72 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="p-6 space-y-3">
        {/* Available badge */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-sm font-medium text-gray-700">Available for PFA Internship</span>
        </div>

        {/* Field */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FiCpu className="w-4 h-4 text-purple-500" />
          <span>AI / Data / Agentic Systems</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FiMapPin className="w-4 h-4 text-cyan-500" />
          <span>{PERSONAL.location}</span>
        </div>

        {/* Hint */}
        <p className="pt-2 text-xs text-gray-400 border-t border-gray-100">
          Click the image to explore my AI journey
        </p>
      </div>
    </motion.div>
  )
}
