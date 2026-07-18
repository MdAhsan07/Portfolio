import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiBookOpen } from 'react-icons/fi'
import { profile, academicHistory } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="// 01_about" title="About Me" />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 mt-14 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="glass rounded-2xl p-6 sm:p-7"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/15 flex items-center justify-center shrink-0">
                <FiBookOpen className="text-accent-blue" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-ink-primary font-medium">{profile.education.degree}</p>
                <p className="text-ink-muted text-sm mt-1">{profile.education.college}</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="font-mono text-[11px] px-2 py-1 rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                    {profile.education.year}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/[0.04] text-ink-muted border border-white/[0.08]">
                    CGPA {profile.education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-5">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/15 flex items-center justify-center shrink-0">
                <FiMapPin className="text-accent-cyan" size={18} />
              </div>
              <div>
                <p className="text-ink-primary font-medium">Based in</p>
                <p className="text-ink-muted text-sm mt-1">{profile.location}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <p className="eyebrow mb-3">academic_history[]</p>
              <div className="space-y-3">
                {academicHistory.map((row) => (
                  <div key={row.level} className="flex items-center justify-between gap-3 text-sm">
                    <div className="min-w-0">
                      <p className="text-ink-primary font-medium">{row.level}</p>
                      <p className="text-ink-faint text-xs mt-0.5 truncate">{row.school}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-accent-cyan text-xs">{row.score}</p>
                      <p className="text-ink-faint text-[11px] mt-0.5">{row.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <p className="eyebrow mb-3">focus_areas[]</p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            <p className="text-ink-muted text-lg leading-relaxed">{profile.about}</p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <Counter target={3} suffix="+" label="Years Coding" />
              <Counter target={150} suffix="+" label="DSA Problems" />
              <Counter target={3} suffix="" label="AI/ML Projects" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, center }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="section-heading mt-2"
      >
        {title}
      </motion.h2>
    </div>
  )
}

function Counter({ target, suffix, label }) {
  return (
    <div className="glass rounded-xl p-4 text-center">
      <CountUp target={target} suffix={suffix} />
      <p className="text-ink-faint text-xs mt-1 font-mono">{label}</p>
    </div>
  )
}

function CountUp({ target, suffix }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-display text-2xl sm:text-3xl font-semibold gradient-text"
    >
      <AnimatedNumber target={target} />
      {suffix}
    </motion.span>
  )
}

function AnimatedNumber({ target }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const startTime = performance.now()
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{value}</span>
}
