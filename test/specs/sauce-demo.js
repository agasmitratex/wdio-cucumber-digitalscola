import sauceLoginpage from "../pageobjects/sauce-loginpage.js"
import sauceDashboardpage from "../pageobjects/sauce-dashboardpage.js"
import sauceCartpage from "../pageobjects/sauce-cartpage.js"
import sauceProductpage from "../pageobjects/sauce-productpage.js"

describe('Sauce Demo Automation Test Cucumber', () => {

    it('Login Gagal', async () => {
        await sauceLoginpage.openBrowser()
        await sauceLoginpage.login('standard_user', 'apaansih')
        const alerterror = await $('[data-test="error"]')
        await expect(alerterror).toBeDisplayed()
    })

    it('Login Sukses', async () => {
        await sauceLoginpage.openBrowser()
        await sauceLoginpage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
    })

    it('Image Product, Add Product & Back to Product', async () => {
        await sauceDashboardpage.openProductImage()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
        await sauceProductpage.AddProduct()
        const btnremove = await $('#remove')
        await expect(btnremove).toBeDisplayed('remove')
        await sauceProductpage.BackToProduct()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        console.log('Test Image Product, Add Product & Back to Product')
    })

    it('Title Product, Remove Product & Back to Product', async () => {
        await sauceDashboardpage.openProductTitle()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
        await sauceProductpage.RemoveProduct()
        const btnaddtocart = await $('#add-to-cart')
        await expect(btnaddtocart).toBeDisplayed('Add to cart')
        await sauceProductpage.BackToProduct()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Add to Cart', async () => {
        await sauceDashboardpage.addProductToCart()
        const cart = await $('[class="shopping_cart_badge"]')
        await expect(cart).toHaveText('1')
    })

    it('Open Cart', async () => {
        await sauceDashboardpage.openCart()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        const cartitem = await $('[class="cart_item"]')
        await expect(cartitem).toBeDisplayed()
    })

    it('Continue Shopping', async () => {
        await sauceCartpage.continueShopping()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})