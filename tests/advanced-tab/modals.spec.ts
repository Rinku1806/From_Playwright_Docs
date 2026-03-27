// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Custom Modal Dialogs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test.fixme('Open and close custom modal', async ({ page }) => {
    // 1. Ensure Advanced tab active
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // 2. Ensure button visible
    const showCustomModal = page.getByRole('button', { name: 'Show Custom Modal' });
    await expect(showCustomModal).toBeVisible();

    // 3. Open the modal
    await showCustomModal.click();

    const modal = page.locator('div:has-text("Custom Modal")').first();
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('This is a custom modal for testing purposes.');

    // 4. Close via Close button
    await modal.getByRole('button', { name: 'Close' }).click();
    await expect(modal).toBeHidden();

    // reopen and close via Escape key
    await showCustomModal.click();
    await expect(modal).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(modal).toBeHidden();
  });

  test.fixme('Custom modal backdrop interaction', async ({ page }) => {
    await page.getByRole('button', { name: 'Show Custom Modal' }).click();

    const overlay = page.locator('div[data-state="open"][class*="bg-black/50"]');
    const modal = page.locator('div:has-text("Custom Modal")').first();

    await expect(overlay).toBeVisible();
    await expect(modal).toBeVisible();

    // click backdrop area (overlay)
    await overlay.click({ position: { x: 10, y: 10 } });

    await expect(modal).toBeHidden();
    await expect(overlay).toBeHidden();
  });

  test.fixme('Modal with multiple actions', async ({ page }) => {
    await page.getByRole('button', { name: 'Show Custom Modal' }).click();

    const modal = page.locator('div:has-text("Custom Modal")').first();
    await expect(modal).toBeVisible();

    const actionButton = modal.getByRole('button', { name: 'Modal Action' });
    await expect(actionButton).toBeVisible();

    await actionButton.click();

    // after action button click modal should close or become hidden
    await expect(modal).toBeHidden();
  });
});
