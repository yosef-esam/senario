import React from 'react'

export function Card({ children, className = '', variant = 'default', ...props }) {
  const baseClasses = 'rounded-3xl backdrop-blur-md border shadow-[0_40px_80px_rgba(0,0,0,0.4)] p-6 md:p-11'

  const variants = {
    default: 'bg-gradient-to-br from-[rgba(30,75,90,0.75)] to-[rgba(14,30,40,0.95)] border-teal-bright/25',
    service: 'service-card',
    pricing: 'pricing-card'
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}