import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { codingProfiles } from '../data/siteData'
import { SectionHeading } from './About'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
}

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="// 05_profiles" title="Coding Profiles" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {codingProfiles.map((p, i) => {
            const Icon = iconMap[p.icon]
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 hover:border-accent-blue/40 hover:shadow-glow transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <Icon size={28} className="text-ink-primary group-hover:text-accent-cyan transition-colors" />
                  <FiArrowUpRight
                    size={16}
                    className="text-ink-faint group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-primary mt-4">
                  {p.name}
                </h3>
                <p className="font-mono text-xs text-ink-faint mt-0.5">{p.handle}</p>

                <div className="mt-5 pt-4 border-t border-white/[0.07]">
                  <p className="font-display text-xl font-semibold gradient-text">
                    {p.stat.value}
                  </p>
                  <p className="text-ink-faint text-xs mt-0.5">{p.stat.label}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
        <p className="text-ink-faint text-xs font-mono mt-6 text-center">
          stats shown are indicative — click through for live profile data
        </p>
      </div>
    </section>
  )
}
