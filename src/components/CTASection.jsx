import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { PaperPlaneTilt } from '@phosphor-icons/react'

export default function CTASection() {
  const prefersReducedMotion = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual form submission logic
    setSent(true)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-frost text-sm placeholder-frost-dim focus:outline-none focus:ring-2 focus:ring-[rgba(200,146,90,0.5)] transition-all duration-200'
  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Left */}
          <motion.div
            className="lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-frost tracking-tight leading-tight mb-6">
              Ready to start
              <br />
              <span className="text-frost-dim font-light">your project?</span>
            </h2>
            <p className="text-base text-frost-dim leading-relaxed mb-10" style={{ maxWidth: '44ch' }}>
              Book a free site consultation. We visit your space, take measurements, and
              deliver a detailed quote within 48 hours.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Email', value: 'hello@tiluxstudio.ca' },
                { label: 'Phone', value: '+1 (416) 555-0192' },
                { label: 'Service area', value: 'Greater Toronto Area and beyond' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-[11px] text-frost-muted uppercase tracking-[0.15em] mb-0.5">{label}</div>
                  <div className="text-sm text-frost-dim">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-7"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-8 md:p-10 rounded-2xl"
              style={{ background: '#111829', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'rgba(200,146,90,0.15)', border: '1px solid rgba(200,146,90,0.3)' }}
                  >
                    <PaperPlaneTilt size={24} weight="light" className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-frost mb-2">Message sent</h3>
                  <p className="text-sm text-frost-dim">We will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-frost mb-2">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      style={inputStyle}
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-frost mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                      style={inputStyle}
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-frost mb-2">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your space, tile preferences, and timeline..."
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-abyss font-semibold text-sm hover:bg-accent-light transition-colors duration-300 active:scale-[0.98]"
                  >
                    Send Message
                    <span className="w-6 h-6 rounded-full bg-abyss/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300 shrink-0">
                      <PaperPlaneTilt size={11} weight="bold" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
