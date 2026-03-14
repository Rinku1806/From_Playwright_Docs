// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Text Input Fields Validation', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Fill 'First Name' textbox with 'John'
    await page.getByTestId('first-name-input').fill('John');
    await expect(page.getByTestId('first-name-input')).toHaveValue('John');

    // 2. Fill 'Last Name' textbox with 'Doe' and press Tab
    await page.getByTestId('last-name-input').fill('Doe');
    await page.keyboard.press('Tab');
    await expect(page.getByTestId('last-name-input')).toHaveValue('Doe');
    await expect(page.getByTestId('email-input')).toBeFocused();

    // 3. Fill 'Email' textbox with 'john.doe@example.com'
    await page.getByTestId('email-input').fill('john.doe@example.com');
    await expect(page.getByTestId('email-input')).toHaveValue('john.doe@example.com');

    // 4. Fill 'Bio (Multi-line)' textbox with multi-line text 'Line 1\nLine 2'
    await page.getByTestId('bio-textarea').fill('Line 1\nLine 2');
    await expect(page.getByTestId('bio-textarea')).toHaveValue('Line 1\nLine 2');

    // 5. Leave all text fields empty and attempt to proceed
    await page.getByTestId('first-name-input').fill('');
    await page.getByTestId('last-name-input').fill('');
    await page.getByTestId('email-input').fill('');
    await page.getByTestId('bio-textarea').fill('');
    await expect(page.getByTestId('first-name-input')).toHaveValue('');

    // 6. Fill fields with special characters and numbers
    await page.getByTestId('first-name-input').fill('!@#123');
    await expect(page.getByTestId('first-name-input')).toHaveValue('!@#123');
  });
});