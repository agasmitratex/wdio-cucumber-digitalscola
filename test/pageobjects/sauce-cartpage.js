import { $ } from '@wdio/globals'

class SauceCartPage {
    get btnCheckout () {
        return $('#checkout');
    }
    get btnContinueShopping() {
        return $('#continue-shopping');
    }
    get btnRemoveFromCart() {
        // return $('button[contains(text(),"Remove")]');
        return $('#remove-sauce-labs-backpack');
    }
    get lblProduct() {
        return $('#item_4_title_link');
    }

    async openBrowser () {
        await browser.url('https://www.saucedemo.com/cart.html')
    }
}

export default new SauceCartPage();