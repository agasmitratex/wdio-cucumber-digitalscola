import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'


import SauceLoginPage from '../pageobjects/sauce-loginpage.js';
import sauceDashboardpage from '../../test/pageobjects/sauce-dashboardpage.js';
import sauceProductpage from '../../test/pageobjects/sauce-productpage.js';
import sauceCartpage from '../../test/pageobjects/sauce-cartpage.js';


Given('saya membuka browser', async () => {
    await SauceLoginPage.openBrowser();
});

When(/^saya melakukan login dengan username (\w+) dan password (.+)$/, async (username, password) => {
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

Given(/^saya membuka gambar produk$/, async () => {
    await sauceDashboardpage.openProductImage();
});

Then(/^sistem menampilkan halaman produk yang dipilih$/, async () => {
    await expect(browser).toHaveUrl(`https://www.saucedemo.com/inventory-item.html?id=4`);
});

Given(/^saya menambahkan produk ke keranjang$/, async () => {
    await sauceProductpage.AddProduct();
});

Then(/^sistem menampilkan tombol remove$/, async () => {
    const btnremove = await $('#remove');
    await expect(btnremove).toBeDisplayed();
});

// When(/^saya menghapus produk dari keranjang$/, async () => {
//     await SauceProductPage.RemoveProduct();
// });

// Then(/^sistem menampilkan tombol add to cart$/, async () => {
//     const btnaddtocart = await $('#add-to-cart');
//     await expect(btnaddtocart).toBeDisplayed();
// });

// When(/^saya menambahkan produk ke keranjang$/, async () => {
//     await DashboardPage.addProductToCart();
// });

Then(/^sistem menampilkan jumlah item di keranjang$/, async () => {
    const cart = await $('[class="shopping_cart_badge"]');
    await expect(cart).toHaveText(itemCount.toString());
});

Given(/^saya membuka halaman keranjang$/, async () => {
    await sauceDashboardpage.openCart();
});

Then(/^sistem menampilkan halaman keranjang$/, async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    const cartitem = await $('[class="cart_item"]');
    await expect(cartitem).toBeDisplayed();
});

Given(/^saya melanjutkan berbelanja$/, async () => {
    await sauceCartpage.continueShopping();
});

// Then(/^sistem menampilkan halaman dashboard$/, async () => {
//     await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
// });
