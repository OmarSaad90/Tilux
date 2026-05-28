const navLinks = ['Services', 'Process', 'Gallery', 'Contact']
const legalLinks = ['Privacy Policy', 'Terms of Service']

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ borderTop: '1px solid rgba(26,48,40,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <img src="/new1.png" alt="Tilux" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-abyss/50 leading-relaxed" style={{ maxWidth: '36ch' }}>
              Expert tile installation for kitchens, bathrooms, and living spaces. Built to last.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[11px] text-abyss/40 uppercase tracking-[0.15em] mb-4">Navigation</div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-abyss/60 hover:text-abyss transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-10">
            <div className="text-[11px] text-abyss/40 uppercase tracking-[0.15em] mb-4">Contact</div>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@tiluxstudio.ca"
                className="text-sm text-abyss/60 hover:text-abyss transition-colors duration-200"
              >
                hello@tiluxstudio.ca
              </a>
              <a
                href="tel:+14165550192"
                className="text-sm text-abyss/60 hover:text-abyss transition-colors duration-200"
              >
                +1 (416) 555-0192
              </a>
              <span className="text-sm text-abyss/45">Greater Toronto Area</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(26,48,40,0.08)' }}
        >
          <span className="text-xs text-abyss/40">
            &copy; {new Date().getFullYear()} Tilux Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {legalLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-abyss/40 hover:text-abyss/65 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
