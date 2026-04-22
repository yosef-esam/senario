import { useState, useEffect } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 120 && window.scrollY < s.offsetTop + s.offsetHeight - 120)
          setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                  px-15 py-4 transition-all duration-300
                  border-b border-teal-bright/15
                  ${scrolled ? 'bg-teal-dark/95 backdrop-blur-2xl shadow-xl' : 'bg-teal-dark/80 backdrop-blur-xl'}`}
      style={{ padding: '18px 60px' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="animate-spin-slow w-11 h-11 border-2 border-gold rounded-full flex items-center justify-center text-lg font-black text-gold">
          S
        </div>
        <span className="text-2xl font-black text-white">
          سيناريو <span className="text-gold">SCENARIO</span>
        </span>
      </div>

      {/* Nav links */}
      <ul className="flex gap-9 list-none">
        {navLinks.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'nav-link-active' : ''}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact">
        <button
          className="bg-gold hover:bg-gold-light text-teal-dark font-bold rounded-full
                     px-7 py-2.5 text-sm cursor-pointer border-none transition-all duration-300
                     hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,165,0,0.35)]"
        >
          تواصل معنا الآن
        </button>
      </a>
    </nav>
  )
}
