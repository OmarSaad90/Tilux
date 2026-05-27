import { useEffect, useRef, useState } from 'react'

export default function CountUp({ target, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const elRef = useRef(null)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const animate = (timestamp) => {
          if (!startRef.current) startRef.current = timestamp
          const elapsed = timestamp - startRef.current
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)
      },
      { threshold: 0.5 }
    )

    if (elRef.current) observer.observe(elRef.current)

    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration])

  return <span ref={elRef}>{value}{suffix}</span>
}