import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiChevronDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { profile, socials } from '../data/siteData'
import ParticleBackground from './ParticleBackground'

const socialIcons = [
  { icon: FaGithub, href: socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: socials.leetcode, label: 'LeetCode' },
  { icon: SiGeeksforgeeks, href: socials.gfg, label: 'GeeksforGeeks' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] pointer-events-none" />
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            // hello_world.init()
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink-primary"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 h-8"
          >
            <TypedRoles roles={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href={profile.resumeUrl} download className="btn-primary">
              <FiDownload size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-4"
          >
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-ink-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal signature element */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative animate-float"
        >
          <TerminalCard />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent-cyan transition-colors"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  )
}

function TypedRoles({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 35 : 65
    const pause = 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex, roles])

  return (
    <p className="font-mono text-lg sm:text-xl text-accent-cyan">
      <span className="text-ink-muted">$ </span>
      {text}
      <span className="inline-block w-[2px] h-5 bg-accent-cyan ml-1 align-middle animate-blink" />
    </p>
  )
}

function TerminalCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-accent-blue/20 blur-3xl rounded-full" />
      <div className="relative glass-strong rounded-2xl shadow-card overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-ink-faint">profile.py</span>
        </div>
        <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed">
          <p><span className="text-accent-violet">class</span> <span className="text-accent-cyan">Engineer</span>:</p>
          <p className="pl-4"><span className="text-ink-faint"># core identity</span></p>
          <p className="pl-4"><span className="text-ink-primary">name</span> = <span className="text-[#A8E6A1]">"Md Ahsan"</span></p>
          <p className="pl-4"><span className="text-ink-primary">role</span> = <span className="text-[#A8E6A1]">"Aspiring AI Engineer"</span></p>
          <p className="pl-4"><span className="text-ink-primary">stack</span> = [<span className="text-[#A8E6A1]">"Python"</span>, <span className="text-[#A8E6A1]">"ML"</span>, <span className="text-[#A8E6A1]">"DSA"</span>]</p>
          <p className="pl-4"><span className="text-ink-primary">based_in</span> = <span className="text-[#A8E6A1]">"Ghaziabad, IN"</span></p>
          <p className="pl-4 mt-2"><span className="text-accent-violet">def</span> <span className="text-accent-cyan">mission</span>(<span className="text-[#FFB86C]">self</span>):</p>
          <p className="pl-8"><span className="text-accent-violet">return</span> <span className="text-[#A8E6A1]">"turn data into decisions"</span></p>
          <p className="mt-3 text-ink-faint">&gt;&gt;&gt; Engineer().mission()</p>
          <p className="text-accent-cyan">"turn data into decisions"<span className="inline-block w-[7px] h-4 bg-accent-cyan/80 ml-1 align-middle animate-blink" /></p>
        </div>
      </div>
    </div>
  )
}
