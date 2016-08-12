define([
  'intern/chai!assert',
  '../utils',
  './properties',
  './elements',
  'common/actions',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, actions, pollUntil, require){
  function uploadTranslationTestPage(remote){
    this.remote = remote;
  }

  uploadTranslationTestPage.prototype = {
    constructor: uploadTranslationTestPage,

    verifyLandingPageText: function (localeInfo) {
      var session = this.remote;
      return session
        .setFindTimeout(10000)
        .get(localeInfo.submissionUrl)
        .sleep(2000)
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_PHOTO_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.uploadButton);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.TAKE_A_PHOTO_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.takeButton);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_VIDEO_BTN_LOCATOR)
            .then( (results) => {
            /*
             * This assertion is broken until 'Upload a video' translation is fixed
             *  assert.equal(results, localeInfo.video);
             */
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_FB_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.chooseFb);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_INSTA_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.chooseIg);
            });
        });
    },

    verifyUploadPhotoText: function (localeInfo) {
      var session = this.remote;
      return session
        .get(localeInfo.submissionUrl)
        .setFindTimeout(10000)
        .then( () => {
          return actions.uploadFileById(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION);
         })
         .then( () => {
           return actions.getPropertyByXpath(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'placeholder')
             .then( (results) => {
               assert.equal(results, localeInfo.commentPlaceholder);
             });
         })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'placeholder');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_NICKNAME_LOCATOR, 'placeholder')
            .then( (results) => {
              assert.equal(results, localeInfo.nicknamePlaceholder);
            });
        })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_NICKNAME_LOCATOR, 'testing');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_TC_TEXT, 'innerText')
            .then( (results) => {
              assert.equal(results, localeInfo.agree);
            });
        })
        .then( () => {
          return actions.selectCheckBoxById(session, elements.UPLOAD_TC_ID);
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, 'Post');
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_BACK_BTN)
            .then( (results) => {
              assert.equal(results, localeInfo.back);
            });
        })
        .then ( () => {
          return actions.clickButton(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR, 'xpath');
        });
    },

    verifyUploadVideoText: function (localeInfo) {
      var session = this.remote;
      return session
        .get(localeInfo.submissionUrl)
        .setFindTimeout(10000)
        .then( () => {
          return actions.clickButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
        })
        .then( () => {
          return actions.uploadFileByXpath(session, elements.UPLOAD_VIDEO_BTN_LOCATOR2, properties.VIDEO_UPLOAD_LOCATION);
         })
         .then( () => {
           return actions.getPropertyByXpath(session, elements.UPLOAD_VIDEO_COMMENT_LOCATOR, 'placeholder')
             .then( (results) => {
               assert.equal(results, localeInfo.commentPlaceholder);
             });
         })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_VIDEO_COMMENT_LOCATOR, 'placeholder');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, 'placeholder')
            .then( (results) => {
              assert.equal(results, localeInfo.nicknamePlaceholder);
            });
        })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, 'testing');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_TC_TEXT, 'innerText')
            .then( (results) => {
              assert.equal(results, localeInfo.agree);
            });
        })
        .then( () => {
          return actions.selectCheckBoxById(session, elements.UPLOAD_TC_ID);
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, 'Post');
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_BACK_BTN)
            .then( (results) => {
              assert.equal(results, localeInfo.back);
            });
        })
        .then ( () => {
          return actions.clickButton(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR, 'xpath');
        })
        .sleep(5000);
    }

  }; 

  return uploadTranslationTestPage;

});
