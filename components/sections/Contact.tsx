'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { contactFields, packageOptions } from '@/lib/data'
import type { ContactFormData, ContactFormErrors } from '@/types'

// ─── Custom hook ──────────────────────────────────────────────────────────────

function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    specialty: '',
    location: '',
    package: '',
    details: '',
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const validateField = (
    value: string,
    rules: { required: boolean; minLength: number }
  ): string | null => {
    if (rules.required && (!value || value.trim() === '')) {
      return 'هذا الحقل مطلوب'
    }
    if (rules.minLength && value && value.length < rules.minLength) {
      return `يجب أن يكون على الأقل ${rules.minLength} أحرف`
    }
    return null
  }

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {}

    contactFields.forEach((field) => {
      const error = validateField(formData[field.id as keyof ContactFormData], field)
      if (error) newErrors[field.id] = error
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      toast.error('يرجى التأكد من ملء الحقول المطلوبة', {
        style: { direction: 'rtl', fontFamily: 'Cairo, sans-serif' },
      })
      return false
    }

    return true
  }

  const buildMessage = (): string =>
    [
      'مرحباً شركة سيناريو 👋',
      '',
      'أنا مهتم بخدماتكم وأرغب في معرفة المزيد.',
      '',
      `👤 الاسم: ${formData.name}`,
      `🩺 التخصص: ${formData.specialty}`,
      `📍 مكان العيادة: ${formData.location}`,
      formData.package && `📦 الباقة: ${formData.package}`,
      formData.details && `💬 تفاصيل إضافية: ${formData.details}`,
    ]
      .filter(Boolean)
      .join('\n')

  const sendWhatsApp = () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    const msg = buildMessage()
    const url = `https://wa.me/201094436401?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')

    toast.success('تم تحويلك إلى واتساب', {
      style: { direction: 'rtl', fontFamily: 'Cairo, sans-serif' },
    })

    setIsSubmitting(false)
  }

  return { formData, errors, isSubmitting, updateField, sendWhatsApp }
}

// ─── WhatsApp SVG icon ────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Contact — WhatsApp contact form. Client Component.
 */
export default function Contact() {
  const { formData, errors, isSubmitting, updateField, sendWhatsApp } = useContactForm()

  return (
    <Section id="contact" className="text-center" background="rgb(238,238,238)">
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="section-label justify-center">تواصل معنا</div>

        <Card className="text-right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-gray-800">
            {contactFields.map((field) => (
              <div key={field.id} className={field.half ? '' : 'md:col-span-2'}>
                <Input
                  label={field.label}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof ContactFormData]}
                  onChange={(e) => updateField(field.id as keyof ContactFormData, e.target.value)}
                  error={errors[field.id]}
                />
              </div>
            ))}
          </div>

          <Select
            label="📦 الباقة"
            options={[{ value: '', label: 'اختر الباقة...' }, ...packageOptions]}
            value={formData.package}
            onChange={(e) => updateField('package', e.target.value)}
          />

          <Textarea
            label="💬 تفاصيل إضافية"
            value={formData.details}
            onChange={(e) => updateField('details', e.target.value)}
          />

          <Button variant="whatsapp" onClick={sendWhatsApp} disabled={isSubmitting}>
            <WhatsAppIcon />
            {isSubmitting ? 'جاري الإرسال...' : 'ارسل على واتساب'}
          </Button>
        </Card>
      </div>
    </Section>
  )
}
