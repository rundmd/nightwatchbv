define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  './searchFilters', 
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, props, elems, filters, actions, pollUntil, require) {
  return { 
    filters: {
      filter1: {
        group: filters.groups.group1Filter,
        filters: filters.channels.instagramFilter,
        results: '0',
      },
      filter2: {
        group: filters.groups.group1Filter,
        filters: filters.channels.instagramFilter,
        results: '48',
      },
    },
  };

});

