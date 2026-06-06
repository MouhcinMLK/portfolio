import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { PERSONAL } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

function Logo() {
  const [imgFailed, setImgFailed] = useState(false)

  if (!imgFailed) {
    return (
      <img
        src="/logo.png"
        alt="Logo"
        onError={() => setImgFailed(true)}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
      />
    )
  }

  // Fallback: styled "MM" initials badge
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-white text-xl sm:text-2xl tracking-tight select-none"
      style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
    >
      MM
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md"
      style={{ boxShadow: '0 1px 0 #f3f4f6, 0 2px 12px rgba(0,0,0,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Desktop bar — h-20 mobile, h-24 desktop */}
        <div className="flex items-center justify-between h-24 lg:h-28">

          {/* ── Logo + name ──────────────────────────────── */}
          <a href="#home" className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
            <Logo />
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors tracking-tight">
                {PERSONAL.name}
              </span>
              <span className="hidden sm:block text-xs text-gray-400 font-medium mt-0.5">
                AI Engineering Student
              </span>
            </div>
          </a>

          {/* ── Desktop nav links ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-150"
              >
                {label}
              </a>
            ))}
          </div>

          {/* ── Mobile toggle ─────────────────────────────── */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-0.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block px-3 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
