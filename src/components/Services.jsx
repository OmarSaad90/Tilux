import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'

const services = [
  {
    id: 'kitchen',
    title: 'Kitchen Tiling',
    description: 'Backsplashes, floors, and feature walls. Built to handle heat, splashes, and daily use without losing an inch of style.',
    image: '/photos/service-kitchen.jpg',
    span: 'lg:row-span-2',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    description: 'Floor-to-ceiling tile installations that hold up against moisture for years.',
    image: 'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    span: '',
  },
  {
    id: 'floors',
    title: 'Floor Installation',
    description: 'Herringbone, large-format, and custom patterns laid with precision across every room.',
    image: '/photos/service-floor.jpg',
    span: '',
  },
]

export default function Services() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-abyss tracking-tight leading-tight">
            Every room,
            <span className="text-abyss/45 font-light"> handled.</span>
          </h2>
        </motion.div>

        {/* Bento grid — grout-line treatment: container bg shows as grout between tiles */}
        <div
          className="p-1.5 rounded-3xl grid grid-cols-1 lg:grid-cols-[13fr_11fr] gap-1.5 lg:grid-rows-[360px_360px]"
          style={{ background: '#28200F' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden rounded-[calc(1.5rem-0.375rem)] cursor-pointer min-h-[240px] lg:min-h-0 ${service.span}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(20,15,8,0.85) 0%, rgba(20,15,8,0.2) 60%, transparent 100%)' }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-frost mb-2">{service.title}</h3>
                    <p className="text-sm text-frost/75 leading-relaxed" style={{ maxWidth: '48ch' }}>
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-accent group-hover:text-abyss transition-all duration-300"
                  >
                    <ArrowUpRight size={16} weight="bold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
