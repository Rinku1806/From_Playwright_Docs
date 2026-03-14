import { test, expect } from "playwright/test";
import path from "path";

// Locators are the central piece of Playwright's auto-waiting and retry-ability.
// A locator can be created with the page.locator() method


test.beforeAll("Start run of example.spec.ts", async ({}) => {
  console.log('The run for module example.spec.ts is started');
});

test.describe("Playwright Doc", () => {
  test.beforeEach("Set Up playwright", async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveURL("https://playwright.dev/");
  });

  test("get started link", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });
});


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
    await page.waitForTimeout(5000);

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

test.describe('Herokapp Tests', ()=>{

test("herokuapp - SetInputFiles()", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  const uploadButton = page.getByRole("button", { name: "Upload" });

  await page
    .getByRole("button", { name: "Choose File" })
    .setInputFiles("testdata/Trading_in_the_Zone.pdf"); 
  await expect(uploadButton).toBeEnabled();
  await uploadButton.click();
  await expect(page.locator("#content div h3")).toContainText("File Upload");
  await expect(page.locator("#uploaded-files")).toHaveText(
    "Trading_in_the_Zone.pdf",
  );
});

test("herokuapp selectOption()", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropDown = page.locator("#dropdown");
  await dropDown.selectOption("Option 2");
  await expect(dropDown).toHaveValue("2");
  await expect(dropDown).toHaveCount(1);
  await expect(page.locator("#dropdown option:nth-child(3)")).toHaveAttribute("selected","selected",);
});

})

test.afterEach("Tear Down", async ({ page }) => {
  await page.close();
});

test.afterAll("Final Tear Down example.spec.ts", async ({}) => {
  console.log('The run for module example.spec.ts is over');
});

/*
Playwright Test is based on the concept of test fixtures such as the built in page fixture, 
which is passed into your test. Pages are isolated between tests due to the Browser Context,
 which is equivalent to a brand new browser profile. Every test gets a fresh environment, 
 even when multiple tests run in a single browser
*/
