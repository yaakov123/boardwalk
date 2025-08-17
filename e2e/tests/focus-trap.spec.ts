import { test, expect } from '@playwright/test';

// Focus trap behavior and tab cycling within container

test.describe('Focus Trap', () => {
  test('traps focus inside tour container and cycles with Tab', async ({ page }) => {
    await page.goto('/focus-trap.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Tour' }).click();

    const container = page.locator('.boardwalk-container');
    await expect(container).toBeVisible();

    // Give FocusManager time to collect focusables
    await page.waitForTimeout(150);

    // Initial focus should be on Skip link
    const skip = page.getByRole('link', { name: 'Skip tour' });
    await expect(skip).toBeFocused();

    // Tab should move focus to primary action button (Next or Finish)
    await page.keyboard.press('Tab');
    const actionBtn = page.getByRole('button', { name: /Next|Finish/ });
    await expect(actionBtn).toBeFocused();

    // Tab again should wrap back to Skip link (since only two focusables initially)
    await page.keyboard.press('Tab');
    await expect(skip).toBeFocused();

    // Shift+Tab from Skip should move to Next (wrap backwards)
    await page.keyboard.press('Shift+Tab');
    await expect(actionBtn).toBeFocused();

    // Escape closes
    await page.keyboard.press('Escape');
    await expect(container).toHaveCount(0);
  });
});
