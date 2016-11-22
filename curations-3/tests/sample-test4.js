//describe('login form', function () {
  //after(() => driver.quit());
//});

const webdriver = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

const homePage = require('../pages/sampletmp')(driver);

describe('login form', function () {
  this.timeout(20000);
  before(() => homePage.navigate());

//before(function(done) {
//  return homePage.navigate()
//});

  chai.use(chaiAsPromised);
  it('autocompletes the name field', function () {
    this.timeout(10000);
    homePage.enterName('incubator_testing1@bazaarvoice.com', 'Password123!');
    return expect(homePage.getName()).to.eventually.equal('Incubator Testomatixc');
  });

  after(() => driver.quit());
});
