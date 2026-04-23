import { useState, useEffect } from 'react'
import { navLinks } from '../data'
import { Button } from './ui/Button'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
                  px-6 md:px-16 py-4 transition-all duration-300
                  border-b border-white/5
                  ${scrolled ? 'bg-teal-dark/90 backdrop-blur-2xl py-3 shadow-2xl' : 'bg-transparent py-5'}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-11 md:h-11 border-2 border-gold rounded-full flex items-center justify-center text-lg font-black text-gold animate-spin-slow">
          S
        </div>
        <span className="text-xl md:text-2xl font-black text-white">
          سيناريو <span className="text-gold">SCENARIO</span>
        </span>
      </div>

      {/* Desktop Nav links */}
      <ul className="hidden lg:flex gap-9 list-none items-center">
        {navLinks.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`nav-link text-sm font-bold tracking-wide transition-colors ${active === l.href.slice(1) ? 'text-gold' : 'text-white/80 hover:text-gold'}`}
            >
              {l.label}
            </a>
          </li>
        ))}
        {/* Desktop CTA */}
        <li>
          <Button as="a" href="#contact" variant="primary" className="px-7 py-2.5 text-sm">
            تواصل معنا
          </Button>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between relative">
          <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-teal-dark/98 backdrop-blur-3xl z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-black ${active === l.href.slice(1) ? 'text-gold' : 'text-white'}`}
          >
            {l.label}
          </a>
        ))}
        <Button as="a" href="#contact" onClick={() => setIsOpen(false)} className="mt-4">
          تواصل معنا
        </Button>
      </div>
    </nav>
  )
}
