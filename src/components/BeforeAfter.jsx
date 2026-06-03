import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useReducedMotion } from 'motion/react'

function BeforeAfterSlider({
  beforeImage = 'https://images.unsplash.com/photo-1570881826833-ad7b98b7dffe?w=1200&h=700&fit=crop&q=80',
  afterImage  = 'https://images.unsplash.com/photo-1600328604921-300918f36018?w=1200&h=700&fit=crop&q=80',
  beforeLabel = 'BEFORE',
  afterLabel  = 'AFTER',
}) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const move = useCallback((clientX) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    setPosition(Math.min(Math.max(((clientX - left) / width) * 100, 0), 100))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMouseMove  = (e) => move(e.clientX)
    const onTouchMove  = (e) => move(e.touches[0].clientX)
    const onEnd        = () => setDragging(false)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup',   onEnd)
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('touchend',  onEnd)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup',   onEnd)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend',  onEnd)
    }
  }, [dragging, move])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none"
      style={{ aspectRatio: '16/9', cursor: 'col-resize' }}
      onMouseDown={() => setDragging(true)}
      onTouchStart={() => setDragging(true)}
    >
      {/* After image — base layer */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After tile installation"
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
        <span
          className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: 'rgba(200,180,155,0.8)' }}
        >
          {afterLabel}
        </span>
      </div>

      {/* Before image — clipped on the left */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before tile installation"
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
        <span
          className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: 'rgba(200,180,155,0.8)' }}
        >
          {beforeLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)', background: '#C8925A' }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center pointer-events-auto"
          style={{
            background: '#C8925A',
            cursor: dragging ? 'grabbing' : 'grab',
            boxShadow: '0 0 0 3px rgba(200,146,90,0.25), 0 4px 20px rgba(0,0,0,0.5)',
            transition: prefersReducedMotion ? 'none' : 'box-shadow 0.2s ease',
          }}
        >
          <div className="flex gap-[3px]">
            <div className="w-0.5 h-4 rounded-full" style={{ background: '#28200F' }} />
            <div className="w-0.5 h-4 rounded-full" style={{ background: '#28200F' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="mb-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-abyss tracking-tight leading-tight">
            The transformation
          </h2>
          <p className="text-base text-abyss/60 mt-3">
            Drag to reveal the before and after.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <BeforeAfterSlider />
        </motion.div>

      </div>
    </section>
  )
}
