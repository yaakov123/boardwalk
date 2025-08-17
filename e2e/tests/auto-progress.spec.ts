import { test, expect } from '@playwright/test';

// Auto-progress flow: steps advance automatically after a short delay

test.describe('Auto-Progress', () => {
  test('advances steps automatically and ends', async ({ page }) => {
    await page.goto('/auto-progress.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Tour' }).click();

    const container = page.locator('.boardwalk-container');
    const progress = page.locator('.boardwalk-tooltip-progress');

    await expect(container).toBeVisible();
    await expect(progress).toHaveText('1 of 2');

    // Should auto-advance to step 2 within a few seconds
    await expect(progress).toHaveText('2 of 2', { timeout: 5000 });

    // And then end automatically
    await expect(container).toHaveCount(0, { timeout: 7000 });
  });
});
