# 💌 Save the Date

A simple, elegant **Next.js + TypeScript** site for sharing wedding details with guests — built with multi-language support so every guest can read it in their own language.

🔗 **Live site:** [wedding.bonnie.and.antoinemace.com](https://wedding.bonnie.and.antoinemace.com/)

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

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm or Yarn

### Installation

```bash
git clone https://github.com/Antoine-Mace/save-the-date.git
cd save-the-date
npm install
# or
yarn install
```

### Run locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Other scripts

```bash
npm run build   # build for production
npm run start   # start the production server
npm run lint    # lint the project
```

## 📁 Project Structure

```
save-the-date/
├── pages/          # Next.js pages (including API routes under pages/api)
├── public/         # Static assets (images, favicon, etc.)
├── src/            # Components, styles, and shared code
├── next-i18next.config.js  # i18n configuration
├── next.config.js  # Next.js configuration
└── netlify.toml    # Netlify deployment configuration
```

## 🌐 Adding a Language

1. Add a new locale folder under your translations directory (following the `next-i18next` structure).
2. Add the locale code to `next-i18next.config.js`.
3. Translate the existing keys into the new language.

## 📦 Deployment

This project is configured for [Netlify](https://www.netlify.com/) via `netlify.toml`. Pushing to the main branch triggers an automatic deploy. It can also be deployed on [Vercel](https://vercel.com/) or any platform that supports Next.js.

## 📄 License

This project is a personal wedding website. Feel free to fork it as a template for your own save-the-date site! 💍