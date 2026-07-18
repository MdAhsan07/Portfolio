import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="font-mono text-2xl sm:text-3xl text-ink-primary flex items-center gap-1">
              <span className="text-accent-blue">&gt;</span>
              <TypeLoop />
              <span className="w-[2px] h-6 bg-accent-cyan animate-blink" />
            </div>
            <div className="w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TypeLoop() {
  return <span>whoami</span>
}
