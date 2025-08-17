# Boardwalk Content Strategy

A practical, developer-first plan to get Boardwalk (interactive product tour library) on the radar across GitHub, npm, and the frontend community.

Last updated: 2025-08-17

---

## 1) Objectives and North Star

- **Primary goal (90 days)**
  - 1,000 GitHub stars
  - 10,000 total npm downloads
  - Top-10 ranking for 3 core keywords (see SEO below)
- **Secondary goals**
  - 3+ community integrations/examples (React, Vue, Svelte)
  - 10 quality backlinks to docs site/README
  - 2 newsletter mentions (e.g., JS Weekly, Frontend Focus)

Business value: higher adoption, credibility, and contributions leading to faster roadmap velocity.

---

## 2) Positioning & Messaging

- **Elevator pitch**: “Boardwalk is a lightweight, zero‑dependency TypeScript library for creating accessible, themeable, and flexible product tours in any web app.”
- **Core value props (grounded in code)**
  - **Flexible interaction patterns**: `button`, `click-to-continue`, `auto-progress` in `src/types.ts` (`InteractionPattern`) and `src/tour.ts` methods like `setInteractionPattern()`.
  - **First-class accessibility**: focus trapping and ARIA live region via `FocusManager`, `announce()`, `createLiveRegion()`, `ARIA_ROLES` in `src/accessibility.ts`.
  - **Keyboard customization**: `DEFAULT_KEY_BINDINGS`, `KeyboardManager`, `setKeyBindings()` in `src/keyboard.ts`.
  - **Theming**: `setTheme`, `createTheme`, `customizeTheme`, `resetTheme` exported in `src/index.ts` and documented in `theming.md`.
  - **Developer ergonomics**: Strong TypeScript types (`src/types.ts`), small footprint, no external deps.

- **Tagline options**
  - “Guided tours that feel native to your app.”
  - “Accessible, themeable product tours for modern web apps.”

- **Proof/feature receipts**
  - `src/types.ts` — `interactionPattern`, `waitForTarget`, `targetWaitTimeout`, callbacks (`onStart`, `onEnd`, `onCancel`, `onKeyAction`).
  - `src/keyboard.ts` — `DEFAULT_KEY_BINDINGS`, `KeyboardManager`.
  - `src/accessibility.ts` — `FocusManager`, `announce()`, `createLiveRegion()`.
  - `src/index.ts` — theming exports.
  - `README.md` — features, API overview.

---

## 3) Target Audiences & Use Cases

- **Frontend engineers** adding onboarding to SaaS dashboards and internal tools.
- **PMs/designers with dev support** needing quick, brand‑consistent tours.
- **OSS maintainers** who want a simple, accessible tour for docs/demos.

Use cases: new user onboarding, feature discovery, release tours, internal training flows.

---

## 4) SEO Strategy

- **Primary keywords**: product tour library, guided tour JavaScript, website tour library, user onboarding JavaScript, TypeScript tour library, accessible product tour.
- **Secondary keywords**: click‑to‑continue tour, auto‑progress tour, ARIA live region, focus trap library, keyboard navigation library, themeable UI tour.
- **Long‑tail queries**: “add a product tour to React app,” “how to make accessible product tours,” “auto‑advance onboarding steps.”

- **Topic clusters**
  1) Getting Started & Core Concepts
  2) Theming & Design Systems
  3) Accessibility & Keyboard
  4) Framework Integrations (React, Vue, Svelte, Next.js)
  5) Advanced (waiting for targets, dynamic content)
  6) Testing & CI (Vitest/Playwright)
  7) Migration & Comparisons (Intro.js, Shepherd.js, React Joyride)

- **On‑page basics**: descriptive titles, meta descriptions, H1/H2 structure, code samples, internal links, canonical links for cross‑posts, fast page load.

---

## 5) Content Pillars & Signature Pieces

