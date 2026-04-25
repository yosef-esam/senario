import { useRef } from 'react'
import { clients } from '../data'
import { Section } from './ui/Section'

export default function Clients() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 320

    if (direction === 'next') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <Section
      id="clients"
      className="text-center bg-[#1a3545]"
    >
      <div className="section-label justify-center">عملاؤنا</div>
      <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4 text-white">تشرفنا بالعمل معهم</h2>

      <div className="flex justify-between mb-6 mt-10">
        <button onClick={() => scroll('prev')} className="text-white">←</button>
        <button onClick={() => scroll('next')} className="text-white">→</button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar items-center"
      >
        {clients.map((cl, i) => (
          <div
            key={i}
            className={`reveal reveal-d${(i % 5) + 1} min-w-[200px] md:min-w-[260px] h-[130px] flex-shrink-0
                        cursor-default transition-all duration-300
                        bg-white/[0.04] border border-teal-bright/10 rounded-2xl px-6 md:px-10
                        hover:bg-teal-bright/10 hover:border-teal-bright/40
                        hover:-translate-y-1 focus:outline-none
                        flex items-center justify-center`}
          >
            <img src={cl.Image} alt={cl.name || 'client'} className="w-full h-full object-contain" />
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
