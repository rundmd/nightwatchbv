define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  './searchFilters',
  './languages',
  './loginPage',
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, searchFilters, languages, loginPage, actions, pollUntil, require) {
  function languageFilterPage(remote) {
    this.remote = remote;
    //var loginPage;
  }

  languageFilterPage.prototype = {
    constructor: languageFilterPage,
        
      //.then(function (){
      //    return utils.openAdvancedSearch(session);
      //})

    singleFilter: function (filter) {
      var session = this.remote;
      //loginPage = new loginPage(session);
      return session
        //.then( () => {
        //  return loginPage.loginWithIntroCookie(properties.BETA_TAB);
        //})
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, filter);
        })
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, filter.results);
            });
        });
    },

    setFilter: function (session, filter) {
      return session
        .then( () => {
          return actions.clickButton(session, elements.FILTER_BTN_LOCATOR, 'css');
        })
        .sleep(2000)
        .then( () => {
          if (Array.isArray(filter)) {
            filter.forEach( (entry) => {
              return actions.enterTextAndEnter(session, entry.locator, entry.text, entry.locatorType);
            });
          } else {
              return actions.enterTextAndEnter(session, filter.locator, filter.text, filter.locatorType);
          }
        })
        .sleep(2000);
    },

    multiOptionFilters: function () {
      var session = this.remote;
      var filters = [searchFilters.englishFilter, allFilters.germanFilter];
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then ( () => {
          return this.setFilter(session, filters);
        })
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, properties.MULTI_LANGUAGE_FILTER_RESULTS);
            });
        });
    }, 

    clearFilter: function (session, filter) {
      return session
        .then( () => {
          if (Array.isArray(filter)) {
            filter.forEach( (entry) => {
              return actions.clickButton(session, entry.clearLocator, entry.clearLocatorType);
            });
          } else {
              return actions.clickButton(session, filter.clearLocator, filter.clearLocatorType);
          }
        })
    },

    clearSingleFilter: function (filter) {
      var session = this.remote;
      return  session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, filter);
        })
        .then( () => {
          return this.clearFilter(session, filter);
        })
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
            });
        });

    },

    // Re-write this function to use clearFilter when aperture provides a 'data-uia' attribute to each component
    clearMultiFilters: function () {
      var session = this.remote;
      //var filter = [filters.facebookFilter, filters.googleplus];
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, searchFilters.languageFilters);
        })
        .sleep(2000)
        //.then( () => {
        //  return actions.clickButton(session, filter[0].clearLocator, filter[0].clearLocatorType)
        //})
        //.then( () => {
          //return this.clearFilter(session, filter);
        //})
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
            });
        });
    },

    clearAllFilters: function () {
      var session = this.remote;
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, languages.filters);
        })
        .sleep(2000)
        .then( () => {
          return actions.clickButton(session, elements.CLEAR_ALL_LANGUAGES_LOCATOR, 'css');
        })
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
            });
        });
    }

  };

  return languageFilterPage;
});

