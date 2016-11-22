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
        searchFilters.channels.facebookFilter,
        searchFilters.channels.googleplusFilter,
        searchFilters.channels.instagramFilter,
        searchFilters.channels.twitterFilter,
        searchFilters.channels.youtubeFilter,
      ]
    };

});

