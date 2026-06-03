import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 1.2,
      delay,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  }
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const motion_props = (delay) => prefersReducedMotion ? {} : fadeUp(delay)

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 rounded-full"
          style={{ width: 640, height: 640, background: 'radial-gradient(circle, rgba(200,146,90,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-40 rounded-full"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(100,75,50,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* Left — content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h1
              {...motion_props(0.2)}
              className="mb-6"
            >
              <span
                className="block text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.04] mb-2"
                style={{ color: '#28200F' }}
              >
                Tile work done right,
              </span>
              <span
                className="block text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[0.02em] leading-[1.1]"
                style={{ color: 'rgba(40,32,15,0.4)' }}
              >
                every single time.
              </span>
            </motion.h1>

            <motion.p
              {...motion_props(0.4)}
              className="text-base md:text-lg leading-relaxed mb-10"
              style={{ maxWidth: '50ch', color: 'rgba(40,32,15,0.62)' }}
            >
              Expert tile installation for kitchens, bathrooms, and living spaces.
              Precision craftsmanship on every project, no shortcuts taken.
            </motion.p>

            <motion.div
              {...motion_props(0.6)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-500 active:scale-[0.97]"
                style={{
                  backgroundColor: '#C8925A',
                  color: '#28200F',
                  boxShadow: '0 0 0 0 rgba(200,146,90,0.4), 0 8px 24px rgba(200,146,90,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4A06F'
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(200,146,90,0.15), 0 12px 32px rgba(200,146,90,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C8925A'
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(200,146,90,0.4), 0 8px 24px rgba(200,146,90,0.25)'
                }}
              >
                Get a Quote
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 shrink-0"
                  style={{ backgroundColor: 'rgba(40,32,15,0.2)' }}
                >
                  <ArrowRight size={11} weight="bold" />
                </span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border text-abyss text-sm transition-all duration-500"
                style={{ borderColor: 'rgba(40,32,15,0.22)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(40,32,15,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(40,32,15,0.32)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(40,32,15,0.22)'
                }}
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* Right — image card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-[420px]"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 48, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              {/* Outer shell */}
              <div
                className="p-2 rounded-[2rem]"
                style={{
                  background: 'linear-gradient(135deg, #2E2511 0%, #1E1508 100%)',
                  border: '1px solid rgba(200,146,90,0.15)',
                  boxShadow: '0 0 0 1px rgba(240,237,228,0.05) inset, 0 0 120px rgba(200,146,90,0.15), 0 40px 80px rgba(0,0,0,0.45), 0 16px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Inner core */}
                <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/photos/hero-bathroom-mirror.jpg"
                    alt="Precision tile installation by Tilux Studio"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(40,32,15,0.6) 0%, transparent 50%)' }}
                  />
                </div>
              </div>

              {/* Floating info pill */}
              <motion.div
                className="absolute -bottom-5 -left-4 px-5 py-3.5 rounded-2xl"
                style={{
                  background: 'rgba(40,32,15,0.96)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: '0 0 0 1px rgba(200,146,90,0.08) inset, 0 12px 40px rgba(0,0,0,0.4)',
                }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.19, 1.0, 0.22, 1.0] }}
              >
                <div className="text-[11px] mb-0.5 uppercase tracking-wide font-medium" style={{ color: 'rgba(240,237,228,0.55)' }}>Latest project</div>
                <div className="text-sm font-semibold" style={{ color: '#E8F0EB' }}>Bathroom renovation, Toronto</div>
              </motion.div>

              {/* Floating accent dot */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full border-4 border-canvas"
                style={{
                  background: '#C8925A',
                  boxShadow: '0 0 24px rgba(200,146,90,0.4), 0 4px 16px rgba(0,0,0,0.3)',
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
