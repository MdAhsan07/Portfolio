import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiCopy, FiCheck, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { profile, socials } from '../data/siteData'
import { SectionHeading } from './About'

const socialIcons = [
  { icon: FaGithub, href: socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: socials.leetcode, label: 'LeetCode' },
  { icon: SiGeeksforgeeks, href: socials.gfg, label: 'GeeksforGeeks' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — fall back to a mailto link, no-op here
    }
  }

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.phone)
      setPhoneCopied(true)
      setTimeout(() => setPhoneCopied(false), 2000)
    } catch {
      // Clipboard API unavailable, silently no-op
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="// 06_contact" title="Let's Build Something" center />
        <p className="text-ink-muted text-center max-w-xl mx-auto mt-4">
          Open to internships, collaborations, and conversations about AI, data, and building
          things that matter. Reach out — I read every message.
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-7 flex flex-col gap-6"
          >
            <div>
              <p className="eyebrow mb-2">contact_card</p>
              <p className="font-display text-xl font-semibold text-ink-primary">
                {profile.name}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/15 flex items-center justify-center shrink-0">
                <FiMail className="text-accent-blue" size={17} />
              </div>
              <div className="min-w-0">
                <p className="text-ink-primary text-sm break-all">{profile.email}</p>
                <button
                  onClick={copyEmail}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-mono text-ink-faint hover:text-accent-cyan transition-colors"
                >
                  {copied ? <FiCheck size={12} /> : <FiCopy size={12} />}
                  {copied ? 'copied!' : 'copy email'}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-violet/15 flex items-center justify-center shrink-0">
                <FiPhone className="text-accent-violet" size={17} />
              </div>
              <div className="min-w-0">
                <p className="text-ink-primary text-sm">{profile.phone}</p>
                <button
                  onClick={copyPhone}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-mono text-ink-faint hover:text-accent-cyan transition-colors"
                >
                  {phoneCopied ? <FiCheck size={12} /> : <FiCopy size={12} />}
                  {phoneCopied ? 'copied!' : 'copy number'}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/15 flex items-center justify-center shrink-0">
                <FiMapPin className="text-accent-cyan" size={17} />
              </div>
              <p className="text-ink-primary text-sm">{profile.location}</p>
            </div>

            <a href={`mailto:${profile.email}`} className="btn-primary w-full justify-center">
              <FiMail size={16} />
              Email Me Directly
            </a>

            <div className="flex items-center gap-3 pt-2 border-t border-white/[0.07]">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-muted hover:text-accent-cyan hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-7 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Your Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="jane@company.com"
                required
              />
            </div>
            <div>
              <label className="text-xs font-mono text-ink-faint mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Let's talk about..."
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:outline-none focus:border-accent-blue/50 transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary justify-center">
              {sent ? <FiCheck size={16} /> : <FiSend size={16} />}
              {sent ? 'Opening your mail app…' : 'Send Message'}
            </button>
            <p className="text-ink-faint text-xs text-center font-mono">
              opens your email client with the message pre-filled
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div>
      <label className="text-xs font-mono text-ink-faint mb-1.5 block">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:outline-none focus:border-accent-blue/50 transition-colors"
      />
    </div>
  )
}
