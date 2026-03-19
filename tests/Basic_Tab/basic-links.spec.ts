// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Links Navigation', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Click 'Go to Basic Elements' link
    await page.getByTestId('internal-link-1').click();
    // expect: Internal link scrolls to section
    await expect(page).toHaveURL(/#basic-elements/);

    // 2. Click 'Jump to Advanced Features'
    await page.getByTestId('internal-link-2').click();
    // expect: Another internal link jumps
    await expect(page).toHaveURL(/#advanced-features/);

    // 3. Click 'Scroll to Top' button
    await page.getByTestId('scroll-to-top').click();
    // expect: Scroll to Top works
    // Button should be clickable without errors

    // 4. Click 'Selenium Documentation ↗'
    await page.getByTestId('external-link-selenium').click();
    // expect: External link opens in new tab
    // Should open new tab with Selenium documentation

    // 5. Click 'Playwright Documentation ↗' and 'Cypress Documentation ↗'
    await page.getByTestId('external-link-playwright').click();
    await page.getByTestId('external-link-cypress').click();
    // expect: Other external links work
    // Should open new tabs with respective documentation

    // 6. First select country, then click the dynamic link
    await page.getByTestId('country-select').click();
    await page.getByRole('option', { name: 'United States' }).click();
    await page.getByTestId('dynamic-country-link').click();
    // expect: Dynamic link 'Select country first' becomes active after selecting country
    await expect(page).toHaveURL(/#country-us/);
  });
});