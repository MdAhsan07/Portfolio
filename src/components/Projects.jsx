import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi'
import { projects } from '../data/siteData'
import { SectionHeading } from './About'

const accentMap = {
  blue: { text: 'text-accent-blue', border: 'hover:border-accent-blue/40', glow: 'hover:shadow-glow' },
  cyan: { text: 'text-accent-cyan', border: 'hover:border-accent-cyan/40', glow: 'hover:shadow-glow-cyan' },
  violet: { text: 'text-accent-violet', border: 'hover:border-accent-violet/40', glow: 'hover:shadow-[0_0_40px_rgba(124,107,255,0.25)]' },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="// 03_projects" title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent]
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group glass rounded-2xl overflow-hidden transition-all duration-300 ${accent.border} ${accent.glow}`}
              >
                {/* Terminal header bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 font-mono text-xs text-ink-faint truncate">
                    {project.filename}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <p className={`font-mono text-xs ${accent.text}`}>{project.tag}</p>
                    {project.inProgress && (
                      <span className="flex items-center gap-1 font-mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] text-ink-faint shrink-0">
                        <FiClock size={10} />
                        in progress
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink-primary mt-2">
                    {project.title}
                  </h3>

                  <p className="text-ink-muted text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-primary hover:text-accent-cyan transition-colors"
                      >
                        <FiGithub size={15} />
                        Source
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-ink-faint">
                        <FiGithub size={15} />
                        Private repo
                      </span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-primary hover:text-accent-cyan transition-colors"
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
