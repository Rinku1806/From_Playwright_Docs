/*Command to generate tests for a web page
npx playwright codegen https://gauravkhurana.com/test-automation-play/
*/

import { test, expect, chromium } from "@playwright/test";

var browserName = "chromium";

test("Recorded by codegen test 1", {
    tag: ['@recorded', '@functionality'],}, async ({ page }) => {
  await page.goto("https://gauravkhurana.com/test-automation-play/");
  await page.getByRole("tab", { name: "Basic" }).click();
  await page.getByTestId("first-name-input").click();
  await page.getByTestId("first-name-input").fill("Bhunesh");
  await page.getByTestId("last-name-input").click();
  await page.getByTestId("last-name-input").fill("Kumar");
  await page.getByTestId("email-input").click();
  await page.getByTestId("email-input").fill("kumarbhunesh@gmail.com");
  await page.getByTestId("bio-textarea").click();
  await page
    .getByTestId("bio-textarea")
    .fill("Hi, I am Bhunesh and recording automated tests");
  await page.getByTestId("password-input").click();
  await page.getByTestId("password-input").fill("Tili@Billi111");
  await page.getByTestId("confirm-password-input").click();
  await page.getByTestId("confirm-password-input").fill("Tilli@Billi111");
  await page.getByTestId("country-select").first().click();
  await page.getByText("United Kingdom").click();
  await page.getByTestId("country-select").click();
  await page.getByRole("option", { name: "Germany" }).click();
  await page.getByTestId("searchable-select").click();
  await page.getByText("Playwright", { exact: true }).click();
  await page.getByTestId("selected-country").click();
  await page.getByTestId("radio-male").click();
  await page.getByTestId("newsletter-checkbox").click();
  await page.getByTestId("terms-checkbox").click();
  await page.getByTestId("submit-form").click();
});

test("Recorded by codegen test 2", {tag: '@recorded'}, async ({ page }) => {
  await page.goto("https://gauravkhurana.com/test-automation-play/");
  await page.getByRole("tab", { name: "Intermediate" }).click();
  await page.getByTestId("drag-item-item-1").click();
  await page.getByTestId("drag-item-item-1").click();
  await page.getByTestId("drag-item-item-2").click();
  await page.getByTestId("drag-item-item-3").click();
  await page.getByTestId("drag-item-item-3").click();
  await page.getByTestId("drag-item-item-4").click();
  await page.getByTestId("percentage-slider").getByRole("slider").click();
  await page.getByTestId("percentage-slider").getByRole("slider").click();
  await page.getByTestId("volume-slider").getByRole("slider").click();
  await page.getByRole("slider", { name: "Maximum" }).click();
  await page.getByRole("slider", { name: "Minimum" }).click();
  await page.getByTestId("percentage-slider").getByRole("slider").click();
  //await page.getByTestId('upload-button').click();
  //await page.getByTestId('upload-button').setInputFiles('C:\\Users\\MSI\\Downloads\\Trading_in_the_Zone.pdf');
  const downloadPromise = page.waitForEvent("download");
  await page.getByTestId("download-button").click();
  const download = await downloadPromise;
});

test("Recorded by codegen test 3", async ({ page }) => {
  await page.goto("https://gauravkhurana.com/test-automation-play/");
  await page.getByRole("tab", { name: "Intermediate" }).click();

  // Wait for + click upload button → triggers file dialog
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"), // Listen for dialog
    page.getByRole("button", { name: "Choose File" }).click(), // Trigger it
  ]);

  await fileChooser.setFiles("testdata/Trading_in_the_Zone.pdf");
  await expect(page.getByTestId("upload-status")).toContainText(
    "100% uploaded",
  );
});

test.skip("This annotation is for skipping the test", async ({}) => {  
  console.log("This will not get printed as test is marked as skipped");
});

test("Condition based skip test", async ({page}) => {
  test.skip(browserName === 'firefox', 'Still working on it');
  console.log("This will get printed as test is marked as skipped");
});

test.fixme("This annotation is also for skipping the test", async ({}) => {   
  console.log("This Playwright will not run this test, Use fixme when running the test is slow or crashes.");
});

test("Condition based fixme test", async ({}) => {
   test.fixme(browserName === 'firefox', 'Still working on it');
  console.log("This Playwright will not run this test, Use fixme when running the test is slow or crashes.");
});

test('slow test', async ({ page }) => {
  test.slow();
  console.log("This test will run slow , triple the time out");
});

//When there are focused tests, only these tests run.
/*
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
  console.log("This test is the only test which has been run");
});*/