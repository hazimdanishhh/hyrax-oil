# Hyrax Oil Website

A modern, SEO-optimized company website for **Hyrax Oil**, built with React, Vite, Framer-motion, Sass, and **Vike SSR**. This project uses server-side rendering (SSR) via a custom Node.js + Express server and is currently staged on **Render.com**. It serves as Hyrax Oil’s digital platform to showcase products, company info, and brand presence globally.

---

## 📁 Table of Contents

- [1. Overview](#1-overview)
- [2. Features](#2-features)
- [3. Tech Stack](#3-tech-stack)
- [4. Folder Structure](#4-folder-structure)
- [5. Getting Started](#5-getting-started)
- [6. Development](#6-development)
- [7. Production Build](#7-production-build)
- [8. Deployment](#8-deployment)
- [9. Metadata & SEO](#9-metadata--seo)
- [10. License](#10-license)
- [11. Contact](#11-contact)

---

## 1. Overview

This project powers the official website of **Hyrax Oil**, delivering a performance-optimized, scalable front-end that highlights the brand’s lubricant and transformer oil products, services, and identity. Built with modern web technologies and designed to be responsive, engaging, and SEO-ready.

---

## 2. Features

- ✅ **Server-Side Rendering** via Vike (Vite + React SSR)
- ⚡ **Fast initial load** and high Lighthouse performance
- 🔍 **Per-page SEO metadata** with dynamic `<title>` and `<meta>` tags
- 🎨 **Framer Motion animations** for modern, fluid interactions
- 📱 **Mobile-first responsive design**
- 🧩 **Modular component structure** for easy scalability

---

## 3. Tech Stack

| Layer       | Technology                   |
|-------------|------------------------------|
| Frontend    | React, SCSS, Framer Motion   |
| SSR Engine  | Vike (vite-plugin-ssr)       |
| Routing     | React Router DOM             |
| Server      | Node.js + Express            |
| Build Tool  | Vite                         |
| Deployment  | Node Web Server              |

---

## 4. Folder Structure

```bash
root/
├── src/
│   ├── pages/              # Route-based folders (e.g. index/, about/, services/)
│   │   ├── index/
│   │   │   ├── components/
│   │   │   ├── +config.js
│   │   │   ├── +onBeforeRender.server.js
│   │   │   ├── +Page.jsx
│   │   │   └── home.scss
│   │   │
│   │   └── about/
│   │       ├── components/
│   │       ├── +config.js
│   │       ├── +onBeforeRender.server.js
│   │       ├── +Page.jsx
│   │       └── about.scss
│   │
│   ├── renderer/           # Vike SSR logic (HTML streaming, hydration, layout)
│   │   ├── styles/
│   │   │   ├── index.scss  # Global Scss file
│   │   ├── +config.js
│   │   ├── +onRenderClient.jsx
│   │   ├── +onRenderHtml.jsx
│   │   ├── app.jsx
│   │   └── PageShell.jsx
│   │
│   ├── components/         # Shared reusable components (Navbar, Footer, Cards, etc.)
│   ├── functions/          # Custom hooks/utilities (e.g. useHydrated, ScrollToTop)
│   ├── data/               # Shared reusable data
│   ├── assets/             # Static files (images, logos, fonts)
│
├── server.js               # Express server that handles SSR in production
├── render.yaml             # Render.com deployment config (build/start commands)
├── vite.config.js          # Vite development/build config
├── package.json            # Scripts and dependencies
├── .env                    # Environment variables (e.g. PORT)
├── .gitignore              # Git exclusions
├── package-lock.json       # Lockfile for reproducible installs
└── README.md  ──────────── # You are here
```
---

## 5. Getting Started

Prerequisites
- Node.js v16 or newer
- npm

Setup

```bash
# Clone the repo
git clone https://github.com/hazimdanishhh/hyrax-oil.git
cd hyrax-oil

# Install dependencies
npm install

# Start development server
npm run dev

#Change the VITE_SITE_BASE_URL= in the .env file to match the appropriate base URL (for SEO and Meta)
```

Open http://localhost:5173 to view it in the browser.

---

## 6. Development

- Pages live in src/pages/ and follow Vike routing.
- Global layout is defined in PageShell.jsx.
- Per-page metadata (title, description, etc.) is defined in each route’s +onBeforeRender.server.js.
- Use SCSS for both global and scoped page styles.

---

## 7. Production Build

To prepare the app for production:

```bash
npm run build
npm start
```

This will generate:
- dist/client/: static assets (HTML, JS, CSS)
- dist/server/entry.mjs: SSR logic used by server.js

---

## 8. Deployment

Using Render.com (Node Web Service) for staging
Ensure render.yaml is configured like this:

```yaml
Copy
Edit
services:
  - type: web
    name: hyrax-oil
    env: node
    buildCommand: npm run build
    startCommand: node server.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
```

To deploy:
1. Push changes to GitHub
2. Connect Render to the repository
3. Deploy — Render will auto-build and serve via Express

---

## 9. Metadata & SEO

Each page can set SSR-friendly metadata dynamically:

```js
// Example: src/pages/index/+onBeforeRender.server.js
export function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: "Hyrax Oil | High-Performance Lubricants",
        description: "Global manufacturer of high-quality engine oils, greases, and fluids.",
      },
    },
  };
}
```

These are injected into the HTML <head> using +onRenderHtml.jsx.

---

## 10. License
This project is licensed under the MIT License.

---

## 11. Contact
Developed by Hazim Danish
For questions, please reach out via GitHub or email.