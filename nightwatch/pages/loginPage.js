var properties = require('../config/properties.js');

var loginCommands = {
  signin: function() {
    return this.waitForElementVisible('@signinButton', properties.DEFAULT_TIMEOUT)
      .setValue('@username', properties.USERNAME)
      .setValue('@password', properties.PASSWORD)
      .click('@signinButton');
  }
};

module.exports = {
  commands: [loginCommands],
  url: function () {
    return this.api.launchUrl + '/beta_tab';
  },
  elements: {
    username: {
      selector: '#id_username'
    },
    password: {
      selector: '#id_password'
    },
    signinButton: {
      selector: '#fm-form-login > div > button'
    }
  }
};

