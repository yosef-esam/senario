import { useRef } from "react";
import { services } from "../data";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (direction === "next") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section id="services" className="bg-[#0e1e28]">
      <div className="mb-16 max-w-2xl mx-auto lg:mx-0 text-center lg:text-right">
        <div className="section-label lg:justify-start justify-center">
          العلاج
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          كل ما تحتاجه
          <br className="hidden md:block" /> في مكانٍ واحد
        </h2>
        <p className="text-[#8cc5cc]">
          نقدم لك حلاً تسويقياً متكاملاً مبنياً على خبرة سنوات في المجال الطبي.
        </p>
      </div>

      <div className="flex justify-between mb-6">
        <button onClick={() => scroll("prev")} className="text-white">
          ←
        </button>
        <button onClick={() => scroll("next")} className="text-white">
          →
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {services.map((s, i) => (
          <div
            key={s.num}
            className="min-w-[280px] md:min-w-[320px] flex-shrink-0"
          >
            <Card variant="service">
              {/* Number */}
              <div
                className="absolute top-5 left-6 text-6xl font-black pointer-events-none"
                style={{ color: "rgba(42,184,200,.12)" }}
              >
                {s.num}
              </div>

              <div className="service-icon">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#8cc5cc]/80">{s.text}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
