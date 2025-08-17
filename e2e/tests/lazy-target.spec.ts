import { test, expect } from '@playwright/test';

// E2E coverage for lazy-loaded target support via waitForTarget

test.describe('Lazy-loaded targets', () => {
  test('waitForTarget: true uses tour default timeout and succeeds when element appears', async ({ page }) => {
    await page.goto('/lazy-target.html');

    // Page readiness
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    // Start scenario: waitForTarget: true with tour targetWaitTimeout=1500 and inject after 300ms
    await page.getByRole('button', { name: 'Start Wait (true)' }).click();

    // Container should appear
    const container = page.locator('.boardwalk-container');
    await expect(container).toBeVisible();

    // The lazy button should appear after ~300ms
    const lazy = page.locator('#lazy-el');
    await expect(lazy).toBeVisible();

    // The highlight should appear as the step attaches to the target
    const highlight = page.locator('.boardwalk-highlight');
    await expect(highlight).toBeVisible();

    // Tooltip with correct content should be visible
    await expect(page.getByText('I waited for the target')).toBeVisible();

    // Cleanup
    await page.keyboard.press('Escape');
    await expect(container).toHaveCount(0);
  });

  test('waitForTarget: number (1500) succeeds when element appears within timeout', async ({ page }) => {
    await page.goto('/lazy-target.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Wait (1500ms)' }).click();

    const container = page.locator('.boardwalk-container');
    await expect(container).toBeVisible();

    // Element injected after ~800ms, within 1500ms timeout
    await expect(page.locator('#lazy-el')).toBeVisible();

    // Highlight should be present
    await expect(page.locator('.boardwalk-highlight')).toBeVisible();

    // Tooltip content
    await expect(page.getByText('I waited 1500ms')).toBeVisible();

    // Cleanup
    await page.keyboard.press('Escape');
    await expect(container).toHaveCount(0);
  });

  test('waitForTarget times out gracefully when element never appears', async ({ page }) => {
    await page.goto('/lazy-target.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Wait (timeout)' }).click();

    const container = page.locator('.boardwalk-container');
    await expect(container).toBeVisible();

    // Give enough time for the 300ms timeout to elapse and the step to proceed
    await page.waitForTimeout(700);

    // No highlight should be present because the target never appears
    await expect(page.locator('.boardwalk-highlight')).toHaveCount(0);

    // Tooltip should still render so the tour doesn't crash; verify by text
    await expect(page.getByText('Target never appears')).toBeVisible();

    // Cleanup
    await page.keyboard.press('Escape');
    await expect(container).toHaveCount(0);
  });
});
