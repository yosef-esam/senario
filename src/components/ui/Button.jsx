import React from 'react'

export function Button({ children, variant = 'primary', className = '', as = 'button', ...props }) {
  const baseClasses = 'py-4 px-6 rounded-full text-base font-bold font-cairo cursor-pointer transition-all duration-300 hover:-translate-y-0.5'

  const variants = {
    primary: 'bg-gradient-to-br from-teal-bright to-teal-light text-ink border-none shadow-[0_8px_32px_rgba(42,184,200,0.3)] hover:shadow-[0_16px_48px_rgba(42,184,200,0.45)]',
    outline: 'bg-transparent text-white border-2 border-teal-bright/40 hover:border-teal-bright/70 hover:text-teal-bright',
    whatsapp: 'w-full flex items-center justify-center gap-3 py-5 rounded-full text-white text-lg font-bold font-cairo cursor-pointer border-none transition-all duration-300 shadow-[0_8px_32px_rgba(37,211,102,0.35)] bg-gradient-to-r from-[#25d366] to-[#128c3e] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,211,102,0.5)]'
  }

  const Component = as

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}