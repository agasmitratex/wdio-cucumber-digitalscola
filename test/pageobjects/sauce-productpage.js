import { $ } from '@wdio/globals'

class SauceProductPage {
    get btnBackToProduct() {
        return $('#back-to-products')
    }
    get btnRemoveProduct() {
        return $('#remove')
    }
    get btnAddProduct() {
        return $("//button[contains(text(),'Add to cart')]")
        // return $('#add-to-cart')
    }
    async BackToProduct() {
        await this.btnBackToProduct.click()
    }
    async RemoveProduct() {
        await this.btnRemoveProduct.click()
    }
    async AddProduct() {
        await this.btnAddProduct.click()
    }
}

export default new SauceProductPage();