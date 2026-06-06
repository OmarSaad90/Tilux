import { motion, useReducedMotion } from 'motion/react'
import { Star } from '@phosphor-icons/react'

const testimonials = [
  {
    quote:
      "I wasn't home for most of the job and honestly that made me nervous. But they'd send me updates, the place was clean every time I checked, and by the end I had zero notes. Not one thing I wanted changed. That almost never happens with any kind of renovation.",
    name: 'Maria K.',
    role: 'Homeowner',
    city: 'Toronto, ON',
    featured: true,
  },
  {
    quote:
      "Got three quotes, two of them couldn't even give me a real timeline. Tilux said five days and finished in five days. Exactly what was on the invoice, nothing added at the end.",
    name: 'James P.',
    role: 'Homeowner',
    city: 'Mississauga, ON',
    featured: false,
  },
  {
    quote:
      "Main floor and two bathrooms, all done at the same time. The tiles line up perfectly between rooms, which sounds basic but the last guy I hired couldn't manage it.",
    name: 'Aisha M.',
    role: 'Homeowner',
    city: 'Toronto, ON',
    featured: false,
  },
]

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} weight="fill" className="text-accent" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion()
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow + header */}
        <motion.div
          className="mb-14"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[13px] font-semibold text-accent-dim uppercase tracking-[0.2em] mb-5">
            What clients say
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-abyss tracking-tight leading-tight">
            In their own words.
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          className="mb-4 p-8 md:p-12 rounded-2xl"
          style={{ background: '#E8E0CC', border: '1px solid rgba(40,32,15,0.1)' }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stars />
          <blockquote className="mt-5 text-xl md:text-2xl font-light text-abyss leading-relaxed" style={{ maxWidth: '64ch' }}>
            "{featured.quote}"
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-abyss"
              style={{ background: '#C8925A' }}
            >
              {featured.name[0]}
            </div>
            <div>
              <div className="text-sm font-semibold text-abyss">{featured.name}</div>
              <div className="text-xs text-abyss/50">{featured.role} — {featured.city}</div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-7 rounded-2xl"
              style={{ background: '#EDE6D4', border: '1px solid rgba(40,32,15,0.08)' }}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Stars />
              <blockquote className="mt-4 text-base text-abyss/65 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-abyss"
                  style={{ background: 'rgba(200,146,90,0.7)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-abyss">{t.name}</div>
                  <div className="text-xs text-abyss/50">{t.role} — {t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
