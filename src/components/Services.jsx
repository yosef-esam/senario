import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="relative" style={{ padding: '100px 60px', background: '#061820' }}>
      {/* Header */}
      <div className="mb-16 max-w-lg">
        <div className="section-label">العلاج</div>
        <h2 className="text-5xl font-black leading-snug mb-4">
          كل ما تحتاجه<br />في مكانٍ واحد
        </h2>
        <p className="text-[#8cc5cc] text-lg leading-relaxed">
          نقدم لك حلاً تسويقياً متكاملاً مبنياً على خبرة سنوات في المجال الطبي.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`service-card reveal reveal-d${i % 6}`}
          >
            {/* Background number */}
            <div
              className="absolute top-5 left-6 font-black leading-none font-tajawal pointer-events-none select-none"
              style={{ fontSize: 72, color: 'rgba(42,184,200,.05)' }}
            >
              {s.num}
            </div>

            <div className="service-icon">{s.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2.5">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(140,197,204,.8)' }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
