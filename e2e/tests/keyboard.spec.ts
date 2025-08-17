import { test, expect } from '@playwright/test';

// Keyboard navigation: default bindings and custom bindings + custom actions

test.describe('Keyboard Navigation', () => {
  test('default bindings: ArrowRight/ArrowLeft/Escape', async ({ page }) => {
    await page.goto('/keyboard.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Default Tour' }).click();

    const container = page.locator('.boardwalk-container');
    const progress = page.locator('.boardwalk-tooltip-progress');

    await expect(container).toBeVisible();
    await expect(progress).toHaveText('1 of 2');

    await page.keyboard.press('ArrowRight');
    await expect(progress).toHaveText('2 of 2');

    await page.keyboard.press('ArrowLeft');
    await expect(progress).toHaveText('1 of 2');

    await page.keyboard.press('Escape');
    await expect(container).toHaveCount(0);
  });

  test('custom bindings and custom key action', async ({ page }) => {
    await page.goto('/keyboard.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    await page.getByRole('button', { name: 'Start Custom Tour' }).click();

    const container = page.locator('.boardwalk-container');
    const progress = page.locator('.boardwalk-tooltip-progress');

    await expect(container).toBeVisible();
    await expect(progress).toHaveText('1 of 2');

    // Default ArrowRight should NOT work now, since custom replaces defaults
    await page.keyboard.press('ArrowRight');
    await expect(progress).toHaveText('1 of 2');

    // Custom next/previous
    await page.keyboard.press('n');
    await expect(progress).toHaveText('2 of 2');

    await page.keyboard.press('p');
    await expect(progress).toHaveText('1 of 2');

    // Custom action 'info'
    await page.keyboard.press('i');
    await expect(page.locator('#keyaction')).toHaveText('info:i');

    // Custom close
    await page.keyboard.press('x');
    await expect(container).toHaveCount(0);
  });
});
