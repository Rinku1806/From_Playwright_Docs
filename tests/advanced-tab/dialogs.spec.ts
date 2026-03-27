// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Browser Dialogs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Trigger and handle Alert dialog', async ({ page }) => {
    // expect: The Advanced tab should be active
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // expect: The 'Show Alert' button should be visible
    const showAlertButton = page.getByRole('button', { name: 'Show Alert' });
    await expect(showAlertButton).toBeVisible();

    // Click the 'Show Alert' button
    const alertMessage = 'This is a browser alert for testing';
    await page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe(alertMessage);
      await dialog.accept();
    });
    await showAlertButton.click();
  });

  test('Trigger and handle Confirm dialog - Accept', async ({ page }) => {
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    const showConfirmButton = page.getByRole('button', { name: 'Show Confirm' });
    await expect(showConfirmButton).toBeVisible();

    await page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('Do you want to continue?');
      await dialog.accept();
    });
    await showConfirmButton.click();
  });

  test('Trigger and handle Confirm dialog - Cancel', async ({ page }) => {
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    const showConfirmButton = page.getByRole('button', { name: 'Show Confirm' });
    await showConfirmButton.click();

    await page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      await dialog.dismiss();
    });
  });

  test('Trigger and handle Prompt dialog', async ({ page }) => {
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    const showPromptButton = page.getByRole('button', { name: 'Show Prompt' });
    await expect(showPromptButton).toBeVisible();

    await page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('Enter your name:');
      await dialog.accept('Test User');
    });
    await showPromptButton.click();
  });

  test('Trigger Prompt dialog and cancel', async ({ page }) => {
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    const showPromptButton = page.getByRole('button', { name: 'Show Prompt' });
    await showPromptButton.click();

    await page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('prompt');
      await dialog.dismiss();
    });
  });
});
