const webdriver = require('selenium-webdriver');
require('chromedriver');

//const By = webdriver.By;
//const until = webdriver.until;
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

const samplePage = require('../pages/sample')(driver);
describe('login form', function () {
  this.timeout(20000);
  before(() => samplePage.navigate());

  chai.use(chaiAsPromised);
  it('should perform user login', function () {
    console.log('testing3a');
    samplePage.login('incubator_testing1@bazaarvoice.com', 'Password123!');
    samplePage.dismissIntro();
    return expect(samplePage.getName()).to.eventually.equal('Incubator Testomatixc');
  });

  after(() => driver.quit());
});
