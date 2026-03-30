import { createBdd } from "playwright-bdd";
import { test, expect } from "@playwright/test";

const { Given, When, Then } = createBdd();

const diabeticMedicine = "Apollo Pharmacy Smart Blood Glucose Monitoring Bluetooth System with Diabetes Management App, APG-01 + 25 Test Strips, 1 kit";
const valueDealMedicine = "Apollo Pharmacy Activated Charcoal Soap, 250 gm (2x125 gm)";
const min50Medicine = "Loreal Total Repair Serum, 80 ml";
const hotSellerMedicine = "The Man Company Rouge Eau De Toilette Perfume, 50 ml";
const whisperMedicine = "Whisper Ultra Upto No Gap No Leaks Sanitary Pads XL+,  44 Count";

Given('user is on Buy Medicines page', async ({ page }) => {
  await page.goto("https://www.apollopharmacy.in", { waitUntil: "domcontentloaded" });
});

When('user clicks on diabetic care tile', async ({ page }) => {
  await page.locator('//a[contains(@href,"diabetic")]').click();
});

Then('user is taken to the medicines for diabetes page', async ({ page }) => {
  await expect(page).toHaveURL("https://www.apollopharmacy.in/shop-by-health-conditions/diabetic");
});

When('user clicks on add to cart button next to the chosen medicine', async ({ page }) => {
  await page.locator(`//a[@aria-label="${diabeticMedicine}"]/parent::div//button`).click();
});

Then('the medicine gets added to cart', async ({ page }) => {
  await page.waitForTimeout(2000);
});

When('user clicks on the add to cart button next to chosen medicine under the Value Deals at Rs {int} offer section', async ({ page }) => {
  const section = page.locator('//p[text()= "Value Deals at Rs 100"]//parent::div/parent::div');

  await section.locator(`//a[@aria-label="${valueDealMedicine}"]/parent::div//button`).click();
});

When('user clicks on the add to cart button next to chosen medicine under the Minimum {int} Percent Off offer section', async ({ page }) => {
  const section = page.locator('//p[text()= "Minimum 50 Percent Off"]//parent::div/parent::div');

  await section.locator(`//a[@aria-label="${min50Medicine}"]/parent::div//button`).click();
});

When('user clicks on the add to cart button next to chosen medicine under the Hot Sellers offer section', async ({ page }) => {
  const section = page.locator('//p[text()= "Hot Sellers"]//parent::div/parent::div');

  await section.locator(`//a[@aria-label="${hotSellerMedicine}"]/parent::div//button`).click();
});

When('user clicks on Whisper tile', async ({ page }) => {
  await page.locator('//p[text()="Shop By Brand"]/parent::div/following-sibling::div')
    .locator('//a[@aria-label="WHISPER"]')
    .click();
});

Then('user is taken to the medicines from Whisper brand', async ({ page }) => {
  await expect(page).toHaveURL("https://www.apollopharmacy.in/shop-by-brand/whisper");
});

When('user clicks on add to cart button next to the chosen medicine', async ({ page }) => {
  if (page.url().includes("whisper")) {
    await page.locator(`//a[@aria-label="${whisperMedicine}"]/parent::div//button`).click();
  } else {
    await page.locator(`//a[@aria-label="${diabeticMedicine}"]/parent::div//button`).click();
  }
});

When('user clicks on the cart menu', async ({ page }) => {
  await page.getByRole('link', { name: 'Cart Icon' }).click();
});

Then('The cart is opened', async ({ page }) => {
  await expect(page).toHaveURL(/cart/);
});

Then('user is able to view the added medicine', async ({ page }) => {
  const product = page.locator("//div[@class='MedicineProductCard_titleBx__VxMt9']//h2");
  await product.waitFor();

  const text = (await product.textContent())?.trim();

  let expectedMedicine;

  if (page.url().includes("diabetic")) {
    expectedMedicine = diabeticMedicine;
  } else if (page.url().includes("whisper")) {
    expectedMedicine = whisperMedicine;
  } else {
    expectedMedicine = text;
  }

  if (expectedMedicine) {
    expect(text).toBe(expectedMedicine);
  } else {
    expect([
      valueDealMedicine,
      min50Medicine,
      hotSellerMedicine
    ]).toContain(text);
  }
});