import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  const close = () => setIsOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full max-w-4xl flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(40,32,15,0.96)' : 'rgba(40,32,15,0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.3)' : 'none',
          }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5" aria-label="Tilux home">
            <img src="/new1.png" alt="Tilux" className="h-9 w-auto" />
            <span className="font-semibold text-frost text-sm tracking-tight">Tilux Studio</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm text-frost/70 hover:text-frost rounded-full transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-abyss text-sm font-semibold hover:bg-accent-light transition-colors duration-200 active:scale-[0.98]"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-frost hover:bg-white/15 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={15} weight="bold" /> : <List size={15} weight="bold" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(40,32,15,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-5" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className="text-4xl font-light text-frost hover:text-accent transition-colors duration-200"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={close}
                className="mt-6 px-8 py-3.5 rounded-full bg-accent text-abyss font-semibold text-lg active:scale-[0.98]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
