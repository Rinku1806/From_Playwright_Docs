// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://gauravkhurana.com/test-automation-play/';

test.describe('Slider Interactions', () => {
  test('Adjust volume control slider', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    const slider = page.getByTestId('volume-slider').getByRole('slider');

    // Ensure the slider has an initial value
    await expect(slider).toHaveAttribute('aria-valuenow', /\d+/);

    // Drag the Volume Control slider to minimum (0%)
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '0');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '0');

    // Drag the slider to maximum (100%)
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '100');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '100');

    // Drag the slider to middle position (50%)
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '50');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '50');
  });
});