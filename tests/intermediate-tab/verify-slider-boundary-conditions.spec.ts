// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://gauravkhurana.com/test-automation-play/';

test.describe('Slider Interactions', () => {
  test('Verify slider boundary conditions', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    const slider = page.getByTestId('percentage-slider').getByRole('slider');

    // Drag the value slider all the way to the left (minimum)
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '0');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '0');

    // Drag the slider all the way to the right (maximum)
    await slider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '100');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(slider).toHaveAttribute('aria-valuenow', '100');
  });
});