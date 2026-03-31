import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import {readExcelFile} from '../utils/excelReader';

interface medicineData{
    readonly healthCondition : string;
    readonly healthConditionMedicine : string;
    readonly valueDealMedicine : string;
    readonly min50Medicine : string;
    readonly hotSellerMedicine : string;
    readonly brandName : string;
    readonly brandMedicine : string;
}

const medicineTestData: medicineData[] = readExcelFile("buyMedicines.xlsx","Sheet1");

test.beforeEach(async ({ page }) => {
        const home = new HomePage(page);
        await home.gotoHome();
});

medicineTestData.forEach((data,index : number)=>{
    // test case 1
    test(`Add product by Health Condition ${index}`, async ({ page }) => {
        const home = new HomePage(page);

        await home.addMedicineByHealthCondition(page, data.healthCondition, data.healthConditionMedicine);
        await home.verifyCartProducts(page, data.healthConditionMedicine);
    });

    // test case 2
    test(`Add product from Value Deals ${index}`, async ({ page }) => {
        const home = new HomePage(page);

        await home.addValueDealsProduct(page, data.valueDealMedicine);
        await home.verifyCartProducts(page, data.valueDealMedicine);
    });

    // test case 3
    test(`Add product from Hot Sellers ${index}`, async ({ page }) => {
        const home = new HomePage(page);

        await home.addHotSellerProduct(page, data.hotSellerMedicine);
        await home.verifyCartProducts(page, data.hotSellerMedicine);
    });

    // test case 4
    test(`Add product by Brand ${index}`, async ({ page }) => {
        const home = new HomePage(page);
        await home.addMedicineByBrand(page, data.brandName, data.brandMedicine);
        await home.verifyCartProducts(page, data.brandMedicine);
    });

    // test case 5
    test(`Add product from Minimum 50 Percent Off ${index}`, async ({ page }) => {
        const home = new HomePage(page);

        await home.addMinimum50PercentOffProduct(page, data.min50Medicine);
        await home.verifyCartProducts(page, data.min50Medicine);
    });
    
});



    

    