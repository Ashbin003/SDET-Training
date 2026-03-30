import { Page } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async removePopups() {
        // First removal
        await this.page.evaluate(() => {
            const selectors = [
                '#wzrkImageOnlyDiv',
                'ct-web-popup-imageonly'
            ];

            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => el.remove());
            });
        });

        // Wait for delayed popup injection
        await this.page.waitForTimeout(2000);

        // Second removal (important)
        await this.page.evaluate(() => {
            document.querySelectorAll('#wzrkImageOnlyDiv, ct-web-popup-imageonly')
                .forEach(el => el.remove());
        });
    }
}