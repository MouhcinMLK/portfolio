import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar({ onCommandOpen }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(2,2,9,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      } : {}}
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ─────────────────────────────────── */}
          <a href="#home" className="flex items-center gap-3.5 group flex-shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                boxShadow: '0 0 18px rgba(0,180,255,0.28)',
              }}
            >
              MM
            </div>
            <span className="font-semibold text-base text-white/70 group-hover:text-white transition-colors hidden sm:block">
              Mouhcine Malek
            </span>
          </a>

          {/* ── Desktop nav ──────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === href
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className="relative px-4 py-2 rounded-lg text-[15px] font-medium transition-all"
                  style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.48)' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: 'rgba(0,212,255,0.1)',
                        border: '1px solid rgba(0,212,255,0.22)',
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              )
            })}
          </div>

          {/* ── Mobile toggle only ───────────────────── */}
          <button
            className="md:hidden text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(2,2,9,0.96)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block py-3 text-base text-white/55 hover:text-cyan-400 transition-colors"
                  onClick={() => { setMobileOpen(false); setActiveLink(href) }}
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
