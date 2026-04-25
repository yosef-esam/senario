import React from 'react'

export function Select({ label, options = [], error, className = '', ...props }) {
  return (
    <div className="form-field mb-5 text-white">
      {label && <label className="form-label">{label}</label>}
      <select
        className={`form-input appearance-none ${className}`}
        style={{ color: props.value ? '#fff' : 'rgba(140,197,204,.45)' }}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value} className="bg-[#1a3545]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}