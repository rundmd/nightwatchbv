define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  './searchFilters',
  './rights',
  './loginPage',
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, searchFilters, rights, loginPage, actions, pollUntil, require) {
  function genericFilterPage(remote) {
    this.remote = remote;
    //var loginPage;
  }

  genericFilterPage.prototype = {
    constructor: genericFilterPage,
        
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
        //.then( () => {
        //  return actions.clickButton(session, elements.FILTER_BTN_LOCATOR, 'css');
        //})
        //.sleep(2000)
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

    multiOptionFilters: function (filters, filterResults) {
      var session = this.remote;
      //var filters = [searchFilters.rightsQueuedFilter, searchFilters.rightsPendingFilter];
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, filters);
        })
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, filterResults);
            });
        });
    }, 

    groupFilter: function (filter) {
      var session = this.remote;
      //var filters = [searchFilters.rightsQueuedFilter, searchFilters.rightsPendingFilter];
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, filter.group).end();
        })
        //.then( () => {
        //  return actions.clickButton(session, elements.FILTER_BTN_LOCATOR, 'css').end();
        //})
        .then( () => {
          return this.setFilter(session, filter.filters).end();
        })
        .sleep(5000)
        .findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img')
        .then( (element) => {
          return session.moveMouseTo(element);
        })
        //.getVisibleText()
        //.then( (text) => {
        //  console.log('TEXT:', text);
        //})
        ///.sleep(5000)
        .then( () => {
          return actions.getAttributeByCssSelector(session, '#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.Card > div > div > div:nth-child(3) > div > div > div > button:nth-child(1) > svg', 'style');
          //return session.findByCssSelector(session, '#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)').getProperty('style');
          //#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)
        })
        .then( (value) => {
          assert.equal(value, 'background-color: transparent');
        })
        //.then( (value) => {
        //  console.log('value:', value);
        //}) 
        ////.then( () => {
        ////  return actions.clickButton(session, '#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)', 'css');
        ////})
        //.findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.Card > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)')
        //.getProperty('background-color')
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, filter.results);
            });
        });
    },

    allFilters: function (filters, results) {
      var session = this.remote;
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, filters);
        })
        .sleep(2000) // wait for results to update based on the applied filter
        .then( () => {
          return actions.getText(session, elements.RESULTS_COUNT_LOCATOR, 'css')
            .then( (results) => {
              assert.equal(results, results);
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
    clearMultiOptionFilters: function () {
      var session = this.remote;
      //var filter = [filters.facebookFilter, filters.googleplus];
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, searchFilters.genericFilters);
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

    clearAllFilters: function (filters, locatorInfo) {
      var session = this.remote;
      return session
        .get(properties.BETA_TAB)
        .setFindTimeout(30000)
        .then( () => {
          return this.setFilter(session, filters);
        })
        .sleep(2000)
        .then( () => {
          return actions.clickButton(session, locatorInfo[0] /*locator*/, locatorInfo[1]/*locator type*/);
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

  return genericFilterPage;
});

