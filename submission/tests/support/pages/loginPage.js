define([
    '../utils', 
    './elements', 
    './properties', 
    '../common/actions',
    'require'
], function (utils, elements, properties, actions, require) {
 
   function loginPage(remote) {
        this.remote = remote;
    }

    loginPage.prototype = {
        constructor: loginPage,

        login: function (CONSOLE_URL) {
            console.log('no cookie');
            console.log('console url: ', CONSOLE_URL);           
            if (typeof CONSOLE_URL === 'undefined' || CONSOLE_URL == null) {
              CONSOLE_URL = properties.CONSOLE_URL;
            }

            console.log('console url2: ', CONSOLE_URL);           
            var session = this.remote;
            return session
                .get(CONSOLE_URL)
                .then( function () {
                  return actions.enterText(session, elements.USERNAME_INPUT_ID, properties.USERNAME, 'id');
                })
                .then( function () {
                  return actions.enterText(session, elements.PASSWORD_INPUT_ID, properties.PASSWORD, 'id');
                })
                .then( function () {
                  return actions.clickButton(session, elements.LOGIN_BTN_LOCATOR, 'xpath');
                });
        },

        loginWithIntroCookie: function () {
            console.log('setting cookie');
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .then(function () {
                    return utils.addCookie(session, properties.COOKIE);
                })
                .findById(elements.USERNAME_INPUT_ID)
                    .click()
                    .type(properties.USERNAME)
                    .end()
                .findById(elements.PASSWORD_INPUT_ID)
                    .click()
                    .type(properties.PASSWORD)
                    .end()
                .findByCssSelector(elements.LOGIN_BTN_LOCATOR)
                    .click()
                    .end()
                    .sleep(2000);
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

