import { socialLinks } from "../data";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f4f59] text-white px-6 md:px-16 py-16 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="max-w-7xl mx-auto">
        {/* IMPORTANT: force layout left → right */}
        <div className="grid md:grid-cols-3 gap-12 items-start" dir="ltr">

          {/* LEFT - Logo & Intro */}
          <div className="space-y-6 text-center md:text-left order-3 md:order-1">
            <img
              src="/scenario.png"
              alt="logo"
              className="w-50 mx-auto md:mx-0 transition-transform hover:scale-110"
            />
            <p className="text-lg text-[#cfe6e8] leading-relaxed max-w-xs mx-auto md:mx-0" dir="rtl">
              نبدأ بدراسة السوق، جمهورك، و منافسيك، ونبني خطة تسويقية كاملة توصّلك لأهدافك بطريقة ذكية وفعّالة.            </p>
          </div>

          {/* CENTER - Services */}
          <div dir="rtl" className="order-2">
            <h3 className="text-xl font-bold mb-6 text-center md:text-right border-b border-white/10 pb-2 inline-block mr-[100px]">
              الخدمات
            </h3>

            <ul className="space-y-4 text-lg text-[#cfe6e8] text-right">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-end gap-2">وضع الخطط والاستراتيجيات التسويقية <span className="text-teal-400">✔</span></li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-end gap-2">إدارة منصات التواصل الاجتماعي <span className="text-teal-400">✔</span></li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-end gap-2">إدارة الحملات الإعلانية الممولة <span className="text-teal-400">✔</span></li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-end gap-2">خدمات تصميم و أرشفة المواقع SEO <span className="text-teal-400">✔</span></li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-end gap-2">بناء العلامة التجارية وتصميم الهوية <span className="text-teal-400">✔</span></li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-end gap-2">خدمات استشارية و إشرافية <span className="text-teal-400">✔</span></li>
            </ul>
          </div>

          {/* RIGHT - Contact */}
          <div className="space-y-6 text-right order-1 md:order-3" dir="rtl">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block mr-[117px]">تواصل معنا</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3 text-lg text-[#cfe6e8] group cursor-pointer">
                <span className="group-hover:text-white transition-colors">طنطا - الغربية - بجوار الموقف الجديد</span>
                <FaMapMarkerAlt className="text-teal-400" />
              </div>

              <div className="flex items-center justify-end gap-3 text-lg group cursor-pointer">
                <span className="group-hover:text-teal-300 transition-colors">01090368649</span>
                <FaPhoneAlt className="text-teal-400" />
              </div>

              <div className="flex items-center justify-end gap-3 text-lg group cursor-pointer">
                <span className="group-hover:text-teal-300 transition-colors">01094436401</span>
                <FaPhoneAlt className="text-teal-400" />
              </div>

              <div className="flex items-center justify-end gap-3 text-lg group cursor-pointer">
                <span className="group-hover:text-teal-300 transition-colors">scenario700@gmail.com</span>
                <FaEnvelope className="text-teal-400" />
              </div>
            </div>

            {/* Social */}
            <div className="flex justify-end gap-5 pt-6">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="text-2xl text-[#cfe6e8] hover:text-teal-300 transform hover:-translate-y-1 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-[#cfe6e8]/60 mt-8" dir="rtl">
          جميع الحقوق محفوظة © 2025 شركة سيناريو
        </div>
      </div>
    </footer>
  );
}