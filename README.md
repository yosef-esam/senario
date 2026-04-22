# سيناريو — Landing Page

React + Vite + Tailwind CSS project for Scenario Medical Marketing.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📦 Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 🗂 Project Structure

```
scenario-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx          ← React entry point
    ├── App.jsx           ← Root component (imports all sections)
    ├── index.css         ← Tailwind directives + global styles
    ├── data/
    │   └── index.js      ← All static content (text, arrays, config)
    └── components/
        ├── Navbar.jsx    ← Fixed nav with active link detection
        ├── Hero.jsx      ← Hero section with animated background
        ├── Challenges.jsx← 4-card challenge grid
        ├── Services.jsx  ← 9-card services grid
        ├── Pricing.jsx   ← 3 pricing plans (نبض / عناية / ريادة)
        ├── Clients.jsx   ← Client logos + trust quote
        ├── Contact.jsx   ← Form + WhatsApp send button
        └── Footer.jsx    ← Footer with social links
```

## ✏️ Customising Content

All text content lives in **`src/data/index.js`** — edit there to update:
- Nav links
- Hero stats
- Challenge cards
- Services list
- Pricing plans & features
- Client names
- Social links

## 📱 WhatsApp Number

To change the WhatsApp number, open `src/components/Contact.jsx` and update:

```js
window.open(`https://wa.me/201094436401?text=...`)
```

Replace `201094436401` with your number (country code + number, no `+` or spaces).

## 🎨 Colours

All design tokens are in `tailwind.config.js` under `theme.extend.colors`:

| Token          | Value     | Usage              |
|----------------|-----------|--------------------|
| `teal-dark`    | `#0a2a35` | Page background    |
| `teal-mid`     | `#0d4a5a` | Card backgrounds   |
| `teal-bright`  | `#2ab8c8` | Accents, borders   |
| `gold`         | `#f0a500` | CTA, highlights    |
| `gold-light`   | `#ffc940` | Button hover       |
| `ink`          | `#061820` | Dark section bg    |
