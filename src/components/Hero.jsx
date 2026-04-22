import { stats } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ padding: '120px 60px 80px' }}
    >
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 80% 50%, rgba(26,122,138,.4) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 10% 80%, rgba(240,165,0,.12) 0%, transparent 50%),
            linear-gradient(135deg, #051820 0%, #0a2a35 50%, #0d3a45 100%)
          `,
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 animate-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42,184,200,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,184,200,.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative watermark */}
      <div
        className="absolute left-16 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
        style={{
          fontSize: 320,
          fontWeight: 900,
          color: '#2ab8c8',
          opacity: 0.1,
          lineHeight: 1,
          fontFamily: "'Tajawal', sans-serif",
          letterSpacing: -20,
        }}
      >
        S
      </div>

      {/* Floating orbs */}
      <div
        className="absolute rounded-full pointer-events-none animate-float-orb"
        style={{
          width: 300, height: 300, top: -100, left: 200,
          background: 'radial-gradient(circle, rgba(42,184,200,.12), transparent 70%)',
          animationDuration: '8s',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none animate-float-orb"
        style={{
          width: 200, height: 200, bottom: 150, left: 400,
          background: 'radial-gradient(circle, rgba(240,165,0,.08), transparent 70%)',
          animationDuration: '10s', animationDelay: '-3s',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl">
        {/* Badge */}
        <div className="animate-fade-slide inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full border text-sm font-semibold text-gold"
          style={{ background: 'rgba(240,165,0,.15)', borderColor: 'rgba(240,165,0,.4)' }}>
          <span className="animate-pulse-dot w-2 h-2 bg-gold rounded-full inline-block" />
          شريكك التسويقي الطبي المتخصص
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-slide-d2 font-black leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(42px, 6vw, 78px)' }}
        >
          حضورك الرقمي<br />
          يحتاج إلى شريك<br />
          <span className="text-teal-bright">محترف حقيقي</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-slide-d4 text-[#8cc5cc] text-lg leading-relaxed mb-10 max-w-xl">
          شركة سيناريو — أكثر من 10 سنوات من الخبرة في التسويق الإلكتروني
          والتسويق الطبي المتخصص. نفهم احتياجاتك ونقدم حلولاً تُترجم إلى نتائج ملموسة.
        </p>

        {/* Buttons */}
        <div className="animate-fade-slide-d6 flex gap-4">
          <a href="#contact">
            <button className="btn-primary font-cairo">ابدأ رحلتك معنا</button>
          </a>
          <a href="#services">
            <button className="btn-outline font-cairo">تعرف على خدماتنا</button>
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="animate-fade-slide-d8 absolute left-15 bottom-20 z-10 flex gap-10"
        style={{ left: 60, bottom: 80 }}
      >
        {stats.map((s, i) => (
          <div key={i} className="relative text-center pl-5">
            {i > 0 && (
              <span className="absolute right-0 top-[20%] w-px h-[60%] bg-teal-bright/30" />
            )}
            <div className="text-4xl font-black text-gold leading-none">{s.num}</div>
            <div className="text-xs text-[#8cc5cc] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
