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
        searchFilters.modQueuedFilter,
        searchFilters.modPendingFilter,
        searchFilters.modApprovedFilter,
        searchFilters.modRejectedFilter,
        searchFilters.modOverruledFilter,
      ]
    };

});

