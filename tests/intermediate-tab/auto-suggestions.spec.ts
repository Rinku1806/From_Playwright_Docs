// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Auto-suggestions (Autocomplete)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Intermediate' }).click();
  });

  test('Search and select from suggestions', async ({ page }) => {
    const searchInput = page.getByTestId('autocomplete-input');
    
    // Click in the search box and type 'Play'
    await searchInput.click();
    await searchInput.pressSequentially('Play');
    
    // Verify suggestions appear
    const suggestion = page.getByTestId('suggestion-0');
    await expect(suggestion).toContainText('Playwright');
    
    // Click on 'Playwright' from the suggestions
    await suggestion.click();
    
    // Verify 'Playwright' is selected
    await expect(searchInput).toHaveValue('Playwright');
    await expect(page.getByText('Selected: Playwright')).toBeVisible();
  });

  test('Type multiple characters and see filtered suggestions', async ({ page }) => {
    const searchInput = page.getByTestId('autocomplete-input');
    
    // Clear the search field and type 'Sel'
    await searchInput.click();
    await page.keyboard.press('Control+a');
    await searchInput.pressSequentially('Sel');
    
    // Verify suggestions appear
    const suggestion = page.getByTestId('suggestion-0');
    await expect(suggestion).toContainText('Selenium');
    
    // Click on 'Selenium WebDriver' to select it
    await suggestion.click();
    
    // Verify 'Selenium WebDriver' is selected
    await expect(searchInput).toHaveValue('Selenium WebDriver');
    await expect(page.getByText('Selected: Selenium WebDriver')).toBeVisible();
  });

  test('Search with no matching results', async ({ page }) => {
    const searchInput = page.getByTestId('autocomplete-input');
    
    // Type a search term that has no matches
    await searchInput.click();
    await page.keyboard.press('Control+a');
    await searchInput.pressSequentially('xyz123');
    
    // Verify no suggestions appear
    const suggestions = page.getByTestId('suggestion-0');
    await expect(suggestions).not.toBeVisible();
    
    // Verify the search field shows the typed text
    await expect(searchInput).toHaveValue('xyz123');
  });

  test('Clear search field and verify suggestions disappear', async ({ page }) => {
    const searchInput = page.getByTestId('autocomplete-input');
    
    // Type 'Play' in the search field
    await searchInput.click();
    await page.keyboard.press('Control+a');
    await searchInput.pressSequentially('Play');
    
    // Verify suggestions appear
    const suggestion = page.getByTestId('suggestion-0');
    await expect(suggestion).toBeVisible();
    
    // Clear the entire search field
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Delete');
    
    // Verify the field is empty and suggestions disappear
    await expect(searchInput).toHaveValue('');
    await expect(suggestion).not.toBeVisible();
  });
});