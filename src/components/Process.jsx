import { motion, useReducedMotion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We visit your space, listen to what you want, and walk you through tile options that suit the room and your budget. No upselling, just honest advice.',
  },
  {
    number: '02',
    title: 'Installation',
    description:
      'Our crew handles every cut, every joint, and every grout line with the care it deserves. We protect your floors, respect your home, and keep the site clean.',
  },
  {
    number: '03',
    title: 'Handover',
    description:
      'When the work is done, we seal where needed, do a final walkthrough with you, and leave the space cleaner than we found it. No punch list surprises.',
  },
]

export default function Process() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          <motion.div
            className="lg:col-span-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-5">
              How it works
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-abyss tracking-tight leading-tight">
              Three steps to a
              <br />
              <span className="text-abyss/45 font-light">finished floor.</span>
            </h2>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line — desktop only */}
          <div
            className="hidden lg:block absolute left-[1.9rem] top-8 bottom-8 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(200,146,90,0.4), rgba(200,146,90,0.1))' }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-10"
                style={i < steps.length - 1 ? { borderBottom: '1px solid rgba(26,48,40,0.1)' } : {}}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number — styled as a square tile */}
                <div className="lg:col-span-1 flex items-start">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(200,146,90,0.1)',
                      border: '1px solid rgba(200,146,90,0.28)',
                      borderRadius: 4,
                    }}
                  >
                    <span className="font-mono text-xs font-bold text-accent tracking-widest">{step.number}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-abyss">{step.title}</h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-7 lg:col-start-5">
                  <p className="text-base text-abyss/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
