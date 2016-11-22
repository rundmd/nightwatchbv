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
        searchFilters.groups.group1Filter,
        searchFilters.groups.group2Filter,
        searchFilters.groups.group3Filter,
        searchFilters.groups.group4Filter,
      ]
    };

});

