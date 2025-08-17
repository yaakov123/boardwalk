# Testing Guidelines

This document describes how we test the Boardwalk library using unit tests (Vitest) and end‑to‑end tests (Playwright). It also outlines structure, conventions, and best practices.

## Test Types

- **Unit tests (Vitest):** Validate logic of modules in `src/`.
- **End‑to‑End tests (Playwright):** Drive a browser against minimal HTML pages in `e2e/pages/` that import the built library from `dist/`.

---

## Unit Tests (Vitest)

- **Location:** co‑locate near source (e.g. `src/module.test.ts`) or in a dedicated folder.
- **Environment:** jsdom (configured in `vite.config.ts`).
- **Naming:** `*.test.ts` or `*.spec.ts`.
- **Run:**
  - All: `npm run test`
  - Watch (suggested): `npm run test -- --watch`
- **Best practices:**
  - Keep tests fast and deterministic; isolate side effects.
  - Prefer focused tests for utilities and pure logic.
  - Mock DOM as needed; avoid relying on real timeouts.

---

## End‑to‑End Tests (Playwright)

- **Why E2E?** Validate real interactions, keyboard behavior, focus management, overlay, and ARIA.
- **Dist‑first principle:** E2E pages import the built bundle from `dist/` to mirror real consumers. No direct `src/` imports.

### Project Structure

- `e2e/pages/` — Minimal HTML pages under test.
  - Example: `e2e/pages/smoke.html` imports `'/dist/boardwalk.es.js'` and exposes UI to start flows (e.g., a Start button).
- `e2e/tests/` — Playwright specs.
  - Example: `e2e/tests/smoke.spec.ts` navigates to `/smoke.html`, clicks the Start button, and ends with `Escape`.
- `e2e/tsconfig.json` — Type support for `@playwright/test`.
- `scripts/e2e-server.mjs` — Static server for E2E pages and built assets.
- `playwright.config.ts` — Uses a separate server on `http://localhost:5174` (not the Vite dev server).

### Commands

- Install dependencies: `npm install`
- Install browsers: `npx playwright install`
- Run all E2E tests: `npm run test:e2e`
- Headed mode: `npm run test:e2e:headed`
- UI mode: `npm run test:e2e:ui`
- Debug: `npm run test:e2e:debug`
- Codegen (points at E2E server): `npm run test:e2e:codegen`

Playwright auto‑starts the E2E server via `npm run e2e:server` on port 5174 (see `playwright.config.ts`). The server serves:
- `e2e/pages/*` at `/`
- `dist/*` at `/dist/*`

`pree2e:server` ensures `npm run build` runs before the server to provide a fresh `dist/`.

### Writing E2E Pages

- Keep pages minimal and deterministic.
- Always import from the built bundle:

```html
<script type="module">
  import { Tour } from '/dist/boardwalk.es.js';
  // ... initialize UI and listeners
</script>
```

- Signal readiness to tests using a simple flag/attribute:

```js
document.body.setAttribute('data-test-ready', 'true');
```

- Prefer real UI controls (buttons/links) over attaching helpers to `window`. This keeps tests representative and pages cleaner.

### Writing E2E Tests

- Navigate to the page and wait for readiness:

```ts
await page.goto('/your-page.html');
await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();
```

- Interact using accessible queries and real user actions:

```ts
await page.getByRole('button', { name: 'Start Tour' }).click();
await expect(page.locator('.boardwalk-container')).toBeVisible();
```

- End flows using built‑in controls or keyboard:

```ts
await page.keyboard.press('Escape');
await expect(page.locator('.boardwalk-container')).toHaveCount(0);
```

- Avoid brittle selectors; prefer roles, labels, and stable classnames.

### Flakiness and Waiting

- Use `expect(...).toBeVisible()` instead of arbitrary `waitForTimeout`.
- Keep timeouts tight; only increase when truly necessary.
- Remember overlays/containers may set `pointer-events: none`; interact with visible controls or use keyboard where appropriate.

### Artifacts and Debugging

- Trace on first retry is enabled (`trace: 'on-first-retry'`).
- Reports and results are ignored via `.gitignore`:
  - `playwright-report/`, `test-results/`, `playwright/.cache`

### Page Objects (Optional)

- For larger suites, create page objects under `e2e/pages-objects/` (or similar) to encapsulate interactions.
- Keep them thin and focused on semantics (e.g., `startTour()`, `endTour()`), not DOM details.

---

## Adding New Tests (Checklist)

1. **Create a page** in `e2e/pages/your-page.html` that imports from `'/dist/boardwalk.es.js'` and sets `data-test-ready` when ready.
2. **Write a spec** in `e2e/tests/your-page.spec.ts` that:
   - navigates to `/your-page.html`
   - waits for readiness
   - interacts via real UI (buttons/links)
   - asserts expected UI changes
   - ends with Escape or dedicated UI
3. **Run locally:** `npm run test:e2e` (or `:headed`/`:ui`).

---

## CI (Recommended)

- Ensure the workflow installs browsers (`npx playwright install`) and runs `npm run test:e2e`.
- Cache `~/.cache/ms-playwright` to speed up runs.

---

## Troubleshooting

- Missing `dist`: run `npm run build` (handled automatically by the E2E server pre‑script).
- Playwright not installed: run `npm install` and `npx playwright install`.
- Port conflicts on 5174: stop the conflicting process or change the port in `playwright.config.ts` and `scripts/e2e-server.mjs`.
