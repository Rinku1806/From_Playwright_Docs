// spec: specs/intermediate-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Date Picker Functionality', () => {
  test.beforeEach('Set up Test Automation Hub', async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Intermediate' }).click();
  });

  test('Open date picker and select a date', async ({ page }) => {
    // 1. The Intermediate tab content should be loaded and the 'Pick a date' button should be visible
    const pickDateButton = page.getByTestId('date-picker-trigger');
    await expect(pickDateButton).toBeVisible();

    // 2. Click the 'Pick a date' button
    await pickDateButton.click();

    // Verify the calendar picker opened with current month and today's date highlighted
    await expect(page.getByRole('status')).toContainText('March 2026');
    const todayButton = page.getByRole('button', { name: "Friday, March 20th, 2026" });
    await expect(todayButton).toHaveAttribute('aria-label', 'Friday, March 20th, 2026');

    // 3. Click on a date in the calendar (e.g., March 10)
    await page.getByRole('button', { name: 'Tuesday, March 10th,' }).click();

    // Verify the date was selected and appears in the date field
    const selectedDateDisplay = page.locator('text=Selected: 3/10/2026');
    await expect(selectedDateDisplay).toBeVisible();
  });

  test('Navigate between months in date picker', async ({ page }) => {
    // 1. The Intermediate tab content should be loaded
    const pickDateButton = page.getByTestId('date-picker-trigger');
    await expect(pickDateButton).toBeVisible();

    // 2. Click the 'Pick a date' button to open the calendar
    await pickDateButton.click();

    // Verify the calendar shows March 2026
    await expect(page.getByRole('status')).toContainText('March 2026');

    // 3. Click the next month arrow button
    await page.getByRole('img', { name: 'Go to the Next Month' }).click();

    // Verify the calendar updated to show April 2026
    await expect(page.getByRole('status')).toContainText('April 2026');

    // 4. Click the previous month arrow button twice
    await page.getByRole('img', { name: 'Go to the Previous Month' }).click();
    await page.getByRole('img', { name: 'Go to the Previous Month' }).click();

    // Verify the calendar navigated back to February 2026
    await expect(page.getByRole('status')).toContainText('February 2026');

    // 5. Select a date from February
    await page.getByRole('button', { name: 'Sunday, February 15th,' }).click();

    // Verify the date was selected and displays in the field
    const selectedDateDisplay = page.locator('text=Selected: 2/15/2026');
    await expect(selectedDateDisplay).toBeVisible();
  });

  test('Enter date manually in date input field', async ({ page }) => {
    // 1. The Intermediate tab content should be loaded and Date Input field should be visible
    const dateInputField = page.getByTestId('date-input');
    await expect(dateInputField).toBeVisible();

    // 2. Click on the Date Input field and enter a date
    await dateInputField.click();
    await dateInputField.fill('2026-03-20');

    // Verify the date was accepted and displays in the field
    await expect(dateInputField).toHaveValue('2026-03-20');
  });

  test('Enter datetime in DateTime input field', async ({ page }) => {
    // 1. The Intermediate tab content should be loaded and DateTime Input field should be visible
    const dateTimeInputField = page.getByTestId('datetime-input');
    await expect(dateTimeInputField).toBeVisible();

    // 2. Click on the DateTime Input field and enter a date and time
    await dateTimeInputField.click();
    await dateTimeInputField.fill('2026-03-20T14:30');

    // Verify the datetime was accepted and properly formatted
    await expect(dateTimeInputField).toHaveValue('2026-03-20T14:30');
  });

  test('Select today\'s date from calendar', async ({ page }) => {
    // 1. The Intermediate tab content should be loaded
    const pickDateButton = page.getByTestId('date-picker-trigger');
    await expect(pickDateButton).toBeVisible();

    // 2. Click the 'Pick a date' button
    await pickDateButton.click();

    // Verify the calendar opened and today's date is highlighted
    await expect(page.getByRole('status')).toContainText('March 2026');
    const todayButton = page.getByRole('button', { name: /Friday, March 20th, 2026/});
    await expect(todayButton).toHaveAttribute('aria-label', 'Friday, March 20th, 2026');

    // 3. Click on today's date
    await todayButton.click();

    // Verify today's date was selected and displays in the field
    const selectedDateDisplay = page.locator('text=Selected: 3/20/2026');
    await expect(selectedDateDisplay).toBeVisible();
  });
});
