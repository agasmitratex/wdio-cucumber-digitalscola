import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'


import SauceLoginPage from '../pageobjects/sauce-loginpage.js';
import sauceDashboardpage from '../pageobjects/sauce-dashboardpage.js';
import sauceProductpage from '../pageobjects/sauce-productpage.js';
import sauceCartpage from '../pageobjects/sauce-cartpage.js';


Given('user membuka browser', async () => {
    await SauceLoginPage.openBrowser();
});

When(/^user melakukan login dengan username (\w+) dan password (.+)$/, async (username, password) => {
    await SauceLoginPage.login(username, password);
});

Then(/^sistem menampilkan pesan error$/, async () => {
    const alerterror = await $('[data-test="error"]');
    await expect(alerterror).toBeDisplayed();
});

Then(/^sistem menampilkan halaman dashboard$/, async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await expect(browser).toHaveTitle('Swag Labs');
});

When(/^user membuka gambar produk$/, async () => {
    await sauceDashboardpage.openProductImage();
});

Then(/^sistem menampilkan halaman produk yang dipilih$/, async () => {
    await expect(browser).toHaveUrl(`https://www.saucedemo.com/inventory-item.html?id=4`);
});

When(/^user menambahkan produk dari halaman product$/, async () => {
    await sauceProductpage.AddProduct();
});

Then(/^sistem menampilkan tombol remove$/, async () => {
    const btnremove = await $('#remove-sauce-labs-backpack');
    await expect(btnremove).toBeDisplayed();
});

When(/^user menghapus produk dari keranjang$/, async () => {
    await sauceProductpage.RemoveProduct();
});

Then(/^sistem menampilkan tombol add to cart$/, async () => {
    const btnaddtocart = await $('#add-to-cart');
    await expect(btnaddtocart).toBeDisplayed();
});

When(/^user menambahkan produk dari halaman dashboard$/, async () => {
    await sauceDashboardpage.addProductToCart();
});

Then(/^sistem menampilkan jumlah item di keranjang$/, async () => {
    const cart = await $('[class="shopping_cart_badge"]');
    await expect(cart).toBeDisplayed();
});

When(/^user membuka halaman keranjang$/, async () => {
    await sauceDashboardpage.openCart();
});

Then(/^sistem menampilkan halaman keranjang$/, async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    const cartitem = await $('[class="cart_item"]');
    await expect(cartitem).toBeDisplayed();
});

Given(/^user melanjutkan berbelanja$/, async () => {
    await sauceCartpage.continueShopping();
});

// Then(/^sistem menampilkan halaman dashboard$/, async () => {
//     await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
// });
