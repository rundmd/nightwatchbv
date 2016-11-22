const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

const samplePage = require('../pages/sample')(driver);

before(() => samplePage.navigate());

it('autocompletes the name field', function*() {
    this.timeout(20000);
    samplePage.login('incubator_testing1@bazaarvoice.com', 'Password123!');
    expect(yield samplePage.getName()).to.equal('Incubator Testomatic');
});
