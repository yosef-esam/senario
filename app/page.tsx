import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/layout/ScrollReveal'
import Hero from '@/components/sections/Hero'
import Challenges from '@/components/sections/Challenges'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import Clients from '@/components/sections/Clients'
import Contact from '@/components/sections/Contact'

/**
 * Home page — single-page marketing site for Scenario Agency.
 * All sections are server components; interactive parts are Client Components.
 */
export default function HomePage() {
  return (
    <div className="font-cairo">
      {/* Registers the global scroll-reveal IntersectionObserver */}
      <ScrollReveal />

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
