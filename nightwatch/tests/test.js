module.exports = {
  'Console Login': function (client) {
    client
      .url('https://regression.feedmagnet.com/beta_tab/')
      .setValue('#id_username', 'incubator_testing1@bazaarvoice.com')
      .setValue('#id_password', 'Password123!')
      .click('#fm-form-login > div > button')
      .waitForElementVisible('#content > div > div.Overlay > div:nth-child(2) > div > div.PanelHeader > button', properties.DEFAULT_TIMEOUT)
      .click('#content > div > div.Overlay > div:nth-child(2) > div > div.PanelHeader > button')
      .waitForElementVisible('#react-select-4--value', properties.DEFAULT_TIMEOUT)
      .click('#react-select-4--value')
      .click('#react-select-4--option-0')
      .waitForElementVisible('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img', properties.DEFAULT_TIMEOUT)
      .moveTo('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img')
      .click('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img')
      .pause('5000')
      .end();
    }
};

