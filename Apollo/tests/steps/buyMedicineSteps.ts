import {createBdd} from "playwright-bdd"
import {test,expect} from "@playwright/test"
 
const {Given,When,Then} = createBdd();

Given('user is on Buy Medicines page', async ({ page }) => {
  // Step: Given user is on Buy Medicines page
  // From: tests\features\buyMedicines.feature:4:5
});

When('user clicks on diabetic care tile', async ({ page }) => {
  // Step: When user clicks on diabetic care tile
  // From: tests\features\buyMedicines.feature:5:5
});

Then('user is taken to the medicines for diabetes page', async ({ page }) => {
  // Step: Then user is taken to the medicines for diabetes page
  // From: tests\features\buyMedicines.feature:6:5
});

When('user clicks on add to cart button next to the chosen medicine', async ({ page }) => {
  // Step: When user clicks on add to cart button next to the chosen medicine
  // From: tests\features\buyMedicines.feature:7:5
});

Then('the medicine gets added to cart', async ({ page }) => {
  // Step: Then the medicine gets added to cart
  // From: tests\features\buyMedicines.feature:8:5
});

When('user clicks on the cart menu', async ({ page }) => {
  // Step: When user clicks on the cart menu
  // From: tests\features\buyMedicines.feature:9:5
});

Then('The cart is opened', async ({ page }) => {
  // Step: Then The cart is opened
  // From: tests\features\buyMedicines.feature:10:5
});

Then('user is able to view the added medicine', async ({ page }) => {
  // Step: And user is able to view the added medicine
  // From: tests\features\buyMedicines.feature:11:5
});

When('user clicks on the add to cart button next to chosen medicine under the Value Deals at Rs {int} offer section', async ({ page }, arg) => {  
  // Step: When user clicks on the add to cart button next to chosen medicine under the Value Deals at Rs 100 offer section
  // From: tests\features\buyMedicines.feature:15:5
});

When('user clicks on the add to cart button next to chosen medicine under the Minimum {int} Percent Off offer section', async ({ page }, arg) => {
  // Step: When user clicks on the add to cart button next to chosen medicine under the Minimum 50 Percent Off offer section
  // From: tests\features\buyMedicines.feature:23:5
});

When('user clicks on the add to cart button next to chosen medicine under the Hot Sellers offer section', async ({ page }) => {
  // Step: When user clicks on the add to cart button next to chosen medicine under the Hot Sellers offer section
  // From: tests\features\buyMedicines.feature:31:5
});

When('user clicks on Whisper tile', async ({ page }) => {
  // Step: When user clicks on Whisper tile
  // From: tests\features\buyMedicines.feature:39:5
});

Then('user is taken to the medicines from Whisper brand', async ({ page }) => {
  // Step: Then user is taken to the medicines from Whisper brand
  // From: tests\features\buyMedicines.feature:40:5
});