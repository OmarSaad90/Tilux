import { motion, useReducedMotion } from 'motion/react'
import { Certificate, Clock, Wrench, Handshake } from '@phosphor-icons/react'

const features = [
  {
    icon: Certificate,
    title: 'Experienced professionals',
    description: 'Years of hands-on trade experience on every job. No subcontracting, no shortcuts.',
  },
  {
    icon: Handshake,
    title: 'Free site consultation',
    description: 'We come to you, assess the space, and give a detailed quote at no charge.',
  },
  {
    icon: Wrench,
    title: 'Lifetime workmanship guarantee',
    description: 'If the work settles, cracks, or fails due to installation, we fix it. No argument.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    description: 'We give you a finish date and we hit it. Every delay is communicated upfront, never after.',
  },
]

export default function Features() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Left — statement */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-abyss tracking-tight leading-tight mb-6">
              Why clients
              <br />
              <span className="text-abyss/45 font-light">choose Tilux.</span>
            </h2>
            <p className="text-base text-abyss/60 leading-relaxed mb-8" style={{ maxWidth: '42ch' }}>
              We are not the cheapest option. We are the one you call when you want it done
              properly the first time.
            </p>
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-base font-bold text-accent-dim hover:text-accent transition-colors duration-200"
            >
              How we work
              <span>→</span>
            </a>
          </motion.div>

          {/* Right — feature list */}
          <div className="lg:col-span-7 flex flex-col gap-0">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="flex gap-5 py-8"
                  style={i < features.length - 1 ? { borderBottom: '1px solid rgba(40,32,15,0.08)' } : {}}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: '#28200F' }}
                  >
                    <Icon size={20} weight="light" className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-abyss mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-abyss/60 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
