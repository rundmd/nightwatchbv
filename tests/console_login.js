var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatch/config/testProperties.json');

module.exports = {
    'Console Login': function (client) {
        var clientLogin = client.page.loginPage();
  
        clientLogin.login(config.username, config.password);

        client.end();
    }
};

