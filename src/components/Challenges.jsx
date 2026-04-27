import { challenges } from "../data";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export default function Challenges() {
  return (
    <Section
      id="challenges"
      background="rgb(238,238,238)"
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none top-[-200px] left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,.04) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="section-label justify-center text-[10px] md:text-base">التشخيص</div>
        <h2 className="text-3xl md:text-5xl text-gray-800 font-black leading-tight md:leading-snug mb-4">
          التحديات التي تواجهها
          <br className="hidden md:block" /> كطبيب أو مركز طبي
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          نفهم ما تمر به لأننا عملنا مع مئات الأطباء والمراكز الطبية وخضنا معهم
          كل هذه التحديات.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 max-w-4xl mx-auto relative z-10">
        {challenges.map((c, i) => {
          const isLast = i === challenges.length - 1
          const isOdd = challenges.length % 2 !== 0

          return (
            <Card
              key={c.num}
              className={`challenge-card reveal reveal-d${(i % 5) + 1}
        ${isLast && isOdd ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}
      `}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 pointer-events-none w-[120px] h-[120px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,0,0,.03) 0%, transparent 70%)",
                }}
              />

              <div
                className="font-black leading-none mb-3 font-tajawal text-5xl md:text-6xl lg:text-7xl"
                style={{ color: "rgba(0,0,0,.05)" }}
              >
                {c.num}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                {c.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                {c.text}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  );
}
