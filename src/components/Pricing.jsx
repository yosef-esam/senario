import { plans } from '../data'

function PlanCard({ plan }) {
  return (
    <div
      className={`pricing-card ${plan.featured ? 'pricing-card-featured' : 'reveal'} md:hover:scale-110 transition-transform duration-500`}
    >
      {plan.featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-teal-dark px-6 py-1.5 text-xs font-bold"
          style={{ borderRadius: '0 0 16px 16px' }}>
          ⭐ الأكثر طلباً
        </div>
      )}

      <div className={`text-sm font-semibold text-[#8cc5cc] mb-1 ${plan.featured ? 'mt-4' : ''}`}>
        {plan.name}
      </div>
      <div className="text-2xl md:text-3xl font-black text-teal-bright mb-5">{plan.arabic}</div>
      <div className="text-4xl md:text-5xl font-black text-gold leading-none mb-1.5">{plan.price}</div>
      <div className="text-base md:text-lg text-[#8cc5cc] mb-8">{plan.currency}</div>

      <hr className="border-none border-t border-teal-bright/15 mb-7" />

      <ul className="list-none text-right flex-1 mb-9 space-y-0">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className="py-2.5 text-sm border-b border-teal-bright/[0.07] flex items-start gap-2.5 text-white/80"
          >
            <span className={`font-bold text-xs flex-shrink-0 mt-0.5 ${plan.featured ? 'text-gold' : 'text-teal-bright'}`}>
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-full text-base font-bold font-cairo cursor-pointer
                    transition-all duration-300 hover:-translate-y-0.5 mt-auto
                    ${plan.featured
                      ? 'bg-gradient-to-br from-gold to-gold-light text-teal-dark border-none shadow-[0_8px_32px_rgba(240,165,0,0.3)]'
                      : 'bg-transparent text-white border-2 border-teal-bright/40 hover:border-teal-bright/70'
                    }`}
      >
        {plan.id === 'riada' ? 'تواصل معنا' : 'ابدأ الآن'}
      </button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="text-center px-6 md:px-16 py-20 bg-gradient-to-b from-[#061820] to-[#0a2a35]"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="section-label justify-center">الباقات</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4">
          باقات مصممة لتناسب<br className="hidden md:block" /> جميع الفئات
        </h2>
        <p className="text-[#8cc5cc] text-base md:text-lg leading-relaxed max-w-sm mx-auto">
          انضم الآن إلى قائمة شركاء سيناريو للتسويق الرقمي
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 max-w-5xl mx-auto items-stretch">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}
