define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/contentTags',
  '../support/pages/contentTagsFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, contentTags, contentTagsFilterPage, require) {
  var loginPage; 
  var contentTagsFilterPage;

  bdd.describe('Content Tags Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      contentTagsFilterPage = new contentTagsFilterPage(this.remote);
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

  contentTags.filters.forEach( (filter) => {
    bdd.it('should filter on contentTags', function () {
      //this.skip();
      return contentTagsFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple contentTags', function () {
      //this.skip();
      return contentTagsFilterPage
        .multiFilters();
    });

  contentTags.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return contentTagsFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return contentTagsFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return contentTagsFilterPage
        .clearAllFilters();
    });

  });
});
           
