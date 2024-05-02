import { $ } from '@wdio/globals'

class SauceLoginPage {
    get inputUsername() {
        return $('#user-name');
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