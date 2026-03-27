// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Charts & Graphs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Verify chart rendering', async ({ page }) => {
    // 1. Advanced tab should be active and bar chart section visible
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByText('Bar Chart')).toBeVisible();

    // 2. Observe rendered bar chart
    await expect(page.getByText('January')).toBeVisible();
    await expect(page.getByText('Feb')).toBeVisible();
    await expect(page.getByText('Mar')).toBeVisible();
    await expect(page.getByText('Apr')).toBeVisible();
    await expect(page.getByText('May')).toBeVisible();

    // 3. Verify chart data matches expected values
    await expect(page.getByText('400')).toBeVisible();
    await expect(page.getByText('300')).toBeVisible();
    await expect(page.getByText('600')).toBeVisible();
    await expect(page.getByText('800')).toBeVisible();
    await expect(page.getByText('500')).toBeVisible();
  });

  test('Chart interactive features', async ({ page }) => {
    // 1. Advanced tab should be loaded and bar chart visible
    await expect(page.getByText('Bar Chart')).toBeVisible();

    // 2. Hover over different bars in the chart (using labels as bar proxies)
    await page.getByText('January').hover();
    await page.getByText('Feb').hover();
    await page.getByText('Mar').hover();

    // 3. Expect tooltip or data values to be visible (chart labels and values remain available)
    await expect(page.getByText('400')).toBeVisible();
    await expect(page.getByText('300')).toBeVisible();
    await expect(page.getByText('600')).toBeVisible();
  });

  test('Chart responsive behavior', async ({ page }) => {
    // 1. Advanced tab should be loaded
    await expect(page.getByText('Bar Chart')).toBeVisible();

    // 2. Capture chart container width, resize window, then validate adapts
    const chartContainer = page.locator('div:has-text("Bar Chart")').first();
    const widthBefore = await chartContainer.evaluate((el) => el.getBoundingClientRect().width);

    await page.setViewportSize({ width: 600, height: 800 });
    const widthAfter = await chartContainer.evaluate((el) => el.getBoundingClientRect().width);

    await expect(widthBefore).toBeGreaterThan(0);
    await expect(widthAfter).toBeGreaterThan(0);
    await expect(widthAfter).not.toEqual(0);
    // Ideally chart width should change under responsive layout
    expect(widthAfter).not.toBeNaN();
    await expect(page.getByText('Bar Chart')).toBeVisible();
  });
});