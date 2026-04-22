import { challenges } from '../data'

export default function Challenges() {
  return (
    <section
      id="challenges"
      className="relative overflow-hidden"
      style={{
        padding: '100px 60px',
        background: 'linear-gradient(180deg, #0a2a35 0%, #061820 100%)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 800,
          background: 'radial-gradient(circle, rgba(26,122,138,.15) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="section-label justify-center">التشخيص</div>
        <h2 className="text-5xl font-black leading-snug mb-4">
          التحديات التي تواجهها<br />كطبيب أو مركز طبي
        </h2>
        <p className="text-[#8cc5cc] text-lg leading-relaxed max-w-xl mx-auto">
          نفهم ما تمر به لأننا عملنا مع مئات الأطباء والمراكز الطبية وخضنا معهم كل هذه التحديات.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-7 max-w-4xl mx-auto relative z-10">
        {challenges.map((c, i) => (
          <div
            key={c.num}
            className={`challenge-card reveal reveal-d${i}`}
          >
            {/* Corner glow */}
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: 120, height: 120,
                background: 'radial-gradient(circle, rgba(42,184,200,.12) 0%, transparent 70%)',
              }}
            />
            <div
              className="font-black leading-none mb-3 font-tajawal"
              style={{ fontSize: 64, color: 'rgba(42,184,200,.12)' }}
            >
              {c.num}
            </div>
            <h3 className="text-xl font-bold text-teal-bright mb-3">{c.title}</h3>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(232,244,246,.75)' }}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
