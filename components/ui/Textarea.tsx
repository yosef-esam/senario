import type { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string | null
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="form-field mb-8 text-white">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`form-input resize-y min-h-[120px] ${error ? 'form-input-error' : ''} ${className}`}
        style={{ lineHeight: 1.7 }}
        {...props}
      />
      {error && <p className="text-red-400 text-xs mt-1 text-right">{error}</p>}
    </div>
  )
}
