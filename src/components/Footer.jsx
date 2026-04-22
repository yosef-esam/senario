import { socialLinks } from '../data'

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between border-t border-teal-bright/10"
      style={{ background: '#040f14', padding: '40px 60px' }}
    >
      {/* Logo */}
      <div className="text-2xl font-black text-white">
        شركة <span className="text-gold">سيناريو</span>
      </div>

      {/* Copyright */}
      <div className="text-sm text-[#8cc5cc]">
        جميع الحقوق محفوظة © 2025 شركة سيناريو
      </div>

      {/* Social links */}
      <div className="flex gap-4">
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} className="social-link">
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
