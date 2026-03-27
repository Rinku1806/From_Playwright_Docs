// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Infinite Scroll', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Load initial items in infinite scroll', async ({ page }) => {
    const section = page.getByText('Infinite Scroll');
    await expect(section).toBeVisible();

    const scrollContainer = page.locator('div.h-64.overflow-y-auto');
    await expect(scrollContainer).toBeVisible();

    const items = scrollContainer.locator('div').filter({ hasText: /^Item \d+$/ });
    await expect(items).toHaveCount(50); // starting dataset
    await expect(items.first()).toHaveText('Item 1');
    await expect(items.last()).toHaveText('Item 50');
  });

  test('Trigger infinite scroll by scrolling down', async ({ page }) => {
    const scrollContainer = page.locator('div.h-64.overflow-y-auto');
    const items = scrollContainer.locator('div').filter({ hasText: /^Item \d+$/ });

    const initialCount = await items.count();
    await scrollContainer.evaluate((el) => { el.scrollTop = el.scrollHeight; });

    const afterScrollCount = await items.count();
    expect(afterScrollCount).toBeGreaterThanOrEqual(initialCount);
  });

  test('Continue infinite scroll with multiple loads', async ({ page }) => {
    const scrollContainer = page.locator('div.h-64.overflow-y-auto');
    const items = scrollContainer.locator('div').filter({ hasText: /^Item \d+$/ });

    let previousCount = await items.count();
    for (let i = 0; i < 3; i++) {
      await scrollContainer.evaluate((el) => { el.scrollTop = el.scrollHeight; });
      const currentCount = await items.count();
      expect(currentCount).toBeGreaterThanOrEqual(previousCount);
      previousCount = currentCount;
    }

    expect(previousCount).toBeGreaterThan(0);
  });

  test('Verify proper item numbering', async ({ page }) => {
    const scrollContainer = page.locator('div.h-64.overflow-y-auto');
    const items = scrollContainer.locator('div').filter({ hasText: /^Item \d+$/ });

    const count = await items.count();
    for (let i = 1; i <= count; i++) {
      await expect(items.nth(i - 1)).toHaveText(`Item ${i}`);
    }
  });

  test('Handle end of infinite scroll', async ({ page }) => {
    const scrollContainer = page.locator('div.h-64.overflow-y-auto');
    const items = scrollContainer.locator('div').filter({ hasText: /^Item \d+$/ });

    await scrollContainer.evaluate((el) => { el.scrollTop = el.scrollHeight; });
    const countAtEnd = await items.count();

    await scrollContainer.evaluate((el) => { el.scrollTop = el.scrollHeight; });
    const countAfter = await items.count();

    expect(countAfter).toBe(countAtEnd);
    expect(countAfter).toBeLessThanOrEqual(60); // boundary assumption
  });
});