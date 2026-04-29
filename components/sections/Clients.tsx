'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { clients } from '@/lib/data'
import { Section } from '@/components/ui/Section'

/**
 * Clients — horizontal scrollable logo carousel.
 * Client Component because of the scroll buttons.
 */
export default function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'prev' | 'next') => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 320
    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <Section id="clients" className="text-center" background="rgb(238,238,238)">
      <div className="section-label justify-center text-[10px] md:text-base">عملاؤنا</div>
      <h2 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-4 text-gray-800">
        تشرفنا بالعمل معهم
      </h2>

      {/* Scroll controls */}
      <div className="flex justify-between mb-6 mt-10">
        <button
          onClick={() => scroll('prev')}
          className="text-gray-600 hover:text-teal-500 text-2xl transition-colors"
          aria-label="Previous clients"
        >
          ←
        </button>
        <button
          onClick={() => scroll('next')}
          className="text-gray-600 hover:text-teal-500 text-2xl transition-colors"
          aria-label="Next clients"
        >
          →
        </button>
      </div>

      {/* Logo strip */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar items-center"
      >
        {clients.map((client, i) => (
          <div
            key={i}
            className={`reveal reveal-d${(i % 5) + 1}
              min-w-[200px] md:min-w-[260px] flex-shrink-0 cursor-default
              transition-all duration-300 rounded-2xl px-6 md:px-10 py-4
              flex flex-col items-center justify-center gap-3
            `}
          >
            <div className="w-full h-[140px] flex items-center justify-center">
              <Image
                src={client.Image}
                alt={client.name ?? 'client logo'}
                width={200}
                height={110}
                className="h-[90px] md:h-[110px] w-auto max-w-full object-contain hover:scale-110 transition-transform duration-300"
                unoptimized
              />
            </div>
            {client.duration && (
              <p className="text-gray-500 text-sm md:text-base font-medium text-center">
                لمدة تتجاوز {client.duration}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Quote */}
      <p className="reveal max-w-2xl mx-auto mt-12 text-base md:text-lg text-gray-500 leading-relaxed md:leading-loose italic px-2">
        &ldquo;نؤمن أن العلاقة الناجحة مع عميلنا هي التي تمتد لسنوات — أنت لا تشتري خدمة شهرية،
        بل تحصل على شريك معياره الأساسي هو نجاحك في الحصول على المزيد من العملاء.&rdquo;
      </p>
    </Section>
  )
}
