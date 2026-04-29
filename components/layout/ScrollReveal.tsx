'use client'

import { useEffect } from 'react'

/**
 * ScrollReveal — mounts a global IntersectionObserver that adds the
 * `visible` class to every `.reveal` element when it enters the viewport.
 *
 * This is a Client Component with no rendered output (returns null).
 * Mount it once near the top of the layout tree.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    // Small timeout so DOM is fully painted before we observe
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return null
}
