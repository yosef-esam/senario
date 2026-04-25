import { plans } from '../data'

import PlanCard from './ui/PlanCard'
import { Section } from './ui/Section'



export default function Pricing() {
  return (
    <Section
      id="pricing"
      className="text-center"
      background="bg-gradient-to-b from-[#0e1e28] to-[#1a3545]"
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
    </Section>
  )
}
