define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/tagging',
  '../support/pages/genericFilterPage',
  '../support/pages/searchFilters',
  'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, tagging, genericFilterPage, searchFilters, require) {
  var loginPage; 
  var genericFilterPage;
  var filters = [searchFilters.taggingQueuedFilter, searchFilters.taggingPendingFilter];

  bdd.describe('Tagging Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      genericFilterPage = new genericFilterPage(this.remote);
      return loginPage.loginWithIntroCookie();
    });

    bdd.after(function () {
     return loginPage.logout();
    });

    bdd.beforeEach(function () {
      //return loginPage.loginWithIntroCookie()
      //return this.remote
      //  .get(properties.CONSOLE_URL);
    });

  
  tagging.filters.forEach( (filter) => {
    bdd.it('should filter on tagging', function () {
      //this.skip();
      return genericFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple tagging', function () {
      //this.skip();
      return genericFilterPage
        .multiOptionFilters(filters, properties.MULTI_TAGGING_FILTER_RESULTS);
    });

    bdd.it('should filter on all tagging options', function () {
      //this.skip();
      return genericFilterPage
        .allFilters(tagging.filters, properties.DEFAULT_FILTER_RESULTS);
    });

  tagging.filters.forEach( (filter) => {
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
        .clearAllFilters(filters, elements.CLEAR_ALL_TAGGING_LOCATOR[0], elements.CLEAR_ALL_TAGGING_LOCATOR[1]);
    });

  });
});
           
