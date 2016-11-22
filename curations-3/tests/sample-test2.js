const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

//const samplePage = require('../pages/sample')(driver);

//before(() => samplePage.navigate());

chai.use(chaiAsPromised);
console.log('testing');
it('should perform user login', function() {
   this.timeout(10000);
    console.log('testing');
    driver.navigate().to('http://regression.feedmagnet.com');
    driver.findElement(By.id('id_username')).sendKeys('incubator_testing1@bazaarvoice.com');
    driver.findElement(By.id('id_password')).sendKeys('Password123!');
    driver.findElement(By.css('#fm-form-login > div > button')).click();
    driver.wait(until.elementLocated(By.css('#top-bar > span.user')));
    return expect(driver.findElement(By.css('#top-bar > span.user')).getText()).to.eventually.equal('Incubator Testomatic');
});

after(() => driver.quit());
