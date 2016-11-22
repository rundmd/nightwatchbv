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
        searchFilters.tags.tag1Filter,
        searchFilters.tags.tag2Filter,
        searchFilters.tags.tag3Filter,
        searchFilters.tags.tag4Filter,
      ]
    };

});

