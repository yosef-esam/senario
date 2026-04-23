import React from 'react'

export function Section({ id, children, className = '', background = '', ...props }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 md:px-16 py-20 ${className}`}
      style={background ? { background } : {}}
      {...props}
    >
      {children}
    </section>
  )
}