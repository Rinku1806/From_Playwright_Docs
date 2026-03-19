// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Password Fields and Strength Indicator', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Fill 'Password' with 'StrongPass123' and 'Confirm Password' with 'StrongPass123'
    await page.getByTestId('password-input').fill('StrongPass123');
    await page.getByTestId('confirm-password-input').fill('StrongPass123');

    // expect: Password field masks input
    await expect(page.getByTestId('password-input')).toHaveAttribute('type', 'password');

    // expect: Confirm Password field matches
    await expect(page.getByTestId('confirm-password-input')).toHaveValue('StrongPass123');

    // 2. Fill password with strong criteria (uppercase, lowercase, number, special char)
    await page.getByTestId('password-input').fill('StrongPass123!');
    await page.getByTestId('confirm-password-input').fill('StrongPass123!');

    // expect: Password strength indicator shows '🟢 Strong'
    await expect(page.getByText('Password strength: 🟢 Strong')).toBeVisible();

    // 3. Fill password with medium strength (e.g., 'Password1')
    await page.getByTestId('password-input').fill('Password');
    await page.getByTestId('confirm-password-input').fill('Password');

    // expect: Strength shows '🟡 Medium'
    await expect(page.getByText('Password strength: 🟡 Medium')).toBeVisible();

    // 4. Fill password with weak criteria (e.g., 'pass')
    await page.getByTestId('password-input').fill('pass');
    await page.getByTestId('confirm-password-input').fill('pass');

    // expect: Strength shows '🔴 Weak'
    await expect(page.getByText('Password strength: 🔴 Weak')).toBeVisible();

    // 5. Fill 'Confirm Password' with different value and check for validation
    await page.getByTestId('password-input').fill('StrongPass123');
    await page.getByTestId('confirm-password-input').fill('Mismatch123');

    // expect: Confirm Password does not match Password
    await expect(page.getByTestId('confirm-password-input')).not.toHaveValue(
      await page.getByTestId('password-input').inputValue(),
    );
  });
});
