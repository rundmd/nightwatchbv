define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/rights',
  '../support/pages/rightsFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, rights, rightsFilterPage, require) {
  var loginPage; 
  var rightsFilterPage;

  bdd.describe('Rights Managment Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      rightsFilterPage = new rightsFilterPage(this.remote);
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

  
  rights.filters.forEach( (filter) => {
    bdd.it('should filter on rights', function () {
      //this.skip();
      return rightsFilterPage
        .singleFilter(filter);
    });
  });
 
  rights.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return rightsFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should filter on multiple rights', function () {
      //this.skip();
      return rightsFilterPage
        .multiFilters();
    });

    bdd.it('should filter on all rights options', function () {
      //this.skip();
      return rightsFilterPage
        .allFilters();
    });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return rightsFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return rightsFilterPage
        .clearAllFilters();
    });

  });
});
           
