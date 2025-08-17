import { test, expect } from '@playwright/test';

// Button-navigation flow: next/prev/finish + progress indicator

test.describe('Button navigation', () => {
  test('next/prev/finish with progress updates', async ({ page }) => {
    await page.goto('/navigation.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Tour' }).click();

    const container = page.locator('.boardwalk-container');
    const progress = page.locator('.boardwalk-tooltip-progress');

    await expect(container).toBeVisible();
    await expect(progress).toHaveText('1 of 3');
    await expect(page.locator('.boardwalk-btn-prev')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();

    // Go to step 2
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(progress).toHaveText('2 of 3');
    await expect(page.locator('.boardwalk-btn-prev')).toHaveCount(1);

    // Back to step 1
    await page.locator('.boardwalk-btn-prev').click();
    await expect(progress).toHaveText('1 of 3');

    // Forward to step 2 and 3
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(progress).toHaveText('2 of 3');
    await page.getByRole('button', { name: 'Next' }).click();

    // On last step we should see Finish instead of Next
    await expect(page.getByRole('button', { name: 'Finish' })).toBeVisible();
    await expect(progress).toHaveText('3 of 3');

    // Finish ends the tour
    await page.getByRole('button', { name: 'Finish' }).click();
    await expect(container).toHaveCount(0);
  });
});
