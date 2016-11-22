define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/contentTags',
  '../support/pages/genericFilterPage',
  '../support/pages/searchFilters',
  'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, contentTags, genericFilterPage, searchFilters, require) {
  var loginPage; 
  var genericFilterPage;
  var filters = [searchFilters.tags.tag1Filter, searchFilters.tags.tag2Filter];
  var filters2 = []; 

  bdd.describe('Content Tags Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      genericFilterPage = new genericFilterPage(this.remote);
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
      return genericFilterPage
        .singleFilter(filter);
    });
  });

    bdd.it('should filter on multiple contentTags', function () {
      //this.skip();
      return genericFilterPage
        .multiOptionFilters(filters, properties.MULTI_CONTENT_TAGS_FILTER_RESULTS);
    });

  contentTags.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return genericFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return genericFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return genericFilterPage
        .clearAllFilters(filters, elements.CLEAR_ALL_TAGS_LOCATOR);
    });

  });
});
           
