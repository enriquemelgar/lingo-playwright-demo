const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobject/home-page');

test('should show Linio Icon', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.goto();

    await expect(homepage.logo).toBeVisible();
})