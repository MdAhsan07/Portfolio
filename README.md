# Md Ahsan — Portfolio

A dark, glassmorphic, recruiter-focused portfolio built with React, Tailwind CSS, and Framer Motion.
The signature visual motif is a **code-editor / terminal aesthetic** (traffic-light window bars, monospace
section labels like `// 01_about`, a Python "profile.py" panel in the hero) to reflect the CS/DSA/AI identity
the brief called for, instead of a generic gradient-blob hero.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## 3. Deploy to Vercel

- Push this folder to a GitHub repo.
- Import the repo in [vercel.com/new](https://vercel.com/new).
- Framework preset: **Vite** (auto-detected). No extra config needed —
  build command `npm run build`, output directory `dist`.

## 4. Customize content

Almost everything — name, roles, bio, skills, projects, achievements, coding-profile stats,
and social links — lives in one file:

```
src/data/siteData.js
```

Edit that file and every section updates automatically. No need to touch component code
unless you want to change layout or design.

### Coding profile stats
The GitHub / LeetCode / GFG stat numbers in `siteData.js` (`codingProfiles`) are **placeholders**
(e.g. "150+ problems solved", "#9 college rank") since they can't be fetched live from a static
site without a backend. Update them by hand whenever your real stats change, or later wire up
each platform's public API/stats card service if you want them to stay live.

### Resume
The download/contact buttons point to `public/resume.pdf`. Replace that file to update the resume
without touching any code.

## 5. Design tokens

| Role | Value |
|---|---|
| Background | `#04070D` (void) / `#0A1128` (navy) |
| Accent — primary | `#3B6EFF` (blue) |
| Accent — secondary | `#22D3EE` (cyan) |
| Accent — tertiary | `#7C6BFF` (violet) |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono / utility font | JetBrains Mono |

All defined in `tailwind.config.js` under `theme.extend`.

## 6. Structure

```
src/
  components/   → one component per section (Hero, About, Skills, Projects, ...)
  data/         → siteData.js — all editable content in one place
  index.css     → design tokens, glass utility classes, accessibility rules
  App.jsx       → composes the page + loading screen
```

## 7. Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations shorten to ~0ms).
- Visible focus rings on all interactive elements.
- Semantic landmarks (`header`, `main`, `footer`, `section` with `id`s for nav anchors).
- Particle background is canvas-based and lightweight (~90 nodes max, capped by viewport size).
