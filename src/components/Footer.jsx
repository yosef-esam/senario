import { socialLinks } from "../data";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between border-t border-teal-bright/10 px-6 md:px-16 py-10 md:py-10 bg-[#0e1e28] gap-6">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-black text-white">
        <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg font-black text-teal-bright ">
          <img src="/scenario.png" className="max-w-[250%]" alt="logo" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xs md:text-sm text-[#8cc5cc] order-3 md:order-2">
        جميع الحقوق محفوظة © 2025 شركة سيناريو
      </div>

      {/* Social links */}
      <div className="flex gap-4 order-2 md:order-3">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="social-link"
            aria-label={`Social link ${i}`}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
