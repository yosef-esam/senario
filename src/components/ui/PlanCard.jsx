import { Button } from "./Button";
import { Card } from "./Card";

export default function PlanCard({ plan }) {
    return (
        <Card
            variant="pricing"
            className={`${plan.featured ? 'pricing-card-featured' : 'reveal'} md:hover:scale-110 transition-transform duration-500`}
        >

            <div className={`text-sm font-semibold text-gray-500 mb-1 ${plan.featured ? 'mt-4' : ''}`}>
                {plan.name}
            </div>
            <div className="text-2xl md:text-3xl font-black text-gray-800 mb-5">{plan.arabic}</div>
            <div className="text-4xl md:text-5xl font-black text-gray-800 leading-none mb-1.5">{plan.price}</div>
            <div className="text-base md:text-lg text-gray-500 mb-8">{plan.currency}</div>

            <hr className="border-none border-t border-black/10 mb-7" />

            <ul className="list-none text-right flex-1 mb-9 space-y-0">
                {plan.features.map((f, i) => (
                    <li
                        key={i}
                        className="py-2.5 text-sm border-b border-black/[0.08] flex items-start gap-2.5 text-gray-700"
                    >
                        <span className="font-bold text-xs flex-shrink-0 mt-0.5 text-teal-500">
                            ✓
                        </span>
                        {f}
                    </li>
                ))}
            </ul>

            <Button
                variant={plan.featured ? 'primary' : 'outline'}
                className="w-full"
            >
                {plan.id === 'riada' ? 'تواصل معنا' : 'ابدأ الآن'}
            </Button>
        </Card>
    )
}