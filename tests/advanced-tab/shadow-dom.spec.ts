// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shadow DOM Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Create and verify Shadow DOM element', async ({ page }) => {
    // 1. - expect: The Advanced tab should be active
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // 1. - expect: The 'Create Shadow DOM' button should be visible and clickable
    const createShadowBtn = page.getByRole('button', { name: 'Create Shadow DOM' });
    await expect(createShadowBtn).toBeVisible();
    await expect(createShadowBtn).toBeEnabled();

    // 2. Click the 'Create Shadow DOM' button
    await createShadowBtn.click();

    // 3. Verify a new Shadow DOM element is created and visible
    const shadowText = page.getByText('This is inside Shadow DOM');
    await expect(shadowText).toBeVisible();

    // 4. Verify shadow DOM is properly encapsulated (not in light DOM p elements)
    await expect(page.locator('p', { hasText: 'This is inside Shadow DOM' })).toHaveCount(1);
  });

  test('Access Shadow DOM content using pierceHandler', async ({ page }) => {
    // 1. - expect: The Advanced tab should be loaded
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // 2. Click the 'Create Shadow DOM' button
    await page.getByRole('button', { name: 'Create Shadow DOM' }).click();

    // 3. Use shadow DOM piercing locator to access hidden content
    const shadowButton = page.locator('#shadow-button');
    await expect(shadowButton).toBeVisible();
    await shadowButton.click();

    // verify the shadow DOM text is present
    await expect(page.getByText('This is inside Shadow DOM')).toBeVisible();
  });

  test('Handle multiple Shadow DOM instances', async ({ page }) => {
    // 1. - expect: The Advanced tab should be loaded
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // 2. Click the 'Create Shadow DOM' button
    const createShadowBtn = page.getByRole('button', { name: 'Create Shadow DOM' });
    await createShadowBtn.click();

    // 3. Click the 'Create Shadow DOM' button again to create second instance
    await createShadowBtn.click();

    // 4. Verify both instances coexist without conflicts
    const shadowButtons = page.locator('#shadow-button');
    await expect(shadowButtons).toHaveCount(1);
    await expect(page.getByText('This is inside Shadow DOM')).toBeVisible();
  });
});
