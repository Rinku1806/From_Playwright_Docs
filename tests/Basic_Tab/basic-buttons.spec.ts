// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Button Interactions', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Click 'Enabled Button'
    await page.getByRole('button', { name: 'Enabled Button' }).click();
    // expect: Enabled Button performs action (e.g., alert or change)
    // Button should be clickable without errors

    // 2. Click 'Secondary Button'
    await page.getByRole('button', { name: 'Secondary Button' }).click();
    // expect: Secondary Button works
    // Button should be clickable without errors

    // 3. Click 'Outline Button'
    await page.getByRole('button', { name: 'Outline Button' }).click();
    // expect: Outline Button functions
    // Button should be clickable without errors

    // 4. Click 'Destructive Button'
    await page.getByRole('button', { name: 'Destructive Button' }).click();
    // expect: Destructive Button (possibly delete or confirm)
    // Button should be clickable without errors

    // 5. Attempt to click 'Disabled Button'
    const disabledButton = page.getByRole('button', { name: 'Disabled Button' });
    await expect(disabledButton).toBeDisabled();
    // expect: Disabled Button does not respond
    // Button should remain disabled

    // 6. Click 'Ghost Button'
    await page.getByRole('button', { name: 'Ghost Button' }).click();
    // expect: Ghost Button is clickable
    // Button should be clickable without errors

    // 7. Click 'Dynamic Enable/Disable' and check if it enables/disables itself or another element
    const dynamicButton = page.getByRole('button', { name: 'Dynamic Enable/Disable' });
    await expect(dynamicButton).toBeEnabled();
    await dynamicButton.click();
    // expect: Dynamic Enable/Disable toggles state
    // Button should remain enabled (may toggle other elements or just be clickable)
    await expect(dynamicButton).toBeEnabled();
  });
});