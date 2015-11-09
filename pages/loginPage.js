var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatch/config/testProperties.json');

var loginCommands = {
  signin: function() {
    return this.waitForElementVisible('@signinButton', config.defaultTimeout)
      .click('@signinButton')
      .waitForElementPresent('#tab-bar > h1', config.defaultTimeout)
      .expect.element('#tab-bar > h1').text.to.equal('bilbo');
  }
};

module.exports = {
    commands: [loginCommands],
    url: function() { 
      return this.api.launchUrl; 
    },

    elements: {
        username: '#id_username',
        password: '#id_password',
        signinButton: '#fm-form-login > div > button'
    }
};

