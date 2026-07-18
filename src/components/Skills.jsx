import { motion } from 'framer-motion'
import { skills } from '../data/siteData'
import { SectionHeading } from './About'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="// 02_skills" title="Skills & Toolkit" />

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-accent-blue/30 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  {group.category}
                </h3>
              </div>
              <p className="font-mono text-xs text-ink-faint mb-5">// {group.comment}</p>

              <div className="space-y-4">
                {group.items.map((skill, idx) => (
                  <SkillBar key={skill.name} skill={skill} delay={idx * 0.06} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, delay }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-ink-primary font-medium">{skill.name}</span>
        <span className="font-mono text-xs text-accent-cyan">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
        />
      </div>
    </div>
  )
}
