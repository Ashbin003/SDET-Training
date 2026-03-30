import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    readonly baseURL = "https://www.apollopharmacy.in";

    constructor(page: Page) {
        super(page);
    }

    healthConditions: Locator = this.page.locator("//div[@id='Browse by Health Conditions Web']");
    valueDeals: Locator = this.page.locator('//p[text()= "Value Deals at Rs 100"]//parent::div/parent::div');
    minimum50PercentOff: Locator = this.page.locator('//p[text()= "Minimum 50 Percent Off"]//parent::div/parent::div');
    hotSellers: Locator = this.page.locator('//p[text()= "Hot Sellers"]//parent::div/parent::div');
    brands = this.page.locator('//p[text()="Shop By Brand"]/parent::div/following-sibling::div');

    cartIcon = this.page.getByRole('link', { name: 'Cart Icon' });
    searchBar = this.page.locator("//div[text()=' Search Medicines']");

    async gotoHome() {
        await this.page.goto(this.baseURL, { waitUntil: "domcontentloaded" });
        await this.removePopups();
    }

    async getElement(page: Page, healthConditionName?: string, brandName?: string): Promise<Locator> {
        let element: Locator;

        if ((healthConditionName && brandName) || (!healthConditionName && !brandName)) {
            throw new Error("Pass either healthConditionName or brandName, but not both or neither");
        }

        if (healthConditionName) {
            element = await this.healthConditions.locator('//a[contains(@href,"' + healthConditionName + '")]');
            return element;
        }

        else if (brandName) {
            element = await this.brands.locator('//a[@aria-label="' + brandName + '"]');
            return element;
        }

        throw new Error("Unexpected case");
    }

    async addMedicineButton(scope: Page | Locator, medicineName: string) {
        return scope.locator('//a[@aria-label="' + medicineName + '"]/parent::div//button');
    }

    async clickHealthConditionElement(page: Page, healthConditionName: string) {
        const healthCondition: Locator = await this.getElement(page, healthConditionName);
        await healthCondition.click();
    }

    async addMedicineByHealthCondition(page: Page, healthConditionName: string, medicineName: string) {
        await this.clickHealthConditionElement(page, healthConditionName);
        await page.waitForTimeout(5000);

        const addButton = await this.addMedicineButton(page, medicineName);
        await page.waitForTimeout(2000);
        await addButton.click();

        await page.waitForTimeout(3000);
    }

    async viewCart(page: Page) {
        await this.removePopups();
        await this.cartIcon.click();
    }

    async addValueDealsProduct(page: Page, medicineName: string) {
        const addBtn = await this.addMedicineButton(this.valueDeals, medicineName);
        await page.waitForTimeout(5000);

        await this.removePopups();
        await addBtn.click();
        await page.waitForTimeout(2000);
    }

    async addMinimum50PercentOffProduct(page: Page, medicineName: string) {
        const addBtn = await this.addMedicineButton(this.minimum50PercentOff, medicineName);
        await page.waitForTimeout(5000);

        await this.removePopups();
        await addBtn.click();
        await page.waitForTimeout(1000);
    }

    async addHotSellerProduct(page: Page, medicineName: string) {
        const addBtn = await this.addMedicineButton(this.hotSellers, medicineName);
        await page.waitForTimeout(5000);

        await this.removePopups();
        await page.waitForTimeout(2000);
        await addBtn.click();
        await page.waitForTimeout(2000);
    }

    async selectViewAll(page: Page, offerType: Locator) {
        const viewAllBtn = await offerType.locator('//a[text()="View All"]');
        await this.removePopups();
        await viewAllBtn.click();
    }

    async viewAllValueDeals(page: Page, medicineName: string) {
        await this.selectViewAll(page, this.valueDeals);
        await page.waitForTimeout(5000);
        await this.addValueDealsProduct(page, medicineName);
    }

    async viewAllMinimum50PercentOff(page: Page, medicineName: string) {
        await this.selectViewAll(page, this.minimum50PercentOff);
        await page.waitForTimeout(5000);
        await this.addValueDealsProduct(page, medicineName);
    }

    async viewAllHotSellers(page: Page, medicineName: string) {
        await this.selectViewAll(page, this.hotSellers);
        await page.waitForTimeout(5000);
        await this.addValueDealsProduct(page, medicineName);
    }

    async clickBrandElement(page: Page, brandName: string) {
        const brand = await this.getElement(page, undefined, brandName);
        await this.removePopups();
        await brand.click();
    }

    async addMedicineByBrand(page : Page, brandName : string, medicineName : string){
        await this.clickBrandElement(page, brandName);

        await page.locator(`//a[@aria-label="${medicineName}"]`).waitFor();

        await this.removePopups();

        await page.locator(`//a[@aria-label="${medicineName}"]/parent::div//button`).click();

        await page.waitForTimeout(3000);
    }

    async verifyCartProducts(page: Page, medicineName: string) {
        await this.viewCart(page);

        const locator = page.locator("//div[@class='MedicineProductCard_titleBx__VxMt9']//h2");
        await page.waitForTimeout(5000);

        const medicineInCart = await locator.textContent();
        await expect(medicineInCart).toBe(medicineName);
        await page.waitForTimeout(2000);
    }

    async openSearch(page: Page) {
        await this.searchBar.click();
    }

    async verifySearchPage(page: Page, searchQuery: string) {
        await this.openSearch(page);
        await page.getByPlaceholder('Search medicines, brands and more').fill(searchQuery);
    }
}