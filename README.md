# سيناريو — Scenario Agency

> Marketing agency website converted from Vite/React to **Next.js 14 App Router** with TypeScript and clean architecture.

---

## 🏗 Project Architecture

```
scenario-next/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — fonts, metadata, Toaster
│   ├── page.tsx                # Home page (composes all sections)
│   └── globals.css             # Tailwind + custom CSS layers
│
├── components/
│   ├── layout/                 # Site-wide layout pieces
│   │   ├── Navbar.tsx          # 'use client' — scroll tracking, mobile drawer
│   │   ├── Footer.tsx          # Server Component
│   │   └── ScrollReveal.tsx    # 'use client' — IntersectionObserver
│   │
│   ├── sections/               # One file per page section
│   │   ├── Hero.tsx            # Server Component
│   │   ├── Challenges.tsx      # Server Component
│   │   ├── Services.tsx        # Server Component
│   │   ├── Pricing.tsx         # Server Component
│   │   ├── Clients.tsx         # 'use client' — scroll carousel
│   │   └── Contact.tsx         # 'use client' — form + hook
│   │
│   └── ui/                     # Reusable primitive components
│       ├── Button.tsx          # Polymorphic (button | a | …)
│       ├── Card.tsx
│       ├── Section.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Textarea.tsx
│       └── PlanCard.tsx
│
├── lib/
│   └── data.ts                 # All site data with TypeScript types
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces
│
├── public/                     # Static assets (images, icons, logos)
│   └── clients-logo/
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy your public assets from the original project
cp -r <original>/public/* public/

# 3. Run in development
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Key Migrations

| Vite / React                     | Next.js 14                          |
|----------------------------------|-------------------------------------|
| `vite.config.js`                 | `next.config.ts`                    |
| `index.html` + `src/main.jsx`    | `app/layout.tsx` + `app/page.tsx`   |
| `<img src="..." />`              | `<Image />` from `next/image`       |
| Google Fonts via `<link>`        | `next/font/google` (zero CLS)       |
| All components are client-side   | Server Components by default; only interactive parts use `'use client'` |
| `.jsx` files                     | `.tsx` files with full TypeScript   |
| `src/data/index.js`              | `lib/data.ts` with typed exports    |

---

## 📦 Stack

- **Next.js 14** (App Router)
- **TypeScript 5**
- **Tailwind CSS 3**
- **react-hot-toast**
- **react-icons**
- **next/font/google** — Cairo & Tajawal (Arabic fonts, zero layout shift)
- **next/image** — automatic image optimization
