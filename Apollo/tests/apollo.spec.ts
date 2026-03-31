import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

    const diabeticMedicine = "Apollo Pharmacy Smart Blood Glucose Monitoring Bluetooth System with Diabetes Management App, APG-01 + 25 Test Strips, 1 kit";
    const valueDealMedicine = "Apollo Pharmacy Activated Charcoal Soap, 250 gm (2x125 gm)";
    const min50Medicine = "Loreal Total Repair Serum, 80 ml";
    const hotSellerMedicine = "The Man Company Rouge Eau De Toilette Perfume, 50 ml";
    const whisperMedicine = "Whisper Ultra Upto No Gap No Leaks Sanitary Pads XL+,  44 Count";

    test.beforeEach(async ({ page }) => {
        const home = new HomePage(page);
        await home.gotoHome();
    });

    test('Add product by Health Condition', async ({ page }) => {
        const home = new HomePage(page);

        await home.addMedicineByHealthCondition(page, "diabetic", diabeticMedicine);
        await home.verifyCartProducts(page, diabeticMedicine);
    });

    test('Add product from Value Deals', async ({ page }) => {
        const home = new HomePage(page);

        await home.addValueDealsProduct(page, valueDealMedicine);
        await home.verifyCartProducts(page, valueDealMedicine);
    });

    test('Add product from Minimum 50 Percent Off', async ({ page }) => {
        const home = new HomePage(page);

        await home.addMinimum50PercentOffProduct(page, min50Medicine);
        await home.verifyCartProducts(page, min50Medicine);
    });

    test('Add product from Hot Sellers', async ({ page }) => {
        const home = new HomePage(page);

        await home.addHotSellerProduct(page, hotSellerMedicine);
        await home.verifyCartProducts(page, hotSellerMedicine);
    });

    test('Add product by Brand', async ({ page }) => {
        const home = new HomePage(page);

        await home.addMedicineByBrand(page, "WHISPER", whisperMedicine);
        await home.verifyCartProducts(page, whisperMedicine);
    });