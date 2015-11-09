var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatch/config/testProperties.json');

module.exports = {
    enterValue: function(client, locator, value) {
        client.waitForElementVisible(locator, config.defaultTimeout)
        client.setValue(locator, value);
    }
};

