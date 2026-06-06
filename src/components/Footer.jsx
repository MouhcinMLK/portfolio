import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { PERSONAL } from '../data/portfolioData'

const SOCIALS = [
  { icon: FiGithub,   href: PERSONAL.github,             label: 'GitHub' },
  { icon: FiLinkedin, href: PERSONAL.linkedin,           label: 'LinkedIn' },
  { icon: FiMail,     href: `mailto:${PERSONAL.email}`,  label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] border-t border-gray-100 py-8 px-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">Mouhcine Malek © 2025</p>

        <div className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-cyan-600 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
