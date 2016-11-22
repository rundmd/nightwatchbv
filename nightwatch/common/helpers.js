var properties = require('../config/properties.js');

module.exports = {
  dismissBetaOverlay: function(client, locator) {
    return client.waitForElementVisible(locator, properties.DEFAULT_TIMEOUT)
      .click(locator);
  }
};

