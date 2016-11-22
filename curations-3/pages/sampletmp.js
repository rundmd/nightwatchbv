const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

module.exports = function(driver) {
    const elements = {
        nameInput: By.id('id_username'),
        pwInput: By.id('id_password'),
        submitButton: By.css('#fm-form-login > div > button'),
        nameSuggestion: By.css('#top-bar > span.user'),
    };
    return {
        url:  'http://regression.feedmagnet.com',
        elements: elements,
        waitUntilVisible: function(element) {
            return driver.wait(until.elementLocated(element));
        },
        navigate: function() {
            driver.navigate().to(this.url);
            return this.waitUntilVisible(elements.nameInput);
        },
        enterName: function(name, pw) {
            driver.findElement(elements.nameInput).sendKeys(name);
            driver.findElement(elements.pwInput).sendKeys(pw);
            driver.findElement(elements.submitButton).click();
            return driver.wait(until.elementLocated(elements.nameSuggestion));
        },
        getName: function() {
            return driver.findElement(elements.nameSuggestion).getText();
        },
    };
};
