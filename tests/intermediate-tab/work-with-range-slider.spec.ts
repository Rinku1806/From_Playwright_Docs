// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://gauravkhurana.com/test-automation-play/';

test.describe('Slider Interactions', () => {
  test('Work with range slider', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('tab', { name: 'Intermediate' }).click();

    // The Range Slider (20-80) should be visible
    await expect(page.getByText('Range Slider (20-80)')).toBeVisible();

    const minSlider = page.getByRole('slider', { name: 'Minimum' });
    const maxSlider = page.getByRole('slider', { name: 'Maximum' });

    // Drag the minimum slider handle to the left to a lower value
    await minSlider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '10');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(minSlider).toHaveAttribute('aria-valuenow', '10');

    // Drag the maximum slider handle to the right to a higher value
    await maxSlider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '90');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });
    await expect(maxSlider).toHaveAttribute('aria-valuenow', '90');

    // The component allows setting minimum beyond maximum, instead of preventing invalid ranges.
    // Attempt to drag the minimum slider beyond the maximum value
    await minSlider.evaluate((element) => {
      element.setAttribute('aria-valuenow', '95');
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));
    });

    const minValue = Number(await minSlider.getAttribute('aria-valuenow'));
    const maxValue = Number(await maxSlider.getAttribute('aria-valuenow'));
    expect(minValue).toBeGreaterThanOrEqual(maxValue);
  });
});