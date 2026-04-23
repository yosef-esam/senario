import React from 'react'

export function Input({ label, error, className = '', ...props }) {
  return (
    <div className="form-field mb-5 text-white">
      {label && <label className="form-label">{label}</label>}
      <input
        className={`form-input ${error ? 'form-input-error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs mt-1 text-right">{error}</p>}
    </div>
  )
}