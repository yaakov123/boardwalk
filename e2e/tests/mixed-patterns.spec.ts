import { test, expect } from '@playwright/test';

// Mixed patterns: button -> click-to-continue -> button

test.describe('Mixed Interaction Patterns', () => {
  test('navigates across mixed patterns and backtracks', async ({ page }) => {
    await page.goto('/mixed-patterns.html');
    await expect(page.locator('body[data-test-ready="true"]').first()).toBeVisible();

    await page.getByRole('button', { name: 'Start Tour' }).click();

    const container = page.locator('.boardwalk-container');
    const progress = page.locator('.boardwalk-tooltip-progress');

    await expect(container).toBeVisible();
    await expect(progress).toHaveText('1 of 3');

    // Step 1 (button): Next available
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();

    // Step 2 (click-to-continue): No Next button
    await expect(progress).toHaveText('2 of 3');
    await expect(page.locator('.boardwalk-btn-next')).toHaveCount(0);
    await expect(page.locator('.boardwalk-instruction-text')).toHaveText(/Click anywhere to continue/i);

    // Click page to advance to step 3
    await page.mouse.click(10, 10);
    await expect(progress).toHaveText('3 of 3');

    // Go back to step 2 using Prev
    await page.locator('.boardwalk-btn-prev').click();
    await expect(progress).toHaveText('2 of 3');
    await expect(page.locator('.boardwalk-btn-next')).toHaveCount(0);

    // Advance again by clicking page
    await page.mouse.click(10, 10);
    await expect(progress).toHaveText('3 of 3');

    // Finish
    await page.getByRole('button', { name: 'Finish' }).click();
    await expect(container).toHaveCount(0);
  });
});
