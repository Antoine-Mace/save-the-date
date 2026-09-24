# 💌 Save the Date

A simple, elegant **Next.js + TypeScript** site for sharing wedding details with guests — built with multi-language support so every guest can read it in their own language.

🔗 **Live site (our wedding):** [wedding.bonnie.and.antoinemace.com](https://wedding.bonnie.and.antoinemace.com/)

## ✨ Features

- 🌍 **Multi-language support** — powered by [`next-i18next`](https://github.com/i18next/next-i18next), so the page automatically adapts to guests' preferred language
- 📅 **Add to Calendar** button — guests can save the date directly to Google, Apple, Outlook, and more via [`add-to-calendar-button`](https://github.com/add2cal/add-to-calendar-button)
- Light & Dark Mode support
- 🎨 Clean, responsive design with [Font Awesome](https://fontawesome.com/) icons
- ⚡ Built on [Next.js](https://nextjs.org/) with TypeScript for type safety
- ☁️ Deployed on [Netlify](https://www.netlify.com/)

## 🛠 Tech Stack

| Category | Tool |
|---|---|
| Framework | [Next.js](https://nextjs.org/) |
| Language | TypeScript |
| UI | React |
| i18n | next-i18next |
| Icons | Font Awesome |
| Calendar integration | add-to-calendar-button |
| Hosting | Netlify |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or newer (see `.nvmrc`)
- npm

### Installation

```bash
git clone https://github.com/Antoine-Mace/save-the-date.git
cd save-the-date
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Other scripts

```bash
npm run build   # build for production
npm run start   # start the production server
npm run lint    # lint the project (ESLint CLI; Next.js 16 removed `next lint`)
```

## 💍 Make it your own

Everything specific to our wedding is marked with a `CUSTOMIZE:` comment. List every place to edit with:

```bash
grep -rn "CUSTOMIZE" --exclude-dir=node_modules --exclude-dir=.next .
```

| What | Where |
|---|---|
| Names, titles and all text guests read | `public/locales/<lang>/common.json` |
| Date & time | `public/locales/<lang>/common.json` + `src/components/addToCalendar.tsx` |
| Venue name & Google Maps link | `public/locales/<lang>/common.json` + `pages/index.tsx` + `pages/info/index.tsx` |
| Calendar event (date, times, time zone, address, file name) | `src/components/addToCalendar.tsx` |
| Info cards (travel, stay, day plan, dress code…) | `pages/info/index.tsx` + `public/locales/<lang>/common.json` |
| Gift / honeymoon fund link | `pages/info/index.tsx` (`HONEYMOON_FUND_URL`) |
| Menu form and optional RSVP link | `src/components/layout.tsx` + `pages/index.tsx` |
| Footer names and link, GitHub badge | `src/components/layout.tsx` |
| Background video and favicon | `public/wedding.mp4`, `public/favicon.ico` |
| Video framing, accent color | `src/styles/Default.module.css` |
| Languages offered | `next-i18next.config.js` + `src/components/addToCalendar.tsx` |
| Allowed outside content (CSP) | `netlify.toml` |
| Live site link | this README |

### Text

Every word guests see lives in `public/locales/<lang>/common.json` (JSON can't hold comments, so they aren't marked). Update these keys in **every** language: `pageTitle`, `pageDescription`, `title`, `weddingDateAndTime`, `weddingLocation`, `addToCalendarEventTitle`, and the info card texts (`...Title` / `...Text`). Keep the same keys in every language file.

### Media

Replace `public/wedding.mp4` and `public/favicon.ico` with your own files, keeping the same names. The video is served from the site itself, so keep it small (a short, compressed clip without sound works well).

## 📁 Project Structure

```
save-the-date/
├── pages/          # Next.js pages
├── public/         # Static assets (images, favicon, etc.)
├── src/            # Components, styles, and shared code
├── next-i18next.config.js  # i18n configuration
├── next.config.js  # Next.js configuration
├── eslint.config.mjs       # ESLint flat config
├── global.d.ts     # Type declaration for the add-to-calendar web component
└── netlify.toml    # Netlify deployment config + security headers
```

## 🌐 Adding a Language

1. Add a new locale folder under your translations directory (following the `next-i18next` structure).
2. Add the locale code to `next-i18next.config.js`.
3. Translate the existing keys into the new language.

## 📦 Deployment

This project is configured for [Netlify](https://www.netlify.com/) via `netlify.toml`. Pushing to the main branch triggers an automatic deploy. It can also be deployed on [Vercel](https://vercel.com/) or any platform that supports Next.js.

## 📄 License

The code is released under the [MIT License](LICENSE). Feel free to fork it as a template for your own save-the-date site! See [Make it your own](#-make-it-your-own) to get started. 💍

The wedding content (photos, the background video, names and event details) belongs to Bonnie & Antoine and isn't covered by the licence. Please replace it with your own.