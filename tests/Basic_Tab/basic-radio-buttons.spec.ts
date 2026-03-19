// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Radio Buttons Selection', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Select 'Male' radio button
    const maleRadio = page.getByTestId('radio-male');
    await maleRadio.click();

    // expect: Only one radio button can be selected at a time
    await expect(maleRadio).toBeChecked();

    // 2. Select 'Female' and verify 'Male' is unchecked
    const femaleRadio = page.getByTestId('radio-female');
    await femaleRadio.click();

    // expect: Previous selection is deselected
    await expect(maleRadio).not.toBeChecked();
    await expect(femaleRadio).toBeChecked();

    // 3. Select each option: Male, Female, Other, Prefer not to say
    const otherRadio = page.getByTestId('radio-other');
    await otherRadio.click();

    // expect: All options selectable
    await expect(otherRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();

    const preferNotToSayRadio = page.getByTestId('radio-no-answer');
    await preferNotToSayRadio.click();
    await expect(preferNotToSayRadio).toBeChecked();
    await expect(otherRadio).not.toBeChecked();

    // Re-test Male to ensure all options are truly selectable
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();
    await expect(preferNotToSayRadio).not.toBeChecked();

    // 4. Refresh or navigate and check if selection resets
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // expect: Selection does not persist after reload
    await expect(maleRadio).not.toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
    await expect(otherRadio).not.toBeChecked();
    await expect(preferNotToSayRadio).not.toBeChecked();
  });
});
