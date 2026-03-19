// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Checkboxes and Switches', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    const newsletterCheckbox = page.getByTestId('newsletter-checkbox');
    const termsCheckbox = page.getByTestId('terms-checkbox');
    const notificationsSwitch = page.getByTestId('notifications-switch');
    const submitButton = page.getByRole('button', { name: 'Submit Form' });

    // 1. Check 'Subscribe to newsletter' and then uncheck it
    await newsletterCheckbox.click();

    // expect: Checkbox can be checked and unchecked
    await expect(newsletterCheckbox).toBeChecked();

    await newsletterCheckbox.click();
    await expect(newsletterCheckbox).not.toBeChecked();

    // 2. Check 'I agree to Terms & Conditions' and verify 'Submit Form' becomes enabled
    // First fill required fields
    await page.getByRole('textbox', { name: 'First Name' }).fill('John');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email' }).fill('john.doe@example.com');

    // Initial state: terms unchecked, submit disabled
    await expect(termsCheckbox).not.toBeChecked();
    await expect(submitButton).not.toBeEnabled();

    // Check terms
    await termsCheckbox.click();
    await expect(termsCheckbox).toBeChecked();
    await expect(submitButton).toBeEnabled();

    // Uncheck terms
    await termsCheckbox.click();
    await expect(termsCheckbox).not.toBeChecked();
    await expect(submitButton).not.toBeEnabled();

    // 4. Toggle 'Enable notifications' switch on and off
    await notificationsSwitch.click();

    // expect: Switch toggles notifications
    await expect(notificationsSwitch).toBeChecked();

    await notificationsSwitch.click();
    await expect(notificationsSwitch).not.toBeChecked();

    // 5. Check both newsletter and terms simultaneously
    await newsletterCheckbox.click();
    await termsCheckbox.click();

    // expect: Multiple checkboxes can be selected independently
    await expect(termsCheckbox).toBeChecked();
    await expect(newsletterCheckbox).toBeChecked();
  });
});
