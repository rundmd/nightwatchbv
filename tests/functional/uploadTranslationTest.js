define([
  'intern',
  'intern!bdd',
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/Command',
  '../support/utils',
  '../support/dbUtils',
  '../support/pages/propertiesPage',
  '../support/pages/elementsPage',
  '../support/pages/uploadTranslationTestPage',
  'require'
], function(intern, bdd, assert, Command, utils, dbUtils, properties, elements, uploadTranslationTestPage, require){

  var uploadTranslationTestPage;
  var ENV = intern.args.env;

  if (typeof ENV !== 'undefined') {
    ENV = ENV.toLowerCase();
  }
  dbUtils.dbConnect(ENV).then( (db) => {
    dbUtils.getLocaleText(db, intern.args.locales).then( (docs) => {
      bdd.describe('test submission app translations', () => {
        bdd.before(function(){
            uploadTranslationTestPage = new uploadTranslationTestPage(this.remote);
        });
        docs.forEach( (localeDoc) => {
          var localeInfo = JSON.parse(JSON.stringify(localeDoc));
          bdd.it('verify ' + localeInfo.locale + ' text on submission app landing page', () => {
            return uploadTranslationTestPage
                .verifyLandingPageText(localeInfo);
          });

          bdd.it('verify ' + localeInfo.locale + ' text for photo upload', () => {
            //this.skip();
            return uploadTranslationTestPage
                .verifyUploadPhotoText(localeInfo);
          });
       
          bdd.it('verify ' + localeInfo.locale + ' text for video upload', () => {
            //this.skip();
            return uploadTranslationTestPage
                .verifyUploadVideoText(localeInfo);
          });

        });
      });
    });
  });

});
