import { motion, useReducedMotion } from 'motion/react'
import CountUp from './CountUp'

const stats = [
  { type: 'count', target: 450, suffix: '+', label: 'Projects completed' },
  { type: 'count', target: 15,  suffix: '+', label: 'Years in the trade' },
  { type: 'static', value: 'Free',           label: 'Site consultations' },
  { type: 'count', target: 100, suffix: '%', label: 'Workmanship guarantee' },
]

export default function StatsBar() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`flex flex-col items-center md:items-start md:px-10 first:md:pl-0 last:md:pr-0 ${i > 0 ? 'md:border-l' : ''}`}
              style={i > 0 ? { borderLeftColor: 'rgba(26,48,40,0.12)' } : {}}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-2xl font-semibold text-accent">
                {stat.type === 'count'
                  ? <CountUp target={stat.target} suffix={stat.suffix} />
                  : stat.value
                }
              </span>
              <span className="text-xs text-frost-muted mt-0.5">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
