define([
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/keys',
  './pages/elementsPage',
  './pages/propertiesPage',
  './common/actions',
  'require'    
], function (assert, keys, elements, properties, actions, require) {
  return {
    addCookie: function (session, COOKIE) {
      return session
        .then( () => {
          COOKIE.forEach( (entry) => {
            session.setCookie(entry);
          });
        });
      },

    removeCookie: function (session, COOKIE) {
      return session
        .then( () => {
          COOKIE.forEach( (entry) => {
            session.deleteCookie(entry.name);
          });
        });
    },

    addFilter: function (session, filter) {
        var text = filter.text.split('');
          return session
            .then( () => {
              text.forEach( (entry) => {
                session.pressKeys(entry);
              });
              session.pressKeys(keys.RETURN);
            })
    },

    addComboFilter: function (session, filter) {
      var text = filter.text.split('');
      var input;
      return session
        .then( () => {
          input = session.findByXpath(filter.locator);
          input.click();
          if (!filter.locator.match(/display/i)) {
            text.forEach( (entry) => {
              input.pressKeys(entry);
            });
            input.pressKeys(keys.RETURN);
          }
        });
    },

    instagramLogin: function (session) {
      return session
        .get(properties.INSTA_URL)
        .setFindTimeout(10000)
        .then( () => {
          return actions.clickButton(session, elements.INSTA_LOGIN_LINK_LOCATOR, 'xpath');
        })
        .then( () => {
          return actions.enterText(session, elements.INSTA_USERNAME_LOCATOR, properties.INSTA_USERNAME, 'xpath');
        })
        .then( () => {
          return actions.enterText(session, elements.INSTA_PW_LOCATOR, properties.INSTA_PW, 'xpath');
        })
        .then( () => {
          return actions.clickButton(session, elements.insta_LOGIN_BTN_LOCATOR, 'xpath');
        })
    },
    
    facebookLogin: function (session) {
      return session
        .get(properties.FACEBOOK_URL)
        .sleep(2000)
        .then( () => {
          return actions.enterText(session, elements.FB_EMAIL_LOCATOR, properties.FACEBOOK_EMAIL, 'xpath');
        })
        .then( () => {
          return actions.enterText(session, elements.FB_PASSWORD_LOCATOR, properties.FACEBOOK_PW, 'xpath');
        })
        .then( () => {
          return actions.clickButton(session, elements.FB_LOGIN_BTN_LOCATOR, 'xpath');
        })
      
    },

    fillUploadForm: function (session, uploadType, timestamp) {
      var comment;
      var nickname;

      if (uploadType == "photo" || uploadType == "insta") {
        comment = elements.UPLOAD_PHOTO_COMMENT_LOCATOR;
        nickname = elements.UPLOAD_NICKNAME_LOCATOR;
      } else if (uploadType == "video") {
        comment = elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
        nickname = elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
      } else {
        comment = elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
        nickname = elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
      }

      return session
        .then( function () {
          return actions.enterTextByXpath(session, comment, timestamp);
        })
        .then( function () {
          return actions.enterText(session, nickname, timestamp, 'xpath');
        })
        .then( function () {
          return actions.selectCheckBox(session, elements.UPLOAD_TC_ID, 'id');
        })
        .then( function () {
          return actions.clickButton(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR, 'xpath');
        })
        .sleep(2000);

    }

  }
});
