// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Copy/Paste Detection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Intermediate' }).click();
  });

  test('Copy text and verify copy action', async ({ page }) => {
    const copyText = page.getByTestId('copy-text');
    
    // Verify the copy text is visible
    await expect(copyText).toBeVisible();
    await expect(copyText).toContainText('Test automation sample text');
    
    // Click on the copy text
    await copyText.click();
    
    // Note: The visual feedback (Copied! message) may appear briefly
    // Verify the text was copied by attempting to paste it
  });

  test('Paste copied text into paste area', async ({ page }) => {
    const copyText = page.getByTestId('copy-text');
    const pasteInput = page.getByTestId('paste-input');
    
    // Click the copy text to copy it to clipboard
    await copyText.click();
    
    // Click in the 'Paste content here...' textbox
    await pasteInput.click();
    await expect(pasteInput).toBeFocused();
    
    // Paste the content (Ctrl+V)
    await page.keyboard.press('Control+v');
    
    // Verify the copied text appears in the paste field
    await expect(pasteInput).toHaveValue('Test automation sample text');
  });

  test('Verify paste detection works correctly', async ({ page }) => {
    const pasteInput = page.getByTestId('paste-input');
    
    // First, copy the text by clicking the copy button
    await page.getByTestId('copy-text').click();
    
    // Click in the paste field and manually type some text
    await pasteInput.click();
    await pasteInput.fill('test typing');
    await expect(pasteInput).toHaveValue('test typing');
    
    // Select all text and delete it
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Delete');
    await expect(pasteInput).toHaveValue('');
    
    // Paste content (from clipboard)
    await page.keyboard.press('Control+v');
    await expect(pasteInput).toHaveValue('Test automation sample text');
  });
});