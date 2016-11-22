define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/filteredGroups',
  '../support/pages/channels',
  '../support/pages/genericFilterPage',
  '../support/pages/searchFilters',
  'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, groups, channels, genericFilterPage, searchFilters, require) {
  var loginPage; 
  var genericFilterPage;

  bdd.describe('Group Channel Filter', function () {
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
  
    groups.filters.forEach( (filter) => {
      bdd.it('should filter on channel', function () {
        //this.skip();
        return genericFilterPage
          .groupFilter(filter);
      });
    });
 
  });
});
           