- **Pillar 1 — Guide**: “Accessible Product Tours in Modern Web Apps (with Boardwalk)”
- **Pillar 2 — Comparison**: “Boardwalk vs Intro.js vs Shepherd.js vs React Joyride: picking the right tour library”
- **Pillar 3 — Deep Dive**: “Designing Click‑to‑Continue & Auto‑Progress Interactions that Convert”
- **Pillar 4 — Engineering**: “Keyboard Navigation & ARIA Live Regions: A Practical A11y Playbook”
- **Pillar 5 — Theming**: “From Brand Tokens to Beautiful Tours: Theming Boardwalk”

Each pillar spawns tutorials, shorts, and code sandboxes.

---

## 6) 8‑Week Editorial Calendar (stable cadence, 2 posts/week)

- **Week 1**
  - Launch post: “Introducing Boardwalk — an accessible, themeable product tour library (TypeScript, zero‑deps)”
  - Tutorial: “Add a product tour in 10 minutes (Vanilla JS)”
- **Week 2**
  - React tutorial: “Add a guided tour to your React app (hooks + portals)”
  - A11y deep‑dive: focus trapping, `announce()`, live regions (`src/accessibility.ts`)
- **Week 3**
  - Theming guide: tokens, CSS vars, `createTheme()` + `customizeTheme()` (`theming.md`)
  - Keyboard customization: `DEFAULT_KEY_BINDINGS`, power‑user tips (`src/keyboard.ts`)
- **Week 4**
  - Interactions: button vs click‑to‑continue vs auto‑progress (when and why)
  - Testing tours with Playwright + Vitest; CI setup (use `TestingGuidelines.md`)
- **Week 5**
  - Next.js integration (SSR considerations, dynamic targets)
  - Advanced: waiting for dynamic elements with `waitForTarget` and `targetWaitTimeout` (`src/types.ts`)
- **Week 6**
  - Migration: from Intro.js/Shepherd.js to Boardwalk (balanced, code‑first)
  - Design systems: integrate with tokens; dark mode support
- **Week 7**
  - Analytics & callbacks: `onStart`, `onEnd`, `onCancel`, custom events (`onKeyAction`)
  - Localization patterns for tours
- **Week 8**
  - Case study: adding a tour to a real OSS app
  - Launch recap (or Product Hunt announcement write‑up)

For each post: target keywords, 1–2 code sandboxes, CTA (star repo, try demo, npm install).

---

## 7) Distribution & Launch Plan

- **Owned**
  - GitHub: upgrade `README.md` (badges: npm, size/bundlephobia, Playwright; GIF demo; topics). Add `homepage` and `repository` in `package.json`.
  - Demo: host `index.html` live via GitHub Pages/Netlify; add prominent link in README.
  - Docs site: VitePress/Docusaurus with Guides, API, Examples; auto‑deploy on main.

- **Earned/Community**
  - Newsletters: JavaScript Weekly, Frontend Focus, React Status (pitch with concise blurb + demo link).
  - HN: “Show HN: Boardwalk — Accessible, themeable product tour library (TypeScript, zero‑deps)” with live demo + repo.
  - Product Hunt: day‑of assets (logo, screenshots, short video, feature bullets, demo, docs link).
  - Dev.to/Hashnode cross‑posts (canonical to docs/blog).
  - Reddit: r/webdev, r/javascript, r/reactjs for framework‑specific guides (avoid spam; engage in comments).
  - X/Twitter & LinkedIn: code snippets, GIFs, threads; tag relevant dev accounts.
  - Awesome lists: awesome‑javascript, awesome‑frontend, awesome‑onboarding.
  - StackOverflow: seed 3–5 Q/As about “click‑to‑continue tour,” “keyboard nav in tours,” citing Boardwalk as one solution.

- **Partnering**
  - Co‑marketing with UI kits/design systems (e.g., Tailwind, Radix examples) via sample integrations.
  - Framework ecosystem content swaps (React/Vue/Svelte community blogs).

