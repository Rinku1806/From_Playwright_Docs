// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('iFrames and Embedded Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Verify iFrame elements are present and accessible', async ({ page }) => {
    // 1. - expect: The Advanced tab should be active
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // 1. - expect: The iFrames section should be visible
    await expect(page.getByText('iFrames')).toBeVisible();

    // 2. Inspect the page to identify iframe elements
    const iframeLocator = page.locator('iframe');
    await expect(iframeLocator).toHaveCount(2);

    // expect: At least 2 iFrame elements should be detected
    const firstIframe = iframeLocator.nth(0);
    const secondIframe = iframeLocator.nth(1);

    // expect: Each iframe should have a valid src attribute
    await expect(firstIframe).toHaveAttribute('src', /.+/);
    await expect(secondIframe).toHaveAttribute('src', /.+/);

    // verify iframes are visible
    await expect(firstIframe).toBeVisible();
    await expect(secondIframe).toBeVisible();
  });

  test('Access content within iFrame', async ({ page }) => {
    // 1. - expect: The Advanced tab content should be loaded
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // 1. - expect: iFrame section should be visible
    await expect(page.getByText('iFrames')).toBeVisible();

    // 2. Interact with elements within the iframe (if applicable)
    const singleIframe = page.frameLocator('iframe').first();
    const iframeButton = singleIframe.getByRole('button', { name: 'iFrame Button' });

    await expect(iframeButton).toBeVisible();
    await iframeButton.click();

    // Continue verifying content in nested iframe
    const nestedIframe = page.frameLocator('iframe').nth(1).frameLocator('iframe');
    await expect(nestedIframe.getByText('Nested Content')).toBeVisible();

    // expect: The iframe should load and display embedded content
    await expect(singleIframe.getByText('This is content inside an iframe')).toBeVisible();

    // expect: Content should be accessible without throwing errors
    await expect(nestedIframe.getByText('Nested Content')).toBeVisible();
  });

  test('Handle cross-origin iFrame restrictions gracefully', async ({ page }) => {
    // 1. - expect: The Advanced tab should be loaded
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute('aria-selected', 'true');

    // capture any page errors while interacting with iframes
    const pageErrors: Error[] = [];
    page.on('pageerror', (error) => pageErrors.push(error));

    // 2. Verify that cross-origin iframes don't cause page errors or crashes
    const iframeLocator = page.locator('iframe');
    await expect(iframeLocator).toHaveCount(2);

    // expecting accessible iframes available and page remains functional
    await expect(page.getByText('iFrames')).toBeVisible();

    await expect(pageErrors).toHaveLength(0);
  });
});
