// spec: basic-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, chromium, expect } from '@playwright/test';

test.describe('Basic Elements Functional Testing', () => {
  test('Dropdown Selects Functionality', async ({ page }) => {
  const browser = await chromium.launch();
    test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Basic' }).click();

    // 1. Click 'Country' dropdown and select 'United States'
    await page.getByTestId('country-select').click();
    await page.getByRole('option', { name: 'United States' }).click();

    // expect: Country dropdown shows options
    // expect: Selected country is displayed
    const countryDropdown = page.getByRole('combobox', { name: 'Country' });
    await expect(countryDropdown).toContainText('United States');

    // 2. Verify dropdown closes and selection is retained
    await expect(countryDropdown).not.toHaveAttribute('aria-expanded', 'true');

    // 3. Type 'play' in 'Searchable Select' and select 'Playwright'
    const searchableSelect = page.getByTestId('searchable-select');
    await searchableSelect.click();
    
    // Type 'play' to filter options
    await page.keyboard.press('p');
    await page.keyboard.press('l');
    await page.keyboard.press('a');
    await page.keyboard.press('y');

    // expect: Searchable select filters options
    await page.getByRole('option', { name: 'Playwright' }).click();

    // expect: Selection is retained
    await expect(searchableSelect).toContainText('Playwright');

    // 4. Type invalid text and check no options or error
    await searchableSelect.click();
    await page.keyboard.press('x');
    await page.keyboard.press('y');
    await page.keyboard.press('z');

    // expect: No selection if invalid search (options still visible)
    const listbox = page.getByRole('listbox');
    await expect(listbox).toBeVisible();

    await page.keyboard.press('Escape');

    // 5. Test single selection behavior
    // expect: Multi-select if applicable, but appears single
    await expect(searchableSelect).toContainText('Playwright');
  });
});
