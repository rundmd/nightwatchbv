var config = require('config.json')('/Users/drew.dimanlig/projects/nightwatchbv/config/testProperties.json');

exports.command = function (callback) {
    var self = this;
    var login = this.page.loginPage();

    login.navigate()
        .setValue('@username', config.username)
        .setValue('@password', config.password)
        .signin();
    
    if( typeof callback === "function"){
        callback.call(self);
    }
    return this;   
};

