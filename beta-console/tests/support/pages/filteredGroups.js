define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  './groupFilters',
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, groupFilters, actions, pollUntil, require) {
    return { 
      filters: [
        groupFilters.filters.filter1,
        groupFilters.filters.filter2,
      ]
    };

});

