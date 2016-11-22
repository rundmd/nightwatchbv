var locators = require('../config/locators.js');
var properties = require('../config/properties.js');

var moderateCommands = {
  approve: function(client) {
    return client.waitForElementVisible(locators.MODERATE_GROUP_FILTER_LOCATOR, properties.DEFAULT_TIMEOUT)
      .click(locators.MODERATE_GROUP_FILTER_LOCATOR)
      .click(locators.FILTER_OPTION_0_LOCATOR)
      .waitForElementVisible(locators.POST_LOCATOR, properties.DEFAULT_TIMEOUT)
      .click(locators.POST_LOCATOR)
      .waitForElementVisible(locators.APPROVE_ICON_LOCATOR, properties.DEFAULT_TIMEOUT)
      .click(locators.APPROVE_ICON_LOCATOR)
      .pause(5000);
  },

  reject: function(client) {
    return client.waitForElementVisible(locators.MODERATE_GROUP_FILTER_LOCATOR, properties.DEFAULT_TIMEOUT)
      .click(locators.MODERATE_GROUP_FILTER_LOCATOR)
      .click(locators.FILTER_OPTION_0_LOCATOR)
      .waitForElementVisible(locators.POST_LOCATOR, properties.DEFAULT_TIMEOUT)
      .click(locators.POST_LOCATOR)
      .waitForElementVisible(locators.REJECT_ICON_LOCATOR, properties.DEFAULT_TIMEOUT)
      .click(locators.REJECT_ICON_LOCATOR)
      .pause(5000);
  }

};

module.exports = {
  commands: [moderateCommands],
  elements: {}
};

