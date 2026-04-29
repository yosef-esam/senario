import { services } from '@/lib/data'

/**
 * Services — 3-column grid of service cards. Server Component.
 */
export default function Services() {
  return (
    <section
      id="services"
      className="relative"
      style={{ padding: '100px 60px', background: 'rgb(238,238,238)' }}
    >
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="section-label justify-center text-[10px] md:text-base">العلاج</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4 text-gray-800">
          كل ما تحتاجه<br />في مكانٍ واحد
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          نقدم لك حلاً تسويقياً متكاملاً مبنياً على خبرة سنوات في المجال الطبي.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={service.num} className={`service-card reveal reveal-d${i % 6}`}>
            {/* Background number */}
            <div
              className="absolute top-5 left-6 font-black leading-none font-tajawal pointer-events-none select-none"
              style={{ fontSize: 72, color: 'rgba(0,0,0,.03)' }}
            >
              {service.num}
            </div>

            <div className="service-icon">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2.5">{service.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
