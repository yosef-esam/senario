import { clients } from '../data'
import { Section } from './ui/Section'

export default function Clients() {
  return (
    <Section
      id="clients"
      className="text-center bg-[#0a2a35]"
    >
      <div className="section-label justify-center">عملاؤنا</div>
      <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4 text-white">تشرفنا بالعمل معهم</h2>

      <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-14 flex-wrap mt-10 md:mt-14">
        {clients.map((cl, i) => (
          <div
            key={i}
            className={`reveal reveal-d${(i % 5) + 1} cursor-default transition-all duration-300
                        bg-white/[0.04] border border-teal-bright/10 rounded-2xl px-6 md:px-10 py-5 md:py-6
                        text-lg md:text-xl font-black text-[#e8f4f6] min-w-[150px] md:min-w-[200px] flex-1 sm:flex-none
                        hover:bg-teal-bright/10 hover:border-teal-bright/40
                        hover:-translate-y-1 hover:text-teal-bright focus:outline-none`}
          >
            {cl.name}
            <br />
            <small className="text-xs text-[#8cc5cc] font-normal">{cl.sub}</small>
          </div>
        ))}
      </div>

      <p
        className="reveal max-w-2xl mx-auto mt-12 text-base md:text-lg text-[#8cc5cc] leading-relaxed md:leading-loose italic px-2"
      >
        "نؤمن أن العلاقة الناجحة مع عميلنا هي التي تمتد لسنوات — أنت لا تشتري خدمة شهرية،
        بل تحصل على شريك معياره الأساسي هو نجاحك في الحصول على المزيد من العملاء."
      </p>
    </Section>
  )
}
