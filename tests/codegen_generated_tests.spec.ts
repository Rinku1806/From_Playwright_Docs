/*Command to generate tests for a web page
npx playwright codegen https://gauravkhurana.com/test-automation-play/
*/

import { test, expect } from '@playwright/test';

test('Recorded by codegen test 1', async ({ page }) => {
  await page.goto('https://gauravkhurana.com/test-automation-play/');
  await page.getByRole('tab', { name: 'Basic' }).click();
  await page.getByTestId('first-name-input').click();
  await page.getByTestId('first-name-input').fill('Bhunesh');
  await page.getByTestId('last-name-input').click();
  await page.getByTestId('last-name-input').fill('Kumar');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('kumarbhunesh@gmail.com');
  await page.getByTestId('bio-textarea').click();
  await page.getByTestId('bio-textarea').fill('Hi, I am Bhunesh and recording automated tests');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('Tili@Billi111');
  await page.getByTestId('confirm-password-input').click();
  await page.getByTestId('confirm-password-input').fill('Tilli@Billi111');
  await page.getByTestId('country-select').first().click();
  await page.getByText('United Kingdom').click();
  await page.getByTestId('country-select').click();
  await page.getByRole('option', { name: 'Germany' }).click();
  await page.getByTestId('searchable-select').click();
  await page.getByText('Playwright', { exact: true }).click();
  await page.getByTestId('selected-country').click();
  await page.getByTestId('radio-male').click();
  await page.getByTestId('newsletter-checkbox').click();
  await page.getByTestId('terms-checkbox').click();
  await page.getByTestId('submit-form').click();

});


test('Recorded by codegen test 2', async ({ page }) => {
  await page.goto('https://gauravkhurana.com/test-automation-play/');
  await page.getByRole('tab', { name: 'Intermediate' }).click();
  await page.getByTestId('drag-item-item-1').click();
  await page.getByTestId('drag-item-item-1').click();
  await page.getByTestId('drag-item-item-2').click();
  await page.getByTestId('drag-item-item-3').click();
  await page.getByTestId('drag-item-item-3').click();
  await page.getByTestId('drag-item-item-4').click();
  await page.getByTestId('percentage-slider').getByRole('slider').click();
  await page.getByTestId('percentage-slider').getByRole('slider').click();
  await page.getByTestId('volume-slider').getByRole('slider').click();
  await page.getByRole('slider', { name: 'Maximum' }).click();
  await page.getByRole('slider', { name: 'Minimum' }).click();
  await page.getByTestId('percentage-slider').getByRole('slider').click();
  //await page.getByTestId('upload-button').click();
  //await page.getByTestId('upload-button').setInputFiles('C:\\Users\\MSI\\Downloads\\Trading_in_the_Zone.pdf');
  const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('download-button').click();
  const download = await downloadPromise;
  });

 
test('Recorded by codegen test 3', async ({ page }) => {
  await page.goto('https://gauravkhurana.com/test-automation-play/');
  await page.getByRole('tab', { name: 'Intermediate' }).click();
   
  // Wait for + click upload button → triggers file dialog
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),  // Listen for dialog
    page.getByRole('button', { name: 'Choose File' }).click()  // Trigger it
  ]);
      
  await fileChooser.setFiles("C:\\Users\\MSI\\Downloads\\Trading_in_the_Zone.pdf");    
  await expect(page.getByTestId('upload-status')).toContainText('100% uploaded');
  
});
