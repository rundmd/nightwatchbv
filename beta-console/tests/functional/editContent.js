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
  '../support/pages/editContentPage',
  '../support/pages/searchFilters',
  'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, groups, channels, editContentPage, searchFilters, require) {
  var loginPage; 
  var editContentPage;
  var filter;

  bdd.describe('Edit Content', function () {
    bdd.before(function () {
      loginPage = new loginPage(this.remote);
      editContentPage = new editContentPage(this.remote);

      //filter = [searchFilters.groups.group1Filter, searchFilters.channels.instagramFilter];
      filter = [{locator: '#content > div > div:nth-child(2) > section > div.panel-heading > div > div.panel-heading > div:nth-child(1) > input[type="text"]', text: 'amaz', locatorType: 'css'}];
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
  
    //groups.filters.forEach( (filter) => {
      bdd.it('should approve content', function () {
        this.skip();
        return editContentPage
          .approveContent(filter);
      });

      bdd.it('should reject content', function () {
        //this.skip();
        return editContentPage
          .rejectContent(filter);
      });

    //});
 
  });
});
           
