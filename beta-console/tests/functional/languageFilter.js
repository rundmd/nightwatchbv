define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/languages',
  '../support/pages/languageFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, languages, languageFilterPage, require) {
  var loginPage; 
  var languageFilterPage;

  bdd.describe('Language Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      languageFilterPage = new languageFilterPage(this.remote);
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

  languages.filters.forEach( (filter) => {
    bdd.it('should filter on language', function () {
      //this.skip();
      return languageFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple languages', function () {
      //this.skip();
      return languageFilterPage
        .multiFilters();
    });

  languages.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return languageFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return languageFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return languageFilterPage
        .clearAllFilters();
    });

  });
});
           
