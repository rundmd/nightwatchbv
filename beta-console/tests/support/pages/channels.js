define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  './searchFilters',
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, searchFilters, actions, pollUntil, require) {
    return { 
      filters: [ 
        searchFilters.facebookFilter,
        searchFilters.googleplusFilter,
        searchFilters.instagramFilter,
        searchFilters.twitterFilter,
        searchFilters.youtubeFilter,
      ]
    };

});

