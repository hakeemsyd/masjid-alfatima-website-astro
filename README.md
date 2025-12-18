# Al-Fatimah Mosque - Static Website

A fast, SEO-optimized static website built with Astro and SCSS.

## Features

- 📅 Dual calendar display (Georgian & Islamic Hijri)
- 🕌 Shia prayer times
- 🎪 Community events carousel
- 🛎️ Services showcase
- ⚡ Lightning-fast static site generation
- 🎯 Perfect SEO optimization
- 📱 Fully responsive design

## 🚀 Project Structure

```text
/
├── public/                      # Static assets
│   ├── images/
│   │   ├── events/             # Event banner images
│   │   ├── services/           # Service images
│   │   ├── svgs/               # SVG icons
│   │   └── webp/               # Optimized images
│   ├── fonts/                  # Custom fonts
│   └── robots.txt              # SEO
├── src/
│   ├── components/
│   │   ├── common/             # Reusable components
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── seo/                # SEO & meta tags
│   │   ├── prayer/             # Prayer times section
│   │   ├── calendar/           # Date display
│   │   ├── carousel/           # Image carousels
│   │   └── sections/           # Page sections
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Routes (file-based routing)
│   ├── lib/
│   │   └── api/                # API integrations
│   ├── scripts/                # Client-side JS
│   ├── styles/                 # SCSS files
│   │   └── components/         # Component styles
│   ├── types/                  # TypeScript types
│   └── data/                   # Static data (events, services)
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
