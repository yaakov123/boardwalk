# Testing with Playwright

This project includes Playwright E2E tests and minimal HTML pages.

## Scripts
- `npm run test:e2e` — Run the full suite.
- `npm run test:e2e:ui` — UI mode.
- `npm run test:e2e:headed` — Headed browser.
- `npm run test:e2e:debug` — Debug with PWDEBUG.

## Add a new test page
Create `e2e/pages/your-page.html`:
```html
<!doctype html>
<html>
  <body>
    <button id="anchor">Anchor</button>
    <script type="module">
      import { Tour } from '/src/index.ts';
      window.__boardwalkReady = true;
      window.startTour = () => {
        const t = new Tour({ id: 'demo' });
        t.addSteps([{ target: '#anchor', content: 'Hello' }]);
        t.start();
      };
    </script>
  </body>
</html>
```

Create `e2e/tests/your-page.spec.ts`:
```ts
import { test, expect } from '@playwright/test';

test('your scenario', async ({ page }) => {
  await page.goto('/e2e/pages/your-page.html');
  await page.waitForFunction(() => (window as any).__boardwalkReady === true);
  await page.evaluate(() => (window as any).startTour?.());
  await expect(page.locator('.boardwalk-container')).toBeVisible();
});
```

## One-time setup
```bash
npm install
npx playwright install
```
