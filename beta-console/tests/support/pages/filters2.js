define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, actions, pollUntil, require) {
    return {   
      facebookFilter: { locator: elements.CHANNEL_FILTER_LOCATOR, text: 'facebook', locatorType: 'id', clearLocator: elements.FACEBOOK_CLEAR_LOCATOR, clearLocatorType: 'css' },
      googleplusFilter: { locator: elements.CHANNEL_FILTER_LOCATOR, text: 'google', locatorType: 'id', clearLocator: elements.GOOGLEPLUS_CLEAR_LOCATOR, clearLocatorType: 'css' },
    };

});

