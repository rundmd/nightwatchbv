define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/moderation',
  '../support/pages/moderationFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, moderation, moderationFilterPage, require) {
  var loginPage; 
  var moderationFilterPage;

  bdd.describe('Moderation Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      moderationFilterPage = new moderationFilterPage(this.remote);
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

  
  moderation.filters.forEach( (filter) => {
    bdd.it('should filter on moderation', function () {
      //this.skip();
      return moderationFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple moderation', function () {
      //this.skip();
      return moderationFilterPage
        .multiFilters();
    });

  moderation.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return moderationFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return moderationFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return moderationFilterPage
        .clearAllFilters();
    });

  });
});
           
