import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { achievements } from '../data/siteData'
import { SectionHeading } from './About'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="// 04_achievements" title="Achievements" />

        <div className="relative mt-16">
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/60 via-accent-cyan/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex items-start sm:items-center gap-5 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                  <FiAward className="text-accent-cyan" size={16} />
                </div>

                <div
                  className={`glass rounded-2xl p-5 flex-1 hover:border-accent-cyan/30 transition-colors duration-300 ${
                    i % 2 === 0 ? 'sm:text-left' : 'sm:text-right'
                  }`}
                >
                  <p className="font-mono text-[11px] text-accent-blue uppercase tracking-wide">
                    {item.org}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-ink-primary mt-1">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
