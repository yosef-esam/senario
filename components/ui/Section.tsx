import type { HTMLAttributes, CSSProperties } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  background?: string
}

export function Section({ id, children, className = '', background = '', ...props }: SectionProps) {
  const style: CSSProperties = background ? { background } : {}

  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 md:px-16 py-20 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </section>
  )
}
