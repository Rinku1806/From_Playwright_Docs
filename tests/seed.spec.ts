import { test, expect } from '@playwright/test';

test.describe("Test Automation Hub", () => {
  test.beforeEach("Set up Test Automation Hub", async ({ page }) => {
    await page.goto("https://gauravkhurana.com/test-automation-play/");
  });

  test("Test Automation Hub - Basic Actions - check, click & uncheck", async ({
    page,
  }) => {
    await page.getByRole("tab", { name: "Basic" }).click();

    const SubmitButton = page.getByRole("button", { name: "Submit Form" });
    await expect(SubmitButton).not.toBeEnabled();
    await page
      .getByRole("checkbox", { name: "Subscribe to newsletter" })
      .check();

    const agreement = page.getByRole("checkbox", {
      name: "I agree to Terms & Conditions",
    });
    await agreement.check();
    await expect(agreement).toBeChecked();
    await page.waitForTimeout(3000);

    const subscription = page.getByRole("checkbox", {
      name: "Subscribe to newsletter",
    });
    subscription.uncheck();
    await expect(subscription).not.toBeChecked();
    await page.waitForTimeout(2000);
  });

  test("Test Automation Hub - Mouse Hover, fill , focus, Press", async ({
    page,
  }) => {
    await page.getByRole("tab", { name: "Intermediate" }).click();
    await page.getByTestId("hover-item-1").hover();
    await page.waitForTimeout(3000);

    await page.getByRole("tab", { name: "Basic" }).click();
    await page.getByRole("textbox", { name: "First Name" }).fill("Bhunesh");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Kumar");

    await page.getByRole("textbox", { name: "Last Name" }).focus();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("textbox", { name: "Email" })).toBeFocused();
  });

  test("Test Automation Hub - DropDowns", async ({ page }) => {
  
  await page.getByRole("tab", { name: "Basic" }).click();

  const dropdown = page.getByRole("combobox").first();
  await dropdown.click();

  // Wait + select
  await page.getByRole("option", { name: /India/i }).first().click();

  await expect(dropdown).toContainText(/India/i);
});

});
