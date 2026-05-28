import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const photos = [
  { src: 'https://loremflickr.com/800/1080/kitchen,marble,tiles?lock=11',               mobileSrc: 'https://loremflickr.com/600/800/kitchen,marble,tiles?lock=11',               label: 'White marble kitchen',  location: 'Toronto, ON' },
  { src: 'https://loremflickr.com/800/1080/bathroom,tiles,dark?lock=12',                mobileSrc: 'https://loremflickr.com/600/800/bathroom,tiles,dark?lock=12',                label: 'Matte black bathroom',  location: 'Vancouver, BC' },
  { src: 'https://loremflickr.com/800/1080/floor,tiles,wood?lock=13',                   mobileSrc: 'https://loremflickr.com/600/800/floor,tiles,wood?lock=13',                   label: 'Timber-look floor',     location: 'Calgary, AB' },
  { src: 'https://loremflickr.com/800/1080/outdoor,patio,stone?lock=14',                mobileSrc: 'https://loremflickr.com/600/800/outdoor,patio,stone?lock=14',                label: 'Outdoor stone patio',   location: 'Mississauga, ON' },
  { src: 'https://images.unsplash.com/photo-1506367797262-92b157df3c61?w=800&h=1080&fit=crop&q=80', mobileSrc: 'https://images.unsplash.com/photo-1506367797262-92b157df3c61?w=600&h=800&fit=crop&q=80', label: 'Hex tile shower',       location: 'Ottawa, ON' },
  { src: 'https://images.unsplash.com/photo-1523350165414-082d792c4bcc?w=800&h=1080&fit=crop&q=80', mobileSrc: 'https://images.unsplash.com/photo-1523350165414-082d792c4bcc?w=600&h=800&fit=crop&q=80', label: 'Slate kitchen floor',   location: 'Edmonton, AB' },
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
            A selection of completed projects across Ontario and BC.
          </p>
        </motion.div>

        {/* Desktop: accordion strips — closed strips look like a tile row */}
        <motion.div
          className="hidden md:flex rounded-2xl overflow-hidden"
          style={{ height: 540, gap: 3, background: '#1A3028' }}
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
                      ? 'linear-gradient(to top, rgba(10,14,26,0.88) 0%, rgba(10,14,26,0.08) 55%, transparent 100%)'
                      : 'rgba(10,14,26,0.48)',
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
          style={{ gap: 3, background: '#1A3028' }}
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
                style={{ background: 'linear-gradient(to top, rgba(10,14,26,0.82) 0%, transparent 55%)' }}
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
