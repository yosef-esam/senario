import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-16 py-20 bg-[#061820]">
      {/* Header */}
      <div className="mb-16 max-w-2xl mx-auto lg:mx-0 text-center lg:text-right">
        <div className="section-label lg:justify-start justify-center">العلاج</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4">
          كل ما تحتاجه<br className="hidden md:block" /> في مكانٍ واحد
        </h2>
        <p className="text-[#8cc5cc] text-base md:text-lg leading-relaxed">
          نقدم لك حلاً تسويقياً متكاملاً مبنياً على خبرة سنوات في المجال الطبي.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`service-card reveal reveal-d${i % 5 + 1}`}
          >
            {/* Background number */}
            <div
              className="absolute top-5 left-6 font-black leading-none font-tajawal pointer-events-none select-none text-6xl md:text-7xl"
              style={{ color: 'rgba(42,184,200,.05)' }}
            >
              {s.num}
            </div>

            <div className="service-icon">{s.icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2.5">{s.title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-[#8cc5cc]/80">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
