import type { SelectHTMLAttributes } from 'react'
import type { PackageOption } from '@/types'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options?: PackageOption[]
  error?: string | null
}

export function Select({ label, options = [], error, className = '', value, ...props }: SelectProps) {
  return (
    <div className="form-field mb-5 text-white">
      {label && <label className="form-label">{label}</label>}
      <select
        className={`form-input appearance-none ${className}`}
        style={{ color: value ? '#fff' : 'rgba(140,197,204,.45)' }}
        value={value}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#1a3545]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
