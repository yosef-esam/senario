import { useState } from 'react'

const FIELDS = [
  { id: 'name',     label: '👤 الاسم',         placeholder: 'د. محمد أحمد',               half: true },
  { id: 'specialty',label: '🩺 التخصص',       placeholder: 'طب عيون، جراحة عامة...',      half: true },
  { id: 'location', label: '📍 مكان العيادة',  placeholder: 'مثال: مدينة نصر، القاهرة',    half: false },
]

const PACKAGES = [
  { value: 'نبض – 4,999 ج',    label: 'نبض – 4,999 ج' },
  { value: 'عناية – 20,000 ج', label: 'عناية – 20,000 ج' },
  { value: 'ريادة – 30,000 ج', label: 'ريادة – 30,000 ج' },
  { value: 'لم أحدد بعد',       label: 'لم أحدد بعد' },
]

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', specialty:'', location:'', package:'', details:'' })
  const [errors, setErrors] = useState({})

  const update = (field, value) => {
    setForm(p => ({ ...p, [field]: value }))
    setErrors(p => ({ ...p, [field]: false }))
  }

  const sendWhatsApp = () => {
    const required = ['name', 'specialty', 'location']
    const newErr = {}
    required.forEach(k => { if (!form[k].trim()) newErr[k] = true })
    if (Object.keys(newErr).length) { setErrors(newErr); return }

    const msg = [
      'مرحباً شركة سيناريو 👋',
      '',
      'أنا مهتم بخدماتكم وأرغب في معرفة المزيد.',
      '',
      `👤 الاسم: ${form.name}`,
      `🩺 التخصص: ${form.specialty}`,
      `📍 مكان العيادة: ${form.location}`,
      form.package ? `📦 الباقة: ${form.package}` : '',
      form.details ? `💬 تفاصيل إضافية: ${form.details}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/201094436401?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-center px-6 md:px-16 py-20 bg-gradient-to-br from-[#0a2a35] to-[#0d4a5a]"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(240,165,0,.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <div className="section-label justify-center">تواصل معنا</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-3 text-white">
          هل أنت مستعد لتحويل<br className="hidden md:block" />
          <span className="text-gold">حضورك الرقمي؟</span>
        </h2>
        <p className="text-[#8cc5cc] text-base md:text-lg mb-8 md:mb-12">
          املأ البيانات أدناه وسيصلنا طلبك مباشرةً على واتساب
        </p>

        {/* Form card */}
        <div
          className="reveal relative overflow-hidden text-right rounded-3xl backdrop-blur-md bg-gradient-to-br from-[rgba(13,74,90,0.7)] to-[rgba(6,24,32,0.9)] border border-teal-bright/25 p-6 md:p-11 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
        >
          {/* Top gradient bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
            style={{ background: 'linear-gradient(90deg, #f0a500, #2ab8c8, #f0a500)' }}
          />

          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-white">
            {FIELDS.filter(f => f.half).map(f => (
              <div key={f.id} className="form-field">
                <label className="form-label">{f.label}</label>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={e => update(f.id, e.target.value)}
                  className={`form-input ${errors[f.id] ? 'form-input-error' : ''}`}
                />
              </div>
            ))}
          </div>

          <div className="form-field mb-5 text-white">
            <label className="form-label">📍 مكان العيادة</label>
            <input
              type="text"
              placeholder="مثال: مدينة نصر، القاهرة"
              value={form.location}
              onChange={e => update('location', e.target.value)}
              className={`form-input ${errors.location ? 'form-input-error' : ''}`}
            />
          </div>

          <div className="form-field mb-5 text-white">
            <label className="form-label">📦 الباقة المهتم بها</label>
            <select
              value={form.package}
              onChange={e => update('package', e.target.value)}
              className="form-input appearance-none"
              style={{ color: form.package ? '#fff' : 'rgba(140,197,204,.45)' }}
            >
              <option value="" disabled>اختر الباقة ...</option>
              {PACKAGES.map(p => (
                <option key={p.value} value={p.value} className="bg-[#0a2a35]">{p.label}</option>
              ))}
            </select>
          </div>

          <div className="form-field mb-8 text-white">
            <label className="form-label">💬 تفاصيل إضافية</label>
            <textarea
              rows={4}
              placeholder="أي معلومات إضافية تريد مشاركتها معنا..."
              value={form.details}
              onChange={e => update('details', e.target.value)}
              className="form-input resize-y min-h-[120px]"
              style={{ lineHeight: 1.7 }}
            />
          </div>

          {/* WhatsApp button */}
          <button
            onClick={sendWhatsApp}
            className="w-full flex items-center justify-center gap-3 py-5 rounded-full
                       text-white text-lg font-bold font-cairo cursor-pointer border-none
                       transition-all duration-300 shadow-[0_8px_32px_rgba(37,211,102,0.35)]
                       bg-gradient-to-r from-[#25d366] to-[#128c3e]
                       hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,211,102,0.5)]"
          >
            <span
              className="animate-wa-ping w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20"
            >
              <WhatsAppIcon />
            </span>
            ارسل على واتساب الآن
          </button>

          <p className="text-center mt-4 text-[10px] md:text-xs text-[#8cc5cc]/60">
            🔒 بياناتك آمنة وستُستخدم فقط للتواصل معك
          </p>
        </div>
      </div>
    </section>
  )
}
