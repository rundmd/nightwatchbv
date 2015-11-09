var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatch/config/testProperties.json');

var setupCommands = {
    submit: function() {
        return this.waitForElementVisible('@submitButton', config.defaultTimeout)
            .click('@submitButton');
    }
      
};

module.exports = {
    commands: [setupCommands],
    url: config.baseUrl + config.setupWizard, 
    elements: {
        twitterAccessToken: '#id_twitter-access_token',
        twitterAccessSecret: '#id_twitter-access_secret',
        bvEnabled: 'input[id="id_bazaarvoice-enabled"]',
        bvClientId: '#id_bazaarvoice-client_id',
        sources: '#id_account_limits-sources',
        pageViewsPerMo: '#id_account_limits-impressions_per_month',
        pageViewsPerHr: '#id_account_limits-impressions_per_hour',
        updatesPerHr: '#id_account_limits-updates_per_hour',
        mixPanelApiKey: '#id_mixpanel-api_key',
        mixPanelApiSecret: '#id_mixpanel-api_secret',
        mixPanelProjToken: '#id_mixpanel-project_token',
        submitButton: 'li.submit > button'
    }
};

