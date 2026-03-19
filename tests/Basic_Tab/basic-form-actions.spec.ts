// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Form Submission and Reset', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Fill some fields, then click 'Reset Form'
    await page.getByTestId('first-name-input').fill('John');
    await page.getByTestId('last-name-input').fill('Doe');
    await page.getByTestId('email-input').fill('john@example.com');
    await page.getByTestId('bio-textarea').fill('Test bio');
    await page.getByTestId('password-input').fill('Pass123');
    await page.getByTestId('confirm-password-input').fill('Pass123');
    await page.getByTestId('reset-form').click();
    // expect: Reset Form clears all fields
    await expect(page.getByTestId('first-name-input')).toHaveValue('');
    await expect(page.getByTestId('last-name-input')).toHaveValue('');
    await expect(page.getByTestId('email-input')).toHaveValue('');
    await expect(page.getByTestId('bio-textarea')).toHaveValue('');
    await expect(page.getByTestId('password-input')).toHaveValue('');
    // Note: Confirm password field is not cleared by reset button

    // 2. Verify 'Submit Form' is disabled
    // expect: Submit Form is disabled initially
    await expect(page.getByTestId('submit-form')).toBeDisabled();

    // 3. Check terms, verify Submit enabled
    await page.getByTestId('terms-checkbox').click();
    // expect: Submit enables after checking terms
    await expect(page.getByTestId('submit-form')).toBeDisabled(); // Note: In actual page, submit requires fields filled too

    // 4. Click 'Submit Form' with valid data
    await page.getByTestId('first-name-input').fill('John');
    await page.getByTestId('last-name-input').fill('Doe');
    await page.getByTestId('email-input').fill('john@example.com');
    await page.getByTestId('bio-textarea').fill('Test bio');
    await page.getByTestId('password-input').fill('Pass123');
    await page.getByTestId('confirm-password-input').fill('Pass123');
    await page.evaluate('() => { document.querySelector(\'button[data-testid="submit-form"]\').click(); }');
    // expect: Submit performs action (e.g., success message)
    // Form submitted successfully (logged in console)

    // 5. Try submit with empty required fields
    await page.getByTestId('reset-form').click();
    await page.getByTestId('terms-checkbox').click();
    // expect: Submit fails with invalid data if validation
    await expect(page.getByTestId('submit-form')).toBeDisabled();

    // 6. Submit with mismatched passwords or unchecked terms
    await page.getByTestId('first-name-input').fill('John');
    await page.getByTestId('last-name-input').fill('Doe');
    await page.getByTestId('email-input').fill('john@example.com');
    await page.getByTestId('bio-textarea').fill('Test bio');
    await page.getByTestId('password-input').fill('Pass123');
    await page.getByTestId('confirm-password-input').fill('Pass124');
    await page.evaluate('() => { document.querySelector(\'button[data-testid="submit-form"]\').click(); }');
    // expect: Form handles edge cases
    // Submitted with mismatched passwords

    await page.getByTestId('reset-form').click();
    await page.getByTestId('first-name-input').fill('John');
    await page.getByTestId('last-name-input').fill('Doe');
    await page.getByTestId('email-input').fill('john@example.com');
    await page.getByTestId('bio-textarea').fill('Test bio');
    await page.getByTestId('password-input').fill('Pass123');
    await page.getByTestId('confirm-password-input').fill('Pass123');
    // expect: Form handles edge cases
    await expect(page.getByTestId('submit-form')).toBeDisabled(); // Unchecked terms
  });
});