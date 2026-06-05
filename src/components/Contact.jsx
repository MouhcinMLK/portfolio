import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

// ─── EmailJS credentials ────────────────────────────────────────────────────
// 1. Create a free account at https://emailjs.com
// 2. Add a Gmail service → copy Service ID
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" = mhcnmalek@gmail.com in the template
// 4. Go to Account → copy your Public Key
// 5. Replace the three strings below (or set them in .env.local)
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'
// ─────────────────────────────────────────────────────────────────────────────

const LINKS = [
  { icon: FiMail,     label: 'Email',    value: 'mhcnmalek@gmail.com',              href: 'mailto:mhcnmalek@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mouhcine-malek',   href: 'https://linkedin.com/in/mouhcine-malek' },
  { icon: FiGithub,   label: 'GitHub',   value: 'github.com/MohcnMalek',            href: 'https://github.com/MohcnMalek' },
  { icon: FiMapPin,   label: 'Location', value: 'Beni Mellal, Morocco',             href: null },
]

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm]       = useState(INITIAL)
  const [status, setStatus]   = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_email:   'mhcnmalek@gmail.com',
        },
        PUBLIC_KEY,
      )
      setStatus('sent')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">
            <div className="section-line" />
            <span className="section-tag">07. Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-white/35 mt-2 text-sm max-w-lg">
            Open to PFA internship opportunities, collaborations, and interesting AI projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-3"
          >
            {LINKS.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="glass-card rounded-xl p-4 border border-white/6 hover:border-cyan-400/20 transition-colors group flex items-center gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-400/8 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/15 transition-colors">
                  <Icon className="text-cyan-400 w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-white/25 font-mono mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white/65 hover:text-cyan-400 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/65">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability notice */}
            <div className="glass-card rounded-xl p-4 border border-emerald-400/18 bg-emerald-400/3 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs text-emerald-400 font-mono">Available Now</span>
              </div>
              <p className="text-[13px] text-white/48 leading-relaxed">
                Actively seeking a{' '}
                <span className="text-white/80 font-medium">PFA internship</span> in AI, Data Science,
                or Agentic Systems. Open to on-site and remote positions.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 border border-white/6 space-y-4"
            >
              <div>
                <label className="block text-[10px] text-white/30 font-mono mb-1.5 tracking-widest uppercase">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="w-full bg-white/3 border border-white/8 rounded-lg px-3 py-2.5 text-sm text-white/75 placeholder-white/18 outline-none focus:border-cyan-400/35 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] text-white/30 font-mono mb-1.5 tracking-widest uppercase">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/3 border border-white/8 rounded-lg px-3 py-2.5 text-sm text-white/75 placeholder-white/18 outline-none focus:border-cyan-400/35 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] text-white/30 font-mono mb-1.5 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-white/3 border border-white/8 rounded-lg px-3 py-2.5 text-sm text-white/75 placeholder-white/18 outline-none focus:border-cyan-400/35 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-400/10 border border-cyan-400/28 text-cyan-400 text-sm font-semibold hover:bg-cyan-400/18 hover:border-cyan-400/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' && (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                    Sending...
                  </span>
                )}
                {status === 'sent' && (
                  <span className="flex items-center gap-2 text-emerald-400">
                    <FiCheck className="w-4 h-4" /> Message sent to mhcnmalek@gmail.com
                  </span>
                )}
                {status === 'error' && (
                  <span className="flex items-center gap-2 text-red-400">
                    <FiAlertCircle className="w-4 h-4" /> Failed — check EmailJS config
                  </span>
                )}
                {status === 'idle' && (
                  <>
                    Send Message <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
