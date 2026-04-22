import { clients } from '../data'

export default function Clients() {
  return (
    <section
      id="clients"
      className="text-center"
      style={{ padding: '100px 60px', background: '#0a2a35' }}
    >
      <div className="section-label justify-center">عملاؤنا</div>
      <h2 className="text-5xl font-black leading-snug mb-4">تشرفنا بالعمل معهم</h2>

      <div className="flex justify-center items-center gap-14 flex-wrap mt-14">
        {clients.map((cl, i) => (
          <div
            key={i}
            className={`reveal reveal-d${i * 2} cursor-default transition-all duration-300
                        bg-white/[0.06] border border-teal-bright/15 rounded-2xl px-10 py-6
                        text-xl font-black text-[#e8f4f6] min-w-[200px]
                        hover:bg-teal-bright/10 hover:border-teal-bright/40
                        hover:-translate-y-1 hover:text-teal-bright`}
          >
            {cl.name}
            <br />
            <small className="text-xs text-[#8cc5cc] font-normal">{cl.sub}</small>
          </div>
        ))}
      </div>

      <p
        className="reveal max-w-2xl mx-auto mt-12 text-lg text-[#8cc5cc] leading-loose italic"
      >
        "نؤمن أن العلاقة الناجحة مع عميلنا هي التي تمتد لسنوات — أنت لا تشتري خدمة شهرية،
        بل تحصل على شريك معياره الأساسي هو نجاحك في الحصول على المزيد من العملاء."
      </p>
    </section>
  )
}
