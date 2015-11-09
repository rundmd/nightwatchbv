var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatchbv/config/testProperties.json');

exports.command = function (callback) {
    var self = this;
    var setup = this.page.setupWizardPage();

    setup.navigate()
        .enterValue('@twitterAccessToken', config.twitterAccessToken)
        .enterValue('@twitterAccessSecret', config.twitterAccessSecret)
        .submit()
        .submit() //Four Square doesn't need to be configured
        .submit() //Chatter doesn't need to be configured
        //.waitForElementVisible('@bvEnabled', config.defaultTimeout)
        //.click('@bvEnabled')
        .waitForElementVisible('@bvClientId', config.defaultTimeout)
        .clearValue('@bvClientId')
        .enterValue('@bvClientId', config.bazaarvoiceWorkbenchName)
        .submit()
        .submit() //Chatter doesn't need to be configured
        //.waitForElementVisible('@sources', config.defaultTimeout)
        //.clearValue('@sources')
        .enterValue('@sources', config.sources)
        .enterValue('@pageViewsPerMo', config.pageViewsPerMo)
        .enterValue('@pageViewsPerHr', config.pageViewsPerHr)
        .enterValue('@updatesPerHr', config.updatesPerHr)
        .submit()
        .submit() //Tag Alerts don't need to be configured
        .enterValue('@mixPanelApiKey', '9234567890123456789012345678901')
        .enterValue('@mixPanelApiSecret', '01234567890123456789012345678901')
        .enterValue('@mixPanelProjToken', '01234567890123456789012345678901')
        .submit()
    
    if( typeof callback === "function"){
        callback.call(self);
    }
    return this;   
};

