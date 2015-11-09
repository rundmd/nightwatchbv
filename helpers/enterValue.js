var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatchbv/config/testProperties.json');

exports.command = function (locator, value, callback) {
    var self = this;

    this.waitForElementVisible(locator, config.defaultTimeout)
    this.setValue(locator, value);
    
    if( typeof callback === "function"){
        callback.call(self);
    }
    return this;   
};

