import type { HTMLAttributes } from 'react'

type CardVariant = 'default' | 'service' | 'pricing'

const variantClasses: Record<CardVariant, string> = {
  default:
    'bg-transparent border-black/10 shadow-none hover:bg-white/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-black/20 hover:-translate-y-2',
  service: 'service-card',
  pricing: 'pricing-card',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

export function Card({ children, className = '', variant = 'default', ...props }: CardProps) {
  const baseClasses = 'rounded-3xl border p-6 md:p-11 transition-all duration-500'

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}
