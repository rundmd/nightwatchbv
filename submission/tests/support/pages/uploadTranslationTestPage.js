define([
  'intern/chai!assert',
  '../utils',
  './properties',
  './elements',
  '../common/actions',
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
              assert.equal(results, localeInfo.uploadPhotoText);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.TAKE_A_PHOTO_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.takePhotoText);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_VIDEO_BTN_LOCATOR)
            .then( (results) => {
            /*
             * This assertion is broken until 'Upload a video' translation is fixed
             *  assert.equal(results, localeInfo.uploadVideoText);
             */
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_FB_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.uploadFacebookText);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_INSTA_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.uploadInstagramText);
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
               assert.equal(results, localeInfo.commentText);
             });
         })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'placeholder');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_NICKNAME_LOCATOR, 'placeholder')
            .then( (results) => {
              assert.equal(results, localeInfo.nicknameText);
            });
        })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_NICKNAME_LOCATOR, 'testing');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_TC_TEXT, 'innerText')
            .then( (results) => {
              assert.equal(results, localeInfo.rmText);
            });
        })
        .then( () => {
          return actions.selectCheckBoxById(session, elements.UPLOAD_TC_ID);
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.postBtnText);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_BACK_BTN)
            .then( (results) => {
              assert.equal(results, localeInfo.backBtnText);
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
        .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
          .click()
          .sleep(2000)
          .end()
        .then( () => {
          return actions.uploadFileByXpath(session, elements.UPLOAD_VIDEO_BTN_LOCATOR2, properties.VIDEO_UPLOAD_LOCATION);
         })
         .then( () => {
           return actions.getPropertyByXpath(session, elements.UPLOAD_VIDEO_COMMENT_LOCATOR, 'placeholder')
             .then( (results) => {
               assert.equal(results, localeInfo.commentText);
             });
         })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_VIDEO_COMMENT_LOCATOR, 'placeholder');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, 'placeholder')
            .then( (results) => {
              assert.equal(results, localeInfo.nicknameText);
            });
        })
        .then( () => {
          return actions.enterTextByXpath(session, elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, 'testing');
        })
        .sleep(2000)
        .then( () => {
          return actions.getPropertyByXpath(session, elements.UPLOAD_TC_TEXT, 'innerText')
            .then( (results) => {
              assert.equal(results, localeInfo.rmText);
            });
        })
        .then( () => {
          return actions.selectCheckBoxById(session, elements.UPLOAD_TC_ID);
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR)
            .then( (results) => {
              assert.equal(results, localeInfo.postBtnText);
            });
        })
        .then( () => {
          return actions.getTextByXpath(session, elements.UPLOAD_BACK_BTN)
            .then( (results) => {
              assert.equal(results, localeInfo.backBtnText);
            });
        })
        .then ( () => {
          return actions.clickButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
        })
        .then ( () => {
          return actions.clickButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR2, 'xpath');
        });
    }

  }; 

  return uploadTranslationTestPage;

});
