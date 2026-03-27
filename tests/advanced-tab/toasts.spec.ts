// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Toast Notifications', () => {
  test.beforeEach('Navigate to Advanced tab', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Trigger success toast notification', async ({ page }) => {
    // 1. Advanced tab should be active, Success Toast button should be visible
    await expect(page.getByRole('tab', { name: 'Advanced' })).toBeFocused();
    const successButton = page.getByTestId('toast-success');
    await expect(successButton).toBeVisible();

    // 2. Click the 'Success Toast' button
    await successButton.click();

    // 3. Wait for the toast to auto-dismiss
    // The success toast notification should appear and then automatically disappear
    await page.waitForTimeout(4000);
  });

  test('Trigger error toast notification', async ({ page }) => {
    // 1. Advanced tab should be active, Error Toast button should be visible
    await expect(page.getByRole('tab', { name: 'Advanced' })).toBeFocused();
    const errorButton = page.getByTestId('toast-error');
    await expect(errorButton).toBeVisible();

    // 2. Click the 'Error Toast' button
    await errorButton.click();

    // 3. Wait or click to dismiss the error toast
    // The error toast notification should appear and then automatically disappear
    await page.waitForTimeout(4000);
  });

  test('Trigger info toast notification', async ({ page }) => {
    // 1. Advanced tab should be active, Info Toast button should be visible
    await expect(page.getByRole('tab', { name: 'Advanced' })).toBeFocused();
    const infoButton = page.getByTestId('toast-info');
    await expect(infoButton).toBeVisible();

    // 2. Click the 'Info Toast' button
    await infoButton.click();

    // 3. Wait for the toast to auto-dismiss
    // The info toast notification should appear and then automatically disappear
    await page.waitForTimeout(4000);
  });

  test('Multiple toast notifications stacking', async ({ page }) => {
    // 1. Advanced tab should be loaded
    await expect(page.getByRole('tab', { name: 'Advanced' })).toBeFocused();

    // 2. Click multiple toast buttons in quick succession
    const successButton = page.getByTestId('toast-success');
    const errorButton = page.getByTestId('toast-error');
    const infoButton = page.getByTestId('toast-info');

    await successButton.click();
    await errorButton.click();
    await infoButton.click();

    // 3. Observe the toasts as they appear and disappear
    // All toasts should be visible and auto-dismiss independently
    await page.waitForTimeout(5000);
  });
});