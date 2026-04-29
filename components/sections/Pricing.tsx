import { plans } from '@/lib/data'
import PlanCard from '@/components/ui/PlanCard'
import { Section } from '@/components/ui/Section'

/**
 * Pricing — three-column plan cards. Server Component.
 */
export default function Pricing() {
  return (
    <Section
      id="pricing"
      className="text-center shadow-[inset_0_20px_20px_-20px_rgba(0,0,0,0.15),inset_0_-20px_20px_-20px_rgba(0,0,0,0.15)]"
      background="linear-gradient(to bottom, #dff6ff, #bce8f9)"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="section-label justify-center text-[10px] md:text-base">الباقات</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4 text-gray-800">
          باقات مصممة لتناسب<br className="hidden md:block" /> جميع الفئات
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-sm mx-auto">
          انضم الآن إلى قائمة شركاء سيناريو للتسويق الرقمي
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 max-w-5xl mx-auto items-stretch">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </Section>
  )
}
