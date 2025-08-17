# Boardwalk E2E (Playwright)

This folder contains Playwright end-to-end tests and the HTML pages they run against.

## Structure

- `e2e/pages/` — Minimal HTML pages that import the library directly from `src/` for testing.
- `e2e/tests/` — Playwright test specs.
- `e2e/tsconfig.json` — Editor type support for Playwright types.
- Root `playwright.config.ts` — Starts Vite on a fixed port for tests.

## Scripts

- `npm run test:e2e` — Run the full Playwright suite.
- `npm run test:e2e:ui` — Run tests in UI mode.
- `npm run test:e2e:headed` — Headed mode for quick debugging.
- `npm run test:e2e:debug` — Debug mode with PWDEBUG.

## One-time setup

1. Install dependencies

```bash
npm install
```

2. Install Playwright browsers

```bash
npx playwright install
```

## Adding a new test page

1. Create an HTML file under `e2e/pages/your-page.html`:

```html
<!doctype html>
<html>
  <body>
    <button id="anchor">Anchor</button>
    <script type="module">
      import { Tour } from '/src/index.ts';
      window.__boardwalkReady = true; // signal readiness
      // Optionally expose helpers to window for tests
      window.startTour = () => {
        const t = new Tour({ id: 'demo' });
        t.addSteps([{ target: '#anchor', content: 'Hello' }]);
        t.start();
      };
    </script>
  </body>
</html>
```

2. Create a spec in `e2e/tests/your-page.spec.ts`:

```ts
import { test, expect } from '@playwright/test';

test('your scenario', async ({ page }) => {
  await page.goto('/e2e/pages/your-page.html');
  await page.waitForFunction(() => (window as any).__boardwalkReady === true);
  await page.evaluate(() => (window as any).startTour?.());
  await expect(page.locator('.boardwalk-container')).toBeVisible();
});
```

## Tips

- Prefer exposing simple helpers via `window` in the test page for clarity.
- Use `data-*` attributes or a `data-test-ready` flag to signal readiness.
- Keep pages minimal; they should exercise one component/interaction at a time.
