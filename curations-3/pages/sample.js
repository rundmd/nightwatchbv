const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

module.exports = function(driver) {
    const elements = {
        userName: By.id('id_username'),
        password: By.id('id_password'),
        submitButton: By.css('#fm-form-login > div > button'),
        profileName: By.css('#top-bar > span.user'),
        //image: By.css('div.panel-body:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)'),
        image: By.css('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img'),
    };
    return {
        url:  'http://regression.feedmagnet.com/beta_tab',
        elements: elements,
        waitUntilVisible: function(element) {
            return driver.wait(until.elementLocated(element));
        },
        navigate: function() {
            console.log('navigating');
            return driver.navigate().to(this.url);
        },
        login: function(username, pw) {
            console.log('username: ', username);
            driver.findElement(elements.userName).sendKeys(username);
            driver.findElement(elements.password).sendKeys(pw);
            return driver.findElement(elements.submitButton).click();
        },
        getName: function() {
            this.waitUntilVisible(elements.profileName);
            return driver.findElement(elements.profileName).getText();
        },
        dismissIntro: function() {
          console.log('dismissing intro');
          driver.wait(until.elementLocated(By.css('.Close')));
          driver.findElement(By.css('.Close')).click();
          //driver.findElement(By.css('#content > div > div:nth-child(2) > section > div.panel-heading > div > div.panel-heading > div:nth-child(1) > input[type="text"]'))
          driver.findElement(By.css('#react-select-4--value > div.Select-placeholder'))
          .then( (element) => {
            console.log('found element');
            element.click()
            .then( () => {
              driver.findElement(By.id('react-select-4--option-0'))
              .then( (element) => {
                driver.actions().mouseMove(element)
                return element.click();
              })
            })
            //element.click('#AutoScopeStyle_2 > div > div(2) > div > Option(2)');
            //element.sendKeys('azamousgaming');
            //element.sendKeys('content-groups');
            //return element.sendKeys(webdriver.Key.RETURN);
          });
          //el.click();
          //el.sendKeys('content-groups');
          //el.sendKeys(webdriver.Key.RETURN);
          //driver.findElement(By.css('#react-select-4--value > div.Select-input > input')).click();
          this.waitUntilVisible(elements.image);
          //driver.findElement(By.css('div.panel-body:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)'))
          driver.findElement(elements.image)
          .then( (element) => {
            console.log('moving mouse');
            driver.actions().mouseMove(element);
            element.click();
            return driver.sleep(5000);
          });
          driver.wait(until.elementLocated(By.css('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)')));
          driver.findElement(By.css('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)')).click();
        },
    };
};
