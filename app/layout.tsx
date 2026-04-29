import type { Metadata } from 'next'
import { Cairo, Tajawal } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

// ─── Google Fonts ─────────────────────────────────────────────────────────────

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
  weight: ['400', '500', '700', '800', '900'],
  display: 'swap',
})

// ─── Site Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'سيناريو | شريكك التسويقي الطبي المتخصص',
  description:
    'شركة سيناريو — أكثر من 10 سنوات من الخبرة في التسويق الإلكتروني والتسويق الطبي المتخصص. نفهم احتياجاتك ونقدم حلولاً تُترجم إلى نتائج ملموسة.',
  keywords: ['تسويق طبي', 'تسويق رقمي', 'سيناريو', 'أطباء', 'مراكز طبية'],
  authors: [{ name: 'Scenario Agency' }],
  openGraph: {
    title: 'سيناريو | شريكك التسويقي الطبي المتخصص',
    description: 'أكثر من 10 سنوات من الخبرة في التسويق الطبي المتخصص',
    type: 'website',
    locale: 'ar_EG',
  },
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="font-cairo">
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  )
}
