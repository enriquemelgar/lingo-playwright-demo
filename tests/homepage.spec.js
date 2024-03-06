const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobject/home-page');

test('should show Linio logo', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.goto();

    await expect(homepage.logo).toBeVisible();
});

test('should searchBar contains text', async ({ page }) => {
   const homePage = new HomePage(page);
   await homePage.goto();
   await homePage.searchProduct('macbook');

   await expect(homePage.searchBar).toHaveValue('macbook');
});