import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gauravkhurana.com/test-automation-play/');
  await page.getByRole('tab', { name: 'Advanced' }).click();
  await page.getByText('Click to draw').click();
  await page.getByTestId('drawing-canvas').click({
    position: {
      x: 51,
      y: 35
    }
  });
  await page.getByTestId('drawing-canvas').click({
    position: {
      x: 362,
      y: 141
    }
  });
});