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
    <div className="text-abyss min-h-screen font-sans tile-surface" style={{ backgroundColor: '#F7F5EE' }}>
      <Nav />

      {/* Hero — large square tiles, open and spacious */}
      <div className="tile-surface" style={{ backgroundColor: '#F7F5EE' }}>
        <Hero />
      </div>

      {/* Stats bar */}
      <div className="tile-surface" style={{ backgroundColor: '#E6DFD0' }}>
        <StatsBar />
      </div>

      <TileDivider tone="neutral" />

      {/* Services */}
      <div className="tile-surface" style={{ backgroundColor: '#F7F5EE' }}>
        <Services />
      </div>

      <TileDivider tone="accent" />

      {/* Process */}
      <div className="tile-surface" style={{ backgroundColor: '#E6DFD0' }}>
        <Process />
      </div>

      <TileDivider tone="neutral" />

      {/* Gallery — large square tiles, lets photos breathe */}
      <div className="tile-surface" style={{ backgroundColor: '#F7F5EE' }}>
        <Gallery />
      </div>

      <TileDivider tone="accent" />

      {/* Before/After — large square tiles */}
      <div className="tile-surface" style={{ backgroundColor: '#E6DFD0' }}>
        <BeforeAfter />
      </div>

      <TileDivider tone="neutral" />

      {/* Features */}
      <div className="tile-surface" style={{ backgroundColor: '#F7F5EE' }}>
        <Features />
      </div>

      <TileDivider tone="neutral" />

      {/* Testimonials — large square tiles */}
      <div className="tile-surface" style={{ backgroundColor: '#E6DFD0' }}>
        <Testimonials />
      </div>

      <TileDivider tone="accent" />

      {/* CTA/Contact — copper grout */}
      <div className="tile-texture-accent" style={{ backgroundColor: '#F7F5EE' }}>
        <CTASection />
      </div>

      {/* Footer */}
      <div className="tile-surface" style={{ backgroundColor: '#E6DFD0' }}>
        <Footer />
      </div>
    </div>
  )
}
