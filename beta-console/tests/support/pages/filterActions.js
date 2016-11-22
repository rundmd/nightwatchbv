define([
  'intern/dojo/node!leadfoot/keys',
  'common/actions',
  './searchFilters',
  './elements',
  'require'
], function(keys, actions, searchFilters, elements, require) {
  return {
    uploadFile: function (session, locator, file, type) {
      if (type == 'id') {
        return this.uploadFileById(session, locator, file);
      } else if (type == 'xpath') {
        return this.uploadFileByXpath(session, locator, file);
      }
    },

    toggleShowLivePosts: function (session) {
      return session
        .findByCssSelector('.checkbox-group > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > svg:nth-child(2)')
        .then( (element) => { 
          //return session.moveMouseTo(element).clickMouseButton(0);
        })
        //.then( () => {
        //  return actions.clickButton(session, elements.DISPLAY_FILTER_LOCATOR, 'css');
        //})
    },

    applyFilter: function(session, filter) {
      console.log('filter:', filter);
      return session
        .then( () => {
          return actions.enterTextAndEnter(session, searchFilters.groups.group1Filter.locator, searchFilters.groups.group1Filter.text, searchFilters.groups.group1Filter.locatorType);
          //return actions.enterTextAndEnter(session, filter.locator, filter.text, filter.locatorType);
          //session.findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-heading > div > div.panel-heading > div:nth-child(1) > input[type="text"]')
          //session.findById('react-select-4--value')
          //  .click()
          //  .type('content-groups');
        })
        .then( () => {
          //return actions.enterTextAndEnter(session, searchFilters.channels.instagramFilter.locator, searchFilters.channels.instagramFilter.text, searchFilters.channels.instagramFilter.locatorType);
        })
      /*
        .then( () => {
          if (Array.isArray(filter)) {
            console.log('Is an array');
            filter.forEach( (entry) => {
              console.log('ENTRY:', entry);
              return actions.enterTextAndEnter(session, entry.locator, entry.text, entry.locatorType);
            });
          } else {
              console.log('Is not an array');
              return actions.enterTextAndEnter(session, filter.locator, filter.text, filter.locatorType);
          }
        })
       */
        .sleep(2000);
    }

  }
 
});
