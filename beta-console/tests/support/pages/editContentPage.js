define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  './searchFilters',
  './channels',
  './loginPage',
  './genericFilterPage',
  './filterActions',
  './editActions',
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, searchFilters, channels, loginPage, genericFilterPage, filterActions, editActions, pollUntil, require) {
  function editContentPage(remote) {
    this.remote = remote;
  }

  editContentPage.prototype = {
    constructor: editContentPage,
        
    approveContent: function (filter) {
      console.log('FILTER:', filter);
      var session = this.remote;
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return filterActions.toggleShowLivePosts(session);
        })
        //.findByCssSelector(elements.DISPLAY_FILTER_LOCATOR)
        //  .click()
        //  .sleep(10000);
        .then( () => {
          console.log('going to apply filter:', filter);
          return filterActions.applyFilter(session, filter);
        })
        .sleep(2000)
        .then( () => {
        //  return editActions.approveContent(session);
        })
      /*
        .then( () => {
          return editActions.rejectContent(session);
        });
      */
    },

    rejectContent: function (filter) {
      console.log('FILTER:', filter);
      var session = this.remote;
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .sleep(5000)
        .then( () => {
          return filterActions.applyFilter(session, filter);
        })
        .sleep(2000)
        .then( () => {
          return editActions.rejectContent(session);
        });
    }

  };

  return editContentPage;
});

