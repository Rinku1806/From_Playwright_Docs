// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Progress & Loading States', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Intermediate' }).click();
  });

  test('Verify linear progress bar display', async ({ page }) => {
    // Observe the linear progress bar
    const linearProgressBar = page.getByRole('progressbar').first();
    await expect(linearProgressBar).toBeVisible();
    
    // Verify the percentage text displays '75% Complete'
    await expect(page.getByText('75% Complete')).toBeVisible();
  });

  test('Verify dynamic progress bar', async ({ page }) => {
    // Observe the dynamic progress bar for any animation or changes
    const dynamicProgressBar = page.getByRole('progressbar').nth(1);
    await expect(dynamicProgressBar).toBeVisible();
    
    // Verify the percentage should show 50% or update dynamically
    await expect(page.getByText('50% Complete')).toBeVisible();
  });

  test('Verify loading button state', async ({ page }) => {
    // Verify the 'Loading...' button should be visible and disabled
    const loadingButton = page.getByRole('button', { name: 'Loading...' });
    await expect(loadingButton).toBeVisible();
    await expect(loadingButton).toBeDisabled();
  });
});