var helpers = require('../common/helpers.js');
var locators = require('../config/locators.js');

module.exports = {
  'Beta Tab Login': function (client) {
    var login = client.page.loginPage();
    var moderate = client.page.moderatePostPage();

    login
      .navigate()
      .signin();
    helpers.dismissBetaOverlay(client, locators.BETA_TAB_OVERLAY);
    moderate.reject(client);
    client.end();

  }
};

