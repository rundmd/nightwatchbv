define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/tagging',
  '../support/pages/taggingFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, tagging, taggingFilterPage, require) {
  var loginPage; 
  var taggingFilterPage;

  bdd.describe('Tagging Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      taggingFilterPage = new taggingFilterPage(this.remote);
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

  
  tagging.filters.forEach( (filter) => {
    bdd.it('should filter on tagging', function () {
      //this.skip();
      return taggingFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple tagging', function () {
      //this.skip();
      return taggingFilterPage
        .multiFilters();
    });

  tagging.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return taggingFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return taggingFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return taggingFilterPage
        .clearAllFilters();
    });

  });
});
           
