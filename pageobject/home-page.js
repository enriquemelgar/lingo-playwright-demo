const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.logo = page.locator('.Logo-module_logo__iW4zn');
        this.searchBar = page.locator('#testId-SearchBar-Input');
    }

    async goto() {
        await this.page.goto('https://linio.falabella.com.pe/linio-pe');
    }

    async searchProduct(productName) {
        await this.searchBar.fill(productName)

    }
}