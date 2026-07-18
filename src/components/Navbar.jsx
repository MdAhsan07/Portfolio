import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { navLinks, profile } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl"
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
          }`}
        >
          <button
            onClick={() => handleNav('#home')}
            className="font-mono text-sm sm:text-base font-semibold text-ink-primary flex items-center gap-2"
          >
            <span className="text-accent-blue">&lt;</span>
            {profile.name.split(' ')[0]}
            <span className="text-accent-cyan">/&gt;</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === link.href
                    ? 'text-ink-primary'
                    : 'text-ink-muted hover:text-ink-primary'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-primary px-4 py-2 rounded-lg glass hover:bg-white/[0.08] transition-colors"
            >
              <FiDownload size={14} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-ink-primary p-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 glass-strong rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-3 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-4 py-3 rounded-lg text-sm font-medium text-ink-muted hover:text-ink-primary hover:bg-white/[0.06] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center gap-2 mt-1 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-accent-blue to-accent-violet text-white"
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
