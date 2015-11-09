var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatch/config/testProperties.json');

module.exports = {
    'Wizard Setup': function (client) {
        var consoleSetup = client.page.setupWizardPage();

        consoleSetup.login(client)
            .setupWizard(client);

        client.end();
    }
};

