define([
  'intern!bdd',
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/Command',
  '../support/utils',
  '../support/pages/elements',
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/uploadPhotoFailPage',
  'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadPhotoFailPage, require) {

    var uploadPhotoFailPage;

    bdd.describe('Photo Upload', function () {
      bdd.before(function () {
        uploadPhotoFailPage = new uploadPhotoFailPage(this.remote);
        });

        bdd.it('should upload a photo, comment, fail to hit post', function () {
          return uploadPhotoFailPage
            .uploadPlusComment();
        });
        
        bdd.it('should upload a photo, nickname, fail to hit post', function(){
          return uploadPhotoFailPage
            .uploadPlusNickname();
        });

        bdd.it('should upload a photo, comment, nickname, fail to hit post', function(){
          return uploadPhotoFailPage
            .uploadBoth();
        });

        bdd.it('should upload a photo, comment, hit agree, fail to hit post', function(){
          return uploadPhotoFailPage
            .uploadCommentAgree();
        });

    });
});
