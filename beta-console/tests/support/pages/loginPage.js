define([
    '../utils', 
    './elements', 
    './properties', 
    'require'
], function (utils, elementsPage, properties, require) {
 
   function loginPage(remote) {
        this.remote = remote;
    }

    loginPage.prototype = {
        constructor: loginPage,

        login: function () {
            console.log('no cookie');
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .then(function () {
                })
                .findById(elementsPage.USERNAME_INPUT_ID)
                    .click()
                    .type(properties.USERNAME)
                    .end()
                .findById(elementsPage.PASSWORD_INPUT_ID)
                    .click()
                    .type(properties.PASSWORD)
                    .end()
                .findByCssSelector(elementsPage.LOGIN_BTN_LOCATOR)
                    .click()
                    .end()
                    .sleep(2000);
                //.findByCssSelector(elementsPage.PROFILE_LINK_LOCATOR)
                //.getVisibleText()
                //.then(function (text) {
                //    return text;;
                //});
        },

        loginWithIntroCookie: function () {
            console.log('setting cookie');
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .then(function () {
                    return utils.addCookie(session, properties.COOKIE);
                })
                .findById(elementsPage.USERNAME_INPUT_ID)
                    .click()
                    .type(properties.USERNAME)
                    .end()
                .findById(elementsPage.PASSWORD_INPUT_ID)
                    .click()
                    .type(properties.PASSWORD)
                    .end()
                .findByCssSelector(elementsPage.LOGIN_BTN_LOCATOR)
                    .click()
                    .end()
                    .sleep(2000);
                //.findByCssSelector(elementsPage.PROFILE_LINK_LOCATOR)
                //.getVisibleText()
                //.then(function (text) {
                //    return text;;
                //});
        },


        logout: function () {
            var session = this.remote;
                return session
                    .setFindTimeout(5000)
                    .findByCssSelector('#top-bar > span.logout > a')
                        .click()
                        .end();
        }
    };

    return loginPage;
});

