import { $ } from '@wdio/globals'

class SauceLoginPage {
    get inputUsername() {
        // return $('#user-name');
        return $('/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input');
    }
    get inputPassword() {
        return $('#password');
    }
    get btnLogin() {
        return $('#login-button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        // await browser.pause(1000);
        await this.btnLogin.click();
        // await browser.pause(1000);
    }

    async openBrowser () {
        await browser.url('https://www.saucedemo.com')
    }
}

export default new SauceLoginPage();