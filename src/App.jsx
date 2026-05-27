import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import BeforeAfter from './components/BeforeAfter'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import TileDivider from './components/TileDivider'

export default function App() {
  return (
    <div className="text-frost min-h-screen font-sans" style={{ background: '#0A0E1A' }}>
      <Nav />

      {/* Hero — darkest abyss + tile texture */}
      <div className="tile-texture" style={{ background: '#0A0E1A' }}>
        <Hero />
      </div>

      {/* Stats bar — abyss-mid tonal shift */}
      <div style={{ background: '#111829' }}>
        <StatsBar />
      </div>

      <TileDivider tone="neutral" />

      {/* Services — abyss (images carry the visual weight) */}
      <div style={{ background: '#0A0E1A' }}>
        <Services />
      </div>

      <TileDivider tone="accent" />

      {/* Process — abyss-mid */}
      <div style={{ background: '#111829' }}>
        <Process />
      </div>

      <TileDivider tone="neutral" />

      {/* Gallery — abyss (needed for edge fade effect) */}
      <div style={{ background: '#0A0E1A' }}>
        <Gallery />
      </div>

      <TileDivider tone="accent" />

      {/* Before/After — abyss */}
      <div style={{ background: '#0A0E1A' }}>
        <BeforeAfter />
      </div>

      <TileDivider tone="neutral" />

      {/* Features — abyss-mid */}
      <div style={{ background: '#111829' }}>
        <Features />
      </div>

      <TileDivider tone="neutral" />

      {/* Testimonials — abyss */}
      <div style={{ background: '#0A0E1A' }}>
        <Testimonials />
      </div>

      <TileDivider tone="accent" />

      {/* CTA/Contact — abyss-mid + accent tile texture */}
      <div className="tile-texture-accent" style={{ background: '#111829' }}>
        <CTASection />
      </div>

      {/* Footer — deepest */}
      <div style={{ background: '#0A0E1A' }}>
        <Footer />
      </div>
    </div>
  )
}
