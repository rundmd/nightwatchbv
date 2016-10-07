define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/attachments',
  '../support/pages/attachmentsFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, attachments, attachmentsFilterPage, require) {
  var loginPage; 
  var attachmentsFilterPage;

  bdd.describe('Attachments Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      attachmentsFilterPage = new attachmentsFilterPage(this.remote);
      return loginPage.loginWithIntroCookie();
    });

    bdd.after(function () {
    // return loginPage.logout();
    });

    bdd.beforeEach(function () {
      //return loginPage.loginWithIntroCookie()
      //return this.remote
      //  .get(properties.CONSOLE_URL);
    });

  attachments.filters.forEach( (filter) => {
    bdd.it('should filter on attachments', function () {
      //this.skip();
      return attachmentsFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple attachments', function () {
      //this.skip();
      return attachmentsFilterPage
        .multiFilters();
    });

  attachments.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return attachmentsFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return attachmentsFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return attachmentsFilterPage
        .clearAllFilters();
    });

  });
});
           
