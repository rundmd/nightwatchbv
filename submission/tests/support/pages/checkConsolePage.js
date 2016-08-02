/**
 * Created by brendon.kelley on 6/11/16.
 */
define([
  'intern/chai!assert',
  '../utils',
  './elements',
  './properties',
  './consoleElements',
  '../common/actions',
  './loginPage',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'intern/dojo/node!leadfoot/keys',
  'require'
], function (assert, utils, elements, properties, consoleElements, actions, loginPage, pollUntil, keys, require) {
  function checkConsolePage(remote) {
    this.remote = remote;
    var loginPage;
  }
 
  checkConsolePage.prototype = {
    constructor: checkConsolePage,

    checkUpload: function (timestamp) {
      var session = this.remote;
      loginPage = new loginPage(session);
      return session
        .then( function () {
          return loginPage.login(consoleElements.SUBMISSION_URL);
        })
        .then( pollUntil('return document.getElementById("js-new-update-bar");', 5000) )
        .getPageSource()
        .then( function (results) {
          assert.include(results, timestamp);
        });

    }        

  }; 

    return checkConsolePage;
});
