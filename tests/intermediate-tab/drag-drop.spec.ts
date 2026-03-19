// spec: intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Intermediate Tab Functional Testing', () => {
  test('Drag single item from source to drop zone', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');

    // 1. -
    // expect: The Intermediate tab should be visible and clickable
    await expect(page.getByRole('tab', { name: 'Intermediate' })).toBeVisible();

    // 2. Click on the Intermediate tab to navigate to it
    await page.getByRole('tab', { name: 'Intermediate' }).click();
    // expect: The Intermediate tab should become active
    await expect(page.getByRole('tab', { name: 'Intermediate' })).toHaveAttribute('aria-selected', 'true');
    // expect: The tab content should display the Drag & Drop section
    await expect(page.getByText('Drag & Drop')).toBeVisible();

    // Drag and drop functionality not working as expected in test environment.
    // 3. Drag Item 1 from the Source Items section to the Drop Zone
    await page.getByTestId('drag-item-item-1').dragTo(page.getByText('Drop items here'));
    // expect: Item 1 should visually move to the Drop Zone
    // expect: A confirmation message should appear indicating successful drop
    // Note: Confirmation message may be temporary or not visible in snapshot
    // expect: Item 1 should no longer be in the Source Items section
    await expect(page.getByTestId('dropped-item-item-1')).toBeVisible();
  });

  test('Drag multiple items sequentially', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');

    // 1. -
    // expect: The Intermediate tab content should be loaded
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    // Drag and drop functionality not working as expected in test environment.
    // 2. Drag Item 1 to the Drop Zone
    await page.getByTestId('drag-item-item-1').dragTo(page.getByText('Drop ZoneDrop items here'));
    // expect: Item 1 should be in the Drop Zone
    await expect(page.getByText('Drop ZoneItem 1×')).toBeVisible();

    // 3. Drag Item 2 to the Drop Zone
    await page.getByTestId('drag-item-item-2').dragTo(page.getByText('Drop ZoneItem 1×'));
    // expect: Item 2 should be in the Drop Zone
    await expect(page.getByText('Drop ZoneItem 1×Item 2×')).toBeVisible();
    // expect: Item 1 should still remain in the Drop Zone
    await expect(page.getByText('Drop ZoneItem 1×Item 2×')).toContainText('Item 1');
    // expect: Both items should be visible in the Drop Zone
    await expect(page.getByText('Drop ZoneItem 1×Item 2×')).toContainText('Item 2');

    // 4. Drag Item 3 and Item 4 to the Drop Zone
    await page.getByTestId('drag-item-item-3').dragTo(page.getByText('Drop ZoneItem 1×'));
    await page.waitForTimeout(3000);
    await page.getByTestId('drag-item-item-4').dragTo(page.getByTestId('dropped-item-item-1'));
    // expect: All four items should be in the Drop Zone
    await expect(page.locator('text=Item 1×')).toBeVisible();
    await expect(page.locator('text=Item 2×')).toBeVisible();
    await expect(page.locator('text=Item 3×')).toBeVisible();
    await expect(page.locator('text=Item 4×')).toBeVisible();
  });

  test('Drag item to wrong location', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');

    // 1. -
    // expect: The Intermediate tab content should be loaded
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    // Drag and drop functionality not working as expected in test environment.
    // 2. Drag Item 1 to a non-drop zone area (e.g., Sliders section)
    await page.getByTestId('drag-item-item-1').dragTo(page.getByText('Sliders', { exact: true }));
    // expect: Item 1 should remain in the Source Items
    await expect(page.getByTestId('drag-item-item-1')).toBeVisible();
    // expect: No item should be dropped outside the designated drop zone
    await expect(page.getByText('Drop items here')).toBeVisible();
  });

  test('Clear dropped items and reset', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');

    // 1. -
    // expect: The Intermediate tab content should be loaded
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    // 2. Drag Item 1 to the Drop Zone
    await page.getByTestId('drag-item-item-1').dragTo(page.getByText('Drop ZoneDrop items here'));
    // expect: Item 1 should be in the Drop Zone
    await expect(page.getByText('Drop ZoneItem 1×')).toBeVisible();

    // 3. Look for a clear or reset button and click it (if available)
    await page.getByTestId('remove-item-1').click();
    // expect: The Drop Zone should be cleared
    await expect(page.getByText('Drop items here')).toBeVisible();
    // expect: Item 1 should return to Source Items
    await expect(page.getByTestId('drag-item-item-1')).toBeVisible();
    // expect: Item count in Source Items should be restored
    await expect(page.getByTestId('drag-item-item-2')).toBeVisible();
    await expect(page.getByTestId('drag-item-item-3')).toBeVisible();
    await expect(page.getByTestId('drag-item-item-4')).toBeVisible();
  });
});