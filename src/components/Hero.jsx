import { stats } from '../data'
import { Button } from './ui/Button'
import { Section } from './ui/Section'

export default function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 70% at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 60%),
            linear-gradient(135deg, #6f8791 0%, #7f98a3 50%, #6e8590 100%)
          `,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 animate-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42,184,200,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,184,200,.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Watermark (lighter) */}
      <div
        className=" absolute left-10 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden md:block"
        style={{
          fontSize: 'clamp(180px, 18vw, 260px)',
          fontWeight: 900,
          color: 'white',
          opacity: 0.05,
          letterSpacing: -10,
        }}
      >
        S
      </div>

      {/* Floating orbs (soft) */}
      <div
        className="absolute rounded-full pointer-events-none animate-float-orb"
        style={{
          width: 220,
          height: 220,
          top: -60,
          left: 120,
          background:
            'radial-gradient(circle, rgba(255,255,255,.12), transparent 70%)',
          animationDuration: '8s',
        }}
      />

      <div
        className="absolute rounded-full pointer-events-none animate-float-orb"
        style={{
          width: 180,
          height: 180,
          bottom: 120,
          right: 120,
          background:
            'radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)',
          animationDuration: '10s',
          animationDelay: '-3s',
        }}
      />

      {/* Main Content (CENTERED) */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center px-6">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white"
          style={{
            background: 'rgba(255,255,255,.2)',
            border: '1px solid rgba(255,255,255,.3)',
          }}
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          شريكك التسويقي الطبي المتخصص
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-[1.2] mb-6 text-white"
          style={{ fontSize: 'clamp(36px, 8vw, 72px)' }}
        >
          حضورك الرقمي<br />
          يحتاج إلى شريك<br />
          <span className="text-white/80">محترف</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#e6f2f5] text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          شركة سيناريو — أكثر من 10 سنوات من الخبرة في التسويق الإلكتروني
          والتسويق الطبي المتخصص. نفهم احتياجاتك ونقدم حلولاً تُترجم إلى نتائج ملموسة.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            as="a"
            href="#contact"
            variant="primary"
            className="w-full sm:w-auto"
          >
            ابدأ رحلتك معنا
          </Button>

          <Button
            as="a"
            href="#services"
            variant="outline"
            className="w-full sm:w-auto"
          >
            تعرف على خدماتنا
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 w-full flex justify-center gap-8 px-6 flex-wrap">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white">
              {s.num}
            </div>
            <div className="text-xs text-[#e6f2f5] mt-1 font-bold uppercase tracking-wider">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}