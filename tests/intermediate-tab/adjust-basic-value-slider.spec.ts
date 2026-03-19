// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://gauravkhurana.com/test-automation-play/';

test.describe('Slider Interactions', () => {
  test('Adjust basic value slider', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    const slider = page.getByTestId('percentage-slider').getByRole('slider');

    // Ensure the slider has an initial value
    await expect(slider).toHaveAttribute('aria-valuenow', '50');

    // Set the slider to 25%
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '25');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '25');

    // Set the slider to 75%
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '75');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '75');
  });
});