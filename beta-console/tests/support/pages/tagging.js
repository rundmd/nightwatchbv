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
        searchFilters.taggingQueuedFilter,
        searchFilters.taggingPendingFilter,
        searchFilters.taggingCompletedFilter,
        searchFilters.taggingRejectedFilter,
      ]
    };

});

