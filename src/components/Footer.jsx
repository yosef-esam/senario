import { socialLinks } from '../data'

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between border-t border-teal-bright/10 px-6 md:px-16 py-10 md:py-10 bg-[#040f14] gap-6"
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-black text-white">
        شركة <span className="text-gold">سيناريو</span>
      </div>

      {/* Copyright */}
      <div className="text-xs md:text-sm text-[#8cc5cc] order-3 md:order-2">
        جميع الحقوق محفوظة © 2025 شركة سيناريو
      </div>

      {/* Social links */}
      <div className="flex gap-4 order-2 md:order-3">
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} className="social-link" aria-label={`Social link ${i}`}>
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
