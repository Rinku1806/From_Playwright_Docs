// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Dynamic IDs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test.fixme('Verify dynamic ID changes on regeneration', async ({ page }) => {
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    const regenerateButton = page.getByRole('button', { name: 'Regenerate ID' });
    await expect(regenerateButton).toBeVisible();

    const dynamicElement = page.locator('div', { hasText: 'Element with Dynamic ID' }).first();
    const initialId = await dynamicElement.getAttribute('id');
    expect(initialId).toBeTruthy();

    await regenerateButton.click();

    const updatedId = await dynamicElement.getAttribute('id');
    expect(updatedId).toBeTruthy();
    expect(updatedId).not.toBe(initialId);

    // confirm dynamic element is still accessible
    await expect(dynamicElement).toBeVisible();
  });

  test.fixme('Handle element identification after multiple regenerations', async ({ page }) => {
    const regenerateButton = page.getByRole('button', { name: 'Regenerate ID' });
    const dynamicElement = page.locator('div', { hasText: 'Element with Dynamic ID' }).first();

    const ids: Array<string | null> = [];

    for (let i = 0; i < 3; i++) {
      const currentId = await dynamicElement.getAttribute('id');
      ids.push(currentId);
      await regenerateButton.click();
    }

    const newId = await dynamicElement.getAttribute('id');
    ids.push(newId);

    // Ensure that ids changed across regenerations
    const uniqueIds = Array.from(new Set(ids.filter(Boolean)));
    expect(uniqueIds.length).toBeGreaterThan(1);

    await expect(dynamicElement).toBeVisible();
  });

  test('Use alternative locators for dynamic ID elements', async ({ page }) => {
    const dynamicTextElement = page.getByText('Element with Dynamic ID');
    await expect(dynamicTextElement).toBeVisible();

    const regenerateButton = page.getByRole('button', { name: 'Regenerate ID' });
    await regenerateButton.click();

    await expect(dynamicTextElement).toBeVisible();
    await expect(dynamicTextElement).toContainText('Element with Dynamic ID');
  });
});
