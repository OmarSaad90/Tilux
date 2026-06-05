const navLinks = ['Services', 'Process', 'Gallery', 'Contact']

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ borderTop: '1px solid rgba(40,32,15,0.12)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <img src="/new1.png" alt="Tilux" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-abyss/65 leading-relaxed" style={{ maxWidth: '36ch' }}>
              Expert tile installation for kitchens, bathrooms, and living spaces. Built to last.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[11px] text-abyss/55 uppercase tracking-[0.15em] mb-4 font-medium">Navigation</div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-abyss/75 hover:text-abyss transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-10">
            <div className="text-[11px] text-abyss/55 uppercase tracking-[0.15em] mb-4 font-medium">Contact</div>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@tiluxstudio.ca"
                className="text-sm text-abyss/75 hover:text-abyss transition-colors duration-200"
              >
                info@tiluxstudio.ca
              </a>
              <a
                href="tel:+14372990347"
                className="text-sm text-abyss/75 hover:text-abyss transition-colors duration-200"
              >
                +1 (437) 299-0347
              </a>
              <span className="text-sm text-abyss/65">GTA, Ontario</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: '1px solid rgba(40,32,15,0.08)' }}
        >
          <span className="text-xs text-abyss/55">
            &copy; {new Date().getFullYear()} Tilux Studio. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  )
}
