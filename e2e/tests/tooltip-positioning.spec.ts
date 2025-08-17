import { test, expect } from '@playwright/test';

test.describe('Tooltip Positioning', () => {
  test('positions tooltips correctly with different anchors', async ({ page }) => {
    await page.goto('/tooltip-positioning.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();

    // Start the tour with default 'auto' position
    await page.getByRole('button', { name: 'Start Tour' }).click();
    
    // Get tooltip element
    const tooltip = page.locator('.boardwalk-tooltip');
    await expect(tooltip).toBeVisible();
    
    // Check first tooltip (top anchor) - should have auto position attribute
    await expect(tooltip).toHaveAttribute('data-position', 'bottom');
    
    // Get tooltip and anchor positions
    const topAnchor = page.locator('#top-anchor');
    let anchorBox = await topAnchor.boundingBox();
    let tooltipBox = await tooltip.boundingBox();
    
    // Verify tooltip is positioned relative to the anchor
    expect(tooltipBox).not.toBeNull();
    
    // Go to next step (bottom anchor)
    await page.locator('.boardwalk-btn-next').click();
    await expect(tooltip).toBeVisible();
    
    // Verify tooltip is still visible and positioned
    tooltipBox = await tooltip.boundingBox();
    expect(tooltipBox).not.toBeNull();
    
    // Go to next step (left anchor)
    await page.locator('.boardwalk-btn-next').click();
    await expect(tooltip).toBeVisible();
    
    // Verify tooltip is still visible and positioned
    tooltipBox = await tooltip.boundingBox();
    expect(tooltipBox).not.toBeNull();
    
    // Go to next step (right anchor)
    await page.locator('.boardwalk-btn-next').click();
    await expect(tooltip).toBeVisible();
    
    // Verify tooltip is still visible and positioned
    tooltipBox = await tooltip.boundingBox();
    expect(tooltipBox).not.toBeNull();
    
    // Go to next step (center anchor)
    await page.locator('.boardwalk-btn-next').click();
    await expect(tooltip).toBeVisible();
    
    // Go to next step (corner anchor)
    await page.locator('.boardwalk-btn-next').click();
    await expect(tooltip).toBeVisible();
    
    // Get new positions
    const cornerAnchor = page.locator('#corner-anchor');
    anchorBox = await cornerAnchor.boundingBox();
    tooltipBox = await tooltip.boundingBox();
    
    // Verify tooltip stays within viewport
    const viewportSize = page.viewportSize();
    expect(tooltipBox!.x).toBeGreaterThanOrEqual(0);
    expect(tooltipBox!.y).toBeGreaterThanOrEqual(0);
    expect(tooltipBox!.x + tooltipBox!.width).toBeLessThanOrEqual(viewportSize!.width);
    expect(tooltipBox!.y + tooltipBox!.height).toBeLessThanOrEqual(viewportSize!.height);
    
    // End tour
    await page.locator('.boardwalk-btn-next').click();
    await expect(tooltip).toHaveCount(0);
  });
  
  test('respects explicitly set tooltip positions', async ({ page }) => {
    await page.goto('/tooltip-positioning.html');
    await expect(page.locator('body[data-test-ready="true"]')).toBeVisible();
    
    // Select 'top' position
    await page.locator('#position-select').selectOption('top');
    
    // Start the tour
    await page.getByRole('button', { name: 'Start Tour' }).click();
    
    // Get tooltip element
    const tooltip = page.locator('.boardwalk-tooltip');
    await expect(tooltip).toBeVisible();
    
    // Check tooltip has top position attribute
    await expect(tooltip).toHaveAttribute('data-position', 'top');
    
    // Test each position
    const positions = ['top', 'bottom', 'left', 'right'];
    
    for (const position of positions) {
      // End current tour if running
      if (await tooltip.count() > 0) {
        // Click through remaining steps to end tour
        while (await tooltip.count() > 0) {
          try {
            await page.locator('.boardwalk-btn-next').click();
            await page.waitForTimeout(100);
          } catch (e) {
            break;
          }
        }
      }
      
      // Select new position
      await page.locator('#position-select').selectOption(position);
      
      // Start new tour
      await page.getByRole('button', { name: 'Start Tour' }).click();
      await expect(tooltip).toBeVisible();
      
      // Check tooltip has correct position attribute
      await expect(tooltip).toHaveAttribute('data-position', position);
    }
  });
});
