import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const photos = [
  { src: '/photos/gallery-shower-beige.jpg',        mobileSrc: '/photos/gallery-shower-beige.jpg',        label: 'LED shower enclosure',     location: 'Toronto, ON' },
  { src: '/photos/service-stonework.jpg',           mobileSrc: '/photos/service-stonework.jpg',           label: 'Travertine stone counter', location: 'Toronto, ON' },
  { src: '/photos/gallery-marble-sink.jpg',        mobileSrc: '/photos/gallery-marble-sink.jpg',        label: 'Calacatta marble vanity',   location: 'Toronto, ON' },
  { src: '/photos/gallery-beige-bathroom.jpg',     mobileSrc: '/photos/gallery-beige-bathroom.jpg',     label: 'Warm stone bathroom',      location: 'Mississauga, ON' },
  { src: '/photos/gallery-herringbone.jpg',        mobileSrc: '/photos/gallery-herringbone.jpg',        label: 'Herringbone wood-look floor', location: 'Toronto, ON' },
  { src: '/photos/gallery-hex-pattern.jpg',        mobileSrc: '/photos/gallery-hex-pattern.jpg',        label: 'Hex tile floor',           location: 'Mississauga, ON' },
]

export default function Gallery() {
  const [active, setActive] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-abyss tracking-tight leading-tight">
            Recent work
          </h2>
          <p className="text-base text-abyss/60 mt-3">
            A selection of completed projects across Toronto and Mississauga.
          </p>
        </motion.div>

        {/* Desktop: accordion strips — closed strips look like a tile row */}
        <motion.div
          className="hidden md:flex rounded-2xl overflow-hidden"
          style={{ height: 540, gap: 3, background: '#28200F' }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {photos.map((photo, i) => {
            const isActive = active === i
            return (
              <div
                key={photo.src}
                className="relative overflow-hidden cursor-pointer"
                style={{
                  flex: isActive ? 6 : 0.6,
                  minWidth: 48,
                  transition: prefersReducedMotion ? 'none' : 'flex 0.55s cubic-bezier(0.32,0.72,0,1)',
                }}
                onMouseEnter={() => setActive(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay — dims when closed, gradients when open */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(20,15,8,0.88) 0%, rgba(20,15,8,0.08) 55%, transparent 100%)'
                      : 'rgba(20,15,8,0.48)',
                    transition: prefersReducedMotion ? 'none' : 'background 0.4s ease',
                  }}
                />

                {/* Closed: vertical mono index */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: prefersReducedMotion ? 'none' : 'opacity 0.2s ease',
                  }}
                >
                  <span
                    className="font-mono text-[11px] text-frost-muted tracking-widest select-none"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Open: project info slides up from bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                    transition: prefersReducedMotion
                      ? 'none'
                      : 'opacity 0.3s ease 0.1s, transform 0.35s cubic-bezier(0.16,1,0.3,1) 0.1s',
                  }}
                >
                  <div className="text-sm font-semibold text-frost mb-0.5">{photo.label}</div>
                  <div className="text-xs text-frost-dim">{photo.location}</div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Mobile: 2x3 grid — same 3px grout gap and rounded container */}
        <div
          className="md:hidden grid grid-cols-2 rounded-2xl overflow-hidden"
          style={{ gap: 3, background: '#28200F' }}
        >
          {photos.map((photo) => (
            <div key={photo.src} className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src={photo.mobileSrc}
                alt={photo.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(20,15,8,0.82) 0%, transparent 55%)' }}
              >
                <div className="text-xs font-medium text-frost">{photo.label}</div>
                <div className="text-[10px] text-frost-muted mt-0.5">{photo.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
