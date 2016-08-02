define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/uploadPhotoPage',
  '../support/pages/checkConsolePage',
  'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadPhotoPage, checkConsolePage, require) {
   
  var uploadPhotoPage;
  var checkConsolePage;

  var timestamp = Date.now().toString();

  bdd.describe('Photo Upload', function () {
    bdd.before(function () {
      uploadPhotoPage = new uploadPhotoPage(this.remote);
      checkConsolePage= new checkConsolePage(this.remote);
    });

    bdd.it('should upload a photo', function () {
      return uploadPhotoPage
        .upload(timestamp);
    });

    bdd.it('make sure post is in console', function () {
      return checkConsolePage
        .checkUpload(timestamp);
    })

  });
});
           
