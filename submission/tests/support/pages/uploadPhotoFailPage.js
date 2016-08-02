define([
  'intern/chai!assert',
  '../utils',
  '../common/actions',
  './elements',
  './properties',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, actions, elements, properties, pollUntil, require) {
  function uploadPhotoFailPage (remote) {
    this.remote=remote;
  }

  uploadPhotoFailPage.prototype = {
    constructor: uploadPhotoFailPage,

    uploadPlusComment: function () {
      var session = this.remote;
      return session
        .get(properties.SUBMISSION_URL)
        .setFindTimeout(10000)
        .then( () => {
          return actions.uploadFile(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION, 'id');
        })
        .then( () => {
          return actions.enterText(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, "this is great", 'xpath');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
          .isEnabled()
          .then( (results) => {
            assert.equal(results, false);
          });
    },

    uploadPlusNickname: function () {
      var session = this.remote;
      return session
        .get(properties.SUBMISSION_URL)
        .setFindTimeout(10000)
        .then( () => {
          return actions.uploadFile(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION, 'id');
        })
        .then( () => {
          return actions.enterText(session, elements.UPLOAD_NICKNAME_LOCATOR, "test", 'xpath');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
          .isEnabled()
          .then( (results) => {
            assert.equal(results, false);
          });
    },
        
    uploadBoth: function(){
      var session = this.remote;
      return session
        .get(properties.SUBMISSION_URL)
        .setFindTimeout(10000)
        .then( () => {
          return actions.uploadFile(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION, 'id');
        })
        .then( () => {
          return actions.enterText(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, "this is great", 'xpath');
        })
        .then( () => {
          return actions.enterText(session, elements.UPLOAD_NICKNAME_LOCATOR, "test", 'xpath');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
          .isEnabled()
          .then( (results) => {
            assert.equal(results, false);
          });
    },

    uploadCommentAgree: function(){
      var session = this.remote;
      return session
        .get(properties.SUBMISSION_URL)
        .setFindTimeout(10000)
        .then( () => {
          return actions.uploadFile(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION, 'id');
        })
        .then( () => {
          return actions.enterText(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, "this is great", 'xpath');
        })
        .then( () => {
          return actions.clickButton(session, elements.UPLOAD_TC_ID, 'id');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
          .isEnabled()
          .then( (results) => {
            assert.equal(results, false);
          });
    }

  }; 

  return uploadPhotoFailPage;
});
