import { test, expect } from '@playwright/test';

// Click-to-continue flow: no Next button, ignores interactive elements, advances on page click

test.describe('Click-to-Continue', () => {
  test('advances on non-interactive click, ignores interactive clicks', async ({ page }) => {
    await page.goto('/click-to-continue.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Tour' }).click();

    const container = page.locator('.boardwalk-container');
    const progress = page.locator('.boardwalk-tooltip-progress');

    await expect(container).toBeVisible();
    await expect(progress).toHaveText('1 of 2');

    // No Next button in click-to-continue mode
    await expect(page.locator('.boardwalk-btn-next')).toHaveCount(0);
    await expect(page.locator('.boardwalk-instruction-text')).toHaveText(/Click anywhere to continue/i);

    // Clicking an interactive element should NOT advance
    await page.getByRole('button', { name: 'Interactive Button' }).click();
    await expect(progress).toHaveText('1 of 2');

    // Clicking on a non-interactive area of the page should advance
    await page.mouse.click(10, 10);
    await expect(progress).toHaveText('2 of 2');

    // Clicking again should end the tour
    await page.mouse.click(10, 10);
    await expect(container).toHaveCount(0);
  });
});
