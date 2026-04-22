import { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Challenges from './components/Challenges'
import Services   from './components/Services'
import Pricing    from './components/Pricing'
import Clients    from './components/Clients'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  // Global scroll-reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    }, 100)
    return () => { obs.disconnect(); clearTimeout(timer) }
  }, [])

  return (
    <div className="font-cairo">
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