---

## 8) Documentation & Site Plan

- **IA**
  - Getting Started
  - Guides: Interactions, Theming, Accessibility, Keyboard, Dynamic Targets, Testing
  - API Reference (extract types from `src/`)
  - Examples (frameworks + sandboxes)
  - FAQ, Troubleshooting

- **Playground**
  - Interactive theme playground (controls for tokens, preview live tour snippet).

- **Content standards**
  - All code TypeScript‑first, runnable; link to sandbox; screenshots/GIFs ≤3MB.
  - Accessibility notes and keyboard hints in each guide.

---

## 9) Community & DevRel

- Enable GitHub Discussions; label “good first issue”; CONTRIBUTING and CODE_OF_CONDUCT.
- Monthly “What’s new” post (release notes + roadmap update).
- Optional Discord once Discussions are active; keep single source of truth on GitHub.
- “Office hours” stream per release (short, 20–30 min).

---

## 10) Measurement & KPIs

- **Acquisition**: GitHub stars, unique visitors to README/docs, npm installs.
- **Engagement**: time on page, scroll depth, sandbox opens, demo clicks.
- **SEO**: rankings for primary keywords, clicks/impressions (GSC), backlinks gained.
- **Community**: issues from new users, PRs, Discussions, newsletter mentions.

- **Instrumentation**
  - UTM parameters on all campaign links.
  - Plausible/GA4 on docs site; Search Console.
  - Track weekly: npm (downloads), GitHub (stars/issues), SEO (rankings).

---

## 11) Risks & Mitigations

- **Competitive space**: differentiate with a11y + theming + interaction flexibility; publish comparison + migration guides.
- **Perceived complexity**: provide “10‑minute” tutorials and sandboxes.
- **Framework adoption**: ship official examples and wrappers where sensible (keep core unopinionated).

---

## 12) Immediate Next Steps (2 weeks)

- **Assets**
  - Create logo + social OG images; record 20–30s demo (GIF + mp4).
  - Capture screenshots from `index.html` demo.
- **Repo hygiene**
  - README: add badges (npm, size, test), GIF demo, backlink to docs, topics.
  - `package.json`: add `homepage`, `repository`, richer `keywords`.
- **Docs**
  - Stand up docs site (VitePress/Docusaurus) with Getting Started + 2 guides (A11y, Theming).
- **Content**
  - Write Week 1 posts; prep Week 2 drafts.
  - Create 3 CodeSandbox templates (Vanilla, React, Vue).
- **Distribution**
  - Prepare HN and Product Hunt blurbs; outreach to newsletters.

---

## 13) Messaging & Copy Snippets

- **One‑liner**: “Accessible, themeable product tours for modern web apps — in TypeScript, zero deps.”
- **CTA**: “npm i boardwalk • Try the live demo • Star the repo”
- **Show HN blurb**: “I built Boardwalk, a zero‑dependency TypeScript library for accessible, themeable product tours. It supports click‑to‑continue and auto‑progress patterns, custom keyboard bindings, and ARIA live announcements. Demo + source inside.”
- **Product Hunt tagline**: “Ship accessible, on‑brand product tours — fast.”

---

## 14) Editorial Checklist (per post)

- Clear keyword target; optimized title/meta
- Runnable TypeScript code; sandbox link; screenshots/GIF
- Accessibility callouts; keyboard notes
- Links to API (`README.md`), `theming.md`, and relevant sources in `src/`
- Strong CTA (demo, repo, npm)
- Cross‑post plan with canonical URL

---

## 15) Appendix: Competitive Landscape (quick)

- Intro.js (popular, dependency‑light, not TypeScript‑first)
- Shepherd.js (feature‑rich, heavier, framework bindings)
- React Joyride (React‑only)
- Driver.js (onboarding overlays)

Boardwalk’s edge: zero deps, TypeScript API, robust a11y primitives, flexible interaction patterns, and theme tooling.
