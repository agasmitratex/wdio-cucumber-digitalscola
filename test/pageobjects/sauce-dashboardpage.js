import { $ } from '@wdio/globals'

class DashboardPage {
    get btnAddToCart() {
        return $('#add-to-cart-sauce-labs-backpack');
        // return $('button[contains(text(),"Add to cart")]');
    }
    get btnRemoveFromCart() {
        return $('button[contains(text(),"Remove")]');
        // return $('#remove-sauce-labs-backpack');
    }
    get imgProduct() {
        return $('#item_4_img_link');
    }
    get lblProduct() {
        return $('#item_4_title_link');
    }
    get btnCart() {
        return $('#shopping_cart_container');
    }

    async openBrowser () {
        await browser.url('https://www.saucedemo.com/inventory.html')
    }
    async addProductToCart () {
        await this.btnAddToCart.click();
    }
    async removeProductFromCart () {
        await this.btnRemoveFromCart.click();
    }
    async openProduct () {
        await this.imgProduct.click();
    }
    async openCart () {
        await this.btnCart.click();
    }
    async openProductDetails () {
        await this.lblProduct.click();
    }
}

export default new DashboardPage();