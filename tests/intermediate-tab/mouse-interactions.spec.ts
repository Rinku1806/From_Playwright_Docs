// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Mouse Interactions - Hover Effects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Intermediate' }).click();
  });

  test('Hover over items to trigger hover state', async ({ page }) => {
    // Hover mouse over Hover Item 1
    await page.getByTestId('hover-item-1').hover();
    await expect(page.getByText('Hovered!')).toBeVisible();
    // Move mouse away from Hover Item 1
    await page.locator('div').nth(1).hover();
    await expect(page.getByTestId('hover-item-1')).toContainText('Hover Item 1');
    await expect(page.getByTestId('hover-indicator-1')).toContainText('Hovered!');
  });

  test('Verify hover effect on multiple items', async ({ page }) => {
    // Hover over Hover Item 2
    await page.getByTestId('hover-item-2').hover();
    await expect(page.getByText('Hovered!')).toBeVisible();
    // Move away and hover over Hover Item 3
    await page.getByTestId('hover-item-3').hover();
    await expect(page.getByText('Hovered!')).toBeVisible();
    await expect(page.getByTestId('hover-item-2')).not.toContainText('Hovered!');
  });

  test('Verify right-click context menu', async ({ page }) => {
    // Right-click on 'Right-click Item 1 (Right-click me)'
    await page.getByTestId('context-item-1').click({ button: 'right' });
    // Click away to close the context menu
    await page.locator('div').nth(1).click();
  });

  test('Right-click on second context menu item', async ({ page }) => {
    // Right-click on 'Right-click Item 2 (Right-click me)'
    await page.getByTestId('context-item-2').click({ button: 'right' });
  });
});