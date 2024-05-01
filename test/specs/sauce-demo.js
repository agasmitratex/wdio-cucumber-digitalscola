import sauceLoginpage from "../pageobjects/sauce-loginpage.js"
import sauceDashboardpage from "../pageobjects/sauce-dashboardpage.js"
import sauceCartpage from "../pageobjects/sauce-cartpage.js"

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

    it('Add to Cart', async () => {
        await sauceDashboardpage.addProductToCart()
        const cart = await $('[class="shopping_cart_badge"]')
        await expect(cart).toHaveText('1')
    })
})