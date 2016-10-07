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
        searchFilters.tag1Filter,
        searchFilters.tag2Filter,
        searchFilters.tag3Filter,
        searchFilters.tag4Filter,
      ]
    };

});

