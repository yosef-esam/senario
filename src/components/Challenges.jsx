import { challenges } from "../data";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export default function Challenges() {
  return (
    <Section
      id="challenges"
      className="bg-gradient-to-b from-[#1a3545] to-[#0e1e28]"
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none top-[-200px] left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle, rgba(42,184,200,.12) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="section-label justify-center">التشخيص</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4">
          التحديات التي تواجهها
          <br className="hidden md:block" /> كطبيب أو مركز طبي
        </h2>
        <p className="text-[#8cc5cc] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          نفهم ما تمر به لأننا عملنا مع مئات الأطباء والمراكز الطبية وخضنا معهم
          كل هذه التحديات.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 max-w-4xl mx-auto relative z-10">
        {challenges.map((c, i) => (
          <Card
            key={c.num}
            className={`challenge-card reveal reveal-d${(i % 5) + 1}`}
          >
            {/* Corner glow */}
            <div
              className="absolute top-0 right-0 pointer-events-none w-[120px] h-[120px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,184,200,.12) 0%, transparent 70%)",
              }}
            />
            <div
              className="font-black leading-none mb-3 font-tajawal text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "rgba(42,184,200,.12)" }}
            >
              {c.num}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-teal-bright mb-3">
              {c.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/70">
              {c.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
