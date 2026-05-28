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
    <div className="text-abyss min-h-screen font-sans tile-surface" style={{ backgroundColor: '#F4F6F4' }}>
      <Nav />

      {/* Hero — large square tiles, open and spacious */}
      <div className="tile-surface" style={{ backgroundColor: '#F4F6F4' }}>
        <Hero />
      </div>

      {/* Stats bar */}
      <div className="tile-surface" style={{ backgroundColor: '#EBF3EE' }}>
        <StatsBar />
      </div>

      <TileDivider tone="neutral" />

      {/* Services */}
      <div className="tile-surface" style={{ backgroundColor: '#F4F6F4' }}>
        <Services />
      </div>

      <TileDivider tone="accent" />

      {/* Process */}
      <div className="tile-surface" style={{ backgroundColor: '#EBF3EE' }}>
        <Process />
      </div>

      <TileDivider tone="neutral" />

      {/* Gallery — large square tiles, lets photos breathe */}
      <div className="tile-surface" style={{ backgroundColor: '#F4F6F4' }}>
        <Gallery />
      </div>

      <TileDivider tone="accent" />

      {/* Before/After — large square tiles */}
      <div className="tile-surface" style={{ backgroundColor: '#EBF3EE' }}>
        <BeforeAfter />
      </div>

      <TileDivider tone="neutral" />

      {/* Features */}
      <div className="tile-surface" style={{ backgroundColor: '#F4F6F4' }}>
        <Features />
      </div>

      <TileDivider tone="neutral" />

      {/* Testimonials — large square tiles */}
      <div className="tile-surface" style={{ backgroundColor: '#EBF3EE' }}>
        <Testimonials />
      </div>

      <TileDivider tone="accent" />

      {/* CTA/Contact — copper grout */}
      <div className="tile-texture-accent" style={{ backgroundColor: '#F4F6F4' }}>
        <CTASection />
      </div>

      {/* Footer */}
      <div className="tile-surface" style={{ backgroundColor: '#EBF3EE' }}>
        <Footer />
      </div>
    </div>
  )
}
