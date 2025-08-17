import { test, expect } from '@playwright/test';

// Simple smoke test to ensure Vite serves the page and the library boots
// This is infra only; expand with component/page-specific tests later.

test.describe('Boardwalk E2E infra', () => {
  test('smoke: page loads and tour starts', async ({ page }) => {
    await page.goto('/smoke.html');

    // Wait for the page to signal readiness
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    // Click the Start button to launch the tour
    await page.getByRole('button', { name: 'Start Tour' }).click();

    // Expect the tour container to appear
    const container = page.locator('.boardwalk-container');
    await expect(container).toBeVisible();

    // End the tour by pressing Escape (handled by keyboard manager)
    await page.keyboard.press('Escape');

    // Container should disappear
    await expect(container).toHaveCount(0);
  });
});
