import { profile } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <p className="font-mono text-xs text-ink-faint">
          <span className="text-accent-cyan">$</span> status --uptime{' '}
          <span className="text-ink-muted">// always learning, always building</span>
        </p>
      </div>
    </footer>
  )
}
