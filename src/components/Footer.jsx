import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/MohcnMalek',              label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/mouhcine-malek',      label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:mhcnmalek@gmail.com',                  label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-7 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[11px] text-white/18">
          <span className="text-cyan-400/50">{'>'}</span>{' '}
          © 2025 Mouhcine Malek · Built with React & Framer Motion
        </div>

        <div className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/22 hover:text-cyan-400 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
