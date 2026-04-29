'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { navLinks } from '@/lib/data'
import { Button } from '@/components/ui/Button'

/**
 * Navbar — sticky top bar with active-section tracking and mobile drawer.
 * Client Component because it uses scroll & state.
 */
export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => {
        if (
          window.scrollY >= section.offsetTop - 120 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 120
        ) {
          setActive(section.id)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                  px-6 md:px-16 transition-all duration-300 border-b border-white/5
                  ${scrolled
                    ? 'bg-teal-dark/90 backdrop-blur-2xl py-3 shadow-2xl'
                    : 'bg-transparent py-5'
                  }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-10">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <Image
            src="/scenario.png"
            alt="شعار سيناريو"
            width={60}
            height={60}
            className="max-w-[250%]"
            priority
          />
        </div>
        <span className="text-xl md:text-2xl font-black text-white">
          سيناريو <span className="text-teal-bright">SCENARIO</span>
        </span>
      </div>

      {/* Desktop nav links */}
      <ul className="hidden lg:flex gap-9 list-none items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`nav-link text-sm font-bold tracking-wide transition-colors ${
                active === link.href.slice(1) ? 'text-teal-bright' : 'text-white/80 hover:text-teal-bright'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <Button as="a" href="#contact" variant="primary" className="px-7 py-2.5 text-sm">
            تواصل معنا
          </Button>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-5 flex flex-col justify-between relative">
          <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </div>
      </button>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[70px] bg-teal-dark/98 backdrop-blur-3xl z-40
                    transition-transform duration-500 flex flex-col items-center justify-center gap-8
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={`text-2xl font-black ${
              active === link.href.slice(1) ? 'text-teal-bright' : 'text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
        <Button as="a" href="#contact" onClick={closeMenu} className="mt-4">
          تواصل معنا
        </Button>
      </div>
    </nav>
  )
}
