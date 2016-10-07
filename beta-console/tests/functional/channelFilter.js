define([
  'intern!bdd', 
  'intern/chai!assert', 
  'intern/dojo/node!leadfoot/Command', 
  '../support/utils',
  '../support/pages/elements',    
  '../support/pages/properties',
  '../support/pages/loginPage',
  '../support/pages/channels',
  '../support/pages/channelFilterPage',
  'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, channels, channelFilterPage, require) {
  var loginPage; 
  var channelFilterPage;

  bdd.describe('Channel Filter', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      channelFilterPage = new channelFilterPage(this.remote);
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

  
  channels.filters.forEach( (filter) => {
    bdd.it('should filter on channel', function () {
      //this.skip();
      return channelFilterPage
        .singleFilter(filter);
    });
  });
 
    bdd.it('should filter on multiple channels', function () {
      //this.skip();
      return channelFilterPage
        .multiFilters();
    });

  channels.filters.forEach( (filter) => {
    bdd.it('should clear a single filter option', function () {
      //this.skip();
      return channelFilterPage
        .clearSingleFilter(filter);
    });
  });

    bdd.it('should clear multiple filter options', function () {
      this.skip();
      return channelFilterPage
        .clearMultiFilters();
    });

    bdd.it('should clear all filter options', function () {
      //this.skip();
      return channelFilterPage
        .clearAllFilters();
    });

  });
});
           
